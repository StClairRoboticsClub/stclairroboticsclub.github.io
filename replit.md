# St. Clair Robotics Club Website

## Project Overview
Modern, fully rebuilt static website for the St. Clair Robotics Club featuring a clean dark theme, smooth animations, and professional UI design. Built with pure HTML/CSS/JavaScript for easy deployment on GitHub Pages.

**Website:** https://stclairroboticsclub.ca  
**Email:** contact.info@stclairroboticsclub.ca  
**John Beverly:** john@stclairroboticsclub.ca  
**Jeremy:** jeremy@stclairroboticsclub.ca  
**Location:** St. Clair College, Windsor, ON  
**College Website:** https://www.stclaircollege.ca/

## Current Status
✅ Complete website rebuild with modern UI  
✅ All pages fully functional (Home, About, Team, Join)  
✅ Responsive design for all devices  
✅ Static file server configured on port 5000  
✅ **GitHub Pages compatible** - no build process required

## Technology Stack
- **Frontend:** Pure HTML5/CSS3/JavaScript (no framework)
- **Server:** Python 3.11 HTTP server (development only)
- **Deployment:** GitHub Pages (production) | Replit (development)
- **No dependencies** - works directly on GitHub Pages free tier

## Project Structure

```
stclairroboticsclub-dev/
├── websiteTemplate-html/          # Main website directory
│   ├── index.html                 # Homepage with modern hero + events
│   ├── about.html                 # Mission, values, activities
│   ├── team.html                  # Leadership profiles
│   ├── join.html                  # Join process + FAQ
│   ├── style.css                  # Main stylesheet (~1200 lines)
│   ├── script.js                  # Interactivity + animations
│   ├── Robotic_full_logo.png      # Club logo (1024x1024)
│   └── images/                    # Event photos
│       ├── club-fair/             # Club Fair Oct 23, 2025
│       └── pizza-night/           # Pizza Lego Night Oct 22, 2025
├── server.py                      # Local dev server
└── replit.md                      # This documentation
```

## Design System

### Colors
| Element | Hex | Variable |
|---------|-----|----------|
| Primary (St. Clair Green) | #006341 | `--color-primary` |
| Accent (Robotics Blue) | #00b8ff | `--color-accent` |
| Background | #0c0d12 | `--color-bg` |
| Surface | #14151a | `--color-surface` |
| Text | #f0f3f5 | `--color-text` |
| Text Muted | #b7bdc3 | `--color-text-muted` |

### Typography
- **Headings:** Rajdhani (Google Fonts)
- **Body:** Inter (Google Fonts)
- Fully responsive font sizes using clamp()

### Spacing
- Uses CSS custom properties for consistent spacing
- Range: `--spacing-xs` (0.5rem) to `--spacing-3xl` (6rem)

## Key Features

### Homepage
- ✅ Modern hero section with gradient text effect
- ✅ Animated floating logo card
- ✅ Features grid with icon cards
- ✅ Recent Events section with photo cards
  - Pizza Lego Night (Oct 22, 2025, 5pm-9pm)
  - St. Clair College Club Fair (Oct 23, 2025, 11am-2pm in SLC)
- ✅ Call-to-action section

### About Page
- ✅ Mission section with visual card
- ✅ 4 core values (Innovation, Collaboration, Excellence, Inclusivity)
- ✅ Activities grid (Workshops, Projects, Competitions, Events)

### Team Page
- ✅ 4 leadership profiles with placeholders
- ✅ Hover effects on cards
- ✅ Ready for real photos

### Join Page
- ✅ 4-step join process
- ✅ Interactive FAQ accordion
- ✅ Discord and email CTAs

### Navigation
- ✅ Fixed transparent navigation with blur effect
- ✅ Mobile responsive hamburger menu
- ✅ Active page highlighting
- ✅ Smooth scroll to anchors

### Interactive Features
- ✅ Mobile menu toggle
- ✅ FAQ accordion functionality
- ✅ Scroll-based navigation effects
- ✅ Intersection Observer animations
- ✅ Smooth scrolling

## Team Members

1. **John Beverly** - President (john@stclairroboticsclub.ca)
2. **Jeremy** - Vice President (jeremy@stclairroboticsclub.ca)
3. **Wisam** - Treasurer
4. **Ryan Savard** - Secretary

## Running the Website

### Local Development (Replit)
The website runs automatically via the configured workflow.

**Manual start:**
```bash
python3 server.py
```

### GitHub Pages Deployment
Simply push to the `main` branch - no build process required!

**Option 1: Root Directory**
- Set GitHub Pages source to `/` (root)
- Website files served directly from `websiteTemplate-html/`

**Option 2: Docs Directory**
- Move `websiteTemplate-html` contents to `/docs`
- Set GitHub Pages source to `/docs`

## Development Workflow

1. Edit HTML/CSS/JS files in `websiteTemplate-html/`
2. Refresh browser to see changes (cache disabled)
3. Commit and push to GitHub
4. Changes go live automatically on GitHub Pages

## Links & Contact

- **Discord:** https://discord.gg/gEC8P2Dfqv
- **Instagram:** @stclairrobotics  
- **GitHub:** StClairRoboticsClub/stclairroboticsclub-dev
- **Production Site:** https://stclairroboticsclub.ca
- **Email:** robotics@stclaircollege.ca

## Performance Features

- ✅ Optimized CSS with no unnecessary dependencies
- ✅ Minimal JavaScript footprint
- ✅ Google Fonts loaded efficiently
- ✅ SVG icons (no icon library needed)
- ✅ Smooth CSS animations
- ✅ Mobile-first responsive design

## Browser Support

- ✅ Modern Chrome, Firefox, Safari, Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Uses modern CSS features (CSS Grid, Flexbox, Custom Properties)

## Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Proper heading hierarchy
- ✅ Alt text on images

## Recent Changes

**November 3, 2025 - Event Photos Integration with Carousel**
- Added "Recent Events" section to homepage with interactive photo carousels
- Integrated real event photos:
  - **Pizza Lego Night (Oct 22)**: 4 photos showing student activities
  - **Club Fair (Oct 23)**: 6 photos from booth and visitor engagement
- Implemented full-featured carousel with:
  - Auto-slide (5-second intervals) with pause on hover/interaction
  - Previous/Next navigation buttons
  - Dot indicators for direct photo selection
  - Keyboard navigation (arrow keys + tab/enter)
  - Touch/swipe support for mobile devices
  - Smooth fade transitions between photos
  - Accessible focus indicators for keyboard users
  - Smart hiding of controls for single-photo events
- Converted HEIC photos to JPEG format for web compatibility
- Styled event cards with hover effects, date badges, and metadata
- Organized photos in structured directories: images/club-fair/ and images/pizza-night/

**November 3, 2025 - Complete Rebuild**
- Rebuilt entire website from scratch with modern UI
- Implemented new design system with CSS custom properties
- Added smooth animations and transitions
- Created responsive mobile navigation
- Added interactive FAQ section
- Implemented intersection observer for scroll animations
- Ensured GitHub Pages compatibility (static only, no build)
- Removed all framework dependencies
- Optimized for performance and accessibility

## Future Enhancements

- [ ] Add actual team member photos
- [ ] Create Projects page when projects are available
- [ ] Add Sponsors page when sponsors secured
- [ ] Implement dark/light mode toggle (optional)
- [ ] Add more interactive animations
- [ ] Create newsletter signup (if needed)

## GitHub Pages Configuration

This website is **100% compatible** with GitHub Pages free tier because:
- ✅ Pure static HTML/CSS/JavaScript (no build process)
- ✅ No server-side code
- ✅ No database required
- ✅ No external dependencies beyond Google Fonts
- ✅ All assets served as static files

Simply push to GitHub and enable Pages in repository settings!
