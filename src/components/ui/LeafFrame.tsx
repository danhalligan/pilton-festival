import React from 'react'
import { cn } from '@/lib/utils'

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
    default: 'bg-white',
    hero: 'bg-gradient-to-b from-forest-50 to-white',
    card: 'bg-white shadow-lg rounded-2xl border border-leaf-200',
    section: 'bg-leaf-100/50'
  }

  return (
    <div 
      className={cn(
        'relative leaf-frame',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {/* Natural leaf decorations */}
      <div className="absolute top-3 left-3 opacity-30 transform -rotate-12">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-forest-400">
          <path d="M12 2L4 22L12 18L20 22L12 2Z" fill="currentColor"/>
          <path d="M12 2Q8 8 12 14Q16 8 12 2Z" fill="currentColor" fillOpacity="0.5"/>
        </svg>
      </div>
      
      <div className="absolute top-2 right-4 opacity-25 transform rotate-45">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-leaf-400">
          <path d="M12 2C8 2 4 6 4 12C4 16 6 20 12 22C18 20 20 16 20 12C20 6 16 2 12 2Z" fill="currentColor"/>
          <path d="M12 2L12 22" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
        </svg>
      </div>
      
      <div className="absolute bottom-4 left-2 opacity-20 transform rotate-12">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-forest-500">
          <path d="M12 2C6 2 2 8 4 14C6 20 12 22 12 22C12 22 18 20 20 14C22 8 18 2 12 2Z" fill="currentColor"/>
          <path d="M12 2L8 10L12 14L16 10L12 2Z" fill="currentColor" fillOpacity="0.3"/>
        </svg>
      </div>
      
      <div className="absolute bottom-2 right-3 opacity-35 transform -rotate-25">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-leaf-500">
          <ellipse cx="12" cy="12" rx="8" ry="10" fill="currentColor"/>
          <path d="M12 2L12 22" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <path d="M8 8Q12 12 16 8" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
        </svg>
      </div>

      {/* Scattered tiny leaves */}
      <div className="absolute top-8 right-8 opacity-15">
        <svg width="12" height="12" viewBox="0 0 24 24" className="text-forest-300">
          <circle cx="12" cy="12" r="8" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="absolute bottom-8 left-8 opacity-20">
        <svg width="14" height="14" viewBox="0 0 24 24" className="text-leaf-300">
          <ellipse cx="12" cy="12" rx="6" ry="8" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}