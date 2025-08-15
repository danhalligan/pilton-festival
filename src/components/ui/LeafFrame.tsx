import React from 'react'
import { cn, getAssetPath } from '@/lib/utils'

interface LeafFrameProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'hero' | 'card' | 'section'
}

export function LeafFrame({ 
  children, 
  className, 
  size = 'md',
  variant = 'default'
}: LeafFrameProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
    xl: 'p-12 md:p-16'
  }

  const variantClasses = {
    default: 'bg-white shadow-md rounded-xl',
    hero: 'bg-gradient-to-b from-forest-50 to-white shadow-lg rounded-2xl',
    card: 'bg-white shadow-lg rounded-2xl',
    section: 'bg-white/90 shadow-md rounded-xl'
  }

  const backgroundStyle = {
    backgroundImage: `url(${getAssetPath('/leaf-texture.jpg')})`,
    backgroundSize: '400px 400px',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center'
  }

  return (
    <div className="relative">
      {/* Subtle tiled background */}
      <div 
        className="absolute inset-0 opacity-[0.03] rounded-xl"
        style={backgroundStyle}
      />
      
      {/* Content container */}
      <div 
        className={cn(
          'relative z-10',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}