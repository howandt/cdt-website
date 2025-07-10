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
    // Check if Google Translate is already loaded
    if (window.google && window.google.translate) {
      initializeGoogleTranslate();
      return;
    }

    // Add Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      initializeGoogleTranslate();
    };

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const initializeGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'da',
        includedLanguages: 'da,en,de,fr,es,it,sv,no',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');

      // Customize the Google Translate widget text after it loads
      setTimeout(() => {
        const translateElement = document.querySelector('.goog-te-gadget-simple');
        if (translateElement) {
          const textNode = translateElement.querySelector('.goog-te-menu-value span:first-child');
          if (textNode && textNode.textContent === 'Dansk') {
            textNode.textContent = 'Change Language';
          }
        }
      }, 1000);
    }
  };

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    
    // Set cookie for language preference
    document.cookie = `googtrans=/da/${langCode}; path=/; max-age=31536000`;
    
    // Trigger Google Translate
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      // If Google Translate isn't ready, reload the page with language parameter
      window.location.reload();
    }
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
      <div id="google_translate_element" className="block"></div>
      
      {/* Custom Language Selector - backup */}
      <div className="relative md:hidden">
        <select 
          value={currentLang}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
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
        /* Google Translate Widget Styling */
        .goog-te-gadget-simple {
          background-color: white !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.5rem !important;
          padding: 0.5rem 0.75rem !important;
          font-size: 0.875rem !important;
          color: #374151 !important;
          cursor: pointer !important;
        }
        
        .goog-te-gadget-simple:hover {
          border-color: #9ca3af !important;
        }
        
        .goog-te-menu-value {
          color: #374151 !important;
        }
        
        .goog-te-gadget-icon {
          display: none !important;
        }
        
        .goog-te-gadget-simple .goog-te-menu-value span:first-child::before {
          content: "🌐 ";
        }
        
        /* Hide Google Translate banner */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        
        body {
          top: 0px !important;
        }
      `}</style>
    </div>
  );
}