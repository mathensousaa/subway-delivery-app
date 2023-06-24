import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/global.css';
import Header from './components/Header/Header';
import ImgCarousel from './components/Carousel/Carousel';

function App() {

  // const SUBs15 = [
  //   {
  //     id: "BMT",
  //     name: "B.M.T Italiano",
  //     price: "R$ 32,40",
  //     description: " sanduíche que vai acabar com toda a sua fome. Servido em pão fresquinho, com fatias de salame, peperoni, presunto, vegetais e condimentos à sua escolha. Selecione também a bebida e sobremesa de sua preferência.",
  //     avaible: "true",
  //     image: "./assets/subs/BMT.png"
  //   },
  //   {

  //   }
  // ]

  return (
    <div className="App">
      <Header />
      <ImgCarousel />
    </div>
  )
}

export default App
