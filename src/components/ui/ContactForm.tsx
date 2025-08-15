'use client'

import React, { useState } from 'react'
import { Button } from './Button'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  className?: string
  showSubjects?: boolean
  onSubmit?: (data: ContactFormData) => Promise<void>
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const subjects = [
  { value: '', label: 'Select a topic...' },
  { value: 'volunteer', label: 'Volunteering' },
  { value: 'theatre', label: 'Theatre Group' },
  { value: 'stallholder', label: 'Stallholder Application' },
  { value: 'grants', label: 'Grant Application' },
  { value: 'partnership', label: 'Business Partnership' },
  { value: 'general', label: 'General Enquiry' },
]

export function ContactForm({ 
  className, 
  showSubjects = true,
  onSubmit 
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Simulate API call - replace with actual backend
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Contact form submission:', formData)
      }
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn(
        'bg-leaf-light/30 border border-leaf-dark rounded-leaf p-6 text-center',
        className
      )}>
        <div className="text-forest-600 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-forest-700 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your message. We'll get back to you within 48 hours.
        </p>
        <Button 
          variant="secondary" 
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange('name')}
            className={cn(
              'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent',
              errors.name ? 'border-red-300' : 'border-gray-300'
            )}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            className={cn(
              'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent',
              errors.email ? 'border-red-300' : 'border-gray-300'
            )}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      
      {showSubjects && (
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-forest-700 mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange('subject')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            disabled={isSubmitting}
          >
            {subjects.map(subject => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>
      )}
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange('message')}
          placeholder="Tell us how you'd like to get involved or what you'd like to know..."
          className={cn(
            'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent',
            errors.message ? 'border-red-300' : 'border-gray-300'
          )}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        * Required fields. We'll respond to your enquiry within 48 hours.
      </p>
    </form>
  )
}