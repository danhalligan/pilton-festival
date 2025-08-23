import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { InteractiveMap } from '@/components/ui/InteractiveMap'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Festival Site Map | Pilton Festival',
  description: 'Interactive map showing all festival stages, food vendors, facilities, and activities for Pilton Green Man Day.',
}

export default function MapPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-forest-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-700 mb-6">
              Festival Site Map
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Navigate the Green Man Day festival with our interactive map showing all stages, 
              food vendors, facilities, and activities across Pilton village.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/festival">
                <Button variant="secondary" size="lg">
                  Back to Festival Info
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button variant="primary" size="lg">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <InteractiveMap />
            </div>

            {/* Map Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-3">Information & Lost Children</h3>
                <p className="text-sm text-gray-600">
                  Our informal tent will provide support and advice to visitors, stallholders, food vendors, 
                  entertainers and residents. This location also operates our lost and found children, animals 
                  and property service.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-3">Toilets</h3>
                <p className="text-sm text-gray-600">
                  Portaloos are located along the North Road side of Rotary Gardens, Pilton House grounds 
                  and in the car park through the alleyway above the Reform Inn.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-3">Safety Notice</h3>
                <p className="text-sm text-gray-600">
                  For the safety of others we would appreciate if <strong>NO GLASS, BOTTLES OR GLASSES</strong> 
                  are used outside thank you.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-3">Map Disclaimer</h3>
                <p className="text-sm text-gray-600">
                  * This map was correct as of our last update, however due to the dynamic nature of the 
                  festival there may be some last minute changes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Mobile Tips Section */}
        <section className="bg-forest-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                Using the Map on Your Phone
              </h2>
              <p className="text-gray-600">
                Make the most of our interactive map on your mobile device
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-lg font-semibold text-forest-600 mb-3">📱 Bookmark This Page</h3>
                <p className="text-sm text-gray-600">
                  Add this map page to your home screen for quick access during the festival.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-forest-600 mb-3">🔍 Zoom & Pan</h3>
                <p className="text-sm text-gray-600">
                  Pinch to zoom and drag to pan around the map for detailed views of different areas.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-forest-600 mb-3">📍 Click for Info</h3>
                <p className="text-sm text-gray-600">
                  Tap on any location marker to see detailed information about that area or facility.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-display font-bold text-forest-700 mb-8">
              More Festival Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/festival">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="text-lg font-semibold text-forest-600 mb-2">2025 Programme</h3>
                  <p className="text-sm text-gray-600">
                    Full schedule of events, performances, and activities
                  </p>
                </Card>
              </Link>

              <Link href="/get-involved">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="text-lg font-semibold text-forest-600 mb-2">Volunteer</h3>
                  <p className="text-sm text-gray-600">
                    Help make the festival happen and join our amazing team
                  </p>
                </Card>
              </Link>

              <Link href="/archive">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="text-lg font-semibold text-forest-600 mb-2">Festival Archive</h3>
                  <p className="text-sm text-gray-600">
                    Browse 40 years of Green Man Day celebrations
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}