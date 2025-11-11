import { Link } from "react-router-dom";
import { translations } from "../../translations";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const t = translations.footer;
  const tHeader = translations.header;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav>
            <ul className={styles.links}>
              <li>
                <Link to="/">{tHeader.nav.randomJoke}</Link>
              </li>
              <li>
                <Link to="/search">{tHeader.nav.searchJokes}</Link>
              </li>
              <li>
                <Link to="/favorite">{tHeader.nav.favoriteJoke}</Link>
              </li>
              <li>
                <Link to="/about">{tHeader.nav.about}</Link>
              </li>
            </ul>
          </nav>
          <p className={styles.apiCredit}>
            {t.apiCredit}{" "}
            <a
              href="https://icanhazdadjoke.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.apiLink}
            </a>
          </p>
          <p className={styles.copyright}>
            {t.copyright(new Date().getFullYear())}
          </p>
        </div>
      </div>
    </footer>
  );
};
