# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a project to modernise and refresh a simple static website that is available at: https://www.piltonfestival.co.uk/. The website is for the Pilton Festival, a community event in Devon, UK, run by the Pilton Community Interest Organisation (CIO). The site currently serves as an information hub for the festival, its history, and community activities.

The website is currently built without any standard frameworks or libraries. We will be updating it to use modern web frameworks, improve accessibility, make it mobile friendly, and enhance the user experience. 

Once completed the website should be visually appealing, whilst retaining the logos and feeling of the original website. It should be easy to navigate, and provide a better experience for users on different device types. 

Importantly it should be a simple implementation that would be easy to maintain by others who are not professional web developers or designers. As such, it should be built using a static site generator that allows for easy content management, such as Markdown files with front matter.

## Current Project Status

- **Phase**: Phase 3 Complete - Interactive Features & Content Migration ✅
- **Current State**: Live community website with real content and interactive components
- **Technology**: Next.js 14 with TypeScript, Tailwind CSS, and advanced interactive features
- **Design Achievement**: Complete "living green" design system with galleries, forms, and maps
- **Features**: Photo galleries, contact forms, newsletter signup, interactive maps, archive system
- **Content Migration**: Real content, images, and 2025 programme integrated ✅
- **Next Phase**: Phase 4 - Advanced Features & Polish (ready to proceed)

## Content Structure (Planned)

The site will be organized into these main sections:
- Festival (current year events, programmes, location)
- About (CIO overview, trustees, objectives)
- Community (grants, theatre productions, passed people)
- News & Archive (updates, yearly archives, galleries)
- Get Involved (volunteer, contact, forms)

## Requirements

- The site must be accessible, performant, responsive, and SEO-friendly
- It should use modern web standards and best practices
- Content should be easy to manage by non-technical users
- The design should be visually appealing while retaining the original branding
- The implementation should be simple and maintainable by volunteers (not just the content, but also the codebase).
- The site should be built using a static site generator (e.g., Jekyll, Hugo, etc.)
- The site should be mobile-friendly and responsive across all devices
- The site should include a clear navigation structure and easy-to-find content

## Completed Tasks

### Phase 1: Foundation & Design System ✅
- ✅ **Next.js Project Setup**: Complete TypeScript project with Tailwind CSS
- ✅ **Green Leaf Design System**: Signature border component inspired by 2025 programme  
- ✅ **Color Palette**: Forest greens, leaf greens, and earth tone comprehensive theme
- ✅ **Component Library**: LeafFrame, Button, Card, Header, Footer components
- ✅ **Typography System**: Merriweather/Inter fonts with responsive sizing
- ✅ **Homepage**: Complete homepage with hero, news cards, and community sections
- ✅ **Content Models**: TypeScript interfaces for all festival content types
- ✅ **Responsive Design**: Mobile-first approach with festival-appropriate breakpoints

### Phase 2: Core Page Development ✅
- ✅ **Festival Page**: Complete with 2025 event details, programme, and practical information
- ✅ **Community Page**: CIO overview, grants, Manning's Pit project, volunteer opportunities
- ✅ **Theatre Page**: Current production, history, recent shows, and participation info
- ✅ **About Page**: Green Man tradition, village information, organisation structure
- ✅ **Get Involved Page**: Volunteer opportunities, business partnerships, contact forms
- ✅ **Navigation System**: Complete header/footer with mobile-responsive menu
- ✅ **Content Architecture**: Comprehensive information for all main sections

### Phase 3: Interactive Features & Content Migration ✅
- ✅ **Photo Gallery System**: Responsive galleries with lightbox and metadata support
- ✅ **Enhanced Contact Forms**: Real-time validation, success states, error handling
- ✅ **Newsletter Integration**: Multi-variant signup with email validation
- ✅ **Interactive Maps**: Festival site map with clickable locations and information
- ✅ **Archive System**: 40-year festival history with photo galleries and timeline
- ✅ **Component Integration**: Enhanced existing pages with new interactive features
- ✅ **Navigation Enhancement**: Added Archive section to main site navigation
- ✅ **Content Migration**: Scraped and integrated real content from original site
- ✅ **Image Integration**: Key photos from original site extracted and implemented
- ✅ **Festival Programme**: 2025 programme content and schedule integrated
- ✅ **CIO Content**: Real grant recipients and Manning's Pit success story
- ✅ **Theatre Content**: Actual Pilton Panto productions and history
- ✅ **Historical Content**: Festival People memorials and community stories

### Analysis & Research ✅
- ✅ **Website Analysis**: Full inventory of existing site structure (80+ pages identified)
- ✅ **Content Audit**: Analyzed main sections (Festival, CIO, Theatre, Archive, Community)
- ✅ **Reference Site Analysis**: Studied Knockengorroch & Cambridge Folk Festival structures
- ✅ **2025 Programme Review**: Analyzed beautiful green leaf design aesthetic and content structure
- ✅ **Design Vision**: Created "living green" theme concept with leaf borders

## Next Steps

### Phase 4: Advanced Features & Polish (Ready to Begin)
- **Performance Optimization**: Image compression, lazy loading, and page speed improvements
- **SEO Enhancement**: Advanced meta tags, schema markup, and search optimization
- **Content Management System**: Simple admin interface for volunteer content updates
- **Analytics Integration**: User behavior tracking and festival engagement metrics

### Remaining Phases
- **Phase 5**: Testing, training, and launch preparation
- **Phase 4**: Advanced features and performance optimization
- **Phase 5**: Testing, training, and launch

## Content Migration Strategy

1. ✅ Full crawl and inventory of existing site (80+ pages catalogued)
2. Content classification into Hugo content types:
   - Events (festivals, concerts, productions)
   - Grants (CIO awards and applications)
   - Community (theatre, Manning's Pit, volunteers)
   - Archive (historical content, photo galleries)
   - News (updates, newsletters)
3. Automated HTML to Markdown conversion with front matter
4. Image optimization and alt text generation
5. PDF processing and organization

## Project Files

- `REVISED_IMPLEMENTATION_PLAN.md`: New 6-week plan with "living green" design system
- `IMPLEMENTATION_PLAN.md`: Original Hugo-based plan (superseded)
- `archive/2025-programme.pdf`: Source of green leaf design inspiration
- `CLAUDE.md`: This project guidance file (updated with progress)

## Design Inspiration Sources

- **Programme Aesthetic**: Beautiful green leaf borders from 2025 festival programme
- **Reference Websites**: Knockengorroch and Cambridge Folk Festival layouts and features
- **Unique Elements**: Green Man branding, community focus, local business integration
- **Color Palette**: Forest greens, fresh leaf greens, natural earth tones

