# Quick Start - Deploy to GitHub Pages

## Current Status: READY TO DEPLOY

Your website is fully prepared. Follow these simple steps:

---

## Step 1: Push to GitHub

```bash
git push origin main
```

That's it for the code! Now configure GitHub Pages...

---

## Step 2: Configure GitHub Pages (One-Time Setup)

1. Go to: https://github.com/StClairRoboticsClub/stclairroboticsclub-dev
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs` **IMPORTANT**
5. Click **Save**

---

## Step 3: Wait & Verify

- Wait 1-2 minutes for GitHub Actions to deploy
- Visit: **https://stclairroboticsclub.ca**
- Your site is live!

---

## Future Updates

To update the website after initial deployment:

```bash
# 1. Edit files in docs/ folder
# 2. Test locally (optional):
python3 server.py

# 3. Commit and push:
git add .
git commit -m "Your update description"
git push origin main

# GitHub Pages auto-deploys in 1-2 minutes!
```

---

## Need Help?

- 📖 See `DEPLOYMENT.md` for detailed instructions
- 📖 See `CONTRIBUTING.md` for development guide
- 📖 See `README.md` for project overview
- Discord: https://discord.gg/gEC8P2Dfqv

---

**You're all set!** The hard work is done. Just push and deploy!
