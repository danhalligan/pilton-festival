import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeafFrame } from '@/components/ui/LeafFrame'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <LeafFrame className="relative bg-forest-600 text-white">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                About Us
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light">
                The story of Pilton Festival and the Green Man tradition
              </p>
              <p className="text-lg max-w-2xl mx-auto">
                Discover the rich history of our community festival and the ancient 
                traditions that continue to bring us together in celebration.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-forest-gradient opacity-90"></div>
        </LeafFrame>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Festival History */}
          <LeafFrame className="mb-12">
            <div className="bg-white p-8 rounded-leaf">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-8">
                The Green Man Tradition
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="prose prose-lg">
                  <p>
                    The Green Man is an ancient symbol of rebirth, nature, and the eternal 
                    cycle of growth. Found in churches, buildings, and folklore throughout 
                    Britain, the Green Man represents the spirit of the woodlands and the 
                    renewal that comes with each season.
                  </p>
                  
                  <p>
                    In Pilton, the Green Man tradition has been celebrated for generations, 
                    connecting our community to the natural world around us and to the 
                    agricultural heritage that has shaped our landscape for centuries.
                  </p>
                  
                  <p>
                    Our annual Green Man Day celebrates this connection, bringing together 
                    people of all ages to enjoy music, food, crafts, and community spirit 
                    in the heart of Somerset countryside.
                  </p>
                </div>
                
                <div>
                  <Card>
                    <h3 className="text-xl font-semibold text-forest-700 mb-4">
                      Festival Timeline
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-forest-600">1985</h4>
                        <p className="text-sm">First Pilton Green Man Day organised</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">1991</h4>
                        <p className="text-sm">Pilton Theatre group established</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">2010</h4>
                        <p className="text-sm">Community Interest Organisation formed</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">2023</h4>
                        <p className="text-sm">Manning's Pit designated as SSSI</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">2025</h4>
                        <p className="text-sm">40th anniversary celebration planned</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </LeafFrame>

          {/* Pilton Village */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <LeafFrame>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Pilton Village
                </h2>
                <p className="mb-4">
                  Nestled in the heart of Somerset, Pilton is a historic village with 
                  a rich heritage dating back over a thousand years. Our community 
                  is proud of its agricultural roots and strong tradition of coming 
                  together to support one another.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-forest-600">Location</h4>
                    <p className="text-sm">3 miles from Shepton Mallet, Somerset</p>
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
                
                <Button variant="leaf" className="w-full">
                  Explore Our Village
                </Button>
              </Card>
            </LeafFrame>

            <LeafFrame>
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
            </LeafFrame>
          </div>

          {/* Values and Mission */}
          <LeafFrame>
            <div className="bg-white p-8 rounded-leaf">
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
          </LeafFrame>

        </div>
      </main>

      <Footer />
    </div>
  )
}