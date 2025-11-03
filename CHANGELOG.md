# Changelog

All notable changes to the St. Clair Robotics Club website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-11-03

### 🎉 Major Release - Complete Website Rebuild

A complete redesign and rebuild of the St. Clair Robotics Club website with modern features, improved structure, and enhanced user experience.

### Added

#### Features
- **Modern Dark Theme**: Professional color scheme using St. Clair green (#006341) and robotics blue (#00b8ff)
- **Event Photo Carousels**: Interactive carousels with auto-slide, navigation buttons, and dot indicators
- **Lightbox Image Viewer**: Full-screen image viewing with keyboard navigation and accessibility features
- **Mobile Navigation**: Responsive hamburger menu with smooth animations
- **FAQ Accordion**: Interactive expandable FAQ section on Join page
- **Scroll Animations**: Intersection Observer-based animations for smooth scrolling effects
- **Event Sections**: Recent Events showcase with Pizza Lego Night and Club Fair photos

#### Pages
- **Home Page** (`index.html`): Hero section, features grid, recent events, and CTA
- **About Page** (`about.html`): Mission, core values, and activities
- **Team Page** (`team.html`): Leadership profiles with photo placeholders
- **Join Page** (`join.html`): Membership process, FAQ, and contact information
- **404 Page** (`404.html`): Custom error page with navigation

#### Documentation
- **README.md**: Comprehensive project overview and setup guide
- **CONTRIBUTING.md**: Detailed contribution guidelines and development workflow
- **DEPLOYMENT.md**: Complete deployment checklist and troubleshooting
- **QUICKSTART.md**: Fast-track deployment guide
- **PROJECT_SUMMARY.txt**: Full project completion summary

#### Technical
- **GitHub Pages Structure**: Professional `/docs` folder organization
- **Custom Domain Support**: CNAME configuration for stclairroboticsclub.ca
- **Local Development Server**: Python server for testing (`server.py`)
- **Version Control**: Proper .gitignore and repository management

### Changed

#### Structure
- **File Organization**: Moved all website files to `/docs` folder for GitHub Pages
- **Image Management**: Organized event photos in structured directories
  - `docs/images/club-fair/` (6 photos)
  - `docs/images/pizza-night/` (4 photos)

#### Design
- **Typography**: Rajdhani for headings, Inter for body text
- **Responsive Design**: Mobile-first approach with optimized breakpoints
- **Color System**: CSS custom properties for consistent theming
- **Spacing**: Standardized spacing scale using CSS variables

#### Content
- **Team Updates**: Current leadership roster (John Beverly, Jeremy, Wisam, Ryan Savard)
- **Contact Information**: Updated email addresses and social media links
- **Event Coverage**: Recent club activities and engagement photos

### Improved

- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Optimized images, minimal JavaScript, efficient CSS
- **SEO**: Proper meta tags, descriptions, and structured content
- **Browser Compatibility**: Tested across modern browsers
- **Mobile Experience**: Touch-friendly interactions and responsive layouts
- **Documentation**: Consolidated guides, clear instructions, troubleshooting tips

### Removed

- **Legacy Components**: Deleted unused navigation and footer component files
- **Redundant Files**: Removed duplicate documentation and temporary assets
- **Old Structure**: Cleaned up `websiteTemplate-html` folder structure

### Technical Details

- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: None (pure vanilla JS)
- **Build Process**: None required
- **Dependencies**: Google Fonts (Rajdhani, Inter)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

### Breaking Changes

⚠️ **This is a major version update with breaking changes from v1.0.0:**

- Complete UI/UX redesign - no visual compatibility with v1.0.0
- New file structure with `/docs` folder - paths have changed
- Updated navigation structure - different page organization
- New color scheme and design system
- Different HTML structure and class names

### Migration Notes

If migrating from v1.0.0:
1. All website files now live in `/docs` folder
2. Update GitHub Pages settings to serve from `/docs`
3. Review new documentation for updated deployment process
4. Update any external links to new page structure

---

## [1.0.0] - Previous Release

Initial version of the St. Clair Robotics Club website.

### Features
- Basic website structure
- Club information pages
- Contact information
- Initial design and branding

---

## Release Links

- [v2.0.0 - Complete Website Rebuild](https://github.com/StClairRoboticsClub/stclairroboticsclub.github.io/releases/tag/v2.0.0)
- [v1.0.0 - Initial Release](https://github.com/StClairRoboticsClub/stclairroboticsclub.github.io/releases/tag/v1.0.0)

---

**Live Site**: [stclairroboticsclub.ca](https://stclairroboticsclub.ca)  
**Repository**: [StClairRoboticsClub/stclairroboticsclub.github.io](https://github.com/StClairRoboticsClub/stclairroboticsclub.github.io)
