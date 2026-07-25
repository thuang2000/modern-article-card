# Modern Article Card

A responsive article card created for a modern CSS verification assignment.

## Live Website

https://thuang2000.github.io/modern-article-card/

## How to Run the Project

Download or clone this repository.
Open the project folder.
Open index.html in a web browser.

No installation, package manager, or build process is required.

## AI Tool Used

ChatGPT was used to assist with the assignment.

## AI Prompt

The following prompt was used:

Create a responsive and accessible article card using semantic HTML, CSS,
and minimal JavaScript. The card must contain an image, category badge,
headline, short description, and Read Article button. Declare reusable
design tokens as CSS custom properties in the :root selector. Use the
oklch() color space for all interface background, text, border, focus,
shadow, and accent colors. Include a user-controlled light and dark mode
toggle. Use clamp() to make the headline scale fluidly between mobile and
desktop sizes without relying on rigid width-based media queries. Apply
text-box: trim-both cap alphabetic to the badge and Read Article button,
while retaining line-height and padding as fallbacks for unsupported
browsers. Use relative CSS units instead of pixels for typography, spacing,
and layout. Use low-specificity class selectors, avoid !important, include
visible keyboard focus styles, support reduced-motion preferences, and
ensure normal text meets the WCAG AA 4.5:1 contrast requirement.

## Project Description

This project demonstrates a responsive article card containing:

- An article image
- A category badge
- A headline
- A short article description
- A Read Article button
- A light and dark mode toggle

## Technologies Used

- Semantic HTML5
- CSS Custom Properties
- CSS Grid
- Flexbox
- OKLCH colors
- Fluid CSS `clamp()` values
- CSS `text-box` optical trimming
- JavaScript
- Local Storage
- GitHub Pages

## Modern CSS Features

### CSS Custom Properties

The project stores design tokens in the `:root` selector. These tokens control
colors, spacing, typography, border radii, dimensions, shadows, and transition
timing.

### OKLCH Colors

All interface background, text, border, focus, shadow, and accent colors are
declared with the `oklch()` color function.

The dark theme changes the custom-property values on:

```css
:root[data-theme="dark"]
