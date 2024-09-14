import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';  // Importing Navbar component
import Footer from './components/Footer';  // Importing Footer component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL("https://clevelandbusinessinternet.com/"),
  title: {
    default: "Cleveland Business Internet",
    template: "%s | Cleveland Business Internet",
  },
  description: "Cleveland Business Internet provides fast, reliable internet solutions with dedicated support, security, and scalability for local businesses.",
  openGraph: {
    title: "Cleveland Business Internet",
    description: "Cleveland Business Internet provides fast, reliable internet solutions with dedicated support, security, and scalability for local businesses.",
    url: "https://clevelandbusinessinternet.com/",
    siteName: "Cleveland Business Internet",
    images: [
      {
        url: "/opengraph-image.png",  // Make sure to place this image in the public folder
        width: 800,
        height: 600,
        alt: "Cleveland Business Internet OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Cleveland Business Internet",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
