import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchJokes } from "../../hooks/useSearchJokes";
import { translations } from "../../translations";
import styles from "./SearchPage.module.scss";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error, search } = useSearchJokes();
  const navigate = useNavigate();
  const t = translations.searchPage;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCurrentPage(1);
      search(searchTerm, 1);
    }
  };

  const handleJokeClick = (id: string) => {
    navigate(`/joke/${id}`);
  };

  const handlePreviousPage = () => {
    if (data && currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      search(searchTerm, newPage);
    }
  };

  const handleNextPage = () => {
    if (data && currentPage < data.total_pages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      search(searchTerm, newPage);
    }
  };

  return (
    <div className={styles.searchPage}>
      <h1 className={styles.title}>{t.title}</h1>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={loading || !searchTerm.trim()}
        >
          {t.searchButton}
        </button>
      </form>

      {loading && <div className={styles.loading}>{t.loading}</div>}

      {error && <div className={styles.error}>{t.error(error)}</div>}

      {data && !loading && (
        <div className={styles.results}>
          <p className={styles.resultInfo}>
            {t.resultInfo(data.total_jokes, data.search_term)}
          </p>

          {data.results.length > 0 ? (
            <>
              <div className={styles.jokesList}>
                {data.results.map((joke) => (
                  <div
                    key={joke.id}
                    className={styles.jokeCard}
                    onClick={() => handleJokeClick(joke.id)}
                  >
                    <p className={styles.jokeText}>{joke.joke}</p>
                    <p className={styles.jokeId}>{t.jokeId(joke.id)}</p>
                  </div>
                ))}
              </div>

              {data.total_pages > 1 && (
                <div className={styles.pagination}>
                  <button
                    className={styles.pageButton}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  >
                    {t.pagination.previous}
                  </button>
                  <span className={styles.pageInfo}>
                    {t.pagination.pageInfo(currentPage, data.total_pages)}
                  </span>
                  <button
                    className={styles.pageButton}
                    onClick={handleNextPage}
                    disabled={currentPage === data.total_pages}
                  >
                    {t.pagination.next}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              {t.noResults(data.search_term)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
