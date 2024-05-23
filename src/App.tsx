import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

import AFilmPage from "./pages/Filmpages/AFilmPage";
import FilmPage from "./pages/Filmpages/FilmPage";

import CharachterPage from "./pages/Charachterpages/CharachterPage";
import ACharachterPage from "./pages/Charachterpages/ACharachterPage";
import "./assets/scss/App.scss";
import NotFoundpage from "./pages/NotFoundpage";



function App() {


  return (
    <Container id="app">
      <Navigation />
        <Container>
          <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/films" element={<FilmPage />} />
			  <Route path="/films/:id" element={<AFilmPage />} />

              <Route path="/people" element={<CharachterPage />} />
			  <Route path="/people/:id" element={<ACharachterPage />} />

			  <Route path="*" element={<NotFoundpage />} />



          </Routes>
        </Container>
    </Container>
  )
}

export default App
