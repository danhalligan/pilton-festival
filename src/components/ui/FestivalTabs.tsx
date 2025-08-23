'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card } from './Card'
import { Button } from './Button'
import { Gallery } from './Gallery'
import { getAssetPath } from '@/lib/utils'
import { FestivalArchive } from '@/types/festivals'

interface FestivalTabsProps {
  festivals: FestivalArchive[]
}

export function FestivalTabs({ festivals }: FestivalTabsProps) {
  const [activeTab, setActiveTab] = useState(festivals[0]?.year || 2024)

  const activeFestival = festivals.find(f => f.year === activeTab)

  if (!activeFestival) {
    return <div>No festival data available</div>
  }

  return (
    <div>
      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {festivals.map((festival) => (
            <button
              key={festival.year}
              onClick={() => setActiveTab(festival.year)}
              className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                activeTab === festival.year
                  ? 'bg-forest-600 text-white shadow-lg'
                  : 'text-forest-700 hover:bg-forest-100 border border-forest-200'
              }`}
            >
              {festival.year}
            </button>
          ))}
        </div>
      </div>

      {/* Active Festival Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div id={`festival-${activeFestival.year}`}>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-2">
                {activeFestival.title}
              </h2>
              <p className="text-xl text-forest-500 mb-4">{activeFestival.date}</p>
              <p className="text-gray-600 max-w-3xl mx-auto">{activeFestival.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-forest-700 mb-4">
                  Photo Gallery
                </h3>
                <Gallery
                  images={activeFestival.images}
                  columns={activeFestival.images.length >= 6 ? 3 : 2}
                  showCategories={false}
                />
              </div>

              <div>
                <Card>
                  <h3 className="text-lg font-semibold text-forest-700 mb-4">
                    Festival Highlights
                  </h3>
                  <ul className="space-y-2">
                    {activeFestival.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-forest-500 mr-2">•</span>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href={`/archive/${activeFestival.slug}`}>
                  <Button variant="secondary" size="sm">
                    Read Full Story
                  </Button>
                </Link>
                {activeFestival.pdfBrochure && (
                  <Link href={getAssetPath(activeFestival.pdfBrochure)}>
                    <Button variant="ghost" size="sm">
                      Programme (PDF)
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm">
                  Share Memories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}