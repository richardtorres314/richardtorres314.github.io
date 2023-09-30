import "styles/global.css";
import "bulma/bulma.sass";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
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
