import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn, getAssetPath } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('relative bg-forest-900 text-white', className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getAssetPath('/green-texture5.jpeg')})`,
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(21, 128, 61, 0.3)'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src={getAssetPath("/logo.png")}
                  alt="Pilton Festival Green Man Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Pilton Festival</h3>
            </div>
            <p className="text-forest-100 mb-4">
              A beloved community festival celebrating the Green Man tradition in Devon.
              Run entirely by volunteers for the benefit of our local community.
            </p>
            <p className="text-forest-200 text-sm">
              Pilton Green Man CIO - Registered Charity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/festival" className="text-forest-100 hover:text-white transition-colors">Current Festival</Link></li>
              <li><Link href="/community/grants" className="text-forest-100 hover:text-white transition-colors">Community Grants</Link></li>
              <li><Link href="/community/manning-pit" className="text-forest-100 hover:text-white transition-colors">Manning's Pit</Link></li>
              <li><Link href="/theatre" className="text-forest-100 hover:text-white transition-colors">Pilton Panto</Link></li>
              <li><Link href="/contact" className="text-forest-100 hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2">
              <p className="text-forest-100">
                <span className="block font-medium">Email:</span>
                <a href="mailto:piltonfestival@googlemail.com" className="hover:text-white transition-colors">
                  piltonfestival@googlemail.com
                </a>
              </p>
              <p className="text-forest-100">
                <span className="block font-medium">Location:</span>
                Pilton, Barnstaple<br />
                Devon, UK
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-200 text-sm">
            © {currentYear} Pilton Green Man CIO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-forest-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about/trustees" className="text-forest-200 hover:text-white text-sm transition-colors">
              Trustees
            </Link>
            <a
              href="https://www.facebook.com/PiltonGreenManCIO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-200 hover:text-white text-sm transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}