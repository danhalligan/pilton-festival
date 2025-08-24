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

  const [selectedMemorial, setSelectedMemorial] = useState<Memorial | null>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const openMemorialModal = (memorial: Memorial) => {
    setSelectedMemorial(memorial)
  }

  const closeMemorialModal = () => {
    setSelectedMemorial(null)
  }

  // Keyboard navigation for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMemorial) return
      
      if (e.key === 'Escape') {
        e.preventDefault()
        closeMemorialModal()
      }
    }

    if (selectedMemorial) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMemorial])

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
        <div className="overflow-hidden pb-6" ref={emblaRef}>
          <div className="flex gap-4 pb-4">
            {memorials.map((memorial) => (
              <div
                key={memorial.slug}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-0"
              >
                <Card 
                  className="h-full transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02]"
                  onClick={() => openMemorialModal(memorial)}
                >
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
                    <div>
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

      {/* Memorial Modal */}
      {selectedMemorial && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl max-h-[90vh] w-full overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                {selectedMemorial.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={getAssetPath(selectedMemorial.image)}
                      alt={selectedMemorial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-display font-bold text-forest-700">
                    {selectedMemorial.name}
                  </h2>
                  <p className="text-forest-500 font-medium">{selectedMemorial.title}</p>
                  {selectedMemorial.years && (
                    <p className="text-sm text-gray-600">{selectedMemorial.years}</p>
                  )}
                </div>
              </div>
              <button
                onClick={closeMemorialModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close memorial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* Short description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{selectedMemorial.shortDescription}</p>
              </div>

              {/* Full content */}
              <div className="mb-6">
                <div
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedMemorial.content }}
                />
              </div>

              {/* Key contributions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-forest-700 mb-3">
                  Contributions to Pilton:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMemorial.keyContributions.map((contribution, index) => (
                    <span
                      key={index}
                      className="inline-block bg-leaf-light/30 text-forest-700 text-sm px-3 py-1 rounded-full"
                    >
                      {contribution}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author credit */}
              {selectedMemorial.author && (
                <div className="text-right border-t border-gray-200 pt-4">
                  <p className="text-sm italic text-gray-500">
                    — {selectedMemorial.author}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Background click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeMemorialModal}
            aria-label="Close memorial"
          />
        </div>
      )}
    </div>
  )
}