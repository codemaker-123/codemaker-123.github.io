# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is an **Academic Pages** Jekyll site - a GitHub Pages template for academic personal websites. The codebase follows standard Jekyll conventions:

- **Jekyll Collections**: Publications (`_publications/`), talks (`_talks/`), teaching (`_teaching/`), portfolio (`_portfolio/`), and posts (`_posts/`)
- **Layouts**: Custom layouts in `_layouts/` for different content types (single, talk, etc.)
- **Includes**: Reusable components in `_includes/` (author-profile, navigation, etc.)
- **Assets**: Styles in `_sass/` and JavaScript in `assets/js/`
- **Configuration**: Main site config in `_config.yml`, Ruby dependencies in `Gemfile`
- **Data Files**: Site data in `_data/` (e.g., `cv.json` generated from markdown CV)
- **Static Files**: Files served directly at `files/` (PDFs, etc.)
- **Pages**: Root-level pages in `_pages/` (about, CV, etc.)

## Development Commands

### Setup and Installation
```bash
# Install Ruby dependencies
bundle install

# If you encounter permission errors during bundle install:
bundle config set --local path 'vendor/bundle'
bundle install

# Install Node.js dependencies for asset processing
npm install

# Install Python dependencies for content generation tools
pip install jupyter pandas requests beautifulsoup4 geopy getorg
```

### Local Development
```bash
# Serve site locally with live reload (access at http://localhost:4000)
bundle exec jekyll serve -l -H localhost

# If Gemfile.lock causes issues:
rm Gemfile.lock
bundle install
bundle exec jekyll serve -l -H localhost
```

### Docker Development
```bash
# Build and run with Docker
chmod -R 777 .
docker compose up
# Access at http://localhost:4000
```

### JavaScript Build
```bash
# Build (minify and concatenate JavaScript)
npm run build:js

# Watch for JavaScript changes and rebuild automatically
npm run watch:js

# Direct uglify command
npm run uglify
```

### Content Generation from TSV

The `markdown_generator/` directory provides tools to generate Jekyll markdown from TSV data:

```bash
# Generate publications from TSV (creates .md files in _publications/)
python markdown_generator/publications.py

# Generate talks from TSV (creates .md files in _talks/)
python markdown_generator/talks.py

# Or use interactive Jupyter notebooks:
jupyter notebook markdown_generator/publications.ipynb
jupyter notebook markdown_generator/talks.ipynb
```

TSV files: `markdown_generator/publications.tsv` and `markdown_generator/talks.tsv`

### CV Management
```bash
# Update CV JSON file from markdown CV (_pages/cv.md)
./scripts/update_cv_json.sh
# The script converts markdown CV to JSON and outputs to _data/cv.json
```

## Site Configuration

Key configuration files:
- `_config.yml` - Main Jekyll configuration including:
  - Site metadata (title, description, URL)
  - Author profile information and social links
  - Collections and their permalink structures
  - Front matter defaults for each collection
  - Jekyll plugins (feed, sitemap, redirect, emoji)
- `Gemfile` - Ruby gem dependencies (Jekyll, plugins, webrick)
- `Gemfile.lock` - Locked versions (delete if experiencing installation issues)
- `package.json` - Node.js dependencies (jQuery, FitVids, Smooth Scroll) and npm scripts

## Content Collections

Each collection uses Jekyll front matter for metadata. Common YAML fields:

- **Publications** (`_publications/`):
  - `title`, `excerpt`, `date`, `venue`
  - `paperurl`, `citation`, `arxiv_id`

- **Talks** (`_talks/`):
  - `title`, `collection`, `date`, `location`
  - `venue`, `excerpt`
  - Location data used by `talkmap.ipynb` for geographic mapping

- **Teaching** (`_teaching/`):
  - `title`, `collection`, `type`, `venue`, `date`

- **Posts** (`_posts/`):
  - Standard Jekyll post front matter with comments/sharing enabled

- **Pages** (`_pages/`):
  - Special pages like `about.md`, `cv.md`, `sitemap.md`

## GitHub Actions and Automation

- **Talk Location Scraping** (`.github/workflows/scrape_talks.yml`):
  - Triggers when `_talks/` files or `talkmap.ipynb` changes
  - Runs `talkmap.ipynb` to geocode talk locations
  - Automatically commits geographic data updates
  - Requires: pandas, requests, beautifulsoup4, geopy, getorg

## Development Notes

- Site uses GitHub Pages compatible plugins only (whitelist in `_config.yml`)
- JavaScript assets (`assets/js/`) are concatenated and minified via `npm run build:js`
  - Source files: jQuery plugins, main.js
  - Output: `assets/js/main.min.js`
- DevContainer available for VS Code development (automatically runs at localhost:4000)
- Talk mapping is automatic via `talkmap.ipynb` when talk files include location data
- HTML compression enabled for production output

## Troubleshooting

**Ruby dependency issues**: If you see permission errors or Gem::FilePermissionError:
```bash
bundle config set --local path 'vendor/bundle'
```

**Gemfile.lock conflicts**: Delete the lock file and reinstall
```bash
rm Gemfile.lock
bundle install
```

**JavaScript not updating**: Rebuild manually and clear browser cache
```bash
npm run build:js
```

**Jekyll not detecting changes**: Restart the server with `bundle exec jekyll serve`

**Python notebooks failing**: Ensure Python dependencies are installed
```bash
pip install jupyter pandas requests beautifulsoup4 geopy getorg
```