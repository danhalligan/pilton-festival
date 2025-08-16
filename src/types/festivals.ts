export interface FestivalImage {
  id: string
  src: string
  alt: string
  title: string
  description: string
  category: string
}

export interface FestivalArchive {
  slug: string
  year: number
  title: string
  date: string
  description: string
  highlights: string[]
  weather?: string
  attendance?: string
  specialNotes?: string
  images: FestivalImage[]
  pdfBrochure?: string
  content: string // Full markdown content
}

export interface FestivalFrontmatter {
  year: number
  title: string
  date: string
  description: string
  highlights: string[]
  weather?: string
  attendance?: string
  specialNotes?: string
  images: FestivalImage[]
  pdfBrochure?: string
}