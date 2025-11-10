import { translations } from "../../translations";
import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  const t = translations.aboutPage;

  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>{t.title}</h1>

      <div className={styles.content}>
        <p>
          This site was made using React with TypeScript and SCSS using CSS
          Modules.
        </p>
      </div>
    </div>
  );
};
