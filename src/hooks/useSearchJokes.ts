import { useState, useEffect, useCallback } from "react";
import { jokeApi } from "../services/jokeApi";
import { SearchResponse } from "../types/joke";

interface UseSearchJokesResult {
  data: SearchResponse | null;
  loading: boolean;
  error: string | null;
  search: (term: string, page?: number) => void;
}

export const useSearchJokes = (): UseSearchJokesResult => {
  const [data, setData] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<{
    term: string;
    page: number;
  } | null>(null);

  useEffect(() => {
    if (!searchParams) return;

    const searchJokes = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await jokeApi.searchJokes(
          searchParams.term,
          searchParams.page
        );
        setData(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    searchJokes();
  }, [searchParams]);

  const search = useCallback((term: string, page: number = 1) => {
    setSearchParams({ term, page });
  }, []);

  return { data, loading, error, search };
};
