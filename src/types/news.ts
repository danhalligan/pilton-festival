export interface NewsArticle {
  slug: string
  title: string
  date: string
  variant: 'festival' | 'community' | 'theatre' | 'grants'
  featured: boolean
  excerpt: string
  image?: string
  author: string
  content: string
}

export interface NewsFrontmatter {
  title: string
  date: string
  variant: 'festival' | 'community' | 'theatre' | 'grants'
  featured: boolean
  excerpt: string
  image?: string
  author: string
}