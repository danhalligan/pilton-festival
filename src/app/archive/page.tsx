import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { FestivalTabs } from '@/components/ui/FestivalTabs'
import { MemorialCarousel } from '@/components/ui/MemorialCarousel'
import { getAssetPath } from '@/lib/utils'
import { getAllFestivalArchives } from '@/lib/festivals'
import { getAllMemorials } from '@/lib/memorials'

export default async function ArchivePage() {
  const pastFestivals = await getAllFestivalArchives()
  const memorials = await getAllMemorials()
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
              backgroundImage: `url(${getAssetPath('/images/original/successful-pageant.jpg')})`
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-forest-gradient opacity-75"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white drop-shadow-lg">
                Festival Archive
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light drop-shadow-md">
                Celebrating 40 years of community spirit
              </p>
              <p className="text-lg max-w-2xl mx-auto drop-shadow-md">
                Take a journey through the history of Pilton Green Man Day, from our
                humble beginnings in 1985 to the vibrant community celebration we know today.
              </p>
            </div>
          </div>
        </div>

        {/* Festival Tabs */}
        <FestivalTabs festivals={pastFestivals} />

        {/* Historical Timeline */}
        <div className="bg-forest-800/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-8 text-center">
                Festival Timeline
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center text-white font-bold">
                    1982
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700">Festival Revival</h3>
                    <p className="text-sm text-gray-600">
                      Rev. Anthony Geering instrumental in reviving the historic Festival as part of a month-long programme
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center text-white font-bold">
                    1995
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700">First Green Man Day</h3>
                    <p className="text-sm text-gray-600">
                      The first modern Green Man Day was held, with Albert Linacre and his sewing ladies making the distinctive costumes
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center text-white font-bold">
                    2016
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700">CIO Formation</h3>
                    <p className="text-sm text-gray-600">
                      Pilton Green Man CIO successfully registered with the Charity Commission
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-forest-600 rounded-full flex items-center justify-center text-white font-bold">
                    2021
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700">Manning's Pit Saved</h3>
                    <p className="text-sm text-gray-600">
                      On 18th June 2021, Manning's Pit was secured for community and protected forever from development
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-forest-400 rounded-full flex items-center justify-center text-white font-bold">
                    2025
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-700">30th Anniversary</h3>
                    <p className="text-sm text-gray-600">
                      Celebrating 30 years of the modern Green Man Day tradition with continued community spirit
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button variant="primary">
                  Submit Your Festival Memories
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Memorial Section */}
        <div className="bg-leaf-light/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <MemorialCarousel memorials={memorials} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}