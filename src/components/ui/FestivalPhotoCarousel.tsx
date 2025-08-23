'use client'

import React, { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { cn, getAssetPath } from '@/lib/utils'
import { GalleryImage } from './Gallery'

interface FestivalPhotoCarouselProps {
  images: GalleryImage[]
  className?: string
}

export function FestivalPhotoCarousel({ images, className }: FestivalPhotoCarouselProps) {
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

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          prevImage()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextImage()
          break
        case 'Escape':
          e.preventDefault()
          closeLightbox()
          break
      }
    }

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage, currentImageIndex])

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500 py-8">No photos available</div>
  }

  return (
    <div className={cn('festival-photo-carousel', className)}>
      <div className="relative">
        {/* Carousel container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-64 h-48 relative group cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <Image
                    src={getAssetPath(image.src)}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 256px"
                  />
                  {/* Year badge */}
                  {image.year && (
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {image.year}
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-forest-600/0 group-hover:bg-forest-600/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Image title/description below */}
                {(image.title || image.description) && (
                  <div className="mt-2 px-1">
                    {image.title && (
                      <h4 className="text-sm font-medium text-forest-700 truncate">{image.title}</h4>
                    )}
                    {image.description && (
                      <p className="text-xs text-gray-600 line-clamp-2 mt-1">{image.description}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - only show if there are enough images to scroll */}
        {images.length > 3 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous images"
            >
              <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next images"
            >
              <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Navigation dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {images.length > 3 && (
          <div className="text-xs text-gray-500">
            Scroll to see all {images.length} photos
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close gallery"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative max-h-[80vh] max-w-[90vw]">
              <Image
                src={getAssetPath(selectedImage.src)}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[80vh] max-w-[90vw] object-contain"
                priority
              />
            </div>

            {/* Image info */}
            {(selectedImage.title || selectedImage.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                {selectedImage.title && (
                  <h3 className="font-semibold text-lg mb-1">{selectedImage.title}</h3>
                )}
                {selectedImage.description && (
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                )}
                {selectedImage.year && (
                  <p className="text-xs opacity-70 mt-1">{selectedImage.year}</p>
                )}
              </div>
            )}

            {/* Image counter */}
            <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Background click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
            aria-label="Close gallery"
          />
        </div>
      )}
    </div>
  )
}