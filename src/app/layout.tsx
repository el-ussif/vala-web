import type {Metadata} from "next";
import {Geist, Geist_Mono, Genos, Inter} from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});
export const metadata: Metadata = {
    title: {
        default: "Vala AI | Military Life Simplified",
        template: "%s | Vala AI"
    },
    description: "AI-powered military assistant for PCS moves, enlistment prep & veteran transition. Get personalized checklists, family coordination tools, and ASVAB study plans in English, French & Spanish.",
    keywords: [
        "military PCS move organizer",
        "ASVAB AI study tool",
        "veteran transition assistance",
        "military family coordination app",
        "enlistment preparation platform",
        "AI for military logistics"
    ],
    openGraph: {
        title: "Vala AI | Your Digital Military Assistant",
        description: "From PCS moves to VA benefits - let AI handle military logistics so you can focus on service and family.",
        images: [{
            url: "/og-image.jpg", // Recommended: 1200x630px
            alt: "Vala AI dashboard screenshot showing PCS move checklist"
        }],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        creator: "@vala_ai",
        images: "/twitter-image.jpg" // Recommended: 1200x675px
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${inter.variable} ${genos.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
