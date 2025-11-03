# St. Clair Robotics Club Website

## Project Overview
Static website for the St. Clair Robotics Club built with HTML/CSS featuring a modern dark theme and robotics-focused design. Originally hosted on GitHub Pages, now running on Replit.

**Website:** https://stclairroboticsclub.ca  
**Email:** robotics@stclaircollege.ca  
**Location:** St. Clair College, Windsor, ON

## Current Status
✅ Website fully migrated and running on Replit  
✅ All pages functional (Home, About, Team, Join)  
✅ Static file server configured on port 5000  
✅ Cache control headers implemented

## Technology Stack
- **Frontend:** Pure HTML/CSS (no framework)
- **Server:** Python 3.11 HTTP server
- **Deployment:** Replit (development), GitHub Pages (production)
- **No build process required** - static files served directly

## Project Structure

```
stclairroboticsclub-dev/
├── websiteTemplate-html/          # Main website directory
│   ├── index.html                 # Homepage with hero section
│   ├── about.html                 # Club mission and values
│   ├── team.html                  # Leadership profiles
│   ├── join.html                  # Recruitment page
│   ├── style.css                  # Main stylesheet
│   ├── index.css                  # Homepage-specific styles
│   ├── Robotic_full_logo.png      # Club logo (1024x1024)
│   └── components/
│       ├── navigation.html        # Reusable nav component
│       └── navigation.css         # Nav styling
├── server.py                      # Static file server
└── replit.md                      # This documentation
```

## Color Scheme

| Element | Color | Variable |
|---------|-------|----------|
| Primary (St. Clair Green) | #006341 | var(--color-primary) |
| Accent (Robotics Blue) | #00b8ff | var(--color-accent) |
| Background | #0c0d12 | var(--color-surface) |
| Text | #f0f3f5 | var(--color-on-surface) |
| Secondary Text | #b7bdc3 | var(--color-on-surface-secondary) |

## Key Features

✅ Semi-transparent fixed navigation with blur effect  
✅ Dark background matching across all pages  
✅ Custom St. Clair branding colors  
✅ Team page with 4 member profiles (photo placeholders ready)  
✅ About page with mission, values, and activities  
✅ Join page with steps, FAQ, and contact info  
✅ Responsive design with mobile support  
✅ Cache-Control headers to prevent stale content

## Team Members (Placeholder Photos Ready)

1. **John Beverly** - President (ID: john-photo)
2. **Jeremy** - Vice President (ID: jeremy-photo)
3. **Wisam** - Treasurer (ID: wisam-photo)
4. **Ryan Savard** - Member (ID: ryan-photo)

## Running the Website

The website runs automatically on Replit via the configured workflow.

**Manual start:**
```bash
python3 server.py
```

The server binds to `0.0.0.0:5000` and serves files from `websiteTemplate-html/`.

## Development Workflow

1. Edit HTML/CSS files in `websiteTemplate-html/`
2. Refresh browser to see changes (cache disabled via headers)
3. No build step required

## Links & Contact

- **Discord:** https://discord.gg/gEC8P2Dfqv
- **Instagram:** @stclairrobotics
- **GitHub Repo:** StClairRoboticsClub/stclairroboticsclub-dev
- **Production Site:** https://stclairroboticsclub.ca

## Critical Styling Details

- Navigation uses `backdrop-filter: blur(20px)` with semi-transparent background
- All pages have explicit body styling: `background: var(--color-surface); margin: 0;`
- Main content has `padding-top: calc(80px + var(--spacing-4xl))` for fixed nav
- Font families: **Rajdhani** (headings), **Inter** (body text)

## Pending Tasks

- [ ] Add actual team member photos (replace SVG placeholders)
- [ ] Test on mobile devices
- [ ] Add Projects page (when club has projects)
- [ ] Add Sponsors page (when sponsors secured)

## Migration Notes (November 2025)

Originally hosted on GitHub Pages, migrated to Replit for development.  
- Removed unused Next.js dependencies from package.json
- Configured Python static file server
- Implemented cache-control headers for development
- All TeleportHQ branding removed
- Stock images removed

## Recent Changes

**November 3, 2025**
- Migrated from GitHub Pages to Replit
- Set up Python HTTP server on port 5000
- Configured workflow for automatic startup
- Added cache-control headers to prevent stale content
- Verified all pages loading correctly
