# Foodlay UI Kit – Documentation Site

Static HTML documentation for the Foodlay UI Kit (Customer App and Deliveryman App). Built on Bootstrap and intended to be simple to edit, host, and browse.

## What’s Inside
- Introduction and Overview of features
- Quick Start (run apps fast on device/emulator)
- Prerequisites & setup (Windows, macOS, Linux)
- Advanced configuration
  - Android/iOS configuration
  - Signing and release checklists
  - Project structure
  - Localization & RTL
  - Theme & branding
  - Maps API key
  - Testing basics
- Common Issues & Troubleshooting
- Help & Support (email/WhatsApp contact)

## Folder Structure
```
Documentation/
├── index.html          # Main documentation page
├── css/                # Styles (theme + custom)
├── js/                 # Scripts for UI enhancements
├── images/             # Images used in docs
│   └── upload/         # Screenshots and inserted images
└── README.md           # This file
```

## View Locally
- Option 1: Open `index.html` directly in your browser
- Option 2: Serve the folder with any local server (e.g., MAMP, Python, Node)
  - On macOS with MAMP, place the folder under `htdocs` and visit via `http://localhost/...`

## Editing Guidelines
- Sidebar navigation
  - The sidebar is in `index.html` near the top.
  - Keep related items grouped (Android together, iOS together, then general).
  - Link items to section anchors (e.g., `#line3_1`, `#line3_2_release`).
- Section anchors
  - Use clear IDs like `line0` (Quick Start), `line2_1` (What is Flutter?), `line3_1` (Android config).
  - Subsections use `_` notation (e.g., `line3_1_signing`, `line3_4`).
- Images
  - Place images in `images/upload/` with descriptive names.
  - Use responsive markup:
    ```html
    <img src="images/upload/open-project.png" class="img-responsive" alt="Open project folder in IDE">
    ```
- Code blocks
  - Wrap commands and snippets with `<pre><code>...</code></pre>`.
  - Use inline `<code>` for menu paths (e.g., `File → Open`).
- Callouts
  - Use Bootstrap alerts for short notes/tips:
    - `alert-info` for tips
    - `alert-warning` for cautions/notes

## Style Conventions
- Keep bold minimal; reserve for attention labels (Tip, Note, Important).
- Use inline `<code>` for menu paths and commands when referenced in text.
- Spacing is tuned for readability:
  - Section padding reduced for a tighter layout.
  - Headings and rules adjusted for a cleaner rhythm.
- Customizations are in:
  - `css/style.css` (core styling, spacing)
  - `css/custom.css` (overrides and dark theme adjustments)

## Content Map (Key Anchors)
- Quick Start: `#line0`
- Prerequisites & setup: `#line2` and subanchors (`#line2_3`, `#line2_4`, `#line2_5`, `#line2_6`)
- Advanced configuration:
  - Android: `#line3_1`, signing `#line3_1_signing`, release `#line3_1_release`
  - iOS: `#line3_2`, signing `#line3_2_signing`, release `#line3_2_release`
  - Project structure: `#line3_5`
  - Localization & RTL: `#line3_6`
  - Theme & branding: `#line3_7`
  - Maps API key: `#line3_3`
  - Testing basics: `#line3_4`
- Common Issues & Troubleshooting: `#line4` with subanchors (`#line4_1` … `#line4_9`)
- Help & Support: `#line5` (email/WhatsApp, scope, resources)

## Deploy
- Upload the `Documentation/` folder to any static web host or include in your project’s docs site.
- No build step is required.

## Support
- Email: `thedayonesoft@gmail.com`
- WhatsApp: `+8801601666058`
- Before contacting, review Quick Start, Prerequisites, Advanced Configuration, and Troubleshooting sections.

## Useful References
- Flutter official site: https://flutter.dev
- Community resources: Stack Overflow, Flutter GitHub issues, pub.dev

## Version Matrix
- Flutter: 3.38.x (stable) or newer
- Dart: 3.10.x (bundled with Flutter)
- JDK: 17+
- Android Gradle Plugin: 8.5+; Gradle: 8.9+
- Xcode: 16+ (macOS)
- iOS deployment target: 13.0+
- Android: minSdkVersion 21; targetSdkVersion 34

## Contributing
- Keep navigation anchors consistent (`lineX` + sub-anchors).
- Prefer concise, scannable lists; minimize heavy bold.
- Use descriptive alt text for images and group images under `images/upload/`.
- Validate commands and steps against the current Flutter stable release.
