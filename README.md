# St. Clair Robotics Club Website

Official website for the **St. Clair College Robotics Club** - hosted on GitHub Pages at [stclairroboticsclub.ca](https://stclairroboticsclub.ca)

---

## 🧭 About the Club

The St. Clair Robotics Club is a student-led organization focused on hands-on robotics projects, creative problem-solving, and collaborative learning. Members gain practical experience with:

- **Microcontrollers**: Raspberry Pi Pico, Arduino, ESP32
- **CAD & Fabrication**: 3D printing, mechanical design
- **Electronics**: Sensors, circuits, PCB design
- **Programming**: Python, C/C++, ROS
- **Team Collaboration**: Projects, competitions, workshops

📍 **Location**: St. Clair College, Windsor, ON  
📧 **Contact**: contact.info@stclairroboticsclub.ca  
�� **Discord**: https://discord.gg/gEC8P2Dfqv  
📷 **Instagram**: @stclairrobotics

---

## Repository Structure

```
stclairroboticsclub-dev/
├── docs/                      # Website files (served by GitHub Pages)
│   ├── *.html                 # Page files
│   ├── style.css              # Main stylesheet
│   ├── script.js              # JavaScript functionality
│   ├── Robotic_full_logo.png  # Club logo
│   └── images/                # Event photos
│       ├── club-fair/
│       └── pizza-night/
├── server.py                  # Local development server
├── CNAME                      # Custom domain configuration
├── README.md                  # This file
└── LICENSE                    # License information
```

**Technology Stack**: Pure HTML5/CSS3/JavaScript (no build process required)

---

## Local Development

### Running Locally

```bash
# Clone the repository
git clone https://github.com/StClairRoboticsClub/stclairroboticsclub-dev.git
cd stclairroboticsclub-dev

# Start local server
python3 server.py
```

The website will be available at `http://localhost:5000`

### Making Changes

1. Edit files in the `/docs` directory
2. Refresh browser to see changes (cache disabled in dev server)
3. Test all pages and functionality
4. Commit and push changes

---

## 📤 Deployment to GitHub Pages

### Initial Setup

1. Go to repository Settings → Pages
2. Configure source:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
3. Click **Save**
4. Wait 1-2 minutes for deployment

### Deploying Updates

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

GitHub Pages automatically deploys changes within 1-2 minutes.

---

## Website Features

### Pages
- **Home** (`index.html`): Hero section, features, recent events
- **About** (`about.html`): Mission, values, activities
- **Team** (`team.html`): Leadership profiles
- **Join** (`join.html`): Membership process and FAQ

### Interactive Features
- Responsive navigation with mobile menu
- Event photo carousels with lightbox
- FAQ accordion
- Smooth scrolling and animations
- Intersection Observer for scroll effects

### Design System
- **Primary**: St. Clair Green (#006341)
- **Accent**: Robotics Blue (#00b8ff)
- **Fonts**: Rajdhani (headings), Inter (body)
- **Mobile-first responsive design**

---

## Troubleshooting

**Site not updating?**
- Check GitHub Actions tab for deployment status
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for propagation

**404 errors?**
- Verify `/docs` folder is selected in Pages settings
- Check that all file paths are correct (case-sensitive)

**Local server issues?**
- Ensure Python 3 is installed
- Check port 5000 is not in use
- Run from repository root directory

---

## 👥 Team

- **John Beverly** - President (john@stclairroboticsclub.ca)
- **Jeremy** - Vice President (jeremy@stclairroboticsclub.ca)
- **Wisam** - Treasurer
- **Ryan Savard** - Secretary

---

## License

This project is licensed under the terms specified in the LICENSE file.
