import "./Menu.css";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Nav, Card, Container } from "react-bootstrap";

const SubwayMenu = () => {
  const [subwayMenu, setSubwayMenu] = useState([]);
  // const [images, setImages] = useState([]);

  useEffect(() => {
    const SUBS = [
      { 
        id: 1, 
        name: "Sub B.M.T Italiano",
        description: "O sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha.",
        imgSub15: "",
        imgSub30: "",
        imgCombo15: "",
        imgCombo30: "",
        price15: 21.50,
        price30: 36.50,
        priceCombo15: 32.40,
        priceCombo30: 51.90,
      },
      { 
        id: 1, 
        name: "Sub B.M.T Italiano",
        description: "O sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha.",
        imgSub15: "",
        imgSub30: "",
        imgCombo15: "",
        imgCombo30: "",
        price15: 21.50,
        price30: 36.50,
        priceCombo15: 32.40,
        priceCombo30: 51.90,
      },
    ];

    const Salads = [
      { 
        id: 1, 
        name: "Salada B.M.T Italiano",
        description: "O sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha.",
        imgSub15: "",
        imgSub30: "",
        imgCombo15: "",
        imgCombo30: "",
        price15: 21.50,
        price30: 36.50,
        priceCombo15: 32.40,
        priceCombo30: 51.90,
      },
    ];

    const setItem = (localKey, list) => {
      const storedMenu = localStorage.getItem(localKey);
    if (storedMenu) {
      setSubwayMenu(JSON.parse(storedMenu));
    } else {
      setSubwayMenu(list);
      localStorage.setItem(localKey, JSON.stringify(list));
    }
    }

    setItem(subwayMenu, SUBS);
    setItem(subwayMenu, Salads);
    
  }, []);
 

  useEffect(() => {
    const src15 = "../../assets/Itens/Subs/15/";
    const src30 = "../../assets/Itens/Subs/30/";
    const srcCombo15 = "../../assets/Itens/Subs/combo15/";
    const srcCombo30 = "../../assets/Itens/Subs/combo30/";
    const srcSalads = "../../assets/Itens/Saladas/salada/";
    const srcSaladsCombo = "../../assets/Itens/Saladas/comboSalada/";
    const srcDesserts = "../../assets/Itens/Sobremesas/";
    const srcDrinks = "../../assets/Itens/Bebidas/";


    const subs15img = [
      `${src15}carneDefumada.png`,
      `${src15}carneSecaCreamCheese.png`,
      `${src15}carneSupreme.png`,
      `${src15}daQuebrada.png`,
      `${src15}frango.png`,
      `${src15}frangoDefumadoCreamCheese.png`,
      `${src15}frangoEmpanado.png`,
      `${src15}frangoSuperBacon.png`,
      `${src15}frangoTeriyaki.png`,
      `${src15}steakCheddarCremoso.png`,
      `${src15}steakChurrasco.png`,
      `${src15}teriyakiVeg.png`,
      `${src15}vegetariano.png`,
    ];

    const subsCombo15img = [
      `${srcCombo15}carneDefumada.png`,
      `${srcCombo15}carneSecaCreamCheese.png`,
      `${srcCombo15}carneSupreme.png`,
      `${srcCombo15}daQuebrada.png`,
      `${srcCombo15}frango.png`,
      `${srcCombo15}frangoDefumadoCreamCheese.png`,
      `${srcCombo15}frangoEmpanado.png`,
      `${srcCombo15}frangoSuperBacon.png`,
      `${srcCombo15}frangoTeriyaki.png`,
      `${srcCombo15}steakCheddarCremoso.png`,
      `${srcCombo15}steakChurrasco.png`,
      `${srcCombo15}teriyakiVeg.png`,
      `${srcCombo15}vegetariano.png`,
    ];

    const subs30img = [
      `${src30}carneDefumada.png`,
      `${src30}carneSecaCreamCheese.png`,
      `${src30}carneSupreme.png`,
      `${src30}daQuebrada.png`,
      `${src30}frango.png`,
      `${src30}frangoDefumadoCreamCheese.png`,
      `${src30}frangoEmpanado.png`,
      `${src30}frangoSuperBacon.png`,
      `${src30}frangoTeriyaki.png`,
      `${src30}steakCheddarCremoso.png`,
      `${src30}steakChurrasco.png`,
      `${src30}teriyakiVeg.png`,
      `${src30}vegetariano.png`,
    ];

    const subsCombo30img = [
      `${srcCombo30}carneDefumada.png`,
      `${srcCombo30}carneSecaCreamCheese.png`,
      `${srcCombo30}carneSupreme.png`,
      `${srcCombo30}daQuebrada.png`,
      `${srcCombo30}frango.png`,
      `${srcCombo30}frangoDefumadoCreamCheese.png`,
      `${srcCombo30}frangoEmpanado.png`,
      `${srcCombo30}frangoSuperBacon.png`,
      `${srcCombo30}frangoTeriyaki.png`,
      `${srcCombo30}steakCheddarCremoso.png`,
      `${srcCombo30}steakChurrasco.png`,
      `${srcCombo30}teriyakiVeg.png`,
      `${srcCombo30}vegetariano.png`,
    ];

    const saladsimg = [
      `${srcSalads}carneDefumada.png`,
      `${srcSalads}carneSecaCreamCheese.png`,
      `${srcSalads}carneSupreme.png`,
      `${srcSalads}daQuebrada.png`,
      `${srcSalads}frango.png`,
      `${srcSalads}frangoDefumadoCreamCheese.png`,
      `${srcSalads}frangoEmpanado.png`,
      `${srcSalads}frangoSuperBacon.png`,
      `${srcSalads}frangoTeriyaki.png`,
      `${srcSalads}steakCheddarCremoso.png`,
      `${srcSalads}steakChurrasco.png`,
      `${srcSalads}teriyakiVeg.png`,
      `${srcSalads}vegetariana.png`,
    ];

    const saladsComboimg = [
      `${srcSaladsCombo}carneDefumada.png`,
      `${srcSaladsCombo}carneSecaCreamCheese.png`,
      `${srcSaladsCombo}carneSupreme.png`,
      `${srcSaladsCombo}daQuebrada.png`,
      `${srcSaladsCombo}frango.png`,
      `${srcSaladsCombo}frangoDefumadoCreamCheese.png`,
      `${srcSaladsCombo}frangoEmpanado.png`,
      `${srcSaladsCombo}frangoSuperBacon.png`,
      `${srcSaladsCombo}frangoTeriyaki.png`,
      `${srcSaladsCombo}steakCheddarCremoso.png`,
      `${srcSaladsCombo}steakChurrasco.png`,
      `${srcSaladsCombo}teriyakiVeg.png`,
      `${srcSaladsCombo}vegetariana.png`,
    ];

    const dessertsimg = [
      `${srcDesserts}kit3Cookies.png`,
      `${srcDesserts}kit6Cookies.png`,
      `${srcDesserts}kit9Cookies.png`,
      `${srcDesserts}lamus.png`,
      `${srcDesserts}lamusPrestigio.png`,
    ]

    const drinksimg = [
      `${srcDrinks}aguaMineral.png`,
      `${srcDrinks}refrigerantes.png`,
      `${srcDrinks}sucos.png`,
    ]

    // Promise.all (
    //   subs15img.map((img) => import(`${img}`)),
    //   subs30img.map((img) => import(`${img}`)),
    //   subsCombo15img.map((img) => import(`${img}`)),
    //   subsCombo30img.map((img) => import(`${img}`)),
    //   saladsimg.map((img) => import(`${img}`)),
    //   saladsComboimg.map((img) => import(`${img}`)),
    //   dessertsimg.map((img) => import(`${img}`)),
    //   drinksimg.map((img) => import(`${img}`)),
    // )
    // .then((importedImages) => {
    //   setImages(importedImages);
    // })
    // .catch((error) => {
    //   console.error('Erro ao importar as imagens:', error);
    // })
})

  

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
            Acompanhamentos
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
