import "bulma/bulma.sass";
import { PropsWithChildren } from "react";
import styles from "./layout.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import "styles/global.scss";

export default function RootLayout({ children }: PropsWithChildren) {
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
