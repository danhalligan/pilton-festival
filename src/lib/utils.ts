import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Helper function to get correct asset path for GitHub Pages
// For static assets (images, PDFs), we need to manually add basePath since Next.js
// automatic basePath handling only applies to navigation and some built-in components
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/pilton-festival' : ''
  
  // Avoid double basePath if it's already included
  if (path.startsWith('/pilton-festival')) {
    return path
  }
  
  return `${basePath}${path}`
}