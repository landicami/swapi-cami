import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

import ACharachterPage from "./pages/Charachterpages/ACharachterPage";
import AFilmPage from "./pages/Filmpages/AFilmPage";
import APlanetPage from "./pages/Planetpages/APlanetPage";

import CharachterPage from "./pages/Charachterpages/CharachterPage";
import FilmPage from "./pages/Filmpages/FilmPage";
import PlanetPage from "./pages/Planetpages/PlanetPage";

import NotFoundpage from "./pages/NotFoundpage";

import "./assets/scss/App.scss";

function App() {


  return (
	<>
	<Navigation />

    <Container id="app">
        <Container>
          <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/films" element={<FilmPage />} />
			  <Route path="/films/:id" element={<AFilmPage />} />

			  <Route path="/planets" element={<PlanetPage />} />
			  <Route path="/planets/:id" element={<APlanetPage />} />

              <Route path="/people" element={<CharachterPage />} />
			  <Route path="/people/:id" element={<ACharachterPage />} />

			  <Route path="*" element={<NotFoundpage />} />

          </Routes>
        </Container>
    </Container>
	</>
  )
}

export default App
