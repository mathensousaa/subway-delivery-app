import "./Menu.css";
import heroMenu from "../../assets/heroMenu.webp";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Nav, Card, Container } from "react-bootstrap";

const SubwayMenu = () => {
  const [SubsMenu, setSubsMenu] = useState([]);
  const [SaladsMenu, setSaladsMenu] = useState([]);
  const [DessertsMenu, setDessertsMenu] = useState([]);
  const [DrinksMenu, setDrinksMenu] = useState([]);

  const src15 = "/assets/Itens/Subs/15/";
  const src30 = "/assets/Itens/Subs/30/";
  const srcCombo15 = "/assets/Itens/Subs/combo15/";
  const srcCombo30 = "/assets/Itens/Subs/combo30/";
  const srcSalads = "/assets/Itens/Saladas/salada/";
  const srcSaladsCombo = "/assets/Itens/Saladas/comboSalada/";
  const srcDesserts = "/assets/Itens/Sobremesas/";
  const srcDrinks = "./assets/Itens/Bebidas/";

  const subs15img = [
    `${src15}BMT.png`,
    `${src15}carneDefumadaCreamCheese.png`,
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
    `${srcCombo15}BMT.png`,
    `${srcCombo15}carneDefumadaCreamCheese.png`,
    `${srcCombo15}carneSupreme.png`,
    `${srcCombo15}frango.png`,
    `${srcCombo15}frangoDefumadoCreamCheese.png`,
    `${srcCombo15}frangoTeriyaki.png`,
    `${srcCombo15}steakCheddarCremoso.png`,
    `${srcCombo15}steakChurrasco.png`,
    `${srcCombo15}vegetariano.png`,
  ];

  const subs30img = [
    `${src30}BMT.png`,
    `${src30}carneDefumadaCreamCheese.png`,
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
    `${srcCombo30}BMT.png`,
    `${srcCombo30}carneDefumadaCreamCheese.png`,
    `${srcCombo30}carneSupreme.png`,
    `${srcCombo30}frango.png`,
    `${srcCombo30}frangoDefumadoCreamCheese.png`,
    `${srcCombo30}frangoEmpanado.png`,
    `${srcCombo30}frangoTeriyaki.png`,
    `${srcCombo30}steakCheddarCremoso.png`,
    `${srcCombo30}steakChurrasco.png`,
    `${srcCombo30}vegetariano.png`,
  ];

  const saladsimg = [
    `${srcSalads}BMT.png`,
    `${srcSalads}carneDefumadaCreamCheese.png`,
    `${srcSalads}carneSupreme.png`,
    `${srcSalads}frango.png`,
    `${srcSalads}frangoDefumadoCreamCheese.png`,
    `${srcSalads}frangoEmpanado.png`,
    `${srcSalads}frangoTeriyaki.png`,
    `${srcSalads}steakChurrasco.png`,
    `${srcSalads}vegetariana.png`,
  ];

  const saladsComboimg = [
    `${srcSaladsCombo}BMT.png`,
    `${srcSaladsCombo}carneDefumadaCreamCheese.png`,
    `${srcSaladsCombo}carneSupreme.png`,
    `${srcSaladsCombo}frango.png`,
    `${srcSaladsCombo}frangoDefumadoCreamCheese.png`,
    `${srcSaladsCombo}frangoEmpanado.png`,
    `${srcSaladsCombo}frangoTeriyaki.png`,
    `${srcSaladsCombo}steakCheddarCremoso.png`,
    `${srcSaladsCombo}steakChurrasco.png`,
    `${srcSaladsCombo}vegetariana.png`,
  ];

  const dessertsimg = [
    `${srcDesserts}lamus.png`,
    `${srcDesserts}lamusPrestigio.png`,
    `${srcDesserts}cookie.jpg`,
    `${srcDesserts}kit3Cookies.png`,
    `${srcDesserts}kit6Cookies.png`,
    `${srcDesserts}kit9Cookies.png`,
  ]

  const drinksimg = [
    `${srcDrinks}aguaMineral.png`,
    `${srcDrinks}cocaCola.png`,
    `${srcDrinks}cocaColaZero.png`,
    `${srcDrinks}fantaGuarana.png`,
    `${srcDrinks}cocaCola600.png`,
    `${srcDrinks}delValleLaranja.png`,
    `${srcDrinks}delValleMaracuja.png`,
    `${srcDrinks}delVallePessego.png`,
    `${srcDrinks}delValleUva.png`,
  ]

  useEffect(() => {
    const SUBS = [
      { 
        id: 0, 
        name: "Sub B.M.T Italiano",
        description: "O sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha.",
        serves: 1,
        imgSub15: subs15img[0],
        imgSub30: subs30img[0],
        imgCombo15: subsCombo15img[0],
        imgCombo30: subsCombo30img[0],
        price15: 21.50,
        price30: 36.50,
        priceCombo15: 32.40,
        priceCombo30: 51.90,
        new: false,
      },
      { 
        id: 1, 
        name: "Sub Carne Defumada com Cream Cheese",
        description: "Servido em pão fresquinho, deliciosa carne defumada com cream cheese",
        serves: 1,
        imgSub15: subs15img[1],
        imgSub30: subs30img[1],
        imgCombo15: subsCombo15img[1],
        imgCombo30: subsCombo30img[1],
        price15: 21.50,
        price30: 36.50,
        priceCombo15: 33.70,
        priceCombo30: 54.50,
        new: false,
      },
      { 
        id: 2, 
        name: "Sub Carne Seca com Cream Cheese",
        description: "Pão, Carne Seca com Cream Cheese, Queijo, Vegetais e molhos a sua escolha.",
        serves: 1,
        imgSub15: subs15img[2],
        imgSub30: subs30img[2],
        imgCombo15: subs15img[2],
        imgCombo30: subs30img[2],
        price15: 26.50,
        price30: 41.50,
        priceCombo15: 38.70,
        priceCombo30: 59.50,
        new: true,
      },
      { 
        id: 3, 
        name: "Sub Carne Supreme",
        description: "Sub com suculentas tiras de carnes? Temos. Acompanhado do delicioso molho Supreme e cebola crispy. E claro, nosso pão sempre fresquinho, queijo e vegetais à sua escolha.",
        serves: 1,
        imgSub15: subs15img[3],
        imgSub30: subs30img[3],
        imgCombo15: subsCombo15img[2],
        imgCombo30: subsCombo30img[2],
        price15: 24.50,
        price30: 41.50,
        priceCombo15: 36.30,
        priceCombo30: 59.70,
        new: false,
      },
    ];

    const Salads = [
      { 
        id: 0, 
        name: "Salada B.M.T Italiano",
        description: "Seus vegetais preferidos com fatias de salame, peperoni e presunto",
        serves: 1,
        imgSalad: saladsimg[0],
        imgCombo: saladsComboimg[0],
        price: 23.50,
        priceCombo: 38.30,
      },
      { 
        id: 1, 
        name: "Salada Carne Defumada com Cream Cheese",
        description: "Seus vegetais preferidos com cubos de carne defumada com cream cheese.",
        serves: 1,
        imgSalad: saladsimg[1],
        imgCombo: saladsComboimg[1],
        price: 23.50,
        priceCombo: 39.60,
      },
      { 
        id: 2, 
        name: "Salada Carne Supreme",
        description: "Seus vegetais preferidos com suculentas tiras de carnes, acompanhados do delicioso molho Supreme.",
        serves: 1,
        imgSalad: saladsimg[2],
        imgCombo: saladsComboimg[2],
        price: 26.50,
        priceCombo: 42.20,
      },
      { 
        id: 3, 
        name: "Salada Frango",
        description: "Seus vegetais preferidos com frango levemente temperado e assado na perfeição.",
        serves: 1,
        imgSalad: saladsimg[3],
        imgCombo: saladsComboimg[3],
        price: 20.00,
        priceCombo: 33.60,
      },
    ];

    const Desserts = [
      {
        id: 0,
        name: "Lamus",
        description: "Deliciosa mousse de chocolate com raspas de chocolate e pedaços de cookie.",
        img: dessertsimg[0],
        price: 10.30,
      },
      {
        id: 1,
        name: "Lamus Prestígio",
        description: "Deliciosa Mousse de coco com cobertura de chocolate.",
        img: dessertsimg[1],
        price: 13.30,
      },
      {
        id: 2,
        name: "Cookie",
        description: "Seu Sub favorito sempre combina com um delicioso Cookie do Subway! Experimente.",
        img: dessertsimg[2],
        price: 4.50,
      },
      {
        id: 3,
        name: "Kit 3 Cookies",
        description: "Seu Sub favorito sempre combina com um delicioso Cookie do Subway! Experimente.",
        img: dessertsimg[3],
        price: 8.80,
      },
      {
        id: 4,
        name: "Kit 6 Cookies",
        description: "Seu Sub favorito sempre combina com um delicioso Cookie do Subway! Experimente.",
        img: dessertsimg[4],
        price: 16.80,
      },
      {
        id: 5,
        name: "Kit 9 Cookies",
        description: "Seu Sub favorito sempre combina com um delicioso Cookie do Subway! Experimente.",
        img: dessertsimg[5],
        price: 24.80,
      },
    ];

    const Drinks = [
      {
        id: 0,
        name: "Água Mineral",
        description: "Garrafa 500ml.",
        img: drinksimg[0],
        price: 4.50,
      },
      {
        id: 1,
        name: "Coca-Cola",
        description: "Lata 350ml.",
        img: drinksimg[1],
        price: 6.50,
      },
      {
        id: 2,
        name: "Coca-Cola Zero",
        description: "Lata 350ml.",
        img: drinksimg[2],
        price: 6.50,
      },
      {
        id: 3,
        name: "Fanta Guaraná",
        description: "Lata 350ml.",
        img: drinksimg[3],
        price: 6.50,
      },
      {
        id: 4,
        name: "Coca-Cola 600",
        description: "Garrafa 600ml.",
        img: drinksimg[4],
        price: 8.50,
      },
      {
        id: 5,
        name: "Del Valle Fruit Laranja",
        description: "Garrafa 450ml.",
        img: drinksimg[5],
        price: 7.50,
      },
      {
        id: 6,
        name: "Del Valle Nectar Maracujá",
        description: "Lata 290ml.",
        img: drinksimg[6],
        price: 6.50,
      },
      {
        id: 7,
        name: "Del Valle Nectar Pêssego",
        description: "Lata 290ml.",
        img: drinksimg[7],
        price: 6.50,
      },
      {
        id: 8,
        name: "Del Valle Nectar Uva",
        description: "Lata 290ml.",
        img: drinksimg[8],
        price: 6.50,
      },
    ];

    const setLocalStorage = (localKey, list, setter) => {
      const storedMenu = localStorage.getItem(localKey);
    if (storedMenu) {
      setter(JSON.parse(storedMenu));
    } else {
      setter(list);
      localStorage.setItem(localKey, JSON.stringify(list));
    }
    }

    setLocalStorage("SubsMenu", SUBS, setSubsMenu);
    setLocalStorage("SaladsMenu", Salads, setSaladsMenu);
    setLocalStorage("DessertsMenu", Desserts, setDessertsMenu);
    setLocalStorage("DrinksMenu", Drinks, setDrinksMenu);
    
  }, []);

  function limitCharacter(text, limit) {
    if(window.innerWidth < 576 ) {
      if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit) + "...";
    }
    else
      return text;
  }
  

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
            <Col >
              <div
                data-bs-spy="scroll"
                data-bs-target="#navScrollBox"
                data-bs-smooth-scroll="true"
                className="scrollspy"
                tabIndex="0"
              >
                <Row id="item-3" className="mb-5">
                  <h4 className="mb-3">Subs</h4>
                  {SubsMenu.map((sub) => (
                    <Col xl={6} lg={6} md={12} sm={12} key={sub.id} className="mb-4">
                      <Card>
                        <Card.Img src={sub.imgSub15}/>
                        <Card.Body className="cardContent">
                          <Card.Title>{sub.name}</Card.Title>
                          <small className="mb-2">{limitCharacter(sub.description, 50)}</small>
                          <small className="mb-5 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">Serve {sub.serves} {sub.server === 1 ? "pessoa" : "pessoa"}</small>
                          <span className="price">A partir de R$ {sub.price15.toLocaleString('pt-BR')}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-4" className="mb-5">
                  <h4>Combos Subs</h4>
                  {SubsMenu.map((sub) => (
                    <Col xl={6} md={6} sm={12} key={sub.id} className="mb-4">
                      <Card>
                        <Card.Img src={sub.imgCombo15}/>
                        <Card.Body className="cardContent">
                          <Card.Title>{sub.name}</Card.Title>
                          <small className="mb-2">{sub.description}</small>
                          <small className="mb-5 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">Serve {sub.serves} {sub.server === 1 ? "pessoa" : "pessoa"}</small>
                          <span className="price">A partir de R$ {sub.priceCombo15.toLocaleString('pt-BR')}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-5" className="mb-5">
                  <h4>Saladas</h4>
                  {SaladsMenu.map((salad) => (
                    <Col xl={6} md={6} sm={12} key={salad.id} className="mb-4">
                    <Card>
                      <Card.Img src={salad.imgSalad}/>
                      <Card.Body className="cardContent">
                        <Card.Title>{salad.name}</Card.Title>
                        <small className="mb-2">{salad.description}</small>
                        <small className="mb-5 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">Serve {salad.serves} {salad.server === 1 ? "pessoa" : "pessoa"}</small>
                        <span className="price">A partir de R$ {salad.price.toLocaleString('pt-BR')}</span>
                      </Card.Body>
                    </Card>
                  </Col>
                  ))}
                </Row>
                <Row id="item-6" className="mb-5">
                  <h4>Combos Saladas</h4>
                  {SaladsMenu.map((salad) => (
                    <Col xl={6} md={6} sm={12} key={salad.id} className="mb-4">
                      <Card>
                        <Card.Img src={salad.imgCombo}/>
                        <Card.Body>
                          <Card.Title>{salad.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-7" className="mb-5">
                  <h4>Sobremesas</h4>
                  {DessertsMenu.map((dessert) => (
                    <Col xl={6} md={6} sm={12} key={dessert.id} className="mb-4">
                      <Card>
                        <Card.Img src={dessert.img}/>
                        <Card.Body>
                          <Card.Title>{dessert.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row id="item-8" className="mb-5">
                  <h4>Bebidas</h4>
                  {DrinksMenu.map((drink) => (
                    <Col xl={6} md={6} sm={12} key={drink.id} className="mb-4">
                      <Card>
                        <Card.Img src={drink.img}/>
                        <Card.Body>
                          <Card.Title>{drink.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
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
