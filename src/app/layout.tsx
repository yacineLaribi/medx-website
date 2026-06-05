import type { Metadata } from "next";
import { Raleway, Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "./components/error";
import GlobalSplashScreen from "./components/GlobalSplashScreen";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"
const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Secondary font — Raleway (loaded from Google Fonts)
const raleway = Raleway({
  variable: "--font-secondary",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// Metadata with favicon
export const metadata: Metadata = {
  title: "MEDX by Zenith Club",
  description: "Algeria's Biggest Medical Surgical Competition",
  icons: {
    icon: "/aecWV.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${raleway.variable} antialiased`} suppressHydrationWarning>
        <ErrorBoundary>
          
          <Analytics />
        </ErrorBoundary>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
