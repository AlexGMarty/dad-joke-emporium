import { NavLink } from "react-router-dom";
import { translations } from "../../translations";
import styles from "./Header.module.scss";

export const Header = () => {
  const t = translations.header;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          {t.logoText}
        </NavLink>
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {t.nav.randomJoke}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {t.nav.searchJokes}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {t.nav.favoriteJoke}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {t.nav.about}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
