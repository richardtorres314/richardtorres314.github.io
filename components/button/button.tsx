import styles from "./button.module.css";

const Button = () => {
  const handleOnClick = () => {
    const header = document.getElementById("header");
    if (!header) return;
    header.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className={styles.button} onClick={handleOnClick}>
      &#8679;
    </button>
  );
};

export default Button;
