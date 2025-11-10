import { useState } from "react";
import { translations } from "../../translations";
import styles from "./FavoritePage.module.scss";

export const FavoritePage = () => {
  const [revealed, setRevealed] = useState(false);
  const t = translations.favoritePage;

  const handleReveal = () => {
    setRevealed(!revealed);
  };

  return (
    <div className={styles.favoritePage}>
      <h1 className={styles.title}>{t.title}</h1>

      <div className={styles.jokeCard}>
        <p className={styles.setup}>{t.setup}</p>

        <div className={styles.spoilerContainer}>
          {!revealed && <p className={styles.spoilerHint}>{t.spoilerHint}</p>}
          <div
            className={`${styles.spoiler} ${revealed ? styles.revealed : ""}`}
            onClick={handleReveal}
          >
            {t.punchline}
          </div>
        </div>
      </div>
    </div>
  );
};
