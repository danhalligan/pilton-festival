import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { getAssetPath } from '@/lib/utils'

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="relative bg-forest-500 text-white">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Pilton Green Man CIO
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light">
                Promoting good citizenship in the community
              </p>
              <p className="text-lg max-w-2xl mx-auto">
                The Pilton Green Man CIO was set up in December 2016 to promote good citizenship
                in the community, principally for the benefit of the people of Pilton, through
                the making of grants and providing other support.
              </p>
            </div>
          </div>
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src={getAssetPath("/images/original/mannings-pit-buttercups.jpg")}
              alt="Manning's Pit Buttercups"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-gradient opacity-75"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* CIO Overview */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-6">
                About the Pilton Green Man CIO
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="prose prose-lg">
                  <p className="mb-4">
                    The Pilton Green Man CIO (Charitable Incorporated Organisation) was successfully
                    registered with the Charity Commission in 2016. Creation of the Trust limits the
                    liability of the organising Committee whilst providing the opportunity to redistribute
                    profits from Green Man Day for charitable causes which benefit the people of Pilton.
                  </p>
                  <p className="mb-4">
                    The <strong>Pilton Green Man Committee</strong>, which organises and runs the popular
                    day in July, continues to operate as a sub-committee of the trust. <strong>Pilton Theatre
                      Productions</strong>, which runs the Pilton Panto, is also a sub-committee of the Trust.
                    The <strong>Friends of Manning's Pit</strong> are also now a sub-committee of the CIO.
                  </p>
                  <div className="bg-leaf-light/20 p-4 rounded mt-6">
                    <p className="text-sm font-semibold mb-2">Current Trustees (as at July 2024):</p>
                    <p className="text-sm">Marc Brayley (Treasurer), Susan O'Grady, Paul Willcox, Esther Davies,
                      Vernon Clarke (Chair), Bryn Rees, Wendy Robinson and Martin Haddrill.</p>
                  </div>
                </div>
                <div>
                  <Card>
                    <h3 className="text-xl font-semibold text-forest-700 mb-4">Applications for Awards Invited</h3>
                    <p className="text-sm mb-4">
                      Please contact a trustee to discuss your ideas for an award which meets the conditions
                      set out in our award application. We look forward to hearing from you.
                    </p>
                    <div className="space-y-2 text-sm mb-4">
                      <p><strong>Last Trustees Meeting:</strong> 17th March 2025</p>
                      <p><strong>Next Meeting:</strong> June in the Reform Inn</p>
                    </div>
                    <Button variant="primary" className="w-full mb-2">
                      Apply for Award
                    </Button>
                    <p className="text-xs text-center text-gray-500">
                      Contact us through Facebook or via our contacts page
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Community Grants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Community Grants
                </h2>
                <p className="mb-6">
                  We provide financial support to local projects, groups, and initiatives that
                  benefit the Pilton community. Recent grants have supported youth groups,
                  environmental projects, and community facilities.
                </p>

                <h3 className="text-lg font-semibold text-forest-600 mb-3">Recent Grant Recipients (2024)</h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">Teachers Rock Choir</h4>
                    <p className="text-sm text-gray-600">Travel costs for Britain's Got Talent performance at London Palladium</p>
                  </div>
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">Welland House Defibrillator</h4>
                    <p className="text-sm text-gray-600">Installation of defibrillator in Chaddiford Lane - £250</p>
                  </div>
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">Barny Hogs Hedgehog Rescue</h4>
                    <p className="text-sm text-gray-600">Shed for housing injured and orphaned hedgehogs - £1,000 (2023)</p>
                  </div>
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">12th ND (Pilton) Scouts</h4>
                    <p className="text-sm text-gray-600">Replacement shelter tents - £689.64 (2023)</p>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Apply for a Grant
                </Button>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Manning's Pit: Saved for the Community
                </h2>
                <p className="mb-4 text-sm">
                  On the edge of Pilton and Bradiford lie some 18 acres of grazing land known locally as
                  Manning's Pit. They may be on the edge, but are very much at the heart of the Pilton
                  and Bradiford communities. Generations of local people have walked through the fields,
                  paddled in the river and done their courting there.
                </p>

                <div className="bg-forest-50 p-4 rounded mb-4">
                  <h4 className="font-semibold text-forest-700 mb-2">Success Story</h4>
                  <p className="text-sm font-semibold text-forest-600">
                    On 18th June 2021, Manning's Pit was secured for community and protected
                    for ever from development.
                  </p>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-forest-600">The Campaign</h4>
                    <p>The Friends of Manning's Pit was formed in 2015 to save the land from a 41-house development proposal.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Community Ownership</h4>
                    <p>Now owned by the community with support from the Pilton Green Man CIO</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Legal Support</h4>
                    <p>Enormous thanks to Tozers Solicitors for providing free legal advice</p>
                  </div>
                </div>

                <Button variant="leaf" className="w-full">
                  Visit Manning's Pit Website
                </Button>
              </Card>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
                  Get Involved
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  There are many ways to contribute to our community. Whether you have time to
                  volunteer or skills to share, we'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-forest-700 mb-3">
                    Festival Volunteers
                  </h3>
                  <p className="text-sm mb-4">
                    Help us make Green Man Day a success. We need volunteers for setup,
                    stewarding, and cleanup.
                  </p>
                  <div className="mt-auto">
                    <Button variant="primary" size="sm" className="w-full">
                      Volunteer for Festival
                    </Button>
                  </div>
                </Card>

                <Card className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-forest-700 mb-3">
                    Committee Members
                  </h3>
                  <p className="text-sm mb-4">
                    Join our organising committee and help shape community projects
                    throughout the year.
                  </p>
                  <div className="mt-auto">
                    <Button variant="secondary" size="sm" className="w-full">
                      Join Committee
                    </Button>
                  </div>
                </Card>

                <Card className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-forest-700 mb-3">
                    Local Businesses
                  </h3>
                  <p className="text-sm mb-4">
                    Partner with us to support community events and reach local customers.
                  </p>
                  <div className="mt-auto">
                    <Button variant="leaf" size="sm" className="w-full">
                      Business Partnership
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}