import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { NewsArticle, NewsFrontmatter } from '@/types/news'
import { getAssetPath } from './utils'

const newsDirectory = path.join(process.cwd(), 'content/news')

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

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  // Get file names under /content/news
  const fileNames = fs.readdirSync(newsDirectory)
  
  const allNewsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(newsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content)
        const contentHtml = processImagePaths(processedContent.toString())

        const frontmatter = matterResult.data as NewsFrontmatter

        // Combine the data with the slug and content
        return {
          slug,
          content: contentHtml,
          ...frontmatter,
        } as NewsArticle
      })
  )

  // Sort posts by date (newest first)
  return allNewsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getFeaturedNewsArticles(limit: number = 3): Promise<NewsArticle[]> {
  const allNews = await getAllNewsArticles()
  return allNews.filter(article => article.featured).slice(0, limit)
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processImagePaths(processedContent.toString())

    const frontmatter = matterResult.data as NewsFrontmatter

    return {
      slug,
      content: contentHtml,
      ...frontmatter,
    } as NewsArticle
  } catch (error) {
    return null
  }
}

export function getAllNewsSlug(): string[] {
  const fileNames = fs.readdirSync(newsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''))
}