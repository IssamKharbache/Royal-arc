import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
const urbanist = Urbanist({ subsets: ["latin"] ,weight:["100","200","300","400","500","600","700","800","900"]});

export const metadata: Metadata = {
  title: "Royal arc",
  description: "Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <NextTopLoader color="white"/>
        {children}
        </body>
    </html>
  );
}
