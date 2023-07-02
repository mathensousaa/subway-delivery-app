import "./Menu.css";
import heroMenu from "../../assets/heroMenu.webp";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Nav, Card, Container } from "react-bootstrap";

const SubwayMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const importImage = (path) => import(path).then((module) => module.default);

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

  const subs15imgPromises = subs15img.map((path) => importImage(path));

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

  const subsCombo15imgPromises = subsCombo15img.map((path) => importImage(path));

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

  const subs30imgPromises = subs30img.map((path) => importImage(path));

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

  const subsCombo30imgPromises = subsCombo30img.map((path) => importImage(path));

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

  const saladsimgPromises = saladsimg.map((path) => importImage(path));

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

  const saladsComboimgPromises = saladsComboimg.map((path) => importImage(path));


  const dessertsimg = [
    `${srcDesserts}lamus.png`,
    `${srcDesserts}lamusPrestigio.png`,
    `${srcDesserts}cookie.jpg`,
    `${srcDesserts}kit3Cookies.png`,
    `${srcDesserts}kit6Cookies.png`,
    `${srcDesserts}kit9Cookies.png`,
  ]

  const dessertsimgPromises = dessertsimg.map((path) => importImage(path));


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

  const drinksimgPromises = drinksimg.map((path) => importImage(path));

  const breadsimg = [
    `${srcBreads}3queijos.png`,
    `${srcBreads}9graos.png`,
    `${srcBreads}italianoBranco.png`,
    `${srcBreads}parmesaoOregano.png`,
  ]

  const breadsimgPromises = breadsimg.map((path) => importImage(path));

  const cheesesimg = [
    `${srcCheeses}cheddar.png`,
    `${srcCheeses}mussarelaRalada.png`,
    `${srcCheeses}Suico.png`,
  ]

  const cheesesimgPromises = cheesesimg.map((path) => importImage(path));

  const vegetablesimg = [
    `${srcVegetables}alface.png`,
    `${srcVegetables}azeitona.png`,
    `${srcVegetables}cebolaRoxa.png`,
    `${srcVegetables}pepino.png`,
    `${srcVegetables}picles.png`,
    `${srcVegetables}pimentao.png`,
    `${srcVegetables}tomate.png`,
  ]

  const vegetablesimgPromises = vegetablesimg.map((path) => importImage(path));

  const additionalimg = [
    `${srcAdditional}bacon.png`,
    `${srcAdditional}cheddarCremoso.png`,
    `${srcAdditional}creamCheese.png`,
    `${srcAdditional}dobroQueijo.png`,
    `${srcAdditional}pepperoni.png`,
    `${srcAdditional}presunto.png`,
    `${srcAdditional}salame.png`,
  ]

  const additionalimgPromises = additionalimg.map((path) => importImage(path));

  const seasonsimg = [
    `${srcSeasons}azeite.png`,
    `${srcSeasons}mixPimentas.png`,
    `${srcSeasons}vinagre.png`,
  ]

  const seasonsimgPromises = seasonsimg.map((path) => importImage(path));

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

  const saucesimgPromises = saucesimg.map((path) => importImage(path));
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
      {
        id: 4,
        name: "Sub da Quebrada",
        description: "Pão, Steak de Churrasco, Bacon, Pepperoni, Queijos, Vegetais e Molhos a sua escolha com valor adicional.",
        serves: 1,
        imgSub15: subs15img[4],
        imgSub30: subs30img[4],
        imgCombo15: subsCombo15img[3],
        imgCombo30: subsCombo30img[3],
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
        imgSub15: subs15img[5],
        imgSub30: subs30img[5],
        imgCombo15: subsCombo15img[4],
        imgCombo30: subsCombo30img[4],
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
        imgSub15: subs15img[6],
        imgSub30: subs30img[6],
        imgCombo15: subsCombo15img[5],
        imgCombo30: subsCombo30img[5],
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
        imgSub15: subs15img[7],
        imgSub30: subs30img[7],
        imgCombo15: subsCombo15img[6],
        imgCombo30: subsCombo30img[6],
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
        imgSub15: subs15img[8],
        imgSub30: subs30img[8],
        imgCombo15: subs15img[8],
        imgCombo30: subs30img[8],
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
        imgSub15: subs15img[9],
        imgSub30: subs30img[9],
        imgCombo15: subsCombo15img[7],
        imgCombo30: subsCombo30img[7],
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
        imgSub15: subs15img[10],
        imgSub30: subs30img[10],
        imgCombo15: subsCombo15img[8],
        imgCombo30: subsCombo30img[8],
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
        imgSub15: subs15img[11],
        imgSub30: subs30img[11],
        imgCombo15: subsCombo15img[9],
        imgCombo30: subsCombo30img[9],
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
        imgSub15: subs15img[12],
        imgSub30: subs30img[12],
        imgCombo15: subsCombo15img[10],
        imgCombo30: subsCombo30img[10],
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
        imgSub15: subs15img[13],
        imgSub30: subs30img[13],
        imgCombo15: subsCombo15img[11],
        imgCombo30: subsCombo30img[11],
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
    setLocalStorage("BreadsMenu", Breads, setBreadsMenu);
    setLocalStorage("AdditionalMenu", Additional, setAdditionalMenu);
    setLocalStorage("SaucesMenu", Sauces, setSaucesMenu);
    setLocalStorage("VegetablesMenu", Vegetables, setVegetablesMenu);
    setLocalStorage("CheesesMenu", Cheeses, setCheesesMenu);
    setLocalStorage("SeasonsMenu", Seasons, setSeasonsMenu);
    
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function limitCharacter(text, limit) {
    if(windowWidth < 576 ) {
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
                          <small className="mb-4 serves text-success-emphasis bg-success-subtle border border-success-subtle rounded-2 p-1">Serve {sub.serves} {sub.server === 1 ? "pessoa" : "pessoa"}</small>
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
