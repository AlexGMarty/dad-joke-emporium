import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchJokes } from "../../hooks/useSearchJokes";
import styles from "./SearchPage.module.scss";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error, search } = useSearchJokes();
  const navigate = useNavigate();

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
      <h1 className={styles.title}>Search Dad Jokes</h1>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for jokes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={loading || !searchTerm.trim()}
        >
          Search
        </button>
      </form>

      {loading && <div className={styles.loading}>Searching for jokes...</div>}

      {error && <div className={styles.error}>Error: {error}</div>}

      {data && !loading && (
        <div className={styles.results}>
          <p className={styles.resultInfo}>
            Found {data.total_jokes} joke{data.total_jokes !== 1 ? "s" : ""} for
            "{data.search_term}"
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
                    <p className={styles.jokeId}>ID: {joke.id}</p>
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
                    Previous
                  </button>
                  <span className={styles.pageInfo}>
                    Page {currentPage} of {data.total_pages}
                  </span>
                  <button
                    className={styles.pageButton}
                    onClick={handleNextPage}
                    disabled={currentPage === data.total_pages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              No jokes found for "{data.search_term}". Try a different search
              term!
            </div>
          )}
        </div>
      )}
    </div>
  );
};
