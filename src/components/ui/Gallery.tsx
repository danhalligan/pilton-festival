'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  year?: number
  category?: string
}

interface GalleryProps {
  images: GalleryImage[]
  className?: string
  columns?: 2 | 3 | 4
  showTitles?: boolean
  showCategories?: boolean
}

export function Gallery({ 
  images, 
  className, 
  columns = 3, 
  showTitles = true,
  showCategories = false 
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }

  return (
    <>
      <div className={cn(
        'grid gap-4',
        gridCols[columns],
        className
      )}>
        {images.map((image, index) => (
          <div 
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-leaf hover:shadow-forest transition-all duration-300"
            onClick={() => openLightbox(image, index)}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {showCategories && image.category && (
                <div className="absolute top-2 left-2 bg-forest-600 text-white px-2 py-1 rounded text-xs">
                  {image.category}
                </div>
              )}
              {image.year && (
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {image.year}
                </div>
              )}
              <div className="absolute inset-0 bg-forest-600/0 group-hover:bg-forest-600/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            {showTitles && (image.title || image.description) && (
              <div className="p-3">
                {image.title && (
                  <h3 className="font-semibold text-forest-700 mb-1">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-sm text-gray-600">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative max-h-[80vh] max-w-[90vw]">
              <Image
                src={selectedImage.src}
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
    </>
  )
}