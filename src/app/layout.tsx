import { type PropsWithChildren } from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Inter as FontSans } from "next/font/google";
import "styles/global.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/appearance.js" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased pt-24 md:pt-24 print:pt-0 data-[scroll-locked]:pt-24 data-[scroll-locked]:!mr-0",
          fontSans.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
