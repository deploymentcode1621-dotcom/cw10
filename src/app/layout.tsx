import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GoogleTranslate from "@/components/ui/GoogleTranslate";

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Ashwini Accident & Neuro Care Center | Latur",
    template: "%s | Ashwini Neuro Care Center",
  },

  description:
    "Ashwini Accident & Neuro Care Center in Latur — Premier hospital for Neurology, Neurosurgery, Spine Surgery, Trauma & Emergency Care. 24/7 services with expert doctors.",

  keywords: [
    "hospital latur",
    "neuro care latur",
    "neurology latur",
    "neurosurgery",
    "spine surgery",
    "trauma care",
    "ICU latur",
    "emergency hospital latur",
    "best hospital marathwada",
  ],

  authors: [{ name: "Ashwini Accident & Neuro Care Center" }],

  metadataBase: new URL(
    "https://ashwinineurocarecenterlatur.com"
  ),

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ashwini Accident & Neuro Care Center",
    title: "Ashwini Accident & Neuro Care Center",
    description:
      "Advanced Neurology, Neurosurgery, Spine Surgery, Trauma & Emergency Care in Latur.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashwini Accident & Neuro Care Center",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white flex flex-col">
        <LanguageProvider>
          {/* Google Translate */}
          <GoogleTranslate />

          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Button */}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}