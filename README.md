# IELTS Course Product Page

A comprehensive product page for the IELTS Course by Munzereen Shahid, built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Server-Side Rendering (SSR)** with Next.js App Router
- **Incremental Static Regeneration (ISR)** for optimal performance
- **TypeScript** for type safety and better development experience
- **TailwindCSS** for modern, responsive design
- **Localization Support** (English/Bengali)
- **SEO Optimized** with proper meta tags and Open Graph
- **YouTube Video Integration** for course trailers
- **Responsive Design** that works on all devices
- **Component-based Architecture** for maintainability

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main product page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── ProductHeader.tsx  # Hero section with title and CTA
│   ├── VideoTrailer.tsx   # YouTube video player
│   ├── InstructorSection.tsx
│   ├── CourseFeatures.tsx
│   ├── LearningOutcomes.tsx
│   ├── CourseDetails.tsx
│   ├── Checklist.tsx
│   └── CTASection.tsx
├── lib/                   # Utility functions
│   ├── api.ts            # API integration
│   └── utils.ts          # Helper functions
└── types/                 # TypeScript type definitions
    └── product.ts        # Product data interfaces
```

## API Integration

The application fetches data from the 10 Minute School API:

- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Language Support**: `?lang=en` or `?lang=bn`
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web` for SEO data

## Key Components

### ProductHeader
- Displays course title and description
- Call-to-action buttons
- Course highlights from checklist
- Responsive hero section

### VideoTrailer
- YouTube video integration with react-youtube
- Custom play button overlay
- Responsive video player

### InstructorSection
- Displays course instructors
- Profile images and bios
- Grid layout for multiple instructors

### CourseFeatures
- Shows course layout and features
- Icon-based feature cards
- Structured content presentation

### LearningOutcomes
- What students will learn
- Organized learning points
- Visual checkmarks for achievements

## Performance Features

- **ISR**: Pages revalidate every hour for fresh content
- **Code Splitting**: Automatic component-level splitting
- **Image Optimization**: Next.js Image component ready
- **SEO**: Dynamic meta tags from API data

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Docker Support

Build and run with Docker:

```bash
# Build the image
docker build -t ielts-course-page .

# Run the container
docker run -p 3000:3000 ielts-course-page
```

## Environment Variables

No environment variables required - the app uses public APIs.

## Browser Support

- Modern browsers with ES2017+ support
- Mobile-first responsive design
- Progressive enhancement approach

## Deployment

The application is configured for deployment on:
- Vercel (recommended for Next.js)
- Docker containers
- Any Node.js hosting platform

Built with using Next.js, TypeScript, and TailwindCSS.