import { Readex_Pro } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import localFont from 'next/font/local'
import { buildSiteUrl, getSiteUrl } from "@/utils/seo";

const siteUrl = getSiteUrl();
const defaultTitle = "Top Steel Supplier in Gujarat | V Metal Solutions Inc";
const defaultDescription =
  "V Metal Solutions Inc supplies premium steel products and processing services across Gujarat, including HR, CR, GI, PPGI, PMP, MS structures, and MS pipes.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  applicationName: "V Metal Solutions",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { rel: 'icon', url: '/images/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/images/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/images/favicon.png', sizes: 'any' },
      { rel: 'apple-touch-icon', url: '/images/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  verification: {
    google: "DTYQS4L7_UaZy8M_JcsF6KZ4WUmfz-RcfPkf2ouq8gA"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: buildSiteUrl("/"),
    siteName: "V Metal Solutions",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/vmetal_optimized.png",
        alt: "V Metal Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/vmetal_optimized.png"],
  }
};


const Readex = Readex_Pro({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'], // ⬅️ Add the weights you need
  variable: "--font-readex-pro",
});

// Font files can be colocated inside of `app`
const thin = localFont({
  src: './fonts/pfdintextcomppro_thin-webfont.woff2', // ✅ Correct relative path
  display: 'swap',
  variable: '--font-thin',
});

const medium = localFont({
  src: './fonts/pfdintextcomppro__medium-webfont.woff2', // ✅ Correct relative path
  display: 'swap',
  variable: '--font-medium',
});

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "V Metal Solutions INC",
  "url": siteUrl,
  "description": "Mild Steel Supplier",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "523, First Floor, Road No.14, Kathwada G.I.D.C.",
    "addressLocality": "Kathwada",
    "addressRegion": "Gujarat",
    "postalCode": "382430",
    "addressCountry": "India"
  },
  "telephone": "+91-95102-15623"
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className={`${Readex.className} ${thin.variable} ${medium.variable}`}>
        {/* Google Analytics (gtag.js) */}
        <Script
          id="google-analytics-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-BH28SCZYTZ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BH28SCZYTZ');
          `}
        </Script>


        <Navbar />
        <ScrollToTop />
        <div className="page-content">
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
