import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img alt="Logo Subway" src={Logo} height="24" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className="borderBottom">
            <a href="/">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Subway
              </Offcanvas.Title>
            </a>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto ms-auto borderBottom mb-xl-0 mb-lg-0 mb-md-4 mb-4">
              <NavLink to="/menu" className="nav-link" activeclassname="active">
                Cardápio
              </NavLink>
              <NavLink
                to="/restaurants"
                className="nav-link"
                activeclassname="active"
              >
                Restaurantes
              </NavLink>
              <NavLink
                to="/aboutUs"
                className="nav-link"
                activeclassname="active"
              >
                Sobre nós
              </NavLink>
              <NavLink
                to="/carrers"
                className="nav-link"
                activeclassname="active"
              >
                Carreiras
              </NavLink>
              <NavLink
                to="/franchise"
                className="nav-link"
                activeclassname="active"
              >
                Franquias
              </NavLink>
              <NavLink
                to="/register"
                className="nav-link"
                activeclassname="active"
              >
                Cadastre-se
              </NavLink>
              <NavLink
                to="/login"
                className="nav-link"
                activeclassname="active"
              >
                Login
              </NavLink>
            </Nav>

            <a href="/menu">
              <Button
                btnType="button"
                content="Fazer pedido"
                bgColor="var(--yellow-800)"
                border="1px solid var(--yellow-800)"
                color="var(--light)"
                padding=".5rem 2rem"
                bdRadius="200px"
                fontWeight="700"
                bgColorHover="var(--yellow-900)"
                borderHover="1px solid var(--yellow-900)"
              />
            </a>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
