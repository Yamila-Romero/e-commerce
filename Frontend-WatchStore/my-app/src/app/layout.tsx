import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navegation";
import Footer from "@/components/footer";
import Header from "../components/header/index"
import { CartProvider } from "@/context/cart-context";
import { SharedStateProvider } from "../context/useSharedstate";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Watch Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col justify-between`}
      >
        <div className="flex flex-col items-center justify-start w-full">
          <SharedStateProvider>
          <CartProvider>
              
              <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
              <Header/>
              <Navigation />
              {children}
              <Footer />
          </CartProvider>
          </SharedStateProvider>
        </div>
      </body>
    </html>
  );
}
