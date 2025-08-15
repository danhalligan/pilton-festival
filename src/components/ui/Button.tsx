import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'leaf'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-leaf transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5'
  
  const variantClasses = {
    primary: 'bg-forest-600 text-white hover:bg-forest-700 focus:ring-forest-400 shadow-lg border border-forest-700 hover:shadow-xl',
    secondary: 'border-2 border-forest-600 text-forest-700 bg-white hover:bg-forest-600 hover:text-white focus:ring-forest-400 shadow-md hover:shadow-lg',
    ghost: 'text-sage-700 hover:bg-forest-100 hover:text-forest-700 focus:ring-forest-400',
    leaf: 'bg-leaf-300 text-forest-800 hover:bg-leaf-400 focus:ring-leaf-dark shadow-md border border-leaf-dark hover:shadow-lg'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}