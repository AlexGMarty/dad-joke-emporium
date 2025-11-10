import { useState, useEffect } from "react";
import { jokeApi } from "../services/jokeApi";
import { Joke } from "../types/joke";

interface UseRandomJokeResult {
  joke: Joke | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useRandomJoke = (): UseRandomJokeResult => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState<number>(0);

  useEffect(() => {
    const fetchRandomJoke = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await jokeApi.getRandomJoke();
        setJoke(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomJoke();
  }, [refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((prev) => prev + 1);
  };

  return { joke, loading, error, refetch };
};
