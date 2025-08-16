'use client'

import React, { useState } from 'react'
import { cn, getAssetPath } from '@/lib/utils'

interface MapLocation {
  id: string
  name: string
  type: 'stage' | 'food' | 'beer' | 'pimms' | 'toilet' | 'parking' | 'entrance' | 'activity' | 'stall'
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
  { id: 'top-stage', name: 'Top Stage', type: 'stage', x: 38.5, y: 14, description: 'Main performance area - the primary stage for live music and entertainment' },
  { id: 'bottom-stage', name: 'Bottom Stage', type: 'stage', x: 38, y: 78, description: 'Secondary performance area for additional acts and entertainment' },
  { id: 'garden-stage', name: 'Garden Stage', type: 'stage', x: 47, y: 26.5, description: 'Garden performance area for additional acts and entertainment' },
  { id: 'pageant-arena', name: 'Pageant Arena', type: 'activity', x: 62.5, y: 33, description: 'Central area for pageant performances and community displays' },
  { id: 'information-tent', name: 'Information & Lost Children', type: 'activity', x: 37, y: 45, description: 'Information point, lost children service, and visitor support' },
  { id: 'beer-tent', name: 'Beer Tent', type: 'beer', x: 47.5, y: 22.5, description: 'Licensed refreshment tent - all profits go to the next festival' },
  { id: 'pimms-tent', name: 'Pimm\'s Tent', type: 'pimms', x: 62.5, y: 37, description: 'Pimm\'s and refreshments tent' },
  { id: 'rotary-gardens', name: 'Rotary Gardens', type: 'activity', x: 52.5, y: 40, description: 'Beautiful garden displays by the local Rotary club' },
  { id: 'pilton-house', name: 'Pilton House', type: 'activity', x: 49.5, y: 25, description: 'Historic Pilton House - part of the festival grounds' },
  { id: 'green-man-pub', name: 'Green Man Pub', type: 'beer', x: 38, y: 30, description: 'Local refreshments and traditional pub atmosphere' },
  { id: 'yeo-deli-bar', name: 'Yeo Deli Bar', type: 'food', x: 44, y: 85.5, description: 'Food and refreshments' },
  { id: 'pilton-fryer', name: 'Pilton Fryer', type: 'food', x: 40.5, y: 44.5, description: 'Fish and chips and more' },
  { id: 'public-toilets1', name: 'Public Toilets', type: 'toilet', x: 54.5, y: 47.5, description: 'Public toilet facilities' },
  { id: 'public-toilets2', name: 'Public Toilets', type: 'toilet', x: 41, y: 25.5, description: 'Public toilet facilities' },
  { id: 'public-toilets3', name: 'Public Toilets', type: 'toilet', x: 34.5, y: 77.5, description: 'Public toilet facilities' },
  { id: 'first-aid', name: 'First Aid', type: 'activity', x: 50, y: 50, description: 'First aid and medical assistance point' },
  { id: 'reform-inn', name: 'Reform Inn', type: 'beer', x: 35, y: 82, description: 'Local refreshments and traditional pub atmosphere' },
  { id: 'beer-festival', name: 'Beer Festival', type: 'beer', x: 33.5, y: 80.5, description: 'Licensed refreshment tent - all profits go to the next festival' },
]

const locationTypes = {
  stage: { color: 'bg-red-500', icon: '🎵', label: 'Stages' },
  food: { color: 'bg-amber-500', icon: '🍕', label: 'Food and drink' },
  beer: { color: 'bg-orange-500', icon: '🍺', label: 'Beer' },
  pimms: { color: 'bg-sky-500', icon: '🍹', label: 'Pimms tent' },
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
  const [isCommandPressed, setIsCommandPressed] = useState(false)
  const [isMapHovered, setIsMapHovered] = useState(false)

  const displayLocation = selectedLocation || hoveredLocation

  // Handle keyboard events for modifier key detection
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        setIsCommandPressed(true)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.metaKey && !e.ctrlKey) {
        setIsCommandPressed(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className={cn('bg-white rounded-lg', className)}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-forest-700">Festival Site Map</h3>
        <p className="text-sm text-gray-600">
          Interactive map of Pilton Green Man Day festival site - July 19th, 10am to 5pm
        </p>
      </div>

      {/* OpenStreetMap Embedded */}
      <div
        className="h-96 w-full relative"
        onMouseEnter={() => setIsMapHovered(true)}
        onMouseLeave={() => setIsMapHovered(false)}
      >
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-4.072%2C51.082%2C-4.052%2C51.092&layer=mapnik&marker=51.087%2C-4.062"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          title="Pilton Village, North Devon"
          className="rounded-lg"
        />

        {/* Overlay to prevent interaction unless modifier key is pressed */}
        {!isCommandPressed && isMapHovered && (
          <div className="absolute inset-0 bg-transparent rounded-lg flex items-center justify-center">
            <div className="bg-black bg-opacity-45 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Hold {navigator.userAgent.includes('Mac') ? '⌘' : 'Ctrl'} to interact with map
            </div>
          </div>
        )}
      </div>

      {/* Google Maps Link */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.google.com/maps/search/Pilton+Street,+Pilton,+North+Devon/@51.087,-4.062,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
          >
            📍 Open in Google Maps
          </a>
          <a
            href="https://www.openstreetmap.org/?mlat=51.087&mlon=-4.062#map=15/51.087/-4.062"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border-2 border-forest-600 text-forest-700 rounded-lg hover:bg-forest-600 hover:text-white transition-colors"
          >
            🗺️ Open in OpenStreetMap
          </a>
        </div>
      </div>

      {/* Site Layout Schematic */}
      <div className="p-4 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-forest-700 mb-2">Interactive Festival Map</h4>
        <p className="text-sm text-gray-600 mb-4">
          Click or hover over the numbered markers to see detailed information about each location
        </p>
      </div>

      <div className="relative bg-leaf-light/20 aspect-video mx-4">
        {/* Real Festival Map Background */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${getAssetPath('/images/festival-map.png')})`
          }}
        ></div>

        {/* Location markers */}
        {locations.map((location) => (
          <div
            key={location.id}
            className={cn(
              'absolute w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer transition-all duration-200 flex items-center justify-center text-white font-bold text-sm z-10',
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
              Pilton Street, Pilton, North Devon - Easily accessible by car, bus, or on foot from Barnstaple.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-forest-700 mb-1">Accessibility</h5>
            <p className="text-gray-600">
              Level street. Wheelchair accessible paths to all main areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}