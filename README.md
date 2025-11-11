# Hello, friends at onX!

Look, it's me, Alex, messing with your README.

Thank you for giving me the opportunity to work on this project! I had a lot of fun, as will hopefully be obvious as you poke around the site. I think I spent about 4 hours total making it.

Obviously, all the code is right here. Since I don't have permissions to publish via GitHub Pages (for obvious security reasons), you'll have to pull down the repo and run it yourself following the instructions below.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/onX-Hiring/interview-proj-web_Alex-Marty.git
   cd interview-proj-web_Alex-Marty
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to the URL shown in the terminal (typically `http://localhost:5173`)

---

# Web Interview Project

Using any tools you prefer (Vue, React, Angular, plain ol JavaScript, CSS frameworks) let’s build a website. The website only needs to do a couple things. Primarily it is going to interact with https://icanhazdadjoke.com/api

- Be able to search for a joke

  - Pagination of joke search results would be nice, but not required. You might save this for last if you have time.
  - Gracefully handle the case where there are no search results

- Be able to retrieve a random joke

- Even though it is kind of silly, when you click a joke it should go to an individual joke page.
  - On that page you should be able to click a button to copy the joke to your clipboard.
- There should be a page header and footer, with navigation to the search page, the random page, and any additional pages you feel like adding.

- Although this is a very simple website, it should be nicely laid out and formatted. We aren’t going to judge your web design tastes, we are just looking for knowledge on how to layout the components of your site.
