import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../assets/hero.jpg"
import HeroDevices from "../../assets/heroTablet.jpg"
import { Container, Col } from "react-bootstrap";
import Button from "../../components/Button/Button"
import Sub from "../../assets/sub.png";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <section className="hero text-center">
        <picture>
          <source srcSet={Hero} media="(min-width: 992px)" />
          <source srcSet={HeroDevices} media="(max-width: 768px)" />
          <img src={Hero} className="img-fluid" alt="Hero" />
        </picture>
        <Container className="d-flex flex-column align-items-center">
          <h3 className="heroText">Pedir seu Subway nunca foi tão facil!</h3>
          <span className="mb-3">Faça seu pedido pelo site!</span>
          <a href="/menu">
            <Button
              btnType='button'
              content='Faça seu pedido'
              bgColor='var(--yellow-800)'
              border='1px solid var(--yellow-800)'
              color='var(--light)'
              padding='.75rem 2.5rem'
              bdRadius='200px'
              fontWeight='700'

              bgColorHover='var(--yellow-900)'
              borderHover='1px solid var(--yellow-900)'
            />
          </a>
        </Container>
      </section>

      <section className="findRestaurants d-flex align-items-center flex-column">
        <Col lg={12} md={10} className="mt-4 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-3">Encontre um restaurante</h2>
          <label htmlFor="address" className="mb-3">Insira o endereço que deseja</label>
        </Col>
        <Col className="my-4 w-100 d-flex justify-content-end">
          <img src={Sub} className="img-fluid "/>
        </Col>
      </section>

      <section className="SUBS d-flex align-items-center flex-column">
        <h2 className="mb-5">Nossos subs</h2>
        <Carousel />
      </section>

      <section className="franchise text-light">
        <h2>Quer ter seu próprio restaurante?</h2>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
