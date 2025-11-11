import { useState, useEffect } from "react";
import { jokeApi } from "../services/jokeApi";
import { Joke } from "../types/joke";

interface UseJokeByIdResult {
  joke: Joke | null;
  loading: boolean;
  error: string | null;
}

export const useJokeById = (id: string | undefined): UseJokeByIdResult => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No joke ID provided");
      return;
    }

    const fetchJoke = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await jokeApi.getJokeById(id);
        setJoke(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, [id]);

  return { joke, loading, error };
};
