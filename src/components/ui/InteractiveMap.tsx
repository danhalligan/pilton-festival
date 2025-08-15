'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface MapLocation {
  id: string
  name: string
  type: 'stage' | 'food' | 'toilet' | 'parking' | 'entrance' | 'activity' | 'stall'
  x: number // Percentage from left
  y: number // Percentage from top
  description?: string
}

interface InteractiveMapProps {
  className?: string
  locations?: MapLocation[]
  showLegend?: boolean
}

const defaultLocations: MapLocation[] = [
  { id: 'main-stage', name: 'Main Stage', type: 'stage', x: 50, y: 30, description: 'Main performance area with live music throughout the day' },
  { id: 'food-area', name: 'Food Vendors', type: 'food', x: 25, y: 50, description: 'Local food vendors and refreshments' },
  { id: 'craft-stalls', name: 'Craft Stalls', type: 'stall', x: 75, y: 40, description: 'Local artisans and handmade crafts' },
  { id: 'children-area', name: 'Children\'s Activities', type: 'activity', x: 30, y: 70, description: 'Face painting, games, and family activities' },
  { id: 'main-entrance', name: 'Main Entrance', type: 'entrance', x: 50, y: 90, description: 'Festival entrance and information point' },
  { id: 'parking', name: 'Car Park', type: 'parking', x: 80, y: 85, description: 'Free parking in adjacent field' },
  { id: 'toilets-1', name: 'Toilets', type: 'toilet', x: 15, y: 65, description: 'Toilet facilities' },
  { id: 'toilets-2', name: 'Toilets', type: 'toilet', x: 85, y: 60, description: 'Toilet facilities' },
]

const locationTypes = {
  stage: { color: 'bg-red-500', icon: '🎵', label: 'Stages' },
  food: { color: 'bg-orange-500', icon: '🍕', label: 'Food & Drink' },
  toilet: { color: 'bg-blue-500', icon: '🚻', label: 'Facilities' },
  parking: { color: 'bg-gray-500', icon: '🚗', label: 'Parking' },
  entrance: { color: 'bg-green-500', icon: '🚪', label: 'Entrances' },
  activity: { color: 'bg-purple-500', icon: '🎨', label: 'Activities' },
  stall: { color: 'bg-yellow-500', icon: '🏪', label: 'Stalls' },
}

export function InteractiveMap({ 
  className, 
  locations = defaultLocations,
  showLegend = true 
}: InteractiveMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null)

  const displayLocation = selectedLocation || hoveredLocation

  return (
    <div className={cn('bg-white rounded-leaf border border-gray-200', className)}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-forest-700">Festival Site Map</h3>
        <p className="text-sm text-gray-600">
          Click or hover over markers to see more information about each area
        </p>
      </div>

      <div className="relative bg-leaf-light/20 aspect-video">
        {/* Background map illustration */}
        <div className="absolute inset-0 p-4">
          {/* Village Green outline */}
          <div className="w-full h-full border-2 border-forest-600 rounded-lg bg-green-50 relative">
            {/* Trees around the edge */}
            <div className="absolute top-2 left-2">🌳</div>
            <div className="absolute top-2 right-2">🌳</div>
            <div className="absolute bottom-2 left-2">🌳</div>
            <div className="absolute bottom-2 right-2">🌳</div>
            
            {/* Village Green label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-forest-600 font-semibold opacity-30 text-xl">
              Pilton Village Green
            </div>
          </div>
        </div>

        {/* Location markers */}
        {locations.map((location) => (
          <div
            key={location.id}
            className={cn(
              'absolute w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-bold text-sm z-10',
              locationTypes[location.type].color,
              'hover:scale-125 hover:z-20',
              selectedLocation?.id === location.id && 'scale-125 z-20'
            )}
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => setSelectedLocation(location)}
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
            title={location.name}
          >
            {locationTypes[location.type].icon}
          </div>
        ))}

        {/* Location info popup */}
        {displayLocation && (
          <div
            className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs z-30 pointer-events-none"
            style={{
              left: `${displayLocation.x}%`,
              top: `${displayLocation.y - 15}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <h4 className="font-semibold text-forest-700 mb-1">{displayLocation.name}</h4>
            {displayLocation.description && (
              <p className="text-sm text-gray-600">{displayLocation.description}</p>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="p-4 border-t border-gray-200">
          <h4 className="font-semibold text-forest-700 mb-3">Map Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.entries(locationTypes).map(([type, config]) => (
              <div key={type} className="flex items-center space-x-2">
                <div className={cn(
                  'w-4 h-4 rounded-full flex items-center justify-center text-xs',
                  config.color
                )}>
                  {config.icon}
                </div>
                <span className="text-sm text-gray-600">{config.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional info */}
      <div className="p-4 bg-leaf-light/10 rounded-b-leaf">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-forest-700 mb-1">Getting There</h5>
            <p className="text-gray-600">
              Pilton Village Green, Pilton, Somerset BA4 4DF
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-forest-700 mb-1">Accessibility</h5>
            <p className="text-gray-600">
              Level grass field. Wheelchair accessible paths to all main areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}