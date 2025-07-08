'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-500">
            CDT Platform
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Hjem
            </Link>
            <Link href="/om-cdt" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Om CDT
            </Link>
            <Link href="/hvordan-det-virker" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Hvordan det virker
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Funktioner
            </Link>
            <Link href="/indhold" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Indhold
            </Link>
            <Link href="/kontakt" className="text-gray-300 hover:text-emerald-400 transition-colors">
  Kontakt
</Link>
</div>

{/* Mobile Menu Button */}
<div className="md:hidden">
  {/* Hamburger Button */}
  <button 
    className="text-gray-300 hover:text-emerald-400"
    onClick={() => setIsOpen(!isOpen)}
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
</div>
</div>

{/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700 mt-2">
            <Link 
              href="/" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hjem
            </Link>
            <Link 
              href="/om-cdt" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Om CDT
            </Link>
            <Link 
              href="/hvordan-det-virker" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hvordan det virker
            </Link>
            <Link 
              href="/features" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Funktioner
            </Link>
            <Link 
              href="/indhold" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Indhold
            </Link>
            <Link 
              href="/kontakt" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}