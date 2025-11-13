# St. Clair Robotics Club Website 🤖

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
💬 **Discord**: https://discord.gg/gEC8P2Dfqv  
📷 **Instagram**: https://www.instagram.com/roboticsclub.scc/

---

## 💻 Repository Structure

```
stclairroboticsclub.github.io/
├── docs/                      # Website files (served by GitHub Pages)
│   ├── *.html                 # Page files (index, about, team, join, 404)
│   ├── style.css              # Main stylesheet
│   ├── script.js              # JavaScript functionality
│   ├── 404.css                # Error page styles
│   ├── Robotic_full_logo.png  # Club logo
│   ├── CNAME                  # Custom domain configuration
│   ├── robots.txt             # SEO crawler instructions
│   ├── sitemap.xml            # SEO sitemap
│   ├── site.webmanifest       # PWA manifest
│   └── images/                # Event photos and assets
│       ├── club-fair/
│       └── pizza-night/
├── server.py                  # Local development server
├── CNAME                      # Custom domain configuration (root)
├── README.md                   # This file
└── LICENSE                     # License information
```

**Technology Stack**: Pure HTML5/CSS3/JavaScript (no build process required)

---

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/StClairRoboticsClub/stclairroboticsclub.github.io.git
cd stclairroboticsclub.github.io

# Start local server
python3 server.py
```

The website will be available at `http://localhost:5000`

**Note**: The server serves from the current directory. Make sure you're in the repo root when running it.

### Making Changes

1. Edit files in the `/docs` directory
2. Refresh browser to see changes (cache disabled in dev server)
3. Test all pages and functionality
4. Commit and push changes

---

## 📤 Deployment to GitHub Pages

### Initial Setup (One-Time)

1. Go to repository Settings → Pages
2. Configure source:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs` ⚠️ **Important: Must be /docs**
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

**Live Site**: https://stclairroboticsclub.ca

---

## 🎨 Website Features

### Pages
- **Home** (`index.html`): Hero section, features, recent events, video demos
- **About** (`about.html`): Mission, values, activities
- **Team** (`team.html`): Leadership profiles
- **Join** (`join.html`): Membership process and FAQ
- **404** (`404.html`): Custom error page

### Interactive Features
- Responsive navigation with mobile menu
- Event photo carousels with lightbox
- FAQ accordion
- Smooth scrolling and animations
- Intersection Observer for scroll effects
- Scroll progress bar
- Back-to-top button

### Design System
- **Primary**: St. Clair Green (#78be20)
- **Accent**: Robotics Blue (#00b8ff)
- **Fonts**: Rajdhani (headings), Inter (body)
- **Mobile-first responsive design**
- **Dark theme** with modern aesthetics

---

## 📝 Contributing

### Common Tasks

#### Adding Team Member Photos

1. **Prepare photos**
   - Format: JPG or PNG
   - Recommended size: 600x400px (3:2 ratio)
   - Keep file size under 500KB

2. **Add photos to docs folder**
   ```bash
   cp member-photo.jpg docs/
   ```

3. **Update team.html**
   Replace placeholder divs with actual images

#### Adding Event Photos

1. **Create event folder**
   ```bash
   mkdir docs/images/event-name
   ```

2. **Add photos** (use descriptive filenames)
   ```bash
   cp *.jpg docs/images/event-name/
   ```

3. **Update index.html** - Add new event card in the events section

#### Updating Meeting Information

Meeting details are managed in `docs/script.js` at the top of the file in the `MEETING_CONFIG` object:

```javascript
const MEETING_CONFIG = {
  date: "Wednesday, November 12th",  // Display date
  time: "5:00 PM",                     // Meeting time
  project: "Waveshare Pico Go v2",     // Current project
  year: 2025,                          // Numeric year
  month: 11,                           // Numeric month (1-12)
  day: 12                              // Numeric day
};
```

**Update once, applies everywhere** - JavaScript automatically populates the meeting card on the homepage.

#### Updating Content

- **Navigation**: Edit the `<nav>` section in each HTML file
- **Styles**: Modify `docs/style.css`
- **JavaScript**: Edit `docs/script.js`
- **Footer**: Update the `<footer>` section in each page

### Style Guide

#### Colors
- **Primary (St. Clair Green)**: `#78be20` / `var(--color-primary)`
- **Accent (Robotics Blue)**: `#00b8ff` / `var(--color-accent)`
- **Background**: `#0c0d12` / `var(--color-bg)`
- **Text**: `#f0f3f5` / `var(--color-text)`

#### Typography
- **Headings**: Rajdhani
- **Body**: Inter
- Use CSS variables for consistency

#### Spacing
- Use CSS custom properties: `var(--spacing-xs)` through `var(--spacing-3xl)`
- Maintain consistent spacing throughout

### Testing Checklist

Before pushing changes:

- [ ] Test all pages load correctly
- [ ] Verify navigation works on all pages
- [ ] Test mobile responsiveness
- [ ] Check image loading
- [ ] Test interactive features (carousel, FAQ, mobile menu)
- [ ] Validate links (internal and external)
- [ ] Check browser console for errors
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)

### Best Practices

- **Write semantic HTML** - Use appropriate tags (`<header>`, `<nav>`, `<section>`, etc.)
- **Keep accessibility in mind** - Add alt text, ARIA labels, keyboard navigation
- **Optimize images** - Compress before uploading (≤1200px width, 75-80% quality)
- **Test thoroughly** - Check all functionality before pushing
- **Write clear commit messages** - Describe what and why
- **Keep files organized** - Use appropriate folders for assets

---

## 🛠️ Troubleshooting

### Site Not Updating After Push?
- Wait 2-3 minutes for GitHub Actions to complete
- Check GitHub Actions tab for any errors
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Try incognito/private browsing mode

### 404 Errors on Pages?
- Verify `/docs` folder is selected in GitHub Pages settings
- Check that all filenames are lowercase and match links
- Ensure all internal links use relative paths

### Images Not Loading?
- Verify image paths are relative (e.g., `images/photo.jpg` not `/images/photo.jpg`)
- Check image files are in `/docs/images/` folder
- Ensure filenames match exactly (case-sensitive)

### Custom Domain Not Working?
- Verify `CNAME` file exists in `/docs` folder
- Check DNS records with domain provider
- Allow 24-48 hours for DNS propagation
- Ensure HTTPS is enforced in GitHub Pages settings

### CSS/JS Changes Not Reflecting?
- Clear browser cache
- Check browser console for 404 errors
- Verify file paths are correct in HTML
- Try hard refresh (Ctrl+F5)

### Local Server Issues?
- Ensure Python 3 is installed
- Check port 5000 is not in use
- Run from repository root directory

---

## 🔍 SEO & Performance

### SEO Features
- Complete meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs on all pages
- Structured data (JSON-LD) for Organization
- Sitemap.xml and robots.txt
- Semantic HTML5 structure

### Performance Optimizations
- Lazy loading on event images
- Async image decoding
- Minimal JavaScript (vanilla JS only)
- Efficient CSS with custom properties
- No external dependencies except Google Fonts

### Analytics Ready
- Event tracking hooks in `script.js` for:
  - CTA button clicks
  - Outbound link clicks
  - Form submissions
- Ready for Google Analytics 4 integration
- Replace `console.log` calls with GA4 tracking

---

## 📊 Project Status

**Current Version**: Production-ready  
**Last Updated**: January 2025  
**Status**: ✅ Active and maintained

---

## 👥 Team

- **John Beverly** - President (john@stclairroboticsclub.ca)
- **Jeremy** - Vice President (jeremy@stclairroboticsclub.ca)
- **Wisam** - Treasurer
- **Ryan Savard** - Secretary

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Live Website**: https://stclairroboticsclub.ca
- **Discord**: https://discord.gg/gEC8P2Dfqv
- **Instagram**: https://www.instagram.com/roboticsclub.scc/
- **GitHub**: https://github.com/StClairRoboticsClub
- **St. Clair College**: https://www.stclaircollege.ca/

---

**Questions?** Contact the team or join our Discord server!
