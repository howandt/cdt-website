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
        
        /* Remove any translation hover effects */
        font[style*="color: rgb(68, 68, 68)"] {
          color: inherit !important;
        }
        
        /* Hide Google logo and branding */
        .goog-logo-link {
          display: none !important;
        }
        
        .goog-te-banner-frame img {
          display: none !important;
        }
        
        /* Force normal text colors - override Google Translate styling */
        body, body *, html, html * {
          color: inherit !important;
          opacity: 1 !important;
          filter: none !important;
        }
        
        /* Remove Google Translate gray overlay/filter */
        body {
          filter: none !important;
          opacity: 1 !important;
        }
        
        /* Fix all elements that Google might have grayed out */
        div, p, h1, h2, h3, h4, h5, h6, span, button, a {
          filter: none !important;
          opacity: 1 !important;
          color: inherit !important;
        }
        
        /* Specifically fix button and text colors */
        button, select, input {
          color: #374151 !important;
          background-color: white !important;
          opacity: 1 !important;
          filter: none !important;
        }
        
        /* Style our language selector button properly */
        select.bg-white {
          background-color: #f8fafc !important;
          border: 1px solid #d1d5db !important;
          color: #374151 !important;
          opacity: 1 !important;
          filter: none !important;
        }
        
        select.bg-white:hover {
          background-color: #f1f5f9 !important;
          border-color: #9ca3af !important;
        }
        
        /* Fix any gray text Google Translate might have added */
        font[color="#777777"], font[color="rgb(119, 119, 119)"] {
          color: inherit !important;
        }
        
        /* Override any Google Translate font styling */
        font[style*="color"] {
          color: inherit !important;
        }
      `}</style>
    </div>
  );
}