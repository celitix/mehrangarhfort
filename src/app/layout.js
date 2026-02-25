import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehrangarh Fort | Forts In India | Rajasthan Fort | Forts Of Rajasthan",
  description: "Explore the majestic Mehrangarh Fort in Jodhpur — one of India’s largest and most stunning forts. Discover its rich history, grand architecture, breathtaking city views, and must-visit attractions for an unforgettable Rajasthan experience.",
    alternates: {
    canonical: "https://mehrangarhfort.in/",
  },
  icons: {
    icon: [
      { url: '/mehran-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/mehran-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/mehran-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
