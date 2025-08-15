import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'festival' | 'community' | 'bordered'
  hover?: boolean
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}: CardProps) {
  const baseClasses = 'bg-white rounded-2xl border'
  
  const variantClasses = {
    default: 'border-forest-200 shadow-md',
    festival: 'border-forest-300 shadow-lg bg-gradient-to-br from-white to-forest-50',
    community: 'border-leaf-300 shadow-lg bg-gradient-to-br from-white to-leaf-100',
    bordered: 'border-forest-500 shadow-xl bg-gradient-to-br from-white to-forest-50'
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 hover:border-forest-500 hover:-translate-y-1' : ''
  
  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-4', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-6 pt-2', className)}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('p-6 pt-4 border-t border-gray-100', className)}>
      {children}
    </div>
  )
}