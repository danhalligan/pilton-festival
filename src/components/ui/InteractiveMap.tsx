"use client";

import React, { useState } from "react";
import { cn, getAssetPath } from "@/lib/utils";

interface MapLocation {
  id: string;
  name: string;
  type:
    | "stage"
    | "food"
    | "beer"
    | "pimms"
    | "toilet"
    | "parking"
    | "entrance"
    | "activity"
    | "stall";
  x: number; // Percentage from left
  y: number; // Percentage from top
  description?: string;
}

interface InteractiveMapProps {
  className?: string;
  locations?: MapLocation[];
  showLegend?: boolean;
}

const defaultLocations: MapLocation[] = [
  {
    id: "top-stage",
    name: "Top Stage",
    type: "stage",
    x: 38.5,
    y: 14,
    description:
      "Main performance area - the primary stage for live music and entertainment",
  },
  {
    id: "bottom-stage",
    name: "Bottom Stage",
    type: "stage",
    x: 38,
    y: 78,
    description:
      "Secondary performance area for additional acts and entertainment",
  },
  {
    id: "garden-stage",
    name: "Garden Stage",
    type: "stage",
    x: 47,
    y: 26.5,
    description:
      "Garden performance area for additional acts and entertainment",
  },
  {
    id: "pageant-arena",
    name: "Pageant Arena",
    type: "activity",
    x: 62.5,
    y: 33,
    description: "Central area for pageant performances and community displays",
  },
  {
    id: "information-tent",
    name: "Information & Lost Children",
    type: "activity",
    x: 37,
    y: 45,
    description:
      "Information point, lost children service, and visitor support",
  },
  {
    id: "beer-tent",
    name: "Beer Tent",
    type: "beer",
    x: 47.5,
    y: 22.5,
    description:
      "Licensed refreshment tent - all profits go to the next festival",
  },
  {
    id: "pimms-tent",
    name: "Pimm's Tent",
    type: "pimms",
    x: 62.5,
    y: 37,
    description: "Pimm's and refreshments tent",
  },
  {
    id: "rotary-gardens",
    name: "Rotary Gardens",
    type: "activity",
    x: 52.5,
    y: 40,
    description: "Beautiful garden displays by the local Rotary club",
  },
  {
    id: "pilton-house",
    name: "Pilton House",
    type: "activity",
    x: 49.5,
    y: 25,
    description: "Historic Pilton House - part of the festival grounds",
  },
  {
    id: "green-man-pub",
    name: "Green Man Pub",
    type: "beer",
    x: 38,
    y: 30,
    description: "Local refreshments and traditional pub atmosphere",
  },
  {
    id: "yeo-deli-bar",
    name: "Yeo Deli Bar",
    type: "food",
    x: 44,
    y: 85.5,
    description: "Food and refreshments",
  },
  {
    id: "pilton-fryer",
    name: "Pilton Fryer",
    type: "food",
    x: 40.5,
    y: 44.5,
    description: "Fish and chips and more",
  },
  {
    id: "public-toilets1",
    name: "Public Toilets",
    type: "toilet",
    x: 54.5,
    y: 47.5,
    description: "Public toilet facilities",
  },
  {
    id: "public-toilets2",
    name: "Public Toilets",
    type: "toilet",
    x: 41,
    y: 25.5,
    description: "Public toilet facilities",
  },
  {
    id: "public-toilets3",
    name: "Public Toilets",
    type: "toilet",
    x: 34.5,
    y: 77.5,
    description: "Public toilet facilities",
  },
  {
    id: "first-aid",
    name: "First Aid",
    type: "activity",
    x: 50,
    y: 50,
    description: "First aid and medical assistance point",
  },
  {
    id: "reform-inn",
    name: "Reform Inn",
    type: "beer",
    x: 35,
    y: 82,
    description: "Local refreshments and traditional pub atmosphere",
  },
  {
    id: "beer-festival",
    name: "Beer Festival",
    type: "beer",
    x: 33.5,
    y: 80.5,
    description:
      "Licensed refreshment tent - all profits go to the next festival",
  },
];

const locationTypes = {
  stage: { color: "bg-red-500", icon: "🎵", label: "Stages" },
  food: { color: "bg-amber-500", icon: "🍕", label: "Food and drink" },
  beer: { color: "bg-orange-500", icon: "🍺", label: "Beer" },
  pimms: { color: "bg-sky-500", icon: "🍹", label: "Pimms tent" },
  toilet: { color: "bg-blue-500", icon: "🚻", label: "Facilities" },
  parking: { color: "bg-gray-500", icon: "🚗", label: "Parking" },
  entrance: { color: "bg-green-500", icon: "🚪", label: "Entrances" },
  activity: { color: "bg-purple-500", icon: "🎨", label: "Activities" },
  stall: { color: "bg-yellow-500", icon: "🏪", label: "Stalls" },
};

export function InteractiveMap({
  className,
  locations = defaultLocations,
  showLegend = true,
}: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(
    null
  );
  const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(
    null
  );

  const displayLocation = selectedLocation || hoveredLocation;

  return (
    <div className={cn("bg-white rounded-lg shadow-lg", className)}>
      {/* Interactive Festival Map Section */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-forest-700 mb-2">
          Interactive Festival Layout
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Click or hover over the markers to see detailed information about each
          location
        </p>
      </div>

      {/* Desktop: Side-by-side layout, Mobile: Stacked */}
      <div className="lg:flex lg:gap-6 lg:p-4 border-b border-gray-200">
        {/* Interactive Map */}
        <div className="lg:flex-1 mx-4 lg:mx-0">
          <div className="relative aspect-[68/96] lg:aspect-[68/96] rounded-lg overflow-hidden bg-white">
            {/* Real Festival Map Background */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage: `url(${getAssetPath(
                  "/images/festival-map.png"
                )})`,
              }}
            ></div>

            {/* Location markers */}
            {locations.map((location) => (
              <div
                key={location.id}
                className={cn(
                  "absolute w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-bold text-sm z-10",
                  locationTypes[location.type].color,
                  "hover:scale-125 hover:z-20",
                  selectedLocation?.id === location.id && "scale-125 z-20"
                )}
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setSelectedLocation(location)}
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
                title={location.name}
              >
                <span className="text-xs lg:text-sm">
                  {locationTypes[location.type].icon}
                </span>
              </div>
            ))}

            {/* Location info popup */}
            {displayLocation && (
              <div
                className="absolute z-30 pointer-events-none"
                style={{
                  left: `${displayLocation.x}%`,
                  top: `${displayLocation.y}%`,
                  transform: "translate(-50%, -100%) translateY(-12px)",
                }}
              >
                {/* Main popup box */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs relative">
                  <h4 className="font-semibold text-forest-700 mb-1">
                    {displayLocation.name}
                  </h4>
                  {displayLocation.description && (
                    <p className="text-sm text-gray-600">
                      {displayLocation.description}
                    </p>
                  )}

                  {/* Arrow pointing down to the marker */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
                    style={{
                      borderLeft: "12px solid transparent",
                      borderRight: "12px solid transparent",
                      borderTop: "12px solid #e5e7eb", // border-gray-200
                    }}
                  ></div>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
                    style={{
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid white",
                      marginTop: "-2px",
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Legend - Side panel on desktop, below map on mobile */}
        {showLegend && (
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className="bg-white lg:bg-gray-50 p-4 lg:rounded-lg lg:sticky lg:top-4 max-h-96 lg:max-h-[700px] flex flex-col">
              <h4 className="font-semibold text-forest-700 mb-3 flex-shrink-0">
                Map Legend
              </h4>
              <div className="space-y-3 overflow-y-auto pr-2 flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {Object.entries(locationTypes).map(([type, config]) => {
                  const typeLocations = locations.filter(
                    (loc) => loc.type === type
                  );
                  return (
                    <div key={type} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div
                          className={cn(
                            "w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold",
                            config.color
                          )}
                        >
                          {config.icon}
                        </div>
                        <span className="text-sm lg:text-base font-medium text-gray-800">
                          {config.label}
                        </span>
                      </div>
                      {typeLocations.length > 0 && (
                        <div className="ml-7 lg:ml-8 space-y-1">
                          {typeLocations.map((location) => (
                            <button
                              key={location.id}
                              onClick={() => setSelectedLocation(location)}
                              className={cn(
                                "block text-left text-xs lg:text-sm text-gray-600 hover:text-forest-700 hover:bg-leaf-light/20 px-2 py-1 rounded transition-colors w-full",
                                selectedLocation?.id === location.id &&
                                  "bg-leaf-light/30 text-forest-700 font-medium"
                              )}
                            >
                              {location.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Street Location Section Header */}
      <div className="p-4 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-forest-700 mb-2">
          Getting to the Festival
        </h4>
        <p className="text-sm text-gray-600">
          Use Google Maps to navigate to the festival location
        </p>
      </div>

      {/* Google Maps Embedded */}
      <div className="h-96 w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8!2d-4.062!3d51.087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c1c5c9c1c5c9c%3A0x1c5c9c1c5c9c1c5c!2sPilton%20Street%2C%20Pilton%2C%20Barnstaple%20EX31%201PD!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pilton Village, North Devon - Festival Location"
          className="rounded-lg"
        />
      </div>

      {/* Directions and Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/maps/dir//Pilton+Street,+Pilton,+Barnstaple+EX31+1PD/@51.087,-4.062,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors font-medium"
          >
            📍 Get Directions
          </a>
          <a
            href="https://www.google.com/maps/place/Pilton+Street,+Pilton,+Barnstaple+EX31+1PD/@51.087,-4.062,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-forest-600 text-forest-700 rounded-lg hover:bg-forest-600 hover:text-white transition-colors font-medium"
          >
            🗺️ View Larger Map
          </a>
        </div>
      </div>

      {/* Getting There & Accessibility Info */}
      <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
              <span className="text-amber-800 text-lg">ℹ️</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-amber-800 mb-3">
              Festival Location Information
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-amber-800 mb-2">
                  Getting There
                </h5>
                <p className="text-amber-700">
                  <strong>Address:</strong> Pilton Street, Pilton, Barnstaple,
                  North Devon EX31 1PD
                  <br />
                  Easily accessible by car, bus, or on foot from Barnstaple town
                  center.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-800 mb-2">
                  Accessibility
                </h5>
                <p className="text-amber-700">
                  Level street location with wheelchair accessible paths to all
                  main festival areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
