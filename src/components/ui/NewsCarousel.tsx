"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "./Card";
import { Button } from "./Button";
import { cn, getAssetPath } from "@/lib/utils";
import { NewsArticle } from "@/types/news";

interface NewsCarouselProps {
  articles: NewsArticle[];
  className?: string;
}

const variantColors = {
  festival: "bg-forest-100 text-forest-700",
  community: "bg-blue-100 text-blue-700",
  theatre: "bg-purple-100 text-purple-700",
  grants: "bg-green-100 text-green-700",
};

export function NewsCarousel({ articles, className }: NewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateCarouselState();
    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);
    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        <p>No news articles available at the moment.</p>
      </div>
    );
  }

  // Get the actual number of slides from Embla
  const dotCount = scrollSnaps.length;

  return (
    <div className={cn("news-carousel", className)}>
      <div className="relative">
        {/* Carousel container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-4 py-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-0"
              >
                <Card hover className="h-full flex flex-col">
                  {/* Article image */}
                  {article.image && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={getAssetPath(article.image)}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <CardHeader className="flex-grow">
                    {/* Category badge and date */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-semibold",
                          variantColors[article.variant]
                        )}
                      >
                        {article.variant.charAt(0).toUpperCase() +
                          article.variant.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(article.date)}
                      </span>
                    </div>

                    <Link href={`/news/${article.slug}`}>
                      <h3 className="text-xl font-semibold text-forest-700 mb-2 line-clamp-2 hover:text-forest-600 transition-colors duration-200 cursor-pointer">
                        {article.title}
                      </h3>
                    </Link>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        By {article.author}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - only show if there are enough articles to scroll */}
        {articles.length >= 3 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous news articles"
            >
              <svg
                className="w-5 h-5 text-forest-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next news articles"
            >
              <svg
                className="w-5 h-5 text-forest-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Bottom Navigation Controls */}
      {dotCount > 1 && (
        <div className="flex items-center justify-center mt-8 gap-6">
          {/* Previous Arrow */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
              canScrollPrev
                ? "bg-forest-100 hover:bg-forest-200 text-forest-600 hover:text-forest-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            aria-label="Previous news articles"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200",
                  selectedIndex === index
                    ? "bg-forest-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
              canScrollNext
                ? "bg-forest-100 hover:bg-forest-200 text-forest-600 hover:text-forest-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            aria-label="Next news articles"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Simple indicator for single-slide carousels */}
      {dotCount <= 1 && (
        <div className="flex justify-center mt-6">
          <div className="text-xs text-gray-500">
            {articles.length} news {articles.length === 1 ? 'story' : 'stories'}
          </div>
        </div>
      )}
    </div>
  );
}
