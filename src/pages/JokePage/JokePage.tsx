import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useJokeById } from "../../hooks/useJokeById";
import styles from "./JokePage.module.scss";

export const JokePage = () => {
  const { id } = useParams<{ id: string }>();
  const { joke, loading, error } = useJokeById(id);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    if (joke) {
      try {
        await navigator.clipboard.writeText(joke.joke);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.jokePage}>
      <h1 className={styles.title}>Dad Joke</h1>

      {loading && <div className={styles.loading}>Loading joke...</div>}

      {error && <div className={styles.error}>Error: {error}</div>}

      {joke && !loading && (
        <div className={styles.jokeCard}>
          <p className={styles.jokeText}>{joke.joke}</p>
          <p className={styles.jokeId}>ID: {joke.id}</p>

          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${copied ? styles.copied : ""}`}
              onClick={handleCopyToClipboard}
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
            <button className={styles.backButton} onClick={handleBack}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
