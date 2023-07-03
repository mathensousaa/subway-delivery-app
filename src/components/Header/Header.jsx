import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import PopoverComponent from "../Popover/Popover";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Card from "../Card/Card";
import BMT from "../../assets/Itens/Subs/15/frangoSuperBacon.png";
import { Link } from "react-router-dom";

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
                to="/aboutUs"
                className="nav-link"
                activeclassname="active"
              >
                Sobre nós
              </NavLink>
              <NavLink
                to="/franchise"
                className="nav-link"
                activeclassname="active"
              >
                Franquias
              </NavLink>
            </Nav>
            <PopoverComponent
              icon={faShoppingCart}
              content={
                <Card
                  cardWidth="10rem"
                  title="B.M.T Italiano"
                  scr={BMT}
                  alt="B.M.T Italiano"
                  cardClass="text-center"
                  bodyClass="p-0"
                  bdRadius="16px"
                />
              }
            />
            
            <PopoverComponent
              icon={faUser}
              content={
                <>
                  <Link
                    to="/login"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Entrar
                  </Link>
                  <hr />
                  <Link
                    to="/register"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Cadastrar
                  </Link>
                  <hr />
                  <Link
                    to="/profile"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Perfil
                  </Link>
                  <hr />
                </>
              }
            />
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
