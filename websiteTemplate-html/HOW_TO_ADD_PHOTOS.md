# How to Add Team Member Photos

This guide explains how to add photos to the team page.

## Steps to Add Photos

### 1. Prepare Your Photos
- Save team member photos in the `websiteTemplate-html` folder
- Recommended filename format: `john-photo.jpg`, `jeremy-photo.jpg`, `wisam-photo.jpg`, `ryan-photo.jpg`
- Recommended size: 600x400 pixels or similar 3:2 aspect ratio
- Format: JPG or PNG

### 2. Update team.html

Each team member card has a photo section with an ID. Find these sections in `team.html`:

#### John's Photo Section (Line ~76)
```html
<div id="john-photo" style="...">
```
Replace the entire `<div id="john-photo"...>` section with:
```html
<div id="john-photo" style="width: 100%; height: 200px; overflow: hidden;">
  <img src="john-photo.jpg" alt="John Beverly" style="width: 100%; height: 100%; object-fit: cover;" />
</div>
```

#### Jeremy's Photo Section (Line ~108)
```html
<div id="jeremy-photo" style="...">
```
Replace with:
```html
<div id="jeremy-photo" style="width: 100%; height: 200px; overflow: hidden;">
  <img src="jeremy-photo.jpg" alt="Jeremy" style="width: 100%; height: 100%; object-fit: cover;" />
</div>
```

#### Wisam's Photo Section (Line ~140)
```html
<div id="wisam-photo" style="...">
```
Replace with:
```html
<div id="wisam-photo" style="width: 100%; height: 200px; overflow: hidden;">
  <img src="wisam-photo.jpg" alt="Wisam" style="width: 100%; height: 100%; object-fit: cover;" />
</div>
```

#### Ryan's Photo Section (Line ~172)
```html
<div id="ryan-photo" style="...">
```
Replace with:
```html
<div id="ryan-photo" style="width: 100%; height: 200px; overflow: hidden;">
  <img src="ryan-photo.jpg" alt="Ryan Savard" style="width: 100%; height: 100%; object-fit: cover;" />
</div>
```

### 3. Save and Test
1. Save the `team.html` file
2. Refresh your browser to see the photos
3. Check that all photos display correctly

## Quick Reference
- **Photo location**: Same folder as `team.html`
- **Photo IDs in HTML**: `john-photo`, `jeremy-photo`, `wisam-photo`, `ryan-photo`
- **Recommended dimensions**: 600x400px (3:2 aspect ratio)
- **Formats**: .jpg or .png

## Example File Structure
```
websiteTemplate-html/
├── team.html
├── john-photo.jpg
├── jeremy-photo.jpg
├── wisam-photo.jpg
├── ryan-photo.jpg
└── ...other files
```

## Tips
- Use consistent lighting across all photos
- Consider having all photos with similar background colors
- Crop photos to focus on faces
- Keep file sizes reasonable (under 500KB per photo)
