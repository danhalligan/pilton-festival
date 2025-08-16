'use client'

import React, { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn, getAssetPath } from '@/lib/utils'
import { Card } from './Card'
import { Button } from './Button'
import { Memorial } from '@/types/memorials'

interface MemorialCarouselProps {
  memorials: Memorial[]
  className?: string
}

export function MemorialCarousel({ memorials, className }: MemorialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    []
  )

  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const toggleExpanded = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className={cn('memorial-carousel', className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
          In Loving Memory
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We remember those special people who helped create the magic of Pilton Festival
          and contributed so much to our community. Their legacy lives on in every celebration.
        </p>
      </div>

      <div className="relative">
        {/* Carousel container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {memorials.map((memorial) => (
              <div
                key={memorial.slug}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-0"
              >
                <Card className={cn(
                  'h-full transition-all duration-300 cursor-pointer hover:shadow-lg',
                  expandedCard === memorial.slug && 'ring-2 ring-forest-400'
                )}>
                  {/* Memorial image or placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-forest-100 to-forest-200 rounded-t-lg overflow-hidden flex items-center justify-center">
                    {memorial.image ? (
                      <>
                        <img
                          src={getAssetPath(memorial.image)}
                          alt={memorial.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </>
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-forest-300 rounded-full flex items-center justify-center mb-2">
                          <span className="text-2xl text-white">🌿</span>
                        </div>
                        <p className="text-forest-600 font-semibold text-sm">{memorial.name}</p>
                      </div>
                    )}
                    {memorial.years && (
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                        {memorial.years}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-forest-700 mb-1">
                      {memorial.name}
                    </h3>
                    <p className="text-sm font-medium text-forest-500 mb-2">
                      {memorial.title}
                    </p>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {memorial.shortDescription}
                    </p>

                    {/* Key contributions preview */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-forest-600 mb-2">Key Contributions:</h4>
                      <div className="flex flex-wrap gap-1">
                        {memorial.keyContributions.slice(0, 2).map((contribution, index) => (
                          <span
                            key={index}
                            className="inline-block bg-leaf-light/30 text-forest-700 text-xs px-2 py-1 rounded"
                          >
                            {contribution}
                          </span>
                        ))}
                        {memorial.keyContributions.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{memorial.keyContributions.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(memorial.slug)}
                      className="w-full"
                    >
                      {expandedCard === memorial.slug ? 'Show Less' : 'Read More'}
                    </Button>

                    {/* Expanded content */}
                    {expandedCard === memorial.slug && (
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                        <div
                          className="prose prose-sm text-sm text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: memorial.content }}
                        />

                        {/* All contributions */}
                        <div>
                          <h4 className="text-sm font-semibold text-forest-600 mb-2">
                            Contributions to Pilton:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {memorial.keyContributions.map((contribution, index) => (
                              <span
                                key={index}
                                className="inline-block bg-leaf-light/30 text-forest-700 text-xs px-2 py-1 rounded"
                              >
                                {contribution}
                              </span>
                            ))}
                          </div>
                        </div>

                        {memorial.author && (
                          <div className="text-right">
                            <p className="text-xs italic text-gray-500">
                              — {memorial.author}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="secondary"
            size="sm"
            onClick={scrollPrev}
            className="flex items-center gap-2"
          >
            ← Previous
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={scrollNext}
            className="flex items-center gap-2"
          >
            Next →
          </Button>
        </div>
      </div>
    </div>
  )
}