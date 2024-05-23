import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container>

            <Navbar.Brand as={Link} to ="/" className="font-starwars">May the 🔍 be with you</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto font-starwars">

                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                    <Nav.Link as={NavLink} to="/people">Charachters</Nav.Link>


                </Nav>
                </Navbar.Collapse>

        </Container>
      </Navbar>

  )
}

export default Navigation
