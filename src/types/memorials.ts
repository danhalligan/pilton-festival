export interface Memorial {
  slug: string
  name: string
  title: string
  image?: string
  years?: string
  shortDescription: string
  keyContributions: string[]
  author?: string
  content: string // Full markdown content
}

export interface MemorialFrontmatter {
  name: string
  title: string
  image?: string
  years?: string
  shortDescription: string
  keyContributions: string[]
  author?: string
}