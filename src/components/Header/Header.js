import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
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
        <img src="./img/togglelight.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
