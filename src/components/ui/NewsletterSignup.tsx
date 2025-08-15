'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface NewsletterSignupProps {
  className?: string
  variant?: 'inline' | 'card' | 'minimal'
  title?: string
  description?: string
}

export function NewsletterSignup({ 
  className, 
  variant = 'card',
  title = "Stay Updated",
  description = "Get the latest news about Pilton Festival and community events delivered to your inbox."
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call - replace with actual newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would integrate with your newsletter service
      // e.g., Mailchimp, ConvertKit, etc.
      console.log('Newsletter signup:', email)
      
      setIsSubmitted(true)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn(
        'text-center',
        variant === 'card' && 'bg-leaf-light/30 border border-leaf-dark rounded-leaf p-6',
        className
      )}>
        <div className="text-forest-600 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-forest-700 mb-2">Thank you!</h3>
        <p className="text-sm text-gray-600">
          You've been added to our mailing list. We'll keep you updated with the latest festival news.
        </p>
      </div>
    )
  }

  const renderContent = () => (
    <>
      {variant !== 'minimal' && (
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-forest-700 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>
        
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </span>
          ) : (
            'Subscribe to Newsletter'
          )}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-3 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </>
  )

  return (
    <div className={cn(
      variant === 'card' && 'bg-white border border-leaf-light rounded-leaf p-6 shadow-leaf',
      variant === 'inline' && 'bg-leaf-light/20 rounded-leaf p-4',
      variant === 'minimal' && '',
      className
    )}>
      {renderContent()}
    </div>
  )
}