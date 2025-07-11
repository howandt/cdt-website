'use client';
import { useEffect, useState } from 'react';

interface GoogleTranslateElement {
  new (options: GoogleTranslateOptions, elementId: string): void;
  InlineLayout: {
    SIMPLE: number;
  };
}

interface GoogleTranslateOptions {
  pageLanguage: string;
  includedLanguages: string;
  layout: number;
  autoDisplay: boolean;
  multilanguagePage: boolean;
}

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: GoogleTranslateElement;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState('da');

  useEffect(() => {
    // Add Google Translate script but keep it hidden
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate but keep it hidden
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'da',
          includedLanguages: 'da,en,de,fr,es,it,sv,no',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true
        }, 'google_translate_element');
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    
    // Set cookie for language preference
    document.cookie = `googtrans=/da/${langCode}; path=/; max-age=31536000`;
    
    // Force page reload to apply translation
    window.location.reload();
  };

  const languages = [
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' }
  ];

  return (
    <div className="relative">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
      
      {/* Custom Language Selector */}
      <div className="relative">
        <select 
          value={currentLang}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-selector bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer min-w-0 w-auto text-gray-800"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <style jsx global>{`
        /* FORCE RESET - Override ALL Google Translate styling */
        *, *::before, *::after {
          filter: none !important;
          opacity: 1 !important;
        }
        
        /* Completely hide Google Translate widget */
        .goog-te-gadget-simple {
          display: none !important;
        }
        
        /* Hide Google Translate banner completely */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        
        .goog-te-banner-frame {
          display: none !important;
        }
        
        /* Hide the top banner with "View original", "Options", etc */
        #goog-gt-tt {
          display: none !important;
        }
        
        .goog-te-balloon-frame {
          display: none !important;
        }
        
        /* Remove body top margin that Google adds */
        body {
          top: 0px !important;
          margin-top: 0px !important;
          filter: none !important;
          opacity: 1 !important;
        }
        
        /* FORCE ORIGINAL COLORS AND LAYOUT */
        .bg-white {
          background-color: white !important;
        }
        
        .bg-gray-50 {
          background-color: #f9fafb !important;
        }
        
        .bg-gray-100 {
          background-color: #f3f4f6 !important;
        }
        
        .bg-blue-50 {
          background-color: #eff6ff !important;
        }
        
        .bg-green-50 {
          background-color: #f0fdf4 !important;
        }
        
        .bg-green-500 {
          background-color: #10b981 !important;
        }
        
        .bg-green-600 {
          background-color: #059669 !important;
        }
        
        .bg-blue-600 {
          background-color: #2563eb !important;
        }
        
        .text-gray-800 {
          color: #1f2937 !important;
        }
        
        .text-gray-700 {
          color: #374151 !important;
        }
        
        .text-white {
          color: white !important;
        }
        
        /* Force flex layouts to work */
        .flex {
          display: flex !important;
        }
        
        .grid {
          display: grid !important;
        }
        
        /* Hide any other Google Translate elements */
        .goog-te-gadget {
          display: none !important;
        }
        
        /* Disable hover translation popup */
        .goog-te-spinner-pos {
          display: none !important;
        }
        
        .goog-te-balloon-frame div {
          display: none !important;
        }
        
        /* Hide the translation hover bubbles */
        .goog-te-balloon-frame {
          visibility: hidden !important;
        }
        
        /* Override ALL Google Translate font styling */
        font {
          color: inherit !important;
          background: inherit !important;
        }
        
        /* Hide Google logo and branding */
        .goog-logo-link {
          display: none !important;
        }
        
        .goog-te-banner-frame img {
          display: none !important;
        }
        
        /* Style our language selector button with specific class */
        .language-selector {
          background-color: #f3f4f6 !important;
          border: 1px solid #d1d5db !important;
          color: #1f2937 !important;
          opacity: 1 !important;
          filter: none !important;
        }
        
        .language-selector:hover {
          background-color: #e5e7eb !important;
          border-color: #9ca3af !important;
        }
        
        .language-selector:focus {
          background-color: #f3f4f6 !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
        }
      `}</style>
    </div>
  );
}