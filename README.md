
# Raihan Zhafran Portfolio

A personal portfolio presenting my work in software development, system analysis, UI/UX design, and data science. The site combines project case studies, professional experience, technical skills, event documentation, and a working contact form in one responsive interface.

## Features

- Single-page portfolio with anchored section navigation
- Dedicated project archive with type and year filters
- Individual project pages with image galleries and external resources
- Professional and organizational experience timeline
- Technical and creative skills overview
- Personal event and project gallery
- Light and dark themes
- Built-in music player
- Contact form backed by a Vercel serverless function and Resend
- Responsive layouts for mobile, tablet, and desktop screens

## Technology

- React 19
- Vite 8
- React Router
- Tailwind CSS 4
- Framer Motion
- Lucide React and React Icons
- Vercel Functions
- Resend

## Local Development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The terminal will print the local URL, typically `http://localhost:5173`.

## Environment Variables

The contact form requires a Resend API key. Create a local `.env` file from the included example and provide the key:

```env
RESEND_API_KEY=your_resend_api_key
```

Do not commit the populated `.env` file.

## Available Commands

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Project Structure

```text
api/                 Vercel serverless functions
public/              Images, icons, music, and static routing files
src/components/      Shared interface components
src/hooks/           Reusable React hooks
src/pages/           Project archive and detail pages
src/sections/        Main portfolio sections
src/data.js          Portfolio content and project data
DESIGN.md            Visual direction and design decisions
```

## Content

Most portfolio content is maintained in `src/data.js`. Project screenshots and gallery assets live under `public/images`, while skill icons live under `public/icons`.

When adding a project, keep its identifier unique and make sure every referenced image and external link exists.

## Design Direction

The intended audience, visual identity, composition principles, color approach, and motion settings are documented in [DESIGN.md](./DESIGN.md). Future interface changes should use that document as direction before applying implementation-specific styling.

## Deployment

The repository includes Vercel configuration and SPA rewrites. Deploy it as a Vite project and add `RESEND_API_KEY` to the deployment environment variables so the contact endpoint can send messages.

## License

This project is covered by the license in [LICENSE](./LICENSE). Portfolio copy, personal photographs, and project media remain the property of their respective owners.
