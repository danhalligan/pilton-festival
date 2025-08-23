import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getAssetPath } from "@/lib/utils";

export default function FestivalPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="relative bg-forest-600 text-white shadow-lg">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                Pilton Green Man Day 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-leaf-light">
                Third Saturday in July • Join us for our annual community
                celebration
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                A successful day run by volunteers celebrating the ancient Green
                Man tradition in the historic village of Pilton. All proceeds
                support local charitable causes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  piltonfestival@googlemail.com
                </Button>
                <Button variant="leaf" size="lg">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="absolute inset-0">
            <img
              src={getAssetPath("/images/original/pilton-street-bunting.jpg")}
              alt="Pilton Street decorated for the festival"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-gradient opacity-75"></div>
          </div>
        </div>

        {/* Festival Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-display font-bold text-forest-700 mb-6">
                    Green Man Day 2025
                  </h2>

                  <div className="prose prose-lg max-w-none">
                    <p>
                      Thanks to the amazing work of all the volunteers and
                      performers, and all the stalls and activities who came
                      and, of course, the weather, which was perfect, Green Man
                      Day 2025 appears to have been a great success.
                    </p>

                    <p>
                      Green Man Day is run entirely by those volunteers. The
                      money raised goes to cover the considerable cost of
                      putting on the festival, and the event generates trade for
                      local businesses. Any profit is available for local
                      charitable causes.
                    </p>

                    <div className="bg-leaf-light/20 p-6 rounded-lg my-6">
                      <p className="mb-2">
                        <strong>Flourishing Barnstaple Support</strong>
                      </p>
                      <p className="text-sm">
                        Pilton Green Man had support this year through the{" "}
                        <strong>Flourishing Barnstaple</strong> project. This
                        project is funded through the Government's Cultural
                        Development Fund, administered by Arts Council England,
                        and is aimed at re-establishing Barnstaple as the
                        cultural centre of Northern Devon.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-forest-600 mt-8 mb-4">
                      The Green Man Procession
                    </h3>
                    <p>
                      The Green Man Parade starts in The Square at the southern
                      end of Barnstaple High Street and proceeds to Pilton House
                      and Rotary Gardens via the Barnstaple High Street, Pilton
                      Causeway and Pilton Street. The Green Man Pageant takes
                      place in the Rotary Gardens.
                    </p>

                    <h3 className="text-xl font-semibold text-forest-600 mt-8 mb-4">
                      The Green Man Day Programme
                    </h3>

                    <div className="bg-leaf-light/20 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold text-forest-700 mb-3">
                        Saturday 19th July 2025 • Pilton, Barnstaple
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>
                            <strong>10:00am</strong> - Setup begins
                          </p>
                          <p>
                            <strong>11:00am</strong> - Procession starts from
                            The Square, Barnstaple
                          </p>
                          <p>
                            <strong>12:00pm</strong> - First Green Man Pageant
                            in Rotary Gardens
                          </p>
                          <p>
                            <strong>3:00pm</strong> - Second Green Man Pageant
                          </p>
                        </div>
                        <div>
                          <p>
                            <strong>All Day</strong> - Three music stages with
                            local talent
                          </p>
                          <p>
                            <strong>All Day</strong> - Historic market and craft
                            stalls
                          </p>
                          <p>
                            <strong>All Day</strong> - Children's entertainment
                            and activities
                          </p>
                          <p>
                            <strong>All Day</strong> - Food stalls and licensed
                            bars
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-forest-600 mt-8 mb-4">
                      What's On
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                      <Card>
                        <h4 className="font-semibold text-forest-700 mb-2">
                          The Procession
                        </h4>
                        <p className="text-gray-600">
                          Starting at 11:00am from The Square in Barnstaple,
                          accompanied by the fabulous Samba Baía, the procession
                          makes its way through town centre to Pilton Street and
                          Rotary Gardens.
                        </p>
                      </Card>
                      <Card>
                        <h4 className="font-semibold text-forest-700 mb-2">
                          Three Music Stages
                        </h4>
                        <p className="text-gray-600">
                          Bottom Stage, Garden Stage, and Top Stage featuring
                          local talent including bands, open mic sessions, and
                          community performers.
                        </p>
                      </Card>
                      <Card>
                        <h4 className="font-semibold text-forest-700 mb-2">
                          The Green Man Pageant
                        </h4>
                        <p className="text-gray-600">
                          Ancient pageant at 12:00pm & 3:00pm in Rotary Gardens
                          representing the ritual between the Prior and Green
                          Man, ending with "The Green Man Lives".
                        </p>
                      </Card>
                      <Card>
                        <h4 className="font-semibold text-forest-700 mb-2">
                          Children's Entertainment
                        </h4>
                        <p className="text-gray-600">
                          Captain Coconut bubble shows, Uncle Taco's flea
                          circus, Dave Hendy's Punch & Judy, plus circus skills
                          workshops throughout the day.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">
                  Practical Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-forest-600">Location</h4>
                    <p>
                      Pilton Street & Rotary Gardens
                      <br />
                      Pilton, Barnstaple, North Devon
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">When</h4>
                    <p>
                      Third Saturday in July
                      <br />
                      12:00 PM onwards
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Entry</h4>
                    <p>
                      Free entry for all. Fundraising for local charitable
                      causes through stalls and activities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">Contact</h4>
                    <p>
                      piltonfestival@googlemail.com
                      <br />
                      Or through our Facebook page
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-600">
                      Weather Policy
                    </h4>
                    <p>
                      Festival runs rain or shine. Recent years have seen both
                      beautiful sunshine and brave celebrations in the rain!
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">
                  Site Map
                </h3>
                <p className="mb-4 text-sm">
                  Interactive map showing festival layout and facilities.
                </p>
                <Link href="/map">
                  <Button variant="primary" className="w-full" size="sm">
                    View Festival Map
                  </Button>
                </Link>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">
                  Past Festivals
                </h3>
                <p className="mb-4 text-sm">
                  Browse our archive of previous Green Man Day celebrations.
                </p>
                <Button variant="ghost" className="w-full" size="sm">
                  View Archive
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
