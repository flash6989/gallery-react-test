import styles from "./Header.module.scss";

const Header = ({ setIsDark, isDark }) => {
  return (
    <header className={styles.header}>
      <img src="./img/logo.png" alt="" />

      <img
        onClick={() => {
          setIsDark(!isDark);
        }}
        src={
          isDark ? "./img/togglelight.png" : "./img/toggle-theme-for-black.png"
        }
        alt=""
      />
    </header>
  );
};

export default Header;
