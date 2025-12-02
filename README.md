# Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Inspired by [brittanychiang.com](https://brittanychiang.com).

## Features

- 🎨 Navy/teal color scheme with smooth animations
- 📱 Fully responsive design
- 🔗 GitHub API integration to showcase your repositories
- ⚡ Built with Next.js 15 (App Router)
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS v4 for styling
- 🎭 shadcn/ui components

## Sections

- **Hero** - Introduction with social links
- **About** - Personal bio and skills
- **Experience** - Work history with interactive tabs
- **Work** - Featured projects from GitHub
- **Contact** - Get in touch section

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mardsonbarboza/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Configure your GitHub username in `.env.local`:
```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username

# Optional: Specify repos to feature
NEXT_PUBLIC_FEATURED_REPOS=repo1,repo2,repo3
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## GitHub Integration

The portfolio automatically fetches your repositories from GitHub and displays them in the Work section.

### How it works:

1. Set `NEXT_PUBLIC_GITHUB_USERNAME` in your `.env.local`
2. Optionally, specify which repos to feature with `NEXT_PUBLIC_FEATURED_REPOS`
3. If not specified, it will show your top 6 most starred repositories
4. The data is cached for 1 hour using Next.js revalidation
5. If the API fails, fallback projects are shown

### API Features:

- No authentication required for basic usage
- Displays repo description, stars, forks, and languages
- Shows topics as tags
- Links to GitHub repo and live demo (if homepage is set)

## Customization

### Personal Information

Edit the following files to customize your portfolio:

- `components/sections/hero.tsx` - Your name and introduction
- `components/sections/about.tsx` - Bio and skills
- `components/sections/experience.tsx` - Work experience
- `components/sections/contact.tsx` - Contact information
- `app/layout.tsx` - Page title and metadata

### Colors

The color theme can be customized in `app/globals.css`:

```css
:root {
  --navy: #0a192f;
  --green: #64ffda;
  /* ... other colors */
}
```

### Social Links

Update social links in:
- `components/sections/hero.tsx`
- `app/page.tsx` (sidebar links)

## Build

```bash
npm run build
```

## Deploy

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mardsonbarboza/portfolio)

Remember to set your environment variables in the Vercel dashboard:
- `NEXT_PUBLIC_GITHUB_USERNAME`
- `NEXT_PUBLIC_FEATURED_REPOS` (optional)

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: GitHub REST API v3

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Design inspired by [Brittany Chiang](https://brittanychiang.com)
