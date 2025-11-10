import { useNavigate } from "react-router-dom";
import { useRandomJoke } from "../../hooks/useRandomJoke";
import styles from "./RandomPage.module.scss";

export const RandomPage = () => {
  const { joke, loading, error, refetch } = useRandomJoke();
  const navigate = useNavigate();

  const handleJokeClick = () => {
    if (joke) {
      navigate(`/joke/${joke.id}`);
    }
  };

  return (
    <div className={styles.randomPage}>
      <h1 className={styles.title}>Random Dad Joke</h1>

      {loading && (
        <div className={styles.loading}>Loading a hilarious joke...</div>
      )}

      {error && <div className={styles.error}>Error: {error}</div>}

      {joke && !loading && (
        <div className={styles.jokeCard} onClick={handleJokeClick}>
          <p className={styles.jokeText}>{joke.joke}</p>
          <p className={styles.jokeId}>ID: {joke.id}</p>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={refetch} disabled={loading}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
};
