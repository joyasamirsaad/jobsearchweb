import type { Metadata } from "next";
import Script from 'next/script';
//import { Inter, Poppins } from "next/font/google";
import "./globals.css";

/*const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"], 
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});*/

export const metadata: Metadata = {
  title: "Job Search",
  description: "Job Search app",
};

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/9794455bd0.js" crossOrigin="anonymous" strategy="beforeInteractive"/>
      </head>

      <body className="m-0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
