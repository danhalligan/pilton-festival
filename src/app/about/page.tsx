import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getAssetPath } from '@/lib/utils'

export default function AboutPage() {
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
              backgroundImage: `url(${getAssetPath('/images/original/parade-arrives-2019.jpg')})`
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-forest-gradient opacity-75"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white drop-shadow-lg">
                About Us
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light drop-shadow-md">
                The story of Pilton Festival and the Green Man tradition
              </p>
              <p className="text-lg max-w-2xl mx-auto drop-shadow-md">
                Discover the rich history of our community festival and the ancient
                traditions that continue to bring us together in celebration.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Festival History */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-8">
                The Green Man Tradition
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="prose prose-lg">
                  <p className="mb-4">
                    The Green Man is an ancient symbol of rebirth, nature, and fertility, 
                    traditionally depicted as a face sprouting foliage. Found in churches, 
                    buildings, and folklore throughout Britain, the Green Man represents the 
                    spirit of the woodlands and the renewal that comes with each season. 
                    Here in Pilton, a Green Man carving can be found in St Mary the Virgin 
                    Parish Church, connecting our modern celebration to centuries-old traditions.
                  </p>

                  <h3 className="text-lg font-semibold text-forest-600 mb-3">Medieval Foundations</h3>
                  <p className="mb-4">
                    Our festival has deep historical roots. Pilton was granted a market charter 
                    by King Edward III during his reign (1327-1377), establishing our village's 
                    right to host markets and fairs. This ancient charter still enables 
                    craftsmen to sell their work and charities to raise funds during our 
                    modern festival celebrations.
                  </p>

                  <h3 className="text-lg font-semibold text-forest-600 mb-3">The Revival Story</h3>
                  <p className="mb-4">
                    The modern Pilton Festival was revived in 1982 through the instrumental 
                    work of Rev. Anthony Geering. His vision brought back the historic festival 
                    as part of a month-long programme featuring events throughout June and July, 
                    including a historic pageant, stalls along Pilton Street, and a Flower 
                    Festival in the church.
                  </p>

                  <h3 className="text-lg font-semibold text-forest-600 mb-3">Sacred and Secular Unity</h3>
                  <p className="mb-4">
                    Our festival ritual beautifully represents the integration of pagan and 
                    Christian traditions, symbolizing "the initial antagonism" between the 
                    Prior and the Green Man. This reflects the complex history of our village, 
                    where the Benedictine Priory of Pilton (a cell of Malmesbury Abbey) once 
                    stood where St Mary's Church stands today, creating a unique blend of 
                    spiritual traditions that continues in our celebrations.
                  </p>
                </div>

                <div>
                  <Card>
                    <h3 className="text-xl font-semibold text-forest-700 mb-4">
                      Festival Timeline
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-forest-600">1327-1377</h4>
                        <p className="text-sm">Market charter granted by King Edward III</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">1982</h4>
                        <p className="text-sm">Festival revived by Rev. Anthony Geering</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">1995</h4>
                        <p className="text-sm">First modern Green Man Day celebration</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">2016</h4>
                        <p className="text-sm">Pilton Green Man CIO officially formed</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">2021</h4>
                        <p className="text-sm">Manning's Pit secured for community</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">2025</h4>
                        <p className="text-sm">30th anniversary of modern Green Man Day</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-3">
                        Historical footage from the 1982 festival revival has been preserved 
                        and transferred to DVD, documenting this important moment in our 
                        community's history.
                      </p>
                      <a 
                        href="https://www.thepiltonstory.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-forest-600 hover:text-forest-700 underline"
                      >
                        Learn more from The Pilton Story →
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Pilton Village */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Pilton Village
                </h2>
                <p className="mb-4">
                  Pilton Green Man Day takes place in the village of Pilton, the oldest part of what is now the North Devon town of Barnstaple.
                </p>
                <p className="mb-4">
                  Pilton began life as one of King Alfred's Burghs - a fortified site and township - around 882 AD. The name is thought to come from Pill - meaning creek - and Tun - meaning a stockaded farmstead. The Benedictine Priory of Pilton, founded in the 10th Century as a cell of Malmesbury Abbey and dissolved at The reformation in 1536, stood where the Church of St Mary stands today at the top of Pilton Street.
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-forest-600">Location</h4>
                    <p className="text-sm">Just north of Barnstaple, North Devon</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Population</h4>
                    <p className="text-sm">Approximately 998 residents</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Notable Features</h4>
                    <p className="text-sm">Historic church, village green, Manning's Pit SSSI</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Local Amenities</h4>
                    <p className="text-sm">Village hall, pub, post office, primary school</p>
                  </div>
                </div>

                <a href="https://www.thepiltonstory.org/" target="_blank" rel="noopener noreferrer">
                  <Button variant="leaf" className="w-full">
                    Explore the History of Our Village
                  </Button>
                </a>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Our Organisation
                </h2>
                <p className="mb-4">
                  The Pilton Community Interest Organisation was established to coordinate
                  community activities, provide grants to local projects, and ensure the
                  continuation of our cherished traditions.
                </p>

                <h3 className="text-lg font-semibold text-forest-600 mb-3">Current Trustees</h3>
                <div className="space-y-2 mb-6">
                  <div className="p-2 bg-leaf-light/30 rounded">
                    <p className="font-semibold text-forest-700">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Chair</p>
                  </div>
                  <div className="p-2 bg-leaf-light/30 rounded">
                    <p className="font-semibold text-forest-700">Michael Green</p>
                    <p className="text-sm text-gray-600">Treasurer</p>
                  </div>
                  <div className="p-2 bg-leaf-light/30 rounded">
                    <p className="font-semibold text-forest-700">Emma Williams</p>
                    <p className="text-sm text-gray-600">Secretary</p>
                  </div>
                  <div className="p-2 bg-leaf-light/30 rounded">
                    <p className="font-semibold text-forest-700">David Brown</p>
                    <p className="text-sm text-gray-600">Committee Member</p>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Contact the Committee
                </Button>
              </Card>
            </div>
          </div>

          {/* Values and Mission */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything we do is guided by our commitment to community,
                  sustainability, and preserving the best of our local heritage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Community First</h3>
                  <p className="text-sm text-gray-600">
                    Everything we do is for the benefit of our local community,
                    bringing people together and supporting local initiatives.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Heritage Preservation</h3>
                  <p className="text-sm text-gray-600">
                    We're committed to preserving our local traditions, history,
                    and the natural environment for future generations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-forest-700 mb-2">Sustainable Future</h3>
                  <p className="text-sm text-gray-600">
                    We strive to make our events and activities environmentally
                    responsible and sustainable for the long term.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}