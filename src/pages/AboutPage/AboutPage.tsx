import { translations } from "../../translations";
import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  const t = translations.aboutPage;

  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>{t.title}</h1>

      <div className={styles.content}>
        <p>
          This site was made using <strong>React</strong> with{" "}
          <strong>TypeScript</strong> and <strong>SCSS</strong> using{" "}
          <strong>CSS Modules</strong>.
        </p>

        <p>
          All development was done with <strong>responsiveness</strong> in mind,
          ensuring a clean layout on mobile, tablet, and desktop. The navigation
          automatically adjusts its layout for smaller screens, and all content
          areas adapt their padding and font sizes appropriately.
        </p>

        <p>
          <strong>CSS Modules</strong> with SCSS provide scoped styling for each
          component, preventing naming collisions while maintaining a flat
          structure that's independent of the component hierarchy. All styling
          uses a centralized <code>_variables</code> file for colors, spacing,
          typography, and responsive breakpoints.
        </p>

        <p>
          The application uses <strong>custom React hooks</strong> for API
          interactions: <code>useRandomJoke</code> for fetching random jokes
          with refetch capability, <code>useJokeById</code> for retrieving
          specific jokes by ID, and <code>useSearchJokes</code> for searching
          with <strong>pagination support</strong>.
        </p>

        <p>
          All user-facing text (except for the text on this page which I lazily
          put in a bunch of <code>{"<p>"}</code> components) is managed through
          a <strong>centralized translations file</strong>, making the
          application i18n-ready and allowing for easy content updates without
          touching component code.
        </p>

        <p>
          The site integrates with the{" "}
          <a
            href="https://icanhazdadjoke.com/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            icanhazdadjoke.com API
          </a>
          , implementing proper headers for JSON responses and error handling
          for failed requests. All API calls are abstracted into a service
          layer, separating data fetching concerns from component logic.
        </p>
      </div>
    </div>
  );
};
