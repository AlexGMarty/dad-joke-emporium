import { Joke, SearchResponse } from "../types/joke";

const API_BASE_URL = "https://icanhazdadjoke.com";

const headers = {
  Accept: "application/json",
};

export const jokeApi = {
  /**
   * Fetch a random joke
   */
  getRandomJoke: async (): Promise<Joke> => {
    const response = await fetch(`${API_BASE_URL}/`, { headers });
    if (!response.ok) {
      throw new Error("Failed to fetch random joke");
    }
    return response.json();
  },

  /**
   * Fetch a specific joke by ID
   */
  getJokeById: async (id: string): Promise<Joke> => {
    const response = await fetch(`${API_BASE_URL}/j/${id}`, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch joke with id: ${id}`);
    }
    return response.json();
  },

  /**
   * Search for jokes containing a term
   */
  searchJokes: async (
    term: string,
    page: number = 1,
    limit: number = 20
  ): Promise<SearchResponse> => {
    const url = new URL(`${API_BASE_URL}/search`);
    url.searchParams.append("term", term);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());

    const response = await fetch(url.toString(), { headers });
    if (!response.ok) {
      throw new Error("Failed to search jokes");
    }
    return response.json();
  },
};
