import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ui/ContactForm'

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="relative bg-forest-600 text-white">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Get Involved
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-leaf-light">
                Join our community and help make a difference
              </p>
              <p className="text-lg max-w-2xl mx-auto">
                There are many ways to get involved with Pilton Festival and our 
                community initiatives. Whether you have time to volunteer, skills 
                to share, or ideas to contribute, we'd love to hear from you.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-forest-gradient opacity-90"></div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-8 text-center">
                Volunteer Opportunities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <h3 className="text-xl font-semibold text-forest-700 mb-4">
                    Festival Volunteers
                  </h3>
                  <p className="mb-4">
                    Help us run Green Man Day! We need volunteers for setup, stewarding, 
                    cleanup, and everything in between.
                  </p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div><strong>When:</strong> Festival day + setup/cleanup</div>
                    <div><strong>Time:</strong> Flexible shifts available</div>
                    <div><strong>Benefits:</strong> Free festival t-shirt, meal, great experience</div>
                  </div>
                  <Button variant="primary" className="w-full">
                    Sign Up to Volunteer
                  </Button>
                </Card>

                <Card>
                  <h3 className="text-xl font-semibold text-forest-700 mb-4">
                    Theatre Group
                  </h3>
                  <p className="mb-4">
                    Join our theatre group! We welcome actors, singers, backstage crew, 
                    and anyone interested in live performance.
                  </p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div><strong>When:</strong> Rehearsals Tue/Thu evenings</div>
                    <div><strong>Experience:</strong> None required - all welcome</div>
                    <div><strong>Ages:</strong> Children and adults</div>
                  </div>
                  <Button variant="secondary" className="w-full">
                    Join Theatre Group
                  </Button>
                </Card>

                <Card>
                  <h3 className="text-xl font-semibold text-forest-700 mb-4">
                    Committee Members
                  </h3>
                  <p className="mb-4">
                    Help shape the future of our community activities by joining 
                    our organising committee.
                  </p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div><strong>When:</strong> Monthly meetings</div>
                    <div><strong>Commitment:</strong> 2-3 hours per month</div>
                    <div><strong>Role:</strong> Planning and decision making</div>
                  </div>
                  <Button variant="leaf" className="w-full">
                    Join Committee
                  </Button>
                </Card>
              </div>
            </div>
          </div>

          {/* Business Partnership */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Business Partnership
                </h2>
                <p className="mb-6">
                  Partner with us to support community events while reaching local customers. 
                  Our festival attracts hundreds of visitors to the area each year.
                </p>
                
                <h3 className="text-lg font-semibold text-forest-600 mb-3">Partnership Benefits</h3>
                <ul className="space-y-2 mb-6 text-sm">
                  <li>• Logo placement on festival materials</li>
                  <li>• Stallholder opportunities at events</li>
                  <li>• Community newsletter mentions</li>
                  <li>• Website business directory listing</li>
                  <li>• Supporting local community initiatives</li>
                  <li>• Networking with other local businesses</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-forest-600 mb-3">Current Partners</h3>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="p-2 bg-leaf-light/30 rounded">
                    The Pilton Inn - Local refreshments
                  </div>
                  <div className="p-2 bg-leaf-light/30 rounded">
                    Shepton Garden Centre - Plants & supplies
                  </div>
                  <div className="p-2 bg-leaf-light/30 rounded">
                    Somerset Farm Foods - Local produce
                  </div>
                </div>
                
                <Button variant="primary" className="w-full">
                  Become a Partner
                </Button>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
                  Stallholder Information
                </h2>
                <p className="mb-6">
                  Join our festival as a stallholder! We welcome craft makers, food vendors, 
                  local businesses, and community groups.
                </p>
                
                <h3 className="text-lg font-semibold text-forest-600 mb-3">Stall Categories</h3>
                <div className="space-y-2 mb-6">
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">Food & Drink</h4>
                    <p className="text-sm text-gray-600">Local produce, refreshments, specialty foods</p>
                  </div>
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">Arts & Crafts</h4>
                    <p className="text-sm text-gray-600">Handmade items, artwork, traditional crafts</p>
                  </div>
                  <div className="p-3 bg-leaf-light/30 rounded">
                    <h4 className="font-semibold text-forest-700">Community Groups</h4>
                    <p className="text-sm text-gray-600">Local societies, charities, information stands</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-forest-600 mb-2">Stall Fees</h4>
                  <div className="text-sm space-y-1">
                    <div>Food stalls: £30</div>
                    <div>Craft stalls: £20</div>
                    <div>Community groups: Free</div>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full">
                  Apply for a Stall
                </Button>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-forest-700 mb-6">
                    Contact Us
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-forest-600 mb-2">General Enquiries</h3>
                      <p className="text-gray-600 mb-2">
                        For general questions about the festival, community projects, or how to get involved.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div><strong>Email:</strong> info@piltonfestival.co.uk</div>
                        <div><strong>Phone:</strong> 01749 890123</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-forest-600 mb-2">Grant Applications</h3>
                      <p className="text-gray-600 mb-2">
                        For community grant applications and funding enquiries.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div><strong>Email:</strong> grants@piltonfestival.co.uk</div>
                        <div><strong>Contact:</strong> Michael Green, Treasurer</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-forest-600 mb-2">Theatre Group</h3>
                      <p className="text-gray-600 mb-2">
                        For auditions, joining the theatre group, or performance enquiries.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div><strong>Email:</strong> theatre@piltonfestival.co.uk</div>
                        <div><strong>Contact:</strong> Sarah Matthews, Director</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-forest-700 mb-6">
                    Send Us a Message
                  </h2>
                  
                  <ContactForm />
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