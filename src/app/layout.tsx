import "@fontsource-variable/inter";
import "styles/global.css";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/appearance.js" />
      </head>
      <body className="min-h-screen bg-background antialiased pt-24 md:pt-24 print:pt-0 data-[scroll-locked]:pt-24 data-[scroll-locked]:!mr-0">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
