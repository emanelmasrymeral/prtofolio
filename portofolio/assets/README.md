# Assets Directory Guide - Eman Masry Portfolio

This directory holds all media assets, certificate credentials, project previews, and documents for the portfolio.

## Directory Structure

```
assets/
├── profile.jpg                             # Your primary professional portrait / profile picture
├── avatar-fallback.svg                     # Vector avatar fallback if profile picture is loading or unavailable
├── certs/                                  # Certificate scans or credential badges
│   ├── ibm-python-101.jpg                  # Python 101 for Data Science certificate
│   ├── ibm-machine-learning-python.jpg     # Machine Learning with Python certificate
│   ├── microsoft-mcit-intro-ai.jpg         # Microsoft & MCIT Intro to AI certificate
│   └── itc-artificial-intelligence.jpg     # ITC Artificial Intelligence certificate
├── projects/                               # Project screenshots or architecture diagrams
│   ├── project-1-automation.svg            # Automation workflow diagram
│   ├── project-2-analytics.svg             # Data analytics & EDA visualization
│   ├── project-3-bi.svg                    # Power BI dashboard screenshot/graphic
│   ├── project-4-ml.svg                    # Machine learning modeling graphic
│   └── project-5-end-to-end.svg            # End-to-End full system architecture
└── Eman_Masry_CV.pdf                       # Your downloadable resume / CV (PDF format)
```

## How to Update Your Files

1. **Your Profile Picture**: A high-resolution professional portrait has been created for you at `assets/profile.jpg`. Whenever you want to use a personal photo, simply save your photo file as `assets/profile.jpg` (or `.png`), and your portfolio website will automatically display it in the Hero showcase card!
2. **CV PDF**: Replace `assets/Eman_Masry_CV.pdf` with your latest PDF resume.
3. **Certificates**: Place your certificate images in `assets/certs/` with the exact filenames listed above (`.jpg` or update the extension in `js/script.js`). The website includes built-in fallback styling if any image is pending.
4. **Project Screenshots**: If you have live UI screenshots or recordings, place them in `assets/projects/` and update the `src` attribute in `index.html`.
