import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getAssetPath } from '@/lib/utils'
import { getAllNewsArticles } from '@/lib/news'

const variantColors = {
  festival: 'bg-forest-100 text-forest-700',
  community: 'bg-blue-100 text-blue-700',
  theatre: 'bg-purple-100 text-purple-700',
  grants: 'bg-green-100 text-green-700',
}

export default async function NewsPage() {
  const allNews = await getAllNewsArticles()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="relative bg-forest-600 text-white shadow-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${getAssetPath('/images/original/festival-news-bg.jpg')})`
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-forest-gradient opacity-75"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white drop-shadow-lg">
                Community News
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light drop-shadow-md">
                Stay up to date with all the latest from Pilton
              </p>
              <p className="text-lg max-w-2xl mx-auto drop-shadow-md">
                Festival updates, community achievements, theatre productions, and more
              </p>
            </div>
          </div>
        </div>

        {/* News Articles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {allNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No news articles available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.map((article) => (
                <Card key={article.slug} hover className="h-full flex flex-col">
                  {/* Article image */}
                  {article.image && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={getAssetPath(article.image)}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <CardHeader className="flex-grow">
                    {/* Category badge and date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variantColors[article.variant]}`}>
                        {article.variant.charAt(0).toUpperCase() + article.variant.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(article.date)}
                      </span>
                    </div>

                    <Link href={`/news/${article.slug}`}>
                      <h2 className="text-xl font-semibold text-forest-700 mb-2 line-clamp-2 hover:text-forest-600 transition-colors duration-200 cursor-pointer">
                        {article.title}
                      </h2>
                    </Link>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author and read more */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        By {article.author}
                      </span>
                      <Link href={`/news/${article.slug}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}