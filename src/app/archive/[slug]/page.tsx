import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Gallery } from "@/components/ui/Gallery";
import { Card } from "@/components/ui/Card";
import { getFestivalArchiveBySlug, getAllFestivalSlugs } from "@/lib/festivals";
import { getAssetPath } from "@/lib/utils";

interface FestivalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllFestivalSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function FestivalPage({ params }: FestivalPageProps) {
  const { slug } = await params;
  const festival = await getFestivalArchiveBySlug(slug);

  if (!festival) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    // Already formatted in the markdown, so just return as is
    return dateString;
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Festival Header */}
        <section className="bg-gradient-to-b from-forest-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Link
                href="/archive"
                className="inline-flex items-center text-forest-600 hover:text-forest-500 mb-6"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Archive
              </Link>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-forest-700 mb-4">
                {festival.title}
              </h1>
              <p className="text-xl text-forest-500 mb-2">
                {formatDate(festival.date)}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {festival.description}
              </p>
            </div>
          </div>
        </section>

        {/* Festival Overview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="prose prose-lg prose-forest max-w-none">
                  <div
                    dangerouslySetInnerHTML={{ __html: festival.content }}
                    className="text-gray-700 leading-relaxed"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Festival Details */}
              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-4">
                  Festival Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-forest-600">Year:</span>{" "}
                    {festival.year}
                  </div>
                  <div>
                    <span className="font-semibold text-forest-600">Date:</span>{" "}
                    {festival.date}
                  </div>
                  {festival.weather && (
                    <div>
                      <span className="font-semibold text-forest-600">
                        Weather:
                      </span>{" "}
                      {festival.weather}
                    </div>
                  )}
                  {festival.attendance && (
                    <div>
                      <span className="font-semibold text-forest-600">
                        Attendance:
                      </span>{" "}
                      {festival.attendance}
                    </div>
                  )}
                </div>
              </Card>

              {/* Festival Highlights */}
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

              {/* Actions */}
              <Card>
                <h3 className="text-lg font-semibold text-forest-700 mb-4">
                  Festival Resources
                </h3>
                <div className="space-y-3">
                  {festival.pdfBrochure && (
                    <Link href={festival.pdfBrochure}>
                      <Button variant="secondary" size="sm" className="w-full">
                        Download Programme (PDF)
                      </Button>
                    </Link>
                  )}
                  <Button variant="ghost" size="sm" className="w-full">
                    Share Your Memories
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        {festival.images && festival.images.length > 0 && (
          <section className="bg-forest-800/30 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold text-forest-700 mb-8 text-center">
                  Photo Gallery
                </h2>
                <Gallery
                  images={festival.images}
                  columns={festival.images.length >= 6 ? 3 : 2}
                  showCategories={false}
                />
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="bg-forest-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-display font-bold text-forest-700 mb-4">
              Explore More Festival History
            </h2>
            <p className="text-gray-600 mb-8">
              Discover more stories from our 40 years of Green Man Day
              celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/archive">
                <Button variant="primary" size="lg">
                  View All Festivals
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button variant="secondary" size="lg">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
