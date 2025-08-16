import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Gallery, GalleryImage } from '@/components/ui/Gallery'
import { MemorialCarousel } from '@/components/ui/MemorialCarousel'
import { memorials } from '@/data/memorials'
import { getAssetPath } from '@/lib/utils'

export default function ArchivePage() {
  // Real data for past festivals
  const pastFestivals = [
    {
      year: 2024,
      title: 'Green Man Day 2024',
      date: 'Saturday, July 20th, 2024',
      description: 'The 2024 Green Man Day might have been the wettest day of July, but despite that the day was a great community success. The community of Pilton came together under umbrellas and gazebos.',
      highlights: ['Wettest day of July but still successful', 'Community spirit in the rain', 'Sunday Treasure Hunt held the next day'],
      images: [
        {
          id: '2024-1',
          src: getAssetPath('/images/original/arrival-pilton-house-2024.jpg'),
          alt: 'Arrival at Pilton House 2024',
          title: 'Arrival at Pilton House',
          description: 'The procession arriving at Pilton House despite the weather',
          year: 2024,
          category: 'Procession'
        }
      ]
    },
    {
      year: 2019,
      title: 'Green Man Day 2019',
      date: 'Saturday, July 20th, 2019',
      description: 'We hope you enjoyed the 2019 Pilton Green Man Day and the Pilton Treasure Hunt which followed on Sunday 21st July. The weekend went very well with the weather threatening to ruin things but relenting on Saturday morning.',
      highlights: ['Perfect weather after morning threats', 'Great community turnout', 'Successful treasure hunt on Sunday'],
      images: [
        {
          id: '2019-1',
          src: getAssetPath('/images/original/parade-arrives-2019.jpg'),
          alt: 'The 2019 Parade Arrives',
          title: 'The Parade Arrives',
          description: 'The procession arriving in Pilton with great community support',
          year: 2019,
          category: 'Procession'
        }
      ]
    },
    {
      year: 2017,
      title: 'Green Man Day 2017',
      date: 'Saturday, July 15th, 2017',
      description: 'Green Man Day 2017 saw lots of people braving the light drizzle and occasional harder showers to enjoy the market, food, drink, music, activities, parade and pageant.',
      highlights: ['Community braved the rain', 'New bunting by Liz Eveleigh', 'Wellies decorating competition'],
      images: [
        {
          id: '2017-1',
          src: getAssetPath('/images/original/festival-poster-compilation.jpg'),
          alt: 'Festival compilation from mid 2000s',
          title: 'Festival Memories',
          description: 'Compilation of colorful images from Pilton Green Man Days in the mid 2000s',
          year: 2017,
          category: 'Historical'
        }
      ]
    }
  ]
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

        {/* Archive Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {pastFestivals.map((festival) => (
              <Link
                key={festival.year}
                href={`#festival-${festival.year}`}
                className="inline-flex items-center justify-center px-3 py-2 font-semibold rounded-lg text-forest-700 hover:bg-forest-100 transition-colors"
              >
                {festival.year}
              </Link>
            ))}
            <Button variant="leaf" size="sm">
              All Years (1985-2024)
            </Button>
          </div>
        </div>

        {/* Past Festivals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="space-y-16">
            {pastFestivals.map((festival) => (
              <div key={festival.year} id={`festival-${festival.year}`}>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-display font-bold text-forest-700 mb-2">
                      {festival.title}
                    </h2>
                    <p className="text-xl text-forest-500 mb-4">{festival.date}</p>
                    <p className="text-gray-600 max-w-3xl mx-auto">{festival.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-forest-700 mb-4">
                        Photo Gallery
                      </h3>
                      <Gallery
                        images={festival.images}
                        columns={festival.images.length >= 6 ? 3 : 2}
                        showCategories={true}
                      />
                    </div>

                    <div>
                      <Card>
                        <h3 className="text-lg font-semibold text-forest-700 mb-4">
                          Festival Highlights
                        </h3>
                        <ul className="space-y-2">
                          {festival.highlights.map((highlight, index) => (
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
                      <Button variant="secondary" size="sm">
                        View Full Gallery
                      </Button>
                      <Button variant="ghost" size="sm">
                        Programme (PDF)
                      </Button>
                      <Button variant="ghost" size="sm">
                        Share Memories
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="bg-leaf-light/20 py-16">
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