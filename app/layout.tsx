import React from "react";
import localFont from "next/font/local";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";
import "./globals.css";

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

export const metadata = {
    title: "Portfolio Website",
    description: "Gemaakt met Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className={`bg-gray-900 text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* Wrapper met consistente styling */}
        <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
