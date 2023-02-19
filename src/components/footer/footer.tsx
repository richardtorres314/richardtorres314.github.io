"use client";

import styles from "./footer.module.css";
import { Button } from "@/components/button/button";
import { useEffect, useState } from "react";

export function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.scrollY > 50);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setShowButton(false);
      });
    };
  }, []);

  return (
    <>
      <footer className={styles.footerWrapper}>
        <div>Made in Boston • Richard Torres</div>
      </footer>
      {showButton && <Button />}
    </>
  );
}
