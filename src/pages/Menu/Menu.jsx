import "./Menu.css";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Nav, Card, Container } from "react-bootstrap";

const SubwayMenu = () => {
  const [subwayMenu, setSubwayMenu] = useState([]);

  useEffect(() => {
    // Verificar se há dados no Local Storage ao montar o componente
    const storedMenu = localStorage.getItem("subwayMenu");
    if (storedMenu) {
      setSubwayMenu(JSON.parse(storedMenu));
    } else {
      // Caso contrário, inicialize o menu com dados padrão
      const initialMenu = [
        { id: 1, name: "Frango Teriyaki" },
        { id: 2, name: "Italiano B.M.T." },
        { id: 3, name: "Vegetariano" },
        { id: 4, name: "Frango CreamCheese" },
      ];
      setSubwayMenu(initialMenu);
      localStorage.setItem("subwayMenu", JSON.stringify(initialMenu));
    }
  }, []);

  return (
    <div>
      <Header />
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
            Wraps
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-6" className="px-2">
            Saladas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-7" className="px-2">
            Combos Saladas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-8" className="px-2">
            Sobremesas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#item-9" className="px-2">
            Bebidas
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <section className="menu">
        <Container>
          <h1>Menu Subway</h1>
          <div className="row">
            <div className="col-8">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navScrollBox"
                data-bs-smooth-scroll="true"
                className="scrollspy"
                tabIndex="0"
              >
                <Row id="item-1">
                  <h4>Promoções</h4>
                  {subwayMenu.map((lanche) => (
                    <Col xl={6} md={6} sm={12} key={lanche.id}>
                      <Card style={{ width: "50vw" }}>
                        <Card.Body>
                          <Card.Title>{lanche.name}</Card.Title>
                          <span>{localStorage.getItem(subwayMenu)}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-2">
                  <h4>Promoções</h4>
                  {subwayMenu.map((lanche) => (
                    <Col xl={6} md={6} sm={12} key={lanche.id}>
                      <Card style={{ width: "50vw" }}>
                        <Card.Body>
                          <Card.Title>{lanche.name}</Card.Title>
                          <span>{localStorage.getItem(subwayMenu)}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-3">
                  <h4>Promoções</h4>
                  {subwayMenu.map((lanche) => (
                    <Col xl={6} md={6} sm={12} key={lanche.id}>
                      <Card style={{ width: "50vw" }}>
                        <Card.Body>
                          <Card.Title>{lanche.name}</Card.Title>
                          <span>{localStorage.getItem(subwayMenu)}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-4">
                  <h4>Promoções</h4>
                  {subwayMenu.map((lanche) => (
                    <Col xl={6} md={6} sm={12} key={lanche.id}>
                      <Card style={{ width: "50vw" }}>
                        <Card.Body>
                          <Card.Title>{lanche.name}</Card.Title>
                          <span>{localStorage.getItem(subwayMenu)}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-5">
                  <h4>Promoções</h4>
                  {subwayMenu.map((lanche) => (
                    <Col xl={6} md={6} sm={12} key={lanche.id}>
                      <Card style={{ width: "50vw" }}>
                        <Card.Body>
                          <Card.Title>{lanche.name}</Card.Title>
                          <span>{localStorage.getItem(subwayMenu)}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-6">
                  <h4>Promoções</h4>
                  {subwayMenu.map((lanche) => (
                    <Col xl={6} md={6} sm={12} key={lanche.id}>
                      <Card style={{ width: "50vw" }}>
                        <Card.Body>
                          <Card.Title>{lanche.name}</Card.Title>
                          <span>{localStorage.getItem(subwayMenu)}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  );
};

export default SubwayMenu;
