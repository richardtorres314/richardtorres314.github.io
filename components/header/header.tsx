import { MouseEvent } from "react";
import styles from "./header.module.css";

const Header = () => {
  function handleOnClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const sectionId = event.currentTarget.href.split("#")[1];
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header id="header">
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <a href="#about" onClick={handleOnClick}>
            About
          </a>
          <a href="#skills" onClick={handleOnClick}>
            Skills
          </a>
          <a href="#experience" onClick={handleOnClick}>
            Experience
          </a>
          <a href="#contributions" onClick={handleOnClick}>
            Contributions
          </a>
          <a
            href="https://dev.to/richardtorres314"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <a href="#contact" onClick={handleOnClick}>
            Contact
          </a>
        </nav>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.avatarWrapper}>
            <img
              draggable="false"
              alt="Richard Torres"
              src="images/me.jpg"
              className={styles.avatar}
            />
          </div>
          <div className={styles.contactInfoContainer}>
            <h1 className={styles.title}>
              Richard <span>Torres</span>
            </h1>
            <div className={styles.subtitle}>Software Engineer</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
