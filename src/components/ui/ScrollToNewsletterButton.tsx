'use client'

import React from 'react'
import { Button } from './Button'

interface ScrollToNewsletterButtonProps {
  className?: string
}

export function ScrollToNewsletterButton({ className }: ScrollToNewsletterButtonProps) {
  const handleClick = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={handleClick}
      className={className}
    >
      Newsletter Signup
    </Button>
  )
}