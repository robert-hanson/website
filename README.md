# Robert Hanson — Personal Website

A personal website and portfolio built with React, TypeScript, and Vite.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+ (installed via [nvm](https://github.com/nvm-sh/nvm))

If you used nvm to install Node, make sure it's loaded:

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
```

Or add the following to your `~/.zshrc` (already done if you followed the setup):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173) with hot module replacement — changes are reflected instantly in the browser.

## Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

Preview runs at [http://localhost:4173](http://localhost:4173).

## Linting

```bash
npm run lint
```

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, About, Experience, Projects, Skills, Contact
  data/
    content.ts    # All site content — update this to personalize
  styles/
    global.css    # Base styles and section utilities
    variables.css # Design tokens (colors, spacing, fonts)
```

## Customization

All content (name, bio, experience, projects, skills, social links) lives in [`src/data/content.ts`](src/data/content.ts).

To add a resume, drop a `resume.pdf` in the `public/` folder — the navbar "Resume" button will link to it automatically.
