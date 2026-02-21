import type { Metadata } from "next";
import { Press_Start_2P, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CRTOverlay } from "@/components/ui/CRTOverlay";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudhanva Manjunath — Software Engineer",
  description:
    "Software engineer passionate about UX and HCI. MS CS at CU Boulder. Building AI systems, React Native apps, and exceptional user experiences.",
  keywords: [
    "Sudhanva Manjunath",
    "Software Engineer",
    "React Native",
    "Next.js",
    "AI",
    "UX",
    "CU Boulder",
  ],
  authors: [{ name: "Sudhanva Manjunath" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudhanva.dev",
    title: "Sudhanva Manjunath — Software Engineer",
    description:
      "Software engineer passionate about UX and HCI. MS CS at CU Boulder.",
    siteName: "sudhanva.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudhanva Manjunath — Software Engineer",
    description:
      "Software engineer passionate about UX and HCI. MS CS at CU Boulder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pressStart2P.variable} ${jetbrainsMono.variable} ${inter.variable}`}
      >
        <ThemeProvider>
          <CRTOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
