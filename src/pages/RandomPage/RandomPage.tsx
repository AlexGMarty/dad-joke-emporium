import { useNavigate } from "react-router-dom";
import { useRandomJoke } from "../../hooks/useRandomJoke";
import { translations } from "../../translations";
import styles from "./RandomPage.module.scss";

export const RandomPage = () => {
  const { joke, loading, error, refetch } = useRandomJoke();
  const navigate = useNavigate();
  const t = translations.randomPage;

  const handleJokeClick = () => {
    if (joke) {
      navigate(`/joke/${joke.id}`);
    }
  };

  return (
    <div className={styles.randomPage}>
      <h1 className={styles.title}>{t.title}</h1>

      {loading && <div className={styles.loading}>{t.loading}</div>}

      {error && <div className={styles.error}>{t.error(error)}</div>}

      {joke && !loading && (
        <div className={styles.jokeCard} onClick={handleJokeClick}>
          <p className={styles.jokeText}>{joke.joke}</p>
          <p className={styles.jokeId}>{t.jokeId(joke.id)}</p>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={refetch} disabled={loading}>
          {t.buttonText}
        </button>
      </div>
    </div>
  );
};
