"use client";

import { Fade } from "react-awesome-reveal";
import classNames from "classnames";
import styles from "./footer.module.scss";

export function Footer(): JSX.Element {
  return (
    <footer
      className={classNames(
        "footer has-text-light has-text-centered",
        styles.footer
      )}
    >
      <Fade duration={1500}>Made in Boston • Richard Torres</Fade>
    </footer>
  );
}
