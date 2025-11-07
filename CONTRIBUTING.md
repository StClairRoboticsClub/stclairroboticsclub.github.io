# Contributing to St. Clair Robotics Club Website

Thank you for contributing to the St. Clair Robotics Club website! This guide will help you make changes effectively.

---

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/StClairRoboticsClub/stclairroboticsclub-dev.git
   cd stclairroboticsclub-dev
   ```

2. **Start local server**
   ```bash
   python3 server.py
   ```

3. **Make your changes** in the `/docs` folder

4. **Test locally** at `http://localhost:5000`

5. **Commit and push**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```

---

## 📁 Project Structure

```
docs/
├── index.html          # Homepage
├── about.html          # About page
├── team.html           # Team page
├── join.html           # Join page
├── 404.html            # Error page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── Robotic_full_logo.png  # Club logo
├── CNAME               # Custom domain config
└── images/             # Event photos
    ├── club-fair/
    └── pizza-night/
```

---

## Common Tasks

### Adding Team Member Photos

1. **Prepare photos**
   - Format: JPG or PNG
   - Recommended size: 600x400px (3:2 ratio)
   - Keep file size under 500KB

2. **Add photos to docs folder**
   ```bash
   cp john-photo.jpg docs/
   ```

3. **Update team.html**
   Find the placeholder div (e.g., `<div id="john-photo"...>`) and replace with:
   ```html
   <div style="width: 100%; height: 200px; overflow: hidden;">
     <img src="john-photo.jpg" alt="John Beverly" 
          style="width: 100%; height: 100%; object-fit: cover;" />
   </div>
   ```

### Adding Event Photos

1. **Create event folder**
   ```bash
   mkdir docs/images/event-name
   ```

2. **Add photos** (use descriptive filenames)
   ```bash
   cp *.jpg docs/images/event-name/
   ```

3. **Update index.html** - Add new event card in the events section

### Updating Content

- **Navigation**: Edit the `<nav>` section in each HTML file
- **Styles**: Modify `docs/style.css`
- **JavaScript**: Edit `docs/script.js`
- **Footer**: Update the `<footer>` section in each page

---

## Style Guide

### Colors
- **Primary (St. Clair Green)**: `#006341` / `var(--color-primary)`
- **Accent (Robotics Blue)**: `#00b8ff` / `var(--color-accent)`
- **Background**: `#0c0d12` / `var(--color-bg)`
- **Text**: `#f0f3f5` / `var(--color-text)`

### Typography
- **Headings**: Rajdhani
- **Body**: Inter
- Use CSS variables for consistency

### Spacing
- Use CSS custom properties: `var(--spacing-xs)` through `var(--spacing-3xl)`
- Maintain consistent spacing throughout

---

## Testing Checklist

Before pushing changes:

- [ ] Test all pages load correctly
- [ ] Verify navigation works on all pages
- [ ] Test mobile responsiveness
- [ ] Check image loading
- [ ] Test interactive features (carousel, FAQ, mobile menu)
- [ ] Validate links (internal and external)
- [ ] Check browser console for errors
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)

---

## 🐛 Reporting Issues

If you find bugs or have suggestions:

1. Check if issue already exists
2. Create detailed issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS information

---

## 📤 Deployment

Changes pushed to `main` branch automatically deploy to GitHub Pages within 1-2 minutes.

**Live site**: https://stclairroboticsclub.ca

---

## Best Practices

- **Write semantic HTML** - Use appropriate tags (`<header>`, `<nav>`, `<section>`, etc.)
- **Keep accessibility in mind** - Add alt text, ARIA labels, keyboard navigation
- **Optimize images** - Compress before uploading
- **Test thoroughly** - Check all functionality before pushing
- **Write clear commit messages** - Describe what and why
- **Keep files organized** - Use appropriate folders for assets

---

## 📞 Questions?

Contact the team:
- **John Beverly**: john@stclairroboticsclub.ca
- **Jeremy**: jeremy@stclairroboticsclub.ca
- **Discord**: https://discord.gg/gEC8P2Dfqv

---

Thank you for contributing to the St. Clair Robotics Club!
