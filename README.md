# Pilton Festival Website

A modern Next.js website for the Pilton Green Man Festival, featuring a distinctive "living green" design system inspired by the festival's natural heritage and community spirit.

## Design System

### "Living Green" Theme
- **Green Leaf Borders**: Signature design element inspired by the 2025 festival programme
- **Natural Color Palette**: Forest greens, fresh leaf greens, and warm earth tones
- **Community Focus**: Festival-first approach with emphasis on local involvement

### Components
- **LeafFrame**: Decorative border component with green leaf styling
- **Cards**: Festival, community, and general purpose card variants
- **Buttons**: Primary, secondary, ghost, and leaf-themed buttons
- **Layout**: Header with Green Man logo and responsive navigation

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom green theme
- **Fonts**: Inter (body) and Georgia (headings)
- **Content**: TypeScript interfaces for all content types

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and design system
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   └── ui/                # Reusable UI components
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── content.ts         # TypeScript interfaces for content
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Content Types

The site supports various content types:
- **Events**: Festivals, theatre productions, community events
- **Grants**: CIO awards and community funding
- **News**: Updates, announcements, community stories
- **People**: Trustees, volunteers, memorial pages
- **Business Listings**: Local sponsors and supporters

## Design Features

### Green Leaf Border System
Every page can use the `LeafFrame` component to add the signature green leaf border that echoes the festival programme design.

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation and interactions

### Accessibility
- WCAG 2.1 AA compliant color contrasts
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## Inspiration Sources

- **2025 Programme PDF**: Green leaf border design and natural aesthetic
- **Knockengorroch Festival**: Hero sections and event-driven navigation
- **Cambridge Folk Festival**: Card layouts and community emphasis
- **Local Heritage**: Green Man tradition and Somerset community spirit

## Next Steps (Phase 2)

- Core page development (Festival, Community, Theatre, About)
- Content migration from existing website
- Interactive features (maps, galleries, forms)
- Performance optimization and testing

---

*Built with ❤️ for the Pilton community by volunteers, following the festival's tradition of community collaboration.*