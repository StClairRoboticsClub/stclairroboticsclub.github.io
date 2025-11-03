# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy the St. Clair Robotics Club website to GitHub Pages.

## ✅ Prerequisites

Your website is **already configured** for GitHub Pages! The site uses:
- ✅ Pure static HTML/CSS/JavaScript (no build process required)
- ✅ Professional `/docs` directory structure
- ✅ All assets and images properly organized
- ✅ No server-side code or databases

## 📤 Step 1: Push to GitHub

### Option A: Using Replit Git Panel (Recommended)

1. Open the **Git panel** in Replit (left sidebar)
2. You'll see all your updated files under "Changes"
3. Click **"Stage All"** to stage all changes
4. Enter a commit message: `"Reorganize for GitHub Pages deployment"`
5. Click **"Commit"** 
6. Click **"Push"** to push to the main branch

### Option B: Using Terminal

Open the Shell tab and run:

```bash
git add .
git commit -m "Reorganize for GitHub Pages deployment"
git push origin main
```

## 🌐 Step 2: Enable GitHub Pages

1. Go to your repository: **https://github.com/StClairRoboticsClub/stclairroboticsclub-dev**

2. Click **"Settings"** (in the repository menu)

3. Click **"Pages"** (in the left sidebar under "Code and automation")

4. Configure the source:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/docs` ⬅️ **Important: Select /docs**
   
5. Click **"Save"**

6. Wait 1-2 minutes for deployment

## 🎉 Step 3: Access Your Live Site

After deployment completes, your site will be live at:

```
https://stclairroboticsclub.ca
```

(This uses your existing CNAME file configuration)

## 🔄 Future Updates

Any time you want to update the website:

1. Make your changes in Replit
2. Test locally (the workflow runs automatically)
3. Commit and push to GitHub
4. GitHub Pages automatically updates your live site!

## 📁 Project Structure

```
stclairroboticsclub-dev/
├── docs/                    # ← Website files (served by GitHub Pages)
│   ├── index.html          # Homepage
│   ├── about.html          # About page
│   ├── team.html           # Team page
│   ├── join.html           # Join page
│   ├── style.css           # Stylesheet
│   ├── script.js           # JavaScript
│   ├── Robotic_full_logo.png
│   └── images/             # Event photos
│       ├── club-fair/
│       └── pizza-night/
├── server.py               # Local development server
├── replit.md               # Project documentation
├── CNAME                   # Custom domain config
└── README.md               # Repository readme

```

## ⚡ Quick Reference

| Task | Action |
|------|--------|
| Local preview | Automatic via Replit workflow |
| Deploy updates | Commit → Push to GitHub |
| View live site | https://stclairroboticsclub.ca |
| Edit content | Edit files in `/docs` directory |

## 🛠️ Troubleshooting

**Site not updating after push?**
- Check GitHub Actions tab for deployment status
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 1-2 minutes for changes to propagate

**404 errors?**
- Verify `/docs` is selected in GitHub Pages settings
- Check that `main` branch is selected
- Ensure all file paths are correct (case-sensitive)

**Custom domain not working?**
- Verify CNAME file contains: `stclairroboticsclub.ca`
- Check DNS settings with your domain provider
- Allow 24-48 hours for DNS propagation

## 📞 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Club Email**: contact.info@stclairroboticsclub.ca

---

**That's it! Your professional robotics club website is ready to go live! 🤖**
