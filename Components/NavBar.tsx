import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link href="/employee/list" passHref>
            <Nav.Link>Employees</Nav.Link>
          </Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
