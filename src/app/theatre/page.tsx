import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LeafFrame } from '@/components/ui/LeafFrame'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function TheatrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <LeafFrame className="relative bg-forest-600 text-white">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Pilton Theatre Productions
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light">
                Annual pantomimes in Pilton Church Hall
              </p>
              <p className="text-lg max-w-2xl mx-auto">
                The annual Pilton Panto took place in Pilton Church Hall during half-term holiday week 
                in February and was a great success. Pilton Theatre Productions is a sub-committee 
                of the Pilton Green Man CIO.
              </p>
            </div>
          </div>
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/original/final-curtain-panto.jpg"
              alt="Final Curtain of Pilton Panto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-gradient opacity-75"></div>
          </div>
        </LeafFrame>

        {/* Current Production */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <LeafFrame className="mb-12">
            <div className="bg-white p-8 rounded-leaf">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
                    Recent Production
                  </h2>
                  <h3 className="text-2xl font-semibold text-forest-500 mb-6">
                    "Red Riding Hood" (2022)
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-forest-600">Performance Period</h4>
                      <p>Half-term holiday week in February</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-600">Venue</h4>
                      <p>Pilton Church Hall</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-600">Status</h4>
                      <p>Great success - well received by the community</p>
                    </div>
                  </div>
                  
                  <p className="mb-6">
                    The annual Pilton Panto 'Red Riding Hood' took place in Pilton Church Hall 
                    during half-term holiday week in February and was a great success. Our traditional 
                    pantomime brings the community together with audience participation, local references, 
                    and plenty of laughs for the whole family.
                  </p>

                  <div className="bg-leaf-light/20 p-4 rounded mb-6">
                    <p className="text-sm font-semibold text-forest-700 mb-2">About Future Productions</p>
                    <p className="text-sm">You can find information about what has happened to Pilton Panto 2024 
                    and read about Pilton Panto 2023 'Sleeping Beauty' on our website.</p>
                  </div>
                  
                  <Button variant="primary" size="lg">
                    Check for Future Shows
                  </Button>
                </div>
                
                <div>
                  <Card>
                    <h3 className="text-xl font-semibold text-forest-700 mb-4">
                      Behind the Scenes
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-forest-600">Cast & Crew</h4>
                        <p className="text-sm">Over 25 local volunteers bringing the show to life</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">Rehearsals</h4>
                        <p className="text-sm">Every Tuesday and Thursday evening from September</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">Director</h4>
                        <p className="text-sm">Sarah Matthews</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-600">Musical Director</h4>
                        <p className="text-sm">James Wilson</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t">
                      <h4 className="font-semibold text-forest-600 mb-2">Want to Get Involved?</h4>
                      <p className="text-sm mb-4">
                        We're always looking for new cast members, crew, and volunteers.
                      </p>
                      <Button variant="leaf" size="sm" className="w-full">
                        Join Our Theatre Group
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </LeafFrame>

          {/* Theatre History */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <LeafFrame>
                <div className="bg-white p-8 rounded-leaf">
                  <h2 className="text-2xl font-display font-bold text-forest-700 mb-6">
                    Our Theatre Story
                  </h2>
                  
                  <div className="prose prose-lg">
                    <p>
                      Pilton Theatre was founded in 1991 by a group of enthusiastic locals 
                      who wanted to bring live entertainment to our community. What started 
                      as a small amateur dramatic society has grown into a beloved annual 
                      tradition that brings together performers and audiences from across Somerset.
                    </p>
                    
                    <p>
                      Our annual pantomime has become a cornerstone of the Christmas season 
                      in Pilton, with many families making it their holiday tradition. Over 
                      the years, we've performed classics like Cinderella, Jack and the 
                      Beanstalk, Snow White, and many others, each with our own local twist.
                    </p>
                    
                    <p>
                      Beyond pantomime, we've also produced summer plays, murder mysteries, 
                      and comedy nights, always with the goal of entertaining our community 
                      and providing a creative outlet for local talent.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-forest-600">30+</div>
                      <div className="text-sm text-gray-600">Years of Theatre</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-forest-600">50+</div>
                      <div className="text-sm text-gray-600">Productions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-forest-600">100+</div>
                      <div className="text-sm text-gray-600">Cast Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-forest-600">1000s</div>
                      <div className="text-sm text-gray-600">Audience Members</div>
                    </div>
                  </div>
                </div>
              </LeafFrame>
            </div>

            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-4">Recent Productions</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-forest-600">2023 - Sleeping Beauty</h4>
                    <p className="text-sm text-gray-600">Classic fairy tale pantomime</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">2022 - Red Riding Hood</h4>
                    <p className="text-sm text-gray-600">Half-term February success</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">2020 - Treasure Island</h4>
                    <p className="text-sm text-gray-600">Swashbuckling adventure</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">2018 - Robin Hood & Babes in Wood</h4>
                    <p className="text-sm text-gray-600">Adventures in Sherwood Forest</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">2017 - Dick Whittington</h4>
                    <p className="text-sm text-gray-600">Tale of London's famous cat</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">2016 - Aladdin</h4>
                    <p className="text-sm text-gray-600">Magic lamp adventure</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Pilton Theatre Productions took over the panto in 2016 and has helped raise money 
                  through these productions for local causes.
                </p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-4">Getting Involved</h3>
                <p className="text-sm mb-4">
                  Whether you're interested in acting, singing, helping backstage, 
                  or supporting in other ways, there's a place for you in Pilton Theatre.
                </p>
                <div className="space-y-2">
                  <Button variant="primary" size="sm" className="w-full">
                    Audition Information
                  </Button>
                  <Button variant="secondary" size="sm" className="w-full">
                    Volunteer Backstage
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full">
                    Support Our Theatre
                  </Button>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}