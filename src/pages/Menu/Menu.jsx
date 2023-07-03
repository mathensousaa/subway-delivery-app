
import "./Menu.css";
import heroMenu from "../../assets/heroMenu.webp";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Nav, Card, Container, Modal } from "react-bootstrap";
import ButtonSubway from "../../components/Button/Button";
import BMT15 from "../../assets/Itens/Subs/15/BMT.png";
import carneDefumada15 from "../../assets/Itens/Subs/15/carneDefumadaCreamCheese.png"
import carneSeca15 from "../../assets/Itens/Subs/15/carneSecaCreamCheese.png"
import carneSupreme15 from "../../assets/Itens/Subs/15/carneSupreme.png"
import daQuebrada15 from "../../assets/Itens/Subs/15/daQuebrada.png"
import frango15 from "../../assets/Itens/Subs/15/frango.png"
import frangoDefumado15 from "../../assets/Itens/Subs/15/frangoDefumadoCreamCheese.png"
import frangoEmpanado15 from "../../assets/Itens/Subs/15/frangoEmpanado.png"
import frangoSuperBacon15 from "../../assets/Itens/Subs/15/frangoSuperBacon.png"
import frangoTeriyaki15 from "../../assets/Itens/Subs/15/frangoTeriyaki.png"
import steakCheddarCremoso15 from "../../assets/Itens/Subs/15/steakCheddarCremoso.png"
import steakChurrasco15 from "../../assets/Itens/Subs/15/steakChurrasco.png"
import teriyakiVeg15 from "../../assets/Itens/Subs/15/teriyakiVeg.png"
import vegetariano15 from "../../assets/Itens/Subs/15/vegetariano.png"
import BMT30 from "../../assets/Itens/Subs/30/BMT.png";
import carneDefumada30 from "../../assets/Itens/Subs/30/carneDefumadaCreamCheese.png"
import carneSeca30 from "../../assets/Itens/Subs/30/carneSecaCreamCheese.png"
import carneSupreme30 from "../../assets/Itens/Subs/30/carneSupreme.png"
import daQuebrada30 from "../../assets/Itens/Subs/30/daQuebrada.png"
import frango30 from "../../assets/Itens/Subs/30/frango.png"
import frangoDefumado30 from "../../assets/Itens/Subs/30/frangoDefumadoCreamCheese.png"
import frangoEmpanado30 from "../../assets/Itens/Subs/30/frangoEmpanado.png"
import frangoSuperBacon30 from "../../assets/Itens/Subs/30/frangoSuperBacon.png"
import frangoTeriyaki30 from "../../assets/Itens/Subs/30/frangoTeriyaki.png"
import steakCheddarCremoso30 from "../../assets/Itens/Subs/30/steakCheddarCremoso.png"
import steakChurrasco30 from "../../assets/Itens/Subs/30/steakChurrasco.png"
import teriyakiVeg30 from "../../assets/Itens/Subs/30/teriyakiVeg.png"
import vegetariano30 from "../../assets/Itens/Subs/30/vegetariano.png"
import BMTCombo15 from "../../assets/Itens/Subs/combo15/BMT.png";
import carneDefumadaCombo15 from "../../assets/Itens/Subs/combo15/carneDefumadaCreamCheese.png"
import carneSupremeCombo15 from "../../assets/Itens/Subs/combo15/carneSupreme.png"
import frangoCombo15 from "../../assets/Itens/Subs/combo15/frango.png"
import frangoDefumadoCombo15 from "../../assets/Itens/Subs/combo15/frangoDefumadoCreamCheese.png"
import frangoTeriyakiCombo15 from "../../assets/Itens/Subs/combo15/frangoTeriyaki.png"
import steakCheddarCremosoCombo15 from "../../assets/Itens/Subs/combo15/steakCheddarCremoso.png"
import steakChurrascoCombo15 from "../../assets/Itens/Subs/combo15/steakChurrasco.png"
import vegetarianoCombo15 from "../../assets/Itens/Subs/combo15/vegetariano.png"
import BMTCombo30 from "../../assets/Itens/Subs/combo30/BMT.png";
import carneDefumadaCombo30 from "../../assets/Itens/Subs/combo30/carneDefumadaCreamCheese.png"
import carneSupremeCombo30 from "../../assets/Itens/Subs/combo30/carneSupreme.png"
import frangoCombo30 from "../../assets/Itens/Subs/combo30/frango.png"
import frangoDefumadoCombo30 from "../../assets/Itens/Subs/combo30/frangoDefumadoCreamCheese.png"
import frangoTeriyakiCombo30 from "../../assets/Itens/Subs/combo30/frangoTeriyaki.png"
import steakCheddarCremosoCombo30 from "../../assets/Itens/Subs/combo30/steakCheddarCremoso.png"
import steakChurrascoCombo30 from "../../assets/Itens/Subs/combo30/steakChurrasco.png"
import vegetarianoCombo30 from "../../assets/Itens/Subs/combo30/vegetariano.png"

const SubwayMenu = () => {

  const [SubsMenu, setSubsMenu] = useState([]);
  const [SaladsMenu, setSaladsMenu] = useState([]);
  const [DessertsMenu, setDessertsMenu] = useState([]);
  const [DrinksMenu, setDrinksMenu] = useState([]);
  const [BreadsMenu, setBreadsMenu] = useState([]);
  const [AdditionalMenu, setAdditionalMenu] = useState([]);
  const [SaucesMenu, setSaucesMenu] = useState([]);
  const [VegetablesMenu, setVegetablesMenu] = useState([]);
  const [CheesesMenu, setCheesesMenu] = useState([]);
  const [SeasonsMenu, setSeasonsMenu] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const src15 = "../../../src/assets/Itens/Subs/15/";
  const src30 = "../../../src/assets/Itens/Subs/30/";
  const srcCombo15 = "../../../src/assets/Itens/Subs/combo15/";
  const srcCombo30 = "../../../src/assets/Itens/Subs/combo30/";
  const srcSalads = "../../../src/assets/Itens/Saladas/salada/";
  const srcSaladsCombo = "../../../src/assets/Itens/Saladas/comboSalada/";
  const srcDesserts = "../../../src/assets/Itens/Sobremesas/";
  const srcDrinks = "../../../src/assets/Itens/Bebidas/";
  const srcBreads = "../../../src/assets/Itens/Lanche/Paes";
  const srcCheeses = "../../../src/assets/Itens/Lanche/Queijos";
  const srcVegetables = "../../../src/assets/Itens/Lanche/Vegetais";
  const srcAdditional = "../../../src/assets/Itens/Lanche/Adicionais";
  const srcSeasons = "../../../src/assets/Itens/Lanche/Temperos";
  const srcSauces = "../../../src/assets/Itens/Lanche/Molhos";


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (item) => {
    setModalOpen(true);
    setSelectedItem(item);
  }
 
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  function limitCharacter(text, limit) {
    if (windowWidth < 576) {
      if (text.length <= limit) {
        return text;
      }
      return text.slice(0, limit) + '...';
    } else {
      return text;
    }
  }

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


  const breadsimg = [
    `${srcBreads}3queijos.png`,
    `${srcBreads}9graos.png`,
    `${srcBreads}italianoBranco.png`,
    `${srcBreads}parmesaoOregano.png`,
  ]


  const cheesesimg = [
    `${srcCheeses}cheddar.png`,
    `${srcCheeses}mussarelaRalada.png`,
    `${srcCheeses}Suico.png`,
  ]


  const vegetablesimg = [
    `${srcVegetables}alface.png`,
    `${srcVegetables}azeitona.png`,
    `${srcVegetables}cebolaRoxa.png`,
    `${srcVegetables}pepino.png`,
    `${srcVegetables}picles.png`,
    `${srcVegetables}pimentao.png`,
    `${srcVegetables}tomate.png`,
  ]


  const additionalimg = [
    `${srcAdditional}bacon.png`,
    `${srcAdditional}cheddarCremoso.png`,
    `${srcAdditional}creamCheese.png`,
    `${srcAdditional}dobroQueijo.png`,
    `${srcAdditional}pepperoni.png`,
    `${srcAdditional}presunto.png`,
    `${srcAdditional}salame.png`,
  ]


  const seasonsimg = [
    `${srcSeasons}azeite.png`,
    `${srcSeasons}mixPimentas.png`,
    `${srcSeasons}vinagre.png`,
  ]


  const saucesimg = [
    `${srcSauces}barbecue.png`,
    `${srcSauces}cebolaAgridoce.png`,
    `${srcSauces}chipotle.png`,
    `${srcSauces}maionese.png`,
    `${srcSauces}maioneseTemperada.png`,
    `${srcSauces}mostardaMel.png`,
    `${srcSauces}parmesao.png`,
    `${srcSauces}supreme.png`,
  ]


  const SUBS = [
    { 
      id: 0, 
      name: "Sub B.M.T Italiano",
      description: "O sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha.",
      serves: 1,
      imgSub15: BMT15,
      imgSub30: BMT30,
      imgCombo15: BMTCombo15,
      imgCombo30: BMTCombo30,
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
      imgSub15: carneDefumada15,
      imgSub30: carneDefumada30,
      imgCombo15: carneDefumadaCombo15,
      imgCombo30: carneDefumadaCombo30,
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
      imgSub15: carneSeca15,
      imgSub30: carneSeca30,
      imgCombo15: carneSeca15,
      imgCombo30: carneSeca30,
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
      imgSub15: carneSupreme15,
      imgSub30: carneSupreme30,
      imgCombo15: carneSupremeCombo15,
      imgCombo30: carneSupremeCombo30,
      price15: 24.50,
      price30: 41.50,
      priceCombo15: 36.30,
      priceCombo30: 59.70,
      new: false,
    },
    {
      id: 4,
      name: "Sub da Quebrada",
      description: "Pão, Steak de Churrasco, Bacon, Pepperoni, Queijos, Vegetais e Molhos a sua escolha com valor adicional.",
      serves: 1,
      imgSub15: daQuebrada15,
      imgSub30: daQuebrada30,
      imgCombo15: daQuebrada15,
      imgCombo30: daQuebrada30,
      price15: 24.50,
      price30: 37.50,
      priceCombo15: 35.30,
      priceCombo30: 57.70,
      new: true,
    },
    {
      id: 5,
      name: "Sub Frango",
      description: "Preferência nacional. Frango levemente temperado e assado na perfeição. Fica ainda mais delicioso com vegetais selecionados.",
      serves: 1,
      imgSub15: frango15,
      imgSub30: frango30,
      imgCombo15: frangoCombo15,
      imgCombo30: frangoCombo30,
      price15: 18.0,
      price30: 31.0,
      priceCombo15: 27.70,
      priceCombo30: 45.40,
      new: false,
    },
    {
      id: 6,
      name: "Sub Frango Defumado com Cream Cheese",
      description: "Cubos de frango defumado misturados com o delicioso cream cheese. Uma delicia de dar água da boca.",
      serves: 1,
      imgSub15: frangoDefumado15,
      imgSub30: frangoDefumado30,
      imgCombo15: frangoDefumadoCombo15,
      imgCombo30: frangoDefumadoCombo30,
      price15: 21.50,
      price30: 36.50,
      priceCombo15: 33.70,
      priceCombo30: 54.50,
      new: false,
    },
    {
      id: 7,
      name: "Sub Frango Empanado",
      description: "Empanado de Frango. Receita especial do Subway. Servido em pão fresquinho, frango empanado, queijo e vegetais à sua escolha. ",
      serves: 1,
      imgSub15: frangoEmpanado15,
      imgSub30: frangoEmpanado30,
      imgCombo15: frangoEmpanado15,
      imgCombo30: frangoEmpanado30,
      price15: 18.00,
      price30: 31.00,
      priceCombo15: 27.70,
      priceCombo30: 45.40,
      new: false,
    },
    {
      id: 8,
      name: "Sub Frango Super Bacon",
      description: "Pão, Frango Empanado, Creme com Bacon, Bacon, Queijos, Vegetais e Molhos a sua escolha.",
      serves: 1,
      imgSub15: frangoSuperBacon15,
      imgSub30: frangoSuperBacon30,
      imgCombo15: frangoSuperBacon15,
      imgCombo30: frangoSuperBacon30,
      price15: 24.50,
      price30: 37.50,
      priceCombo15: 35.30,
      priceCombo30: 57.70,
      new: true,
    },
    {
      id: 9,
      name: "Sub Frango Teriyaki",
      description: "Experimente o Frango Teriyaki, com pedaços suculentos de peito de frango e o delicioso molho teriyaki.",
      serves: 1,
      imgSub15: frangoTeriyaki15,
      imgSub30: frangoTeriyaki30,
      imgCombo15: frangoTeriyakiCombo15,
      imgCombo30: frangoTeriyakiCombo30,
      price15: 21.50,
      price30: 36.50,
      priceCombo15: 33.70,
      priceCombo30: 54.50,
      new: false,
    },
    {
      id: 10,
      name: "Sub Steak Cheddar Cremoso",
      description: "O já adorado Steak Churrasco agora com o irresistível cheddar cremoso para mandar bem de verdade.",
      serves: 1,
      imgSub15: steakCheddarCremoso15,
      imgSub30: steakCheddarCremoso30,
      imgCombo15: steakCheddarCremosoCombo15,
      imgCombo30: steakCheddarCremosoCombo30,
      price15: 21.00,
      price30: 35.50,
      priceCombo15: 31.10,
      priceCombo30: 50.60,
      new: false,
    },
    {
      id: 11,
      name: "Sub Steak Churrasco",
      description: "Pão, Steak de Churrasco, Queijos, Vegetais e Molhos a sua escolha.",
      serves: 1,
      imgSub15: steakChurrasco15,
      imgSub30: steakChurrasco30,
      imgCombo15: steakChurrascoCombo15,
      imgCombo30: steakChurrascoCombo30,
      price15: 21.00,
      price30: 35.50,
      priceCombo15: 31.10,
      priceCombo30: 50.60,
      new: false,
    },
    {
      id: 12,
      name: "Sub Teriyaki Veg",
      description: "O Teriyaki Veg é feito com ingredientes de origem vegetal, sendo uma opção para os veganos, vegetarianos e para quem quiser experimentar.",
      serves: 1,
      imgSub15: teriyakiVeg15,
      imgSub30: teriyakiVeg30,
      imgCombo15: teriyakiVeg15,
      imgCombo30: teriyakiVeg30,
      price15: 21.00,
      price30: 35.50,
      priceCombo15: 31.10,
      priceCombo30: 50.60,
      new: true,
    },
    {
      id: 13,
      name: "Sub Vegetariano",
      description: "Pão, Queijos, Vegetais e Molhos a sua escolha.",
      serves: 1,
      imgSub15: vegetariano15,
      imgSub30: vegetariano30,
      imgCombo15: vegetarianoCombo15,
      imgCombo30: vegetarianoCombo30,
      price15: 18.00,
      price30: 31.00,
      priceCombo15: 27.70,
      priceCombo30: 45.40,
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
    {
      id: 4,
      name: "Salada Frango Defumado com Cream Cheese",
      description: "Seus vegetais preferidos com cubos de frango defumado misturados com o delicioso cream cheese.",
      serves: 1,
      imgSalad: saladsimg[4],
      imgCombo: saladsComboimg[4],
      price: 23.50,
      priceCombo: 39.60,
    },
    {
      id: 5,
      name: "Salada Frango Empanado",
      description: "Seus vegetais preferidos com empanado de frango.",
      serves: 1,
      imgSalad: saladsimg[5],
      imgCombo: saladsComboimg[5],
      price: 20.00,
      priceCombo: 33.60,
    },
    {
      id: 6,
      name: "Salada Frango Teriyaki",
      description: "Seus vegetais preferidos com pedaços suculentos de peito de frango e o delicioso molho teriyaki.",
      serves: 1,
      imgSalad: saladsimg[6],
      imgCombo: saladsComboimg[6],
      price: 23.50,
      priceCombo: 39.60,
    },
    {
      id: 7,
      name: "Salada Steak Cheddar Cremoso",
      description: "Seus vegetais preferidos com o já adorado Steak Churrasco agora com o irresistível cheddar cremoso.",
      serves: 1,
      imgSalad: saladsimg[7],
      imgCombo: saladsComboimg[7],
      price: 23.00,
      priceCombo: 38.80,
    },
    {
      id: 8,
      name: "Salada Vegetariana",
      description: "Seus vegetais preferidos com queijos e molhos a sua escolha.",
      serves: 1,
      imgSalad: saladsimg[8],
      imgCombo: saladsComboimg[8],
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

  const Breads = [
    {
      id: 0,
      name: "3 queijos",
      img: breadsimg[0],
    },
    {
      id: 1,
      name: "9 grãos",
      img: breadsimg[1],
    },
    {
      id: 2,
      name: "Italiano Branco",
      img: breadsimg[2],
    },
    {
      id: 3,
      name: "Parmesão e Orégano",
      img: breadsimg[3],
    },
  ];

  const Additional = [
    {
      id: 0,
      name: "Bacon",
      img: additionalimg[0],
      price15: 4.00,
      price30: 8.00,
    },
    {
      id: 1,
      name: "Cheedar Cremoso",
      img: additionalimg[1],
      price15: 3.00,
      price30: 6.00,
    },
    {
      id: 2,
      name: "Cream Cheese",
      img: additionalimg[2],
      price15: 3.00,
      price30: 6.00,
    },
    {
      id: 3,
      name: "Dobro de queijo",
      img: additionalimg[3],
      price15: 2.00,
      price30: 4.00,
    },
    {
      id: 4,
      name: "Pepperoni",
      img: additionalimg[4],
      price15: 4.00,
      price30: 8.00,
    },
    {
      id: 5,
      name: "Presunto",
      img: additionalimg[5],
      price15: 3.50,
      price30: 7.00,
    },
    {
      id: 6,
      name: "Salame",
      img: additionalimg[6],
      price15: 3.50,
      price30: 7.00,
    },
  ]

  const Sauces = [
    {
      id: 0,
      name: "Barbecue",
      img: saucesimg[0],
    },
    {
      id: 1,
      name: "Cebola Agridoce",
      img: saucesimg[1],
    },
    {
      id: 2,
      name: "Chipotle",
      img: saucesimg[2],
    },
    {
      id: 3,
      name: "Maionese",
      img: saucesimg[3],
    },
    {
      id: 4,
      name: "Maionese Temperada",
      img: saucesimg[4],
    },
    {
      id: 5,
      name: "Mostarda e Mel",
      img: saucesimg[5],
    },
    {
      id: 6,
      name: "Parmesão",
      img: saucesimg[6],
    },
    {
      id: 7,
      name: "Supreme",
      img: saucesimg[7],
    },
  ]

  const Vegetables = [
    {
      id: 0,
      name: "Alface",
      img: vegetablesimg[0],
    },
    {
      id: 1,
      name: "Azeitona",
      img: vegetablesimg[1],
    },
    {
      id: 2,
      name: "Cebola Roxa",
      img: vegetablesimg[2],
    },
    {
      id: 3,
      name: "Pepino",
      img: vegetablesimg[3],
    },
    {
      id: 4,
      name: "Picles",
      img: vegetablesimg[4],
    },
    {
      id: 5,
      name: "Pimentão",
      img: vegetablesimg[5],
    },
    {
      id: 6,
      name: "Tomate",
      img: vegetablesimg[6],
    },
  ]

  const Cheeses = [
    {
      id: 0,
      name: "Cheddar",
      img: cheesesimg[0],
    },
    {
      id: 1,
      name: "Mussarela Ralada",
      img: cheesesimg[1],
    },
    {
      id: 2,
      name: "Suíço",
      img: cheesesimg[2],
    },
  ]

  const Seasons = [
    {
      id: 0,
      name: "Azeite",
      img: seasonsimg[0],
    },
    {
      id: 1,
      name: "Mix de Pimentas",
      img: seasonsimg[1],
    },
    {
      id: 2,
      name: "Vinagre",
      img: seasonsimg[2],
    },
  ]
  
  useEffect(() => {
    const setLocalStorage = (localKey, list, setter) => {
      const storedMenu = localStorage.getItem(localKey);
    if (storedMenu) {
      if (JSON.parse(storedMenu) != list) {
        setter(list);
        localStorage.setItem(localKey, JSON.stringify(list));
      }  
      else
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
    setLocalStorage("BreadsMenu", Breads, setBreadsMenu);
    setLocalStorage("AdditionalMenu", Additional, setAdditionalMenu);
    setLocalStorage("SaucesMenu", Sauces, setSaucesMenu);
    setLocalStorage("VegetablesMenu", Vegetables, setVegetablesMenu);
    setLocalStorage("CheesesMenu", Cheeses, setCheesesMenu);
    setLocalStorage("SeasonsMenu", Seasons, setSeasonsMenu);
    
  }, []);

  
  

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
                      <Card onClick={() => openModal(sub)}>
                        <Card.Img src={sub.imgSub15} />
                        <Card.Body className="cardContent">
                          <Card.Title>{sub.name}</Card.Title>
                          <small className="mb-2">{limitCharacter(sub.description, 50)}</small>
                          <small className="mb-4 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">Serve {sub.serves} {sub.server === 1 ? "pessoa" : "pessoa"}</small>
                          <span className="price">A partir de R$ {sub.price15.toLocaleString('pt-BR')}</span>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                {selectedItem && (
                  <Modal show={modalOpen} fullscreen="sm-down" onHide={closeModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>{selectedItem.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedItem.imgSub15} className="img-fluid mb-3"/>
                        <h5></h5>
                        <small>{selectedItem.description}</small>
                    </Modal.Body>
                    <Modal.Footer>
                      
                      <ButtonSubway 
                        content={<><span className="pe-2">Adicionar</span>{selectedItem.price15}</>}  
                      />
                    </Modal.Footer>
                  </Modal>
                )}
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
      <Footer/>
    </div>

    
  );
};

export default SubwayMenu;
