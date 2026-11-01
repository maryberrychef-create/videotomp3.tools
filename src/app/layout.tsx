import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://videotomp3.tools"),
  title: "Free Video to MP3 Converter - Local, No Upload",
  description: "Convert MP4, MOV, AVI, WEBM, MKV to MP3 instantly in your browser. 100% free, local video to audio converter. 0% server upload, no signup required, and no software installation.",
  alternates: {
    canonical: "https://videotomp3.tools",
  },
  openGraph: {
    title: "Free Video to MP3 Converter - Local, No Upload",
    description: "Convert video to MP3 instantly in your browser. 100% free, local video to audio converter. No signup, no software.",
    url: "https://videotomp3.tools",
    siteName: "videotomp3.tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video to MP3 Converter - Local, No Upload",
    description: "Convert video to MP3 instantly in your browser. 100% free, 0% server upload.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}