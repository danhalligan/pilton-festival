'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'
import { getAssetPath } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] bg-gradient-to-b from-forest-50 to-white">
          <div className="h-full flex items-center justify-center py-16">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Logo */}
              <div className="mb-8 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 relative">
                  <Image
                    src={getAssetPath("/logo.png")}
                    alt="Pilton Festival Green Man Logo"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold text-forest-700 mb-6">
                Pilton Green Man Day
              </h1>
              <p className="text-xl md:text-2xl text-forest-600 mb-8 leading-relaxed">
                A beloved community festival celebrating tradition, music, and local spirit in the heart of Devon
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/festival">
                  <Button size="lg" variant="primary">
                    Next Festival: July 2026
                  </Button>
                </Link>
                <Link href="/get-involved">
                  <Button size="lg" variant="secondary">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-forest-700 mb-4">
                Latest News & Events
              </h2>
              <div className="leaf-divider max-w-md mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="festival" hover>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-forest-700">Green Man Day 2025 Success</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Despite the wet weather, our 2025 festival brought the community together
                    under umbrellas and gazebos for a wonderful celebration.
                  </p>
                  <Link href="/archive">
                    <Button variant="ghost" size="sm">Read More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card variant="community" hover>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-forest-700">Community Grants Available</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The Pilton Green Man CIO is accepting applications for community grants.
                    Support local projects that benefit our community.
                  </p>
                  <Link href="/community">
                    <Button variant="leaf" size="sm">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card variant="festival" hover>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-forest-700">Manning's Pit Protected</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    18 acres of community land secured forever from development,
                    thanks to the amazing work of volunteers and supporters.
                  </p>
                  <Link href="/community">
                    <Button variant="ghost" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Spotlight */}
        <section className="section-padding bg-leaf-light/20">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-display font-bold text-forest-700 mb-6">
                    Run by Volunteers, For the Community
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      Pilton Green Man Day is entirely organized and run by local volunteers.
                      Every penny raised goes back into the community through grants,
                      local projects, and next year's festival.
                    </p>
                    <p>
                      From the ancient Green Man tradition to modern community spirit,
                      we celebrate what makes Pilton special while supporting local
                      businesses, charities, and volunteer groups.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link href="/get-involved">
                      <Button variant="primary" size="lg">
                        Volunteer With Us
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="community-highlight">
                  <h3 className="text-2xl font-semibold text-forest-700 mb-4">
                    Support Our Local Community
                  </h3>
                  <div className="space-y-4">
                    <div className="green-accent">
                      <h4 className="font-semibold text-forest-600">Festival Funding</h4>
                      <p className="text-gray-600">We need £8,000 annually to put on Green Man Day</p>
                    </div>
                    <div className="green-accent">
                      <h4 className="font-semibold text-forest-600">Community Grants</h4>
                      <p className="text-gray-600">Supporting local projects and charitable causes</p>
                    </div>
                    <div className="green-accent">
                      <h4 className="font-semibold text-forest-600">Local Business</h4>
                      <p className="text-gray-600">Generating trade and supporting our sponsors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you want to volunteer, apply for a grant, or just stay updated
                with what's happening in Pilton, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button variant="primary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Newsletter Signup
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section id="newsletter" className="bg-leaf-light/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup
              variant="card"
              title="Stay Connected with Pilton Festival"
              description="Get the latest updates about Green Man Day, community events, theatre productions, and grant opportunities delivered straight to your inbox."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}