import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { FestivalArchive, FestivalFrontmatter } from '@/types/festivals'

const festivalsDirectory = path.join(process.cwd(), 'content/festivals')

export async function getAllFestivalArchives(): Promise<FestivalArchive[]> {
  // Get file names under /content/festivals
  const fileNames = fs.readdirSync(festivalsDirectory)
  
  const allFestivalData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(festivalsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content)
        const contentHtml = processedContent.toString()

        const frontmatter = matterResult.data as FestivalFrontmatter

        // Combine the data with the slug and content
        return {
          slug,
          content: contentHtml,
          ...frontmatter,
        } as FestivalArchive
      })
  )

  // Sort festivals by year (newest first)
  return allFestivalData.sort((a, b) => {
    if (a.year < b.year) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getFestivalArchiveBySlug(slug: string): Promise<FestivalArchive | null> {
  try {
    const fullPath = path.join(festivalsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    const frontmatter = matterResult.data as FestivalFrontmatter

    return {
      slug,
      content: contentHtml,
      ...frontmatter,
    } as FestivalArchive
  } catch (error) {
    return null
  }
}

export async function getFestivalArchiveByYear(year: number): Promise<FestivalArchive | null> {
  const allFestivals = await getAllFestivalArchives()
  return allFestivals.find(festival => festival.year === year) || null
}

export function getAllFestivalSlugs(): string[] {
  const fileNames = fs.readdirSync(festivalsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export function getAllFestivalYears(): number[] {
  const fileNames = fs.readdirSync(festivalsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Extract year from filename (assuming format: YYYY-festival-name.md)
      const yearMatch = fileName.match(/^(\d{4})/)
      return yearMatch ? parseInt(yearMatch[1]) : 0
    })
    .filter(year => year > 0)
    .sort((a, b) => b - a) // Sort newest first
}