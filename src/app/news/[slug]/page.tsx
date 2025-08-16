import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { getNewsArticleBySlug, getAllNewsSlug } from '@/lib/news'
import { getAssetPath } from '@/lib/utils'

interface NewsPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllNewsSlug()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function NewsPage({ params }: NewsPageProps) {
  const article = await getNewsArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Article Header */}
        <section className="bg-gradient-to-b from-forest-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center text-forest-600 hover:text-forest-500 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Homepage
              </Link>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-700 mb-4">
                {article.title}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-gray-600">
                <time dateTime={article.date}>
                  {formatDate(article.date)}
                </time>
                <span>•</span>
                <span>By {article.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {article.image && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={getAssetPath(article.image)}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg prose-forest max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="text-gray-700 leading-relaxed"
              />
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link href="/">
                <Button variant="secondary">
                  Back to Homepage
                </Button>
              </Link>
              <div className="text-sm text-gray-500">
                Published on {formatDate(article.date)}
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Related Articles Suggestion */}
        <section className="bg-leaf-light/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest news about Pilton Festival and community events delivered to your inbox.
            </p>
            <Link href="/#newsletter">
              <Button variant="primary" size="lg">
                Subscribe to Newsletter
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}