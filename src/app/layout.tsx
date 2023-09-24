import "public/styles/global.css";
import "bulma/bulma.sass";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
