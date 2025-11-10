import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { RandomPage } from "./pages/RandomPage/RandomPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { JokePage } from "./pages/JokePage/JokePage";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<RandomPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/joke/:id" element={<JokePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
