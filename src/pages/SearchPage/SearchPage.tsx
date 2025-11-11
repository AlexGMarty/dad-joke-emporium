import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchJokes } from "../../hooks/useSearchJokes";
import { translations } from "../../translations";
import styles from "./SearchPage.module.scss";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");
  const { data, loading, error, search } = useSearchJokes();
  const navigate = useNavigate();
  const t = translations.searchPage;
  const currentSearchPage = parseInt(searchParams.get("page") || "1", 10);

  // Restore search on mount or when URL params change
  useEffect(() => {
    const term = searchParams.get("term");
    const page = parseInt(searchParams.get("page") || "1", 10);

    if (term) {
      setSearchTerm(term);
      search(term, page);
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ term: searchTerm.trim(), page: "1" });
    }
  };

  const handleJokeClick = (id: string) => {
    navigate(`/joke/${id}`);
  };

  const handlePreviousPage = () => {
    if (data && currentSearchPage > 1) {
      const newPage = currentSearchPage - 1;
      setSearchParams({ term: searchTerm, page: newPage.toString() });
    }
  };

  const handleNextPage = () => {
    if (data && currentSearchPage < data.total_pages) {
      const newPage = currentSearchPage + 1;
      setSearchParams({ term: searchTerm, page: newPage.toString() });
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
          {data.total_pages > 1 && (
            <p className={styles.resultInfo}>
              {t.pagination.pageInfo(currentSearchPage, data.total_pages)}
            </p>
          )}

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
                    disabled={currentSearchPage === 1}
                  >
                    {t.pagination.previous}
                  </button>
                  <span className={styles.pageInfo}>
                    {t.pagination.pageInfo(currentSearchPage, data.total_pages)}
                  </span>
                  <button
                    className={styles.pageButton}
                    onClick={handleNextPage}
                    disabled={currentSearchPage === data.total_pages}
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
