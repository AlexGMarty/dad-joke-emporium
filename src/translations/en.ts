export const translations = {
  // Header
  header: {
    logoText: "Alex's Dad Joke Emporium™",
    nav: {
      randomJoke: "Random Joke",
      searchJokes: "Search Jokes",
      favoriteJoke: "The Best Joke Ever",
      about: "About",
    },
  },

  // Footer
  footer: {
    apiCredit: "Jokes provided by",
    apiLink: "icanhazdadjoke.com",
    copyright: (year: number) => `© ${year} Dad Joke Website`,
  },

  // Random Page
  randomPage: {
    title: "Random Dad Joke",
    loading: "Loading a hilarious joke...",
    error: (message: string) => `Error: ${message}`,
    jokeId: (id: string) => `ID: ${id}`,
    buttonText: "Get Another Joke",
  },

  // Search Page
  searchPage: {
    title: "Search Dad Jokes",
    searchPlaceholder: "Search for jokes...",
    searchButton: "Search",
    loading: "Searching for jokes...",
    error: (message: string) => `Error: ${message}`,
    resultInfo: (total: number, term: string) =>
      `Found ${total} joke${total !== 1 ? "s" : ""} for "${term}"`,
    noResults: (term: string) =>
      `No jokes found for "${term}". Try a different search term!`,
    jokeId: (id: string) => `ID: ${id}`,
    pagination: {
      previous: "Previous",
      next: "Next",
      pageInfo: (current: number, total: number) =>
        `Page ${current} of ${total}`,
    },
  },

  // Joke Page
  jokePage: {
    title: "Exactly One Specific Joke",
    loading: "Loading joke...",
    error: (message: string) => `Error: ${message}`,
    jokeId: (id: string) => `ID: ${id}`,
    copyButton: "Copy Joke to Clipboard",
    copiedButton: "Copied!",
    backButton: "Go Back",
  },

  // Favorite Joke Page
  favoritePage: {
    title: "My All-Time Favorite Joke",
    setup: "How come you never see elephants hiding in trees?",
    punchline: "Because they're good at it.",
    spoilerHint: "Click to reveal",
  },

  // About Page
  aboutPage: {
    title: "About Alex's Dad Joke Emporium™",
  },
} as const;
