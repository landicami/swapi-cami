import "./assets/scss/App.scss";
import { Routes, Route } from "react-router-dom";
import  Container  from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import MoviePage from "./pages/MoviePage";
import CharachterPage from "./pages/CharachterPage";

function App() {
  

  return (
    <Container id="app">
      <Navigation />
        <Container>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviePage />} />
              <Route path="/charachters" element={<CharachterPage />} />
          </Routes>
        </Container>
    </Container>
  )
}

export default App
