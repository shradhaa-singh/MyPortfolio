# Shradha Singh Portfolio

Personal portfolio website built with HTML, CSS, and JavaScript. It presents my background, skills, coding profiles, projects, internship experience, education, and contact links in a responsive single-page layout.

## Overview

This project is a static portfolio site with:

- A section-based one-page layout
- A responsive navigation bar for desktop and mobile
- Multiple visual themes: `Ocean`, `Sunset`, `Forest`, `Paper`, and `Pastel`
- Theme preference saved in local storage
- Dedicated sections for About, Skills, Coding Profiles, Projects, Internship, Education, and Contact

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Project Structure

```text
.
├── index.html
├── README.md
├── assets
│   ├── icons
│   │   └── icons.svg
│   ├── images
│   │   └── favicon.svg
│   ├── pythonfordatascience.jpeg
│   └── resume.pdf
├── scripts
│   └── about.js
└── styles
    ├── 00-tokens.css
    ├── 01-base.css
    ├── 02-navbar.css
    ├── 03-theme-switcher.css
    └── pages
        ├── about.css
        ├── contact.css
        ├── education.css
        ├── internship.css
        ├── profiles.css
        ├── projects.css
        └── skills.css
```

## Styling Architecture

- `styles/00-tokens.css`: shared design tokens and theme palettes
- `styles/01-base.css`: global layout, typography, spacing, and shared components
- `styles/02-navbar.css`: desktop and mobile navigation
- `styles/03-theme-switcher.css`: floating theme selector
- `styles/pages/*.css`: section-specific styling

## JavaScript

`scripts/about.js` handles:

- Theme switching
- Theme persistence with `localStorage`
- Updating the browser `theme-color`
- Mobile navigation toggle
- Active section highlighting
- Footer year rendering

## Running Locally

This is a static site, so no build step is required.

1. Clone the repository:

```bash
git clone https://github.com/shradhaa-singh/MyPortfolio.git
```

2. Open the project folder.
3. Start it in either of these ways:

- Open `index.html` directly in a browser
- Use a local static server such as VS Code Live Server


## Contact

- Email: `shradhasingh72558@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/shradhaasingh/`
- GitHub: `https://github.com/shradhaa-singh`
