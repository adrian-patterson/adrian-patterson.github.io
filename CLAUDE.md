# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site generator project for Adrian Patterson's personal website and blog (adrian-patterson.github.io). The site uses the PaperMod theme and focuses on software development posts and personal projects.

## Common Commands

### Development Server
```bash
hugo server -D
```
Start the development server with draft content enabled. The site will be available at http://localhost:1313 with live reload.

### Build Site
```bash
hugo
```
Build the static site. Output goes to the `public/` directory.

```bash
hugo --minify
```
Build with minification enabled for production.

### Content Creation
```bash
hugo new posts/category/post-name.md
```
Create a new post using the archetype template. Posts go in `content/posts/` with appropriate category subdirectories.

```bash
hugo new posts/software/my-project.md
```
Create a new software-related post (most common category).

## Site Architecture

### Content Structure
- `content/posts/software/` - Main content area for software development posts
- `content/search.md` - Search page configuration
- `archetypes/default.md` - Template for new content with frontmatter

### Configuration
- `config.yaml` - Main Hugo configuration
  - Site uses PaperMod theme with profile mode enabled
  - Configured for GitHub Pages deployment at adrian-patterson.github.io
  - Search functionality enabled with JSON output
  - Social icons for GitHub, LinkedIn, Instagram, and email

### Theme Structure
- `themes/PaperMod/` - Git submodule containing the PaperMod theme
- Theme provides responsive design, dark/light mode toggle, search, and social features

### Static Assets
- `static/images/profile.jpg` - Profile image
- `static/downloads/resume.pdf` - Resume file
- `public/` - Generated site output (not tracked in git)

### Content Frontmatter
Posts use YAML frontmatter with:
- `author`, `title`, `date`, `description`, `summary`
- `tags` (e.g., "Personal Projects", "AI", "AWS", "Python", "React Native")
- `categories` (primarily "Software")
- `ShowToc: true` and `TocOpen: true` for table of contents

## Development Workflow

1. Use `hugo server -D` for local development
2. Create content with `hugo new posts/category/post-name.md`
3. Edit content in `content/posts/`
4. Build with `hugo` or `hugo --minify` for production
5. Deploy by pushing to GitHub (GitHub Pages builds from `public/` directory)

## Site Features

- Profile mode landing page with social links
- Category and tag-based organization
- Full-text search functionality
- Responsive design with dark/light theme toggle
- Code syntax highlighting
- Table of contents for posts
- Social sharing buttons