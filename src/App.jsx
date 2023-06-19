import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/global.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import BMT from './assets/subs/BMT.png';

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
      <Card 
        title="B.M.T Italiano"
        scr={BMT}
        alt="B.M.T Italiano"

        cardClass="text-center"
        bodyClass="p-0"
      />
    </div>
  )
}

export default App
