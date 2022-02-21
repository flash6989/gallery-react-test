import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

function Header({ setIsLight, isLight }) {
  let location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to={`/`}>
          {" "}
          <img src="./img/logo.png" alt="" />
        </Link>
      </div>
      <div className={styles.header__toggle}>
        <img
          onClick={() => {
            setIsLight(!isLight);
          }}
          src={
            isLight
              ? "./img/togglelight.png"
              : "./img/toggle-theme-for-black.png"
          }
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
