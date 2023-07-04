import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { faUser, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Card, Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";
import Icon from "../Icon/Icon";
import ButtonSubway from "../Button/Button";
import Popover from "../Popover/Popover"



function Header() {
  const [showCartOffCanvas, setShowCartOffCanvas] = useState(false);
  const [ShoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("ShoppingCart");
    if (data) {
      setShoppingCart(JSON.parse(data));
    } else {
      setShoppingCart([]);
    }
  }, [showCartOffCanvas]);

  const handleCloseCartOffCanvas = () => setShowCartOffCanvas(false);
  const handleShowCartOffCanvas = () => setShowCartOffCanvas(true);

  // Função para deletar item do carrinho
  const deleteItem = (name) => {
    const newShoppingCart = ShoppingCart.filter((item) => item.itemName !== name);
    setShoppingCart(newShoppingCart);
    sessionStorage.setItem("ShoppingCart", JSON.stringify(newShoppingCart));
  };


  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img alt="Logo Subway" src={Logo} height="24" />
            </Navbar.Brand>
          </Link>
          <div className="navBarIcons">
            <div className="navNavToggle">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg}`}
                placement="start"
              >
                <Offcanvas.Header closeButton className="borderBottom">
                  <a href="/">
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      Subway
                    </Offcanvas.Title>
                  </a>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="me-auto ms-auto borderBottom mb-xl-0 mb-lg-0 mb-md-4 mb-4 me-5">
                    <NavLink
                      to="/menu"
                      className={(navData) => (navData.isActive ? "nav-link active-style" : 'nav-link')}
                    >
                      Cardápio
                    </NavLink>
                    <NavLink
                      to="/aboutUs"
                      className={(navData) => (navData.isActive ? "nav-link active-style" : 'nav-link')}
                    >
                      Sobre nós
                    </NavLink>
                    <NavLink
                      to="/franchise"
                      className={(navData) => (navData.isActive ? "nav-link active-style" : 'nav-link')}
                    >
                      Franquias
                    </NavLink>
                  </Nav>
                  <Link to="/menu" className="link">
                    <ButtonSubway
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
                  </Link>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
            <div className="headerIcons">
              <Popover
                icon={faUser}
                content={
                  <>
                    <Link to="/login" className="link">
                      Entrar
                    </Link>
                    <hr />
                    <Link
                      to="/register"
                      className="link"
                    >
                      Cadastrar
                    </Link>
                    <hr />
                    <Link
                      to="/profile"
                      className="link"
                    >
                      Perfil
                    </Link>
                    <hr />
                  </>
                }
              />
              <Button
                variant="outline-secondary"
                onClick={handleShowCartOffCanvas}
                className="btn"
                aria-controls={`offcanvasCart-expand-lg`}
              >
                <Icon icon={faShoppingCart} iconSize="lg" />
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        show={showCartOffCanvas}
        onHide={handleCloseCartOffCanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {ShoppingCart.length === 0 ? (
              <span>O carrinho está vazio.</span>
          ) : (
            ShoppingCart.map((item) => (
              <Card className="mb-3" key={item.id}>
                <Card.Body>
                  <Card.Title>{item.itemName}</Card.Title>
                  {item.size ? (
                    <div className="itemResume d-flex flex-column">
                      <small className="mb-1 text-muted">
                        Tamanho: {item.size}
                      </small>
                      <small className="mb-1 text-muted">
                        Pão: {item.bread}
                      </small>
                      <small className="mb-1 text-muted">
                        Tamanho: {item.cheese}
                      </small>
                    </div>
                  ) : (
                    " "
                  )}
                  <small></small>
                  <small>R${" "}{item.itemPrice.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}</small>
                  <Button
                    className="deleteIcon"
                    onClick={() => deleteItem(item.itemName)}
                  >
                    <Icon icon={faTrashCan} iconSize="lg" />
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
