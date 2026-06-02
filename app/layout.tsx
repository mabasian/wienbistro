import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

const siteUrl = 'https://wienbistro.mabasian.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'WienBistro – Frühstück, Brunch & Specialty Coffee in Wien-Neubau',
    template: '%s · WienBistro',
  },
  description:
    'WienBistro im 7. Bezirk: ganztägiges Frühstück & Brunch, hausgemachte Mehlspeisen, Specialty Coffee und ein wechselnder Mittagsteller. Tisch online reservieren.',
  keywords: [
    'Café Wien',
    'Frühstück Wien',
    'Brunch Wien',
    'Frühstück 1070',
    'Specialty Coffee Wien',
    'Bistro Neubau',
    'Mittagsmenü Wien',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'WienBistro',
    title: 'WienBistro – Wiener Frühstückskultur, neu aufgebrüht',
    description: 'Frühstück, Brunch & Specialty Coffee im 7. Bezirk. Tisch online reservieren.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WienBistro – Wiener Frühstückskultur, neu aufgebrüht',
    description: 'Frühstück, Brunch & Specialty Coffee im 7. Bezirk. Tisch online reservieren.',
  },
}

// Schema.org für lokale SEO (Rich Results).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'WienBistro',
  image: `${siteUrl}/og-image.jpg`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+43 1 234 56 78',
  priceRange: '€€',
  servesCuisine: ['Frühstück', 'Brunch', 'Kaffee', 'Bistro'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lindengasse 24',
    addressLocality: 'Wien',
    postalCode: '1070',
    addressCountry: 'AT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.2003, longitude: 16.3505 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // lang="de" als Default (SSR). Der LanguageProvider aktualisiert es clientseitig.
  return (
    <html lang="de">
      <head>
        <meta name="theme-color" content="#2E2018" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
