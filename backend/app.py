import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
import psycopg2
from psycopg2.extras import RealDictCursor

load_dotenv()

app = Flask(__name__, static_folder='../docs', static_url_path='')
CORS(app)

DATABASE_URL = os.getenv('DATABASE_URL')

def get_db_connection():
    return psycopg2.connect(DATABASE_URL)

def init_database():
    conn = get_db_connection()
    cur = conn.cursor()
    
    cur.execute('''
        CREATE TABLE IF NOT EXISTS form_submissions (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            student_id VARCHAR(50),
            interests VARCHAR(255),
            experience_level VARCHAR(50),
            message TEXT,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            email_sent BOOLEAN DEFAULT FALSE
        )
    ''')
    
    conn.commit()
    cur.close()
    conn.close()

def send_welcome_email(to_email, name, interests, experience):
    smtp_server = os.getenv('ZOHO_SMTP_SERVER', 'smtppro.zoho.com')
    smtp_port = int(os.getenv('ZOHO_SMTP_PORT', '465'))
    from_email = os.getenv('ZOHO_EMAIL')
    password = os.getenv('ZOHO_PASSWORD')
    
    if not from_email or not password:
        print("Warning: Zoho credentials not configured")
        return False
    
    interests_text = interests if interests else "various robotics topics"
    experience_text = experience.replace('_', ' ').title() if experience else "any level"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{
                font-family: 'Inter', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
            }}
            .header {{
                background: linear-gradient(135deg, #006341 0%, #004d32 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
            }}
            .logo {{
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 10px;
            }}
            .content {{
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 8px 8px;
            }}
            .welcome-box {{
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #00b8ff;
            }}
            .info-box {{
                background: #e8f4f8;
                padding: 15px;
                border-radius: 6px;
                margin: 15px 0;
            }}
            .cta-button {{
                display: inline-block;
                background: #00b8ff;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 6px;
                margin: 20px 0;
                font-weight: bold;
            }}
            .footer {{
                text-align: center;
                padding: 20px;
                color: #666;
                font-size: 14px;
            }}
            .social-links {{
                margin: 15px 0;
            }}
            .social-links a {{
                color: #00b8ff;
                text-decoration: none;
                margin: 0 10px;
            }}
        </style>
    </head>
    <body>
        <div class="header">
            <div class="logo">🤖 ST. CLAIR ROBOTICS CLUB</div>
            <p style="margin: 0; font-size: 18px;">Welcome to the Team!</p>
        </div>
        
        <div class="content">
            <div class="welcome-box">
                <h2 style="color: #006341; margin-top: 0;">Hi {name}! 👋</h2>
                <p>Thank you for your interest in joining the St. Clair Robotics Club!</p>
                <p>We're excited to have you on board. Based on your submission, we see you're interested in <strong>{interests_text}</strong> at the <strong>{experience_text}</strong> level.</p>
            </div>
            
            <div class="info-box">
                <h3 style="margin-top: 0; color: #006341;">🚀 What's Next?</h3>
                <ol style="margin: 10px 0; padding-left: 20px;">
                    <li>One of our team members will contact you within 2-3 business days</li>
                    <li>Join our Discord community to connect with other members</li>
                    <li>Check out our upcoming events and workshops</li>
                    <li>Follow us on Instagram for the latest updates</li>
                </ol>
            </div>
            
            <div style="text-align: center;">
                <a href="https://discord.gg/gEC8P2Dfqv" class="cta-button">Join Our Discord</a>
            </div>
            
            <div class="info-box">
                <h3 style="margin-top: 0; color: #006341;">💡 Why You'll Love Our Club</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li><strong>Hands-On Projects:</strong> Work on real robots and electronics</li>
                    <li><strong>Skill Building:</strong> Learn programming, CAD, and engineering</li>
                    <li><strong>Community:</strong> Connect with fellow tech enthusiasts</li>
                    <li><strong>Competitions:</strong> Participate in robotics challenges</li>
                    <li><strong>Career Growth:</strong> Build your portfolio and network</li>
                </ul>
            </div>
            
            <p style="margin-top: 20px;">If you have any questions in the meantime, feel free to reply to this email or reach out to us at contact.info@stclairroboticsclub.ca</p>
            
            <p style="margin-top: 30px;"><strong>See you at the next meeting!</strong><br>
            The St. Clair Robotics Club Team</p>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="https://discord.gg/gEC8P2Dfqv">Discord</a> |
                <a href="https://instagram.com/stclairrobotics">Instagram</a> |
                <a href="https://stclairroboticsclub.ca">Website</a>
            </div>
            <p style="font-size: 12px; color: #999; margin-top: 10px;">
                St. Clair Robotics Club<br>
                St. Clair College, Windsor, ON
            </p>
        </div>
    </body>
    </html>
    """
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Welcome to St. Clair Robotics Club, {name}!'
    msg['From'] = f'St. Clair Robotics Club <{from_email}>'
    msg['To'] = to_email
    
    text_part = MIMEText(f"""
Hi {name}!

Thank you for your interest in joining the St. Clair Robotics Club!

We're excited to have you on board. Based on your submission, we see you're interested in {interests_text} at the {experience_text} level.

What's Next?
1. One of our team members will contact you within 2-3 business days
2. Join our Discord community: https://discord.gg/gEC8P2Dfqv
3. Check out our upcoming events and workshops
4. Follow us on Instagram: @stclairrobotics

If you have any questions, feel free to reply to this email or reach out to us at contact.info@stclairroboticsclub.ca

See you at the next meeting!
The St. Clair Robotics Club Team

---
Discord: https://discord.gg/gEC8P2Dfqv
Instagram: https://instagram.com/stclairrobotics
Website: https://stclairroboticsclub.ca
    """, 'plain')
    
    html_part = MIMEText(html_content, 'html')
    
    msg.attach(text_part)
    msg.attach(html_part)
    
    try:
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(from_email, password)
            server.send_message(msg)
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def send_admin_notification(submission):
    smtp_server = os.getenv('ZOHO_SMTP_SERVER', 'smtppro.zoho.com')
    smtp_port = int(os.getenv('ZOHO_SMTP_PORT', '465'))
    from_email = os.getenv('ZOHO_EMAIL')
    password = os.getenv('ZOHO_PASSWORD')
    admin_email = os.getenv('ADMIN_EMAIL', from_email)
    
    if not from_email or not password:
        return False
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: #006341; color: white; padding: 20px; border-radius: 8px 8px 0 0; }}
            .content {{ background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }}
            .field {{ margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }}
            .label {{ font-weight: bold; color: #006341; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2 style="margin: 0;">🎉 New Club Membership Submission!</h2>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">Name:</span> {submission['name']}
                </div>
                <div class="field">
                    <span class="label">Email:</span> {submission['email']}
                </div>
                <div class="field">
                    <span class="label">Student ID:</span> {submission.get('student_id', 'Not provided')}
                </div>
                <div class="field">
                    <span class="label">Interests:</span> {submission.get('interests', 'Not specified')}
                </div>
                <div class="field">
                    <span class="label">Experience Level:</span> {submission.get('experience_level', 'Not specified')}
                </div>
                <div class="field">
                    <span class="label">Message:</span><br>{submission.get('message', 'No message provided')}
                </div>
                <div class="field">
                    <span class="label">Submitted:</span> {submission.get('submitted_at', 'Just now')}
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'New Membership: {submission["name"]}'
    msg['From'] = from_email
    msg['To'] = admin_email
    
    msg.attach(MIMEText(html_content, 'html'))
    
    try:
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(from_email, password)
            server.send_message(msg)
        return True
    except Exception as e:
        print(f"Error sending admin notification: {e}")
        return False

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    try:
        return send_from_directory(app.static_folder, path)
    except:
        return send_from_directory(app.static_folder, '404.html'), 404

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'service': 'St. Clair Robotics Backend'})

@app.route('/api/submit-form', methods=['POST'])
def submit_form():
    try:
        data = request.json
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        student_id = data.get('student_id', '').strip()
        interests = data.get('interests', '').strip()
        experience_level = data.get('experience_level', '').strip()
        message = data.get('message', '').strip()
        
        if not name or not email:
            return jsonify({'error': 'Name and email are required'}), 400
        
        conn = get_db_connection()
        cur = conn.cursor()
        
        cur.execute('''
            INSERT INTO form_submissions (name, email, student_id, interests, experience_level, message)
            VALUES (%s, %s, %s, %s, %s, %s)
            RETURNING id, submitted_at
        ''', (name, email, student_id, interests, experience_level, message))
        
        result = cur.fetchone()
        submission_id = result[0]
        submitted_at = result[1]
        
        conn.commit()
        
        email_sent = send_welcome_email(email, name, interests, experience_level)
        
        if email_sent:
            cur.execute('UPDATE form_submissions SET email_sent = TRUE WHERE id = %s', (submission_id,))
            conn.commit()
        
        submission_data = {
            'name': name,
            'email': email,
            'student_id': student_id,
            'interests': interests,
            'experience_level': experience_level,
            'message': message,
            'submitted_at': submitted_at.isoformat() if submitted_at else None
        }
        send_admin_notification(submission_data)
        
        cur.close()
        conn.close()
        
        return jsonify({
            'success': True,
            'message': 'Form submitted successfully!',
            'email_sent': email_sent,
            'submission_id': submission_id
        })
        
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred processing your submission'}), 500

@app.route('/api/submissions', methods=['GET'])
def get_submissions():
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        cur.execute('SELECT * FROM form_submissions ORDER BY submitted_at DESC')
        submissions = cur.fetchall()
        
        cur.close()
        conn.close()
        
        return jsonify({
            'success': True,
            'count': len(submissions),
            'submissions': submissions
        })
        
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred fetching submissions'}), 500

if __name__ == '__main__':
    init_database()
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
