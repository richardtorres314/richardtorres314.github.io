import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#experience">Experience</a>
          </div>
          <div>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactContainer}>
          <div className={styles.avatarWrapper}>
            <img
              draggable="false"
              alt="Richard Torres"
              src="me.jpg"
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
