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
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer min-w-0 w-auto"
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
        /* Completely hide Google Translate widget */
        .goog-te-gadget-simple {
          display: none !important;
        }
        
        /* Hide Google Translate banner */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        
        body {
          top: 0px !important;
        }
        
        /* Hide any other Google Translate elements */
        .goog-te-gadget {
          display: none !important;
        }
      `}</style>
    </div>
  );
}