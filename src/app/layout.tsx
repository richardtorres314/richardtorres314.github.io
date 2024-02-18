import "bulma/bulma.sass";
import { type PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import "styles/global.scss";

export default function RootLayout({
  children
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
