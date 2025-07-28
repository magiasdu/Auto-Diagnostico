# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application called "cuestionario-despertar" - a spiritual awakening diagnostic quiz application. The app presents users with personality questions and provides personalized diagnoses based on their responses.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)  
- `npm run preview` - Preview production build locally

Note: There are no test or lint commands configured in package.json currently.

## Architecture

### Core Application Flow
The app follows a simple state-driven flow managed in `src/App.tsx`:
1. **Welcome screen** - Initial landing page
2. **Quiz questions** - Sequential question presentation with progress tracking
3. **Results screen** - Personalized diagnosis based on scoring algorithm

### Key Components
- `App.tsx` - Main application state management and routing logic
- `Welcome.tsx` - Landing page component  
- `Question.tsx` - Individual question display with keyboard navigation
- `Result.tsx` - Final diagnosis presentation
- `ProgressBar.tsx` - Visual progress indicator

### Data Architecture
- `constants.ts` - Contains `QUIZ_DATA` array with all questions and options
- `content.ts` - Static content for welcome screen and diagnosis results
- `types.ts` - Core TypeScript interfaces and enums including:
  - `DiagnosisKey` enum - Six possible diagnosis outcomes
  - `QuestionType` and `OptionType` interfaces
  - `Tag` type for scoring categorization ('erudito' | 'paciente')

### Scoring System
The app uses a sophisticated scoring algorithm in `App.tsx:calculateDiagnosis()`:
- Point-based scoring (1-4 points per answer)
- Tag-based categorization for mid-range scores
- Score ranges map to six diagnosis types:
  - Torre Caída (≤8 points)
  - Laboratorio variants (9-13 points, tag-dependent)
  - Forja del Rey (14-17 points)  
  - Paraíso Terrenal (≥18 points)

### UI/Animation System
- Custom CSS animations for smooth transitions between screens
- Animation state management with 'in'/'out' states
- Keyboard navigation support (Enter, letters A-D, numbers 1-4)

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling (custom brand colors defined)
- No additional libraries or frameworks

## Security Implementation

The application has been hardened against common web vulnerabilities:

### XSS Protection
- **SafeText component** (`src/components/SafeText.tsx`) - Replaces `dangerouslySetInnerHTML` with secure HTML parsing
- Handles `<br>` and `<strong>` tags safely without allowing script injection
- Used in `Welcome.tsx` and `Result.tsx` for rendering user-facing content

### URL Security
- **Immutable URLs** (`src/config/urls.ts`) - All external links centralized as constants
- Prevents URL tampering attacks on form submission endpoints
- Easy to update URLs when forms change - just edit the constants file

### Headers Security
- **Netlify headers** (`public/_headers`) - Basic security headers implemented:
  - `X-Frame-Options: DENY` - Prevents clickjacking
  - `X-Content-Type-Options: nosniff` - Prevents MIME sniffing attacks  
  - `X-XSS-Protection: 1; mode=block` - Browser XSS protection
  - `Referrer-Policy: strict-origin-when-cross-origin` - Referrer control

### Deployment Security
- Public GitHub repository with private write access
- Only repository owner can modify URLs and content
- Netlify auto-deploys from GitHub commits
- HTTPS enforced via Let's Encrypt

## File Structure
```
src/
├── App.tsx              # Main app logic and state management
├── main.tsx             # React app entry point
├── types.ts             # TypeScript definitions
├── constants.ts         # Quiz questions data
├── content.ts           # Static content and results (uses secure URLs)
├── config/
│   └── urls.ts          # Centralized secure URL constants
└── components/
    ├── Welcome.tsx      # Landing screen (uses SafeText)
    ├── Question.tsx     # Question display
    ├── Result.tsx       # Diagnosis results (uses SafeText)
    ├── ProgressBar.tsx  # Progress indicator
    └── SafeText.tsx     # Secure HTML renderer
```

## Content Language
All content is in Spanish and focuses on spiritual awakening themes. The application is designed as a psychological assessment tool for personal development.