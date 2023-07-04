import "./Menu.css";
import heroMenu from "../../assets/heroMenu.webp";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Nav, Container } from "react-bootstrap";
import {
  SUBS,
  Salads,
  Desserts,
  Drinks,
  Breads,
  Additionals,
  Sauces,
  Vegetables,
  Cheeses,
  Seasons,
} from "./importItems";
import Subs from "../../components/Items/Subs/Subs";
import DrinksItem from "../../components/Items/Drinks/Drinks";
import Toast from 'react-bootstrap/Toast';

const SubwayMenu = () => {
  const [item, setItem] = useState("");
  const [ShoppingCart, setShoppingCart] = useState([]);

  const addToCart = (item) => {
    const storedCart = sessionStorage.getItem("ShoppingCart");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    cartItems.push(item);
    
    if (storedCart) {
      if (JSON.parse(storedCart) != cartItems) {
        setShoppingCart(cartItems);
        sessionStorage.setItem("ShoppingCart", JSON.stringify(cartItems));
      } else setShoppingCart(JSON.parse(storedCart));
    } else {
      sessionStorage.setItem("ShoppingCart", JSON.stringify(cartItems));
    }
  };

  return (
    <div>
      <Header />
      <section className="heroMenu">
        <img className="img-fluid" src={heroMenu}></img>
      </section>
      <Nav
        variant="underline"
        defaultActiveKey="#item-1"
        id="navScrollBox"
        className="navScrollBox sticky-top border-bottom border-top snapsInline"
      >
        <Nav.Item>
          <Nav.Link href="#item-1" className="px-2">
            Promoções
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-2" className="px-2">
            Lançamentos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-3" className="px-2">
            SUBs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-4" className="px-2">
            Combos SUBs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-5" className="px-2">
            Saladas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-6" className="px-2">
            Combos Saladas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-7" className="px-2">
            Sobremesas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-8" className="px-2">
            Bebidas
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <section className="menu">
        <Container>
          <Row>
            <Col>
              <div
                data-bs-spy="scroll"
                data-bs-target="#navScrollBox"
                data-bs-smooth-scroll="true"
                className="scrollspy"
                tabIndex="0"
              >
                <Subs rowID="item-3" handleAddToCart={addToCart} />
                <DrinksItem rowID="item-8" handleAddToCart={addToCart} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default SubwayMenu;
