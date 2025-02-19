import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>

            <Navbar.Brand as={Link} to ="/" className="font-starwars">May the 🔍 be with you</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto font-starwars">

                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                    <Nav.Link as={NavLink} to="/people">Characters</Nav.Link>
					<Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
					<Nav.Link as={NavLink} to="/species">Species</Nav.Link>
					<Nav.Link as={NavLink} to="/starships">Starships</Nav.Link>
					<Nav.Link as={NavLink} to="/vehicles">Vehicles</Nav.Link>

                </Nav>
                </Navbar.Collapse>

        </Container>
      </Navbar>

  )
}

export default Navigation
