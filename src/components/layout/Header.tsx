import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn, getAssetPath } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const navigation = [
    { name: 'Festival', href: '/festival' },
    { name: 'Community', href: '/community' },
    { name: 'Theatre', href: '/theatre' },
    { name: 'About', href: '/about' },
    { name: 'Archive', href: '/archive' },
    { name: 'Get Involved', href: '/get-involved' },
  ]

  return (
    <header className={cn('bg-white shadow-sm border-b border-leaf-light', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src={getAssetPath("/logo.png")}
                alt="Pilton Festival Green Man Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-forest-700">Pilton Festival</h1>
              <p className="text-sm text-forest-600">Green Man Day</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-forest-600 hover:text-forest-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Hidden by default, will be toggleable */}
      <div className="md:hidden border-t border-leaf-light">
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-forest-700 hover:text-forest-500 hover:bg-leaf-light/30 rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}