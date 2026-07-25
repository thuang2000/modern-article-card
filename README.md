# Modern Article Card

A responsive article card created for a modern CSS verification assignment.

## Live Website

The live GitHub Pages URL will be added here after deployment.

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
