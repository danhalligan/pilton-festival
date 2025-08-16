import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Memorial, MemorialFrontmatter } from '@/types/memorials'
import { getAssetPath } from './utils'

const memorialsDirectory = path.join(process.cwd(), 'content/memorials')

// Function to process HTML content and fix image paths for GitHub Pages
function processImagePaths(htmlContent: string): string {
  return htmlContent.replace(
    /<img([^>]*)\ssrc="([^"]*)"([^>]*)>/g,
    (match, beforeSrc, src, afterSrc) => {
      // Only process relative paths that start with /
      if (src.startsWith('/') && !src.startsWith('//')) {
        const correctedSrc = getAssetPath(src)
        return `<img${beforeSrc} src="${correctedSrc}"${afterSrc}>`
      }
      return match
    }
  )
}

export async function getAllMemorials(): Promise<Memorial[]> {
  // Get file names under /content/memorials
  const fileNames = fs.readdirSync(memorialsDirectory)
  
  const allMemorialData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(memorialsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content)
        const contentHtml = processImagePaths(processedContent.toString())

        const frontmatter = matterResult.data as MemorialFrontmatter

        // Combine the data with the slug and content
        return {
          slug,
          content: contentHtml,
          ...frontmatter,
        } as Memorial
      })
  )

  // Sort memorials alphabetically by name
  return allMemorialData.sort((a, b) => a.name.localeCompare(b.name))
}

export async function getMemorialBySlug(slug: string): Promise<Memorial | null> {
  try {
    const fullPath = path.join(memorialsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processImagePaths(processedContent.toString())

    const frontmatter = matterResult.data as MemorialFrontmatter

    return {
      slug,
      content: contentHtml,
      ...frontmatter,
    } as Memorial
  } catch (error) {
    return null
  }
}

export function getAllMemorialSlugs(): string[] {
  const fileNames = fs.readdirSync(memorialsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}