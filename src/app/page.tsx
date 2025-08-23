import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { NewsCarousel } from "@/components/ui/NewsCarousel";
import { ScrollToNewsletterButton } from "@/components/ui/ScrollToNewsletterButton";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { getAssetPath } from "@/lib/utils";
import { getRecentNewsArticles } from "@/lib/news";

export default async function HomePage() {
  const recentNews = await getRecentNewsArticles(5);
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <ParallaxBackground backgroundImage="/green-texture6.jpeg">
          <div className="relative z-10 h-full flex items-center justify-center py-16">
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

              {/* Text Box inspired by 2025 programme */}
              <div className="bg-programme-box border-4 border-programme-border rounded-3xl p-8 md:p-12 mb-8 shadow-lg">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-forest-700 mb-6">
                  Pilton Green Man Day
                </h1>
                <p className="text-xl md:text-2xl text-programme-text/80 leading-relaxed">
                  A community festival celebrating tradition, music, and local
                  spirit in North Devon
                </p>
              </div>

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
        </ParallaxBackground>

        {/* Latest News Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-display font-bold text-forest-700 mb-4">
                Latest News & Events
              </h2>
            </div>

            <NewsCarousel articles={recentNews} />

            {/* View All News Link */}
            <div className="text-center mt-8">
              <Link href="/news">
                <Button variant="secondary" size="lg">
                  View All News Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Community Spotlight */}
        <ParallaxBackground backgroundImage="/green-texture6.jpeg" muted={true}>
          <div className="relative z-10 section-padding">
            <div className="max-w-7xl mx-auto container-padding">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-display font-bold text-forest-700 mb-6">
                      Run by Volunteers, For the Community
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700">
                      <p>
                        Pilton Green Man Day is entirely organized and run by
                        local volunteers. Every penny raised goes back into the
                        community through grants, local projects, and next
                        year's festival.
                      </p>
                      <p>
                        From the ancient Green Man tradition to modern community
                        spirit, we celebrate what makes Pilton special while
                        supporting local businesses, charities, and volunteer
                        groups.
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
                        <h4 className="font-semibold text-forest-600">
                          Festival Funding
                        </h4>
                        <p className="text-gray-600">
                          We need £8,000 annually to put on Green Man Day
                        </p>
                      </div>
                      <div className="green-accent">
                        <h4 className="font-semibold text-forest-600">
                          Community Grants
                        </h4>
                        <p className="text-gray-600">
                          Supporting local projects and charitable causes
                        </p>
                      </div>
                      <div className="green-accent">
                        <h4 className="font-semibold text-forest-600">
                          Local Business
                        </h4>
                        <p className="text-gray-600">
                          Generating trade and supporting our sponsors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBackground>

        {/* Call to Action */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you want to volunteer, apply for a grant, or just stay
                updated with what's happening in Pilton, we'd love to hear from
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button variant="primary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <ScrollToNewsletterButton />
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <ParallaxBackground backgroundImage="/green-texture6.jpeg" muted={true}>
          <div id="newsletter" className="relative z-10 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <NewsletterSignup
                variant="card"
                title="Stay Connected with Pilton Festival"
                description="Get the latest updates about Green Man Day, community events, theatre productions, and grant opportunities delivered straight to your inbox."
              />
            </div>
          </div>
        </ParallaxBackground>
      </main>

      <Footer />
    </div>
  );
}
