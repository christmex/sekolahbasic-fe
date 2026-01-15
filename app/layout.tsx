import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Sekolah Kristen Batam — Sekolah Basic | Christ-Centered Education TK SD SMP SMA",
    template: "%s | Sekolah Kristen Basic Batam",
  },
  description:
    "Sekolah Basic adalah sekolah Kristen di Batam yang menerapkan pendidikan Christ-Centered untuk jenjang TK, SD, SMP, dan SMA, berfokus pada karakter, iman, dan prestasi akademik.",
  keywords: [
    "sekolah kristen batam",
    "sekolah kristen di batam",
    "Sekolah Kristen Basic Batam",
    "christ centered school batam",
    "pendidikan kristen batam",
    "sekolah kristen tk batam",
    "sekolah kristen sd batam",
    "sekolah kristen smp batam",
    "sekolah kristen sma batam",
    "sekolah berbasis iman kristen",
    "christ centered education"
  ],
  openGraph: {
    title:
      "Sekolah Kristen Batam — Sekolah Basic | Christ-Centered Education",
    description:
      "Sekolah Kristen Basic Batam adalah sekolah Kristen dengan pendidikan Christ-Centered untuk TK, SD, SMP, dan SMA, membentuk karakter, iman, dan keunggulan akademik.",
    siteName: "Sekolah Kristen Basic Batam",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sekolah Kristen Batam — Sekolah Basic | Christ-Centered Education",
    description:
      "Sekolah Kristen di Batam dengan pendekatan Christ-Centered untuk membangun iman, karakter, dan prestasi siswa.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-gray-800 selection:bg-(--basic-i-color) selection:text-gray-800`}
      >
        <Header />

        {/* Main Content Wrapper */}
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
