import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav>
            <ul className={styles.links}>
              <li>
                <Link to="/">Random Joke</Link>
              </li>
              <li>
                <Link to="/search">Search Jokes</Link>
              </li>
            </ul>
          </nav>
          <p className={styles.apiCredit}>
            Jokes provided by{" "}
            <a
              href="https://icanhazdadjoke.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              icanhazdadjoke.com
            </a>
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Dad Joke Website
          </p>
        </div>
      </div>
    </footer>
  );
};
