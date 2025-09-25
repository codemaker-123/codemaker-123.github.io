# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is an **Academic Pages** Jekyll site - a GitHub Pages template for academic personal websites. The codebase follows standard Jekyll conventions:

- **Jekyll Collections**: Publications (`_publications/`), talks (`_talks/`), teaching (`_teaching/`), portfolio (`_portfolio/`), and posts (`_posts/`)
- **Layouts**: Custom layouts in `_layouts/` for different content types (single, talk, etc.)
- **Includes**: Reusable components in `_includes/` (author-profile, navigation, etc.)
- **Assets**: Styles in `_sass/` and JavaScript in `assets/js/`
- **Configuration**: Main site config in `_config.yml`, Ruby dependencies in `Gemfile`

## Development Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Serve site locally (with live reload and localhost binding)
jekyll serve -l -H localhost
# Alternative with bundle exec
bundle exec jekyll serve -l -H localhost
```

### Docker Development
```bash
# Set permissions and run with Docker
chmod -R 777 .
docker compose up
```

### JavaScript Build
```bash
# Uglify and minify JavaScript assets
npm run build:js
# Watch for changes and auto-build
npm run watch:js
```

### Content Generation
The `markdown_generator/` directory contains Python scripts and Jupyter notebooks for generating markdown files from TSV data:
- `publications.py` - Generate publication pages from `publications.tsv`
- `talks.py` - Generate talk pages from `talks.tsv`
- Jupyter notebooks (`.ipynb`) provide interactive versions

### CV Management
```bash
# Update CV JSON from markdown (in scripts/)
./scripts/update_cv_json.sh
```

## Site Configuration

Key configuration files:
- `_config.yml` - Main Jekyll configuration, site metadata, author info, collections
- `Gemfile` - Ruby gem dependencies including Jekyll plugins
- `package.json` - Node.js dependencies for asset processing

## GitHub Actions

- **Talk Location Scraping**: Automated workflow in `.github/workflows/scrape_talks.yml` that runs when talk files change, executing `talkmap.ipynb` to update geographic data

## Content Structure

- **Author Profile**: Configured in `_config.yml` under `author:` section
- **Publications**: Academic papers with citation info, links, and abstracts
- **Talks**: Conference presentations with location data for mapping
- **Teaching**: Course information and materials
- **Blog Posts**: Standard Jekyll posts in `_posts/`

## Development Notes

- Site uses GitHub Pages compatible plugins only (whitelist in `_config.yml`)
- Main JavaScript assets are concatenated and minified via npm scripts
- The site supports both local development and DevContainer/VS Code integration
- Talk locations are automatically geocoded and mapped using the talkmap feature