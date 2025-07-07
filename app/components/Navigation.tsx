'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'da' | 'en'>('da');
  useEffect(() => {
  const saved = localStorage.getItem('language');
  if (saved === 'en') setLanguage('en');
}, []);

useEffect(() => {
  localStorage.setItem('language', language);
}, [language]);

  const menuItems = {
    da: {
      home: 'Forside',
      about: 'Om CDT',
      how: 'Hvordan det virker',
      features: 'Features',
      content: 'Indhold',
      contact: 'Kontakt'
    },
    en: {
      home: 'Home',
      about: 'About CDT',
      how: 'How it works',
      features: 'Features',
      content: 'Content',
      contact: 'Contact'
    }
  };

  const currentMenu = menuItems[language];

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
              {currentMenu.home}
            </Link>
            <Link href="/om-cdt" className="text-gray-300 hover:text-emerald-400 transition-colors">
              {currentMenu.about}
            </Link>
            <Link href="/hvordan-det-virker" className="text-gray-300 hover:text-emerald-400 transition-colors">
              {currentMenu.how}
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-emerald-400 transition-colors">
              {currentMenu.features}
            </Link>
            <Link href="/indhold" className="text-gray-300 hover:text-emerald-400 transition-colors">
              {currentMenu.content}
            </Link>
            <Link href="/kontakt" className="text-gray-300 hover:text-emerald-400 transition-colors">
              {currentMenu.contact}
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-600">
              <button
                onClick={() => setLanguage('da')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'da' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                DA
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLanguage('da')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'da' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-400'
                }`}
              >
                DA
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-400'
                }`}
              >
                EN
              </button>
            </div>

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
              {currentMenu.home}
            </Link>
            <Link 
              href="/om-cdt" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {currentMenu.about}
            </Link>
            <Link 
              href="/hvordan-det-virker" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {currentMenu.how}
            </Link>
            <Link 
              href="/features" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {currentMenu.features}
            </Link>
            <Link 
              href="/indhold" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {currentMenu.content}
            </Link>
            <Link 
              href="/kontakt" 
              className="block py-3 text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {currentMenu.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}