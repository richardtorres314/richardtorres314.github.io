import styles from "./footer.module.scss";
import classNames from "classnames";

export function Footer() {
  return (
    <footer
      className={classNames(
        "footer has-text-light has-text-centered",
        styles.footer
      )}
    >
      Made in Boston • Richard Torres
    </footer>
  );
}
