// Content Types for Pilton Festival Website

export interface Event {
  id: string
  title: string
  slug: string
  description: string
  content: string
  date: Date
  endDate?: Date
  time?: string
  location: string
  category: 'festival' | 'theatre' | 'community' | 'concert'
  featuredImage?: string
  gallery?: string[]
  tags: string[]
  published: boolean
  featured?: boolean
}

export interface Grant {
  id: string
  title: string
  slug: string
  recipient: string
  amount: number
  year: number
  projectType: string
  description: string
  content: string
  status: 'awarded' | 'completed' | 'ongoing'
  featuredImage?: string
  tags: string[]
  published: boolean
}

export interface Production {
  id: string
  title: string
  slug: string
  year: number
  type: 'pantomime' | 'play' | 'concert' | 'other'
  venue: string
  director?: string
  cast: string[]
  description: string
  content: string
  gallery?: string[]
  programme?: string
  featuredImage?: string
  published: boolean
}

export interface NewsArticle {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  author: string
  publishedDate: Date
  updatedDate?: Date
  category: 'news' | 'announcement' | 'community' | 'festival'
  featuredImage?: string
  tags: string[]
  published: boolean
  featured?: boolean
}

export interface Person {
  id: string
  name: string
  slug: string
  role?: string
  bio: string
  content?: string
  photo?: string
  type: 'trustee' | 'volunteer' | 'memorial' | 'artist'
  active: boolean
  yearJoined?: number
  yearLeft?: number
  memorial?: {
    yearBorn?: number
    yearPassed?: number
    tributeContent: string
  }
}

export interface Page {
  id: string
  title: string
  slug: string
  content: string
  metaDescription?: string
  featuredImage?: string
  published: boolean
  lastUpdated: Date
  template?: 'default' | 'full-width' | 'landing'
}

export interface BusinessListing {
  id: string
  name: string
  slug: string
  description: string
  category: string
  contact: {
    phone?: string
    email?: string
    website?: string
    address?: string
  }
  logo?: string
  featured: boolean
  sponsor: boolean
  active: boolean
}

// Festival specific types
export interface Stage {
  id: string
  name: string
  description?: string
  location: string
  capacity?: number
  acts: StageAct[]
}

export interface StageAct {
  id: string
  name: string
  time: string
  duration?: number
  description?: string
  genre?: string
  website?: string
}

export interface FestivalDay {
  date: Date
  stages: Stage[]
  activities: Activity[]
  specialEvents: SpecialEvent[]
}

export interface Activity {
  id: string
  name: string
  description: string
  time: string
  location: string
  category: 'children' | 'food' | 'craft' | 'entertainment' | 'community'
  ageGroup?: string
  free: boolean
}

export interface SpecialEvent {
  id: string
  name: string
  description: string
  time: string
  location: string
  type: 'parade' | 'pageant' | 'ceremony' | 'competition'
}

// Archive types
export interface ArchiveYear {
  year: number
  events: Event[]
  productions: Production[]
  grants: Grant[]
  photos?: PhotoGallery[]
  programme?: string
  highlights: string[]
}

export interface PhotoGallery {
  id: string
  title: string
  description?: string
  year: number
  event?: string
  photos: Photo[]
  coverPhoto?: string
}

export interface Photo {
  id: string
  filename: string
  title?: string
  description?: string
  photographer?: string
  alt: string
  width: number
  height: number
  tags: string[]
}

// Form types for user submissions
export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'volunteer' | 'grant' | 'business' | 'media'
}

export interface VolunteerApplication {
  name: string
  email: string
  phone?: string
  address?: string
  experience?: string
  interests: string[]
  availability: string[]
  skills: string[]
  additionalInfo?: string
}

export interface GrantApplication {
  applicantName: string
  organizationName?: string
  email: string
  phone: string
  projectTitle: string
  projectDescription: string
  requestedAmount: number
  projectTimeline: string
  beneficiaries: string
  otherFunding?: string
  additionalInfo?: string
}

// CMS/Admin types
export interface ContentMetadata {
  createdAt: Date
  updatedAt: Date
  createdBy: string
  updatedBy?: string
  version: number
  status: 'draft' | 'published' | 'archived'
}