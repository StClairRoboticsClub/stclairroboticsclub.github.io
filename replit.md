# St. Clair Robotics Club Website

## Overview

The St. Clair Robotics Club website is a static, modern web presence for the student-led robotics organization at St. Clair College. The site serves as an information hub and recruitment tool, showcasing club activities, leadership, and providing pathways for new members to join. Built with pure HTML5, CSS3, and vanilla JavaScript, the website requires no build process and is deployed directly to GitHub Pages with a custom domain (stclairroboticsclub.ca).

**Primary Purpose**: Engage prospective members, showcase club events and activities, and provide contact/membership information.

**Target Audience**: St. Clair College students interested in robotics, electronics, programming, and collaborative projects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Pure HTML5/CSS3/JavaScript with no frameworks or build tools
- **Rationale**: Simplicity, fast loading, easy maintenance by student volunteers without requiring Node.js or complex tooling
- **Alternatives Considered**: React/Vue frameworks - rejected due to overhead and learning curve for student contributors
- **Pros**: Zero dependencies, instant deployment, easy to understand and modify
- **Cons**: Manual DOM manipulation, potential code duplication across pages

**Page Structure**: Multi-page static site with shared navigation and styling
- Five core HTML pages: `index.html` (home), `about.html`, `team.html`, `join.html`, `404.html`
- Shared global stylesheet (`style.css`) with CSS custom properties for theming
- Single JavaScript file (`script.js`) handles all interactivity across pages

**Design System**:
- **Color Palette**: Dark theme with St. Clair green (#006341) and robotics blue (#00b8ff)
- **Typography**: Inter (body text) and Rajdhani (headings) from Google Fonts
- **Component Pattern**: CSS class-based components with BEM-like naming conventions
- **Responsive Strategy**: Mobile-first CSS with flexbox/grid layouts

**Interactive Features**:
- Mobile hamburger navigation with smooth animations
- **Sticky Navigation**: Fixed header with backdrop blur effect, smooth transitions
- **Scroll Progress Bar**: Visual indicator of page scroll position (cyan bar at top)
- **Back-to-Top Button**: Appears when user scrolls down, smooth scroll to top
- Scroll-triggered animations using Intersection Observer API
- Image carousel with auto-slide and manual controls
- Lightbox viewer for full-screen image viewing
- FAQ accordion for expandable content
- Smooth scroll for anchor navigation and internal links
- **Lead Capture Form**: Working join form with validation, Formspree integration option, and guaranteed mailto fallback

### Hosting & Deployment

**GitHub Pages Configuration**:
- **Source Folder**: `/docs` directory (GitHub Pages requirement)
- **Custom Domain**: CNAME file pointing to stclairroboticsclub.ca
- **Deployment Method**: Direct push to `main` branch triggers automatic GitHub Actions deployment
- **Rationale**: Free hosting, automatic SSL, simple Git-based workflow
- **Pros**: Zero hosting costs, integrated with version control, CDN distribution
- **Cons**: Static sites only, no server-side processing

**Local Development**:
- Python-based HTTP server (`server.py`) for local testing
- Serves files from `/docs` directory with cache-control headers disabled
- Port 5000 default for localhost development

### Content Management

**Static Content Strategy**:
- All content hardcoded in HTML files (no CMS)
- **Rationale**: Small site with infrequent updates, avoiding CMS complexity
- **Update Process**: Direct HTML editing + Git commit/push
- **Pros**: Simple, no database, version-controlled content
- **Cons**: Requires HTML knowledge for content updates, no admin interface

**Image Assets**:
- Event photos organized in `/docs/images/` subdirectories (club-fair, pizza-night)
- Logo file (`Robotic_full_logo.png`) in `/docs` root
- **Image Optimization**: Images include lazy loading and async decoding attributes; HTML comments guide compression (≤1200px, 75-80% quality recommended)
- **Loading Strategy**: Lazy loading with `loading="lazy"` and `decoding="async"` on event images for improved performance

### SEO & Social Sharing

**Metadata Implementation**:
- **Open Graph tags**: Complete OG metadata for Facebook sharing on all pages (title, description, image, URL, type)
- **Twitter Card metadata**: Summary card with large image support
- **Canonical URLs**: Self-referencing canonical links on all pages to prevent duplicate content
- Semantic HTML5 structure with proper heading hierarchy (single h1 per page)
- Meta descriptions on core pages optimized for search engines
- Site name branding in OG tags

**Favicon System**:
- Multiple favicon formats referenced (ICO, PNG at various sizes, Apple Touch Icon)
- Web manifest file for PWA metadata
- **Note**: Actual favicon image files not present in repository - need to be created/added

### Accessibility Considerations

**ARIA Attributes**:
- `aria-label` on navigation toggle button
- `aria-expanded` state management for mobile menu
- Semantic HTML elements (nav, section, header, footer)

**Keyboard Navigation**:
- Focus states defined in CSS (`:focus-visible`)
- Clickable elements are keyboard-accessible
- Smooth scroll behavior for better UX

**Reduced Motion**:
- **Comprehensive accessibility support**: `prefers-reduced-motion` media query implemented site-wide
- Animations, transitions, and scroll behaviors disabled for users who prefer reduced motion
- Enhanced focus-visible styles with strong cyan outline (3px solid) for keyboard navigation
- CSS custom properties for consistent animation timing

## External Dependencies

### Third-Party Services

**Google Fonts**:
- **Fonts Used**: Inter (body), Rajdhani (headings)
- **Loading Method**: CSS link in HTML `<head>`
- **Purpose**: Professional typography without hosting font files

**Discord Integration**:
- **Link**: https://discord.gg/gEC8P2Dfqv
- **Purpose**: Primary community platform for member communication
- **Implementation**: Static link in contact sections

**Social Media**:
- **Instagram**: @stclairrobotics (static reference)
- **Purpose**: Social proof and additional engagement channel

### Email Contact

**Email Address**: contact.info@stclairroboticsclub.ca
- **Implementation**: `mailto:` links in HTML and as form fallback
- **Form Handling**: Join form on `join.html` uses mailto as primary action with optional Formspree enhancement via `data-formspree-action` attribute
  - Guaranteed working submission path (mailto always works)
  - Formspree can be configured by replacing placeholder ID in `data-formspree-action`
  - Inline validation for required fields, email format, and student ID format
  - Success message displays after submission

### CDN Resources

**Animate.css** (404 page only):
- Loaded from unpkg.com CDN
- Used for animation utilities on error page

### Development Tools

**Version Control**:
- **Platform**: GitHub
- **Repository**: StClairRoboticsClub/stclairroboticsclub-dev
- **Branching**: Main branch for production
- **Workflow**: Direct commits to main (small team, simple site)

**Local Server**:
- **Tool**: Python 3 HTTP server (custom `server.py`)
- **Purpose**: Testing before deployment, avoiding CORS issues
- **Port**: 5000

### Analytics & Tracking

**Analytics Hooks**:
- Console-based event tracking implemented for:
  - CTA button clicks (Join the Club, Learn More)
  - Outbound link clicks (Discord, Instagram)
  - Form submissions
- **Ready for GA4 Integration**: Tracking code structured to easily replace console.log with Google Analytics 4 or other analytics service
- **Implementation**: All tracking hooks in `script.js` with clear comments for production analytics integration

### Recent Enhancements (November 2025)

**UX & Engagement Improvements**:
1. **Homepage Content**: Added "Recent Highlights" section (4 milestones) and "Why Join Our Club?" section (5 key benefits)
2. **Navigation**: Sticky header with backdrop blur, scroll progress indicator, smooth anchor scrolling
3. **Lead Capture**: Working join form with validation, optional Formspree integration, guaranteed mailto fallback
4. **Performance**: Lazy loading and async decoding on event images, compression guidance in HTML comments
5. **Accessibility**: Comprehensive prefers-reduced-motion support, enhanced keyboard focus styles
6. **Social Sharing**: Complete OG/Twitter metadata, canonical URLs, favicon references on all pages
7. **Analytics Ready**: Event tracking hooks for CTAs and outbound links (console placeholders for GA4)

### Next Steps for Production

1. **Create Favicon Assets**: Generate and add missing favicon files:
   - `docs/images/favicon.ico`
   - `docs/images/favicon-32x32.png`
   - `docs/images/favicon-16x16.png`
   - `docs/images/apple-touch-icon.png`
   - `docs/site.webmanifest`

2. **Optimize Images**: Compress event photos to ≤1200px width at 75-80% quality (see HTML comments in `index.html`)

3. **Configure Formspree** (Optional): Replace `YOUR_FORM_ID` in `join.html` `data-formspree-action` attribute with actual Formspree endpoint

4. **Add Analytics**: Replace console.log tracking calls in `script.js` with Google Analytics 4 or preferred analytics service

5. **Create OG Cover Image**: Add `docs/images/og-cover.jpg` (1200x630px) for social sharing preview

### Database & Backend

**Current State**: Fully static site, no database or server-side processing
- Form submissions use mailto (guaranteed) with optional Formspree enhancement
- All content managed through direct HTML editing
- No CMS or admin interface required