import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          🤣 Dad Jokes
        </NavLink>
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Random Joke
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Search Jokes
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
