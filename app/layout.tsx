import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CDT Platform - Intelligent træningsplatform",
  description: "CDT Platform - Intelligent træningsplatform for professionelle og forældre der arbejder med børn med særlige behov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Translate Widget */}
<div id="google_translate_element" className="fixed top-20 right-4 z-50"></div>
<script
  dangerouslySetInnerHTML={{
    __html: `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          {pageLanguage: 'da', includedLanguages: 'en,da,de,sv,no'},
          'google_translate_element'
        );
      }
    `,
  }}
/>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  <Navigation />
  <main>{children}</main>
  <Footer />
</body>
    </html>
  );
}