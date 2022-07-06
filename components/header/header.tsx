import { MouseEvent } from "react";
import styles from "./header.module.css";

function Header() {
  function handleOnClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const sectionId = event.currentTarget.href.split("#")[1];
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <div>
            <a href="#about" onClick={handleOnClick}>
              About
            </a>
          </div>
          <div>
            <a href="#skills" onClick={handleOnClick}>
              Skills
            </a>
          </div>
          <div>
            <a href="#experience" onClick={handleOnClick}>
              Experience
            </a>
          </div>
          <div>
            <a href="#contact" onClick={handleOnClick}>
              Contact
            </a>
          </div>
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
    </>
  );
}

export default Header;
