import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import AFilmPage from "./pages/AFilmPage";
import FilmPage from "./pages/FilmPage";
import CharachterPage from "./pages/CharachterPage";
import "./assets/scss/App.scss";


function App() {


  return (
    <Container id="app">
      <Navigation />
        <Container>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/films" element={<FilmPage />} />
			  <Route path="/films/:id" element={<AFilmPage />} />
              <Route path="/charachters" element={<CharachterPage />} />
          </Routes>
        </Container>
    </Container>
  )
}

export default App
