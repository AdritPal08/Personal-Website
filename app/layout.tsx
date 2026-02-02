import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrit Pal | AI Solutions Engineer",
  description: "Personal Portfolio of Adrit Pal - AI Solutions Engineer & Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#121212] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
