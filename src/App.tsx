import "./assets/scss/App.scss";
import { Routes, Route } from "react-router-dom";
import  Container  from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

function App() {
  

  return (
    <Container id="app">
      <Navigation />
        <Container>
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
    </Container>
  )
}

export default App
