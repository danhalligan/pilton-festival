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
    default: 'bg-white shadow-md rounded-xl',
    hero: 'bg-gradient-to-b from-forest-50 to-white shadow-lg rounded-2xl',
    card: 'bg-white shadow-lg rounded-2xl',
    section: 'bg-white/90 shadow-md rounded-xl'
  }

  return (
    <div 
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  )
}