import "./AboutUs.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/Button/Button";
import Franchise from "../../assets/franchise.jpg";
import BeFranchisee from "../../assets/befranchisee.png";
import WorkWithUs from "../../assets/workwus.png";
import Future from "../../assets/future.jpg";
import History from "../../assets/history.jpg";

const AboutUs = () => {
  return (
    <div className="gradientBackground">
      <Header />
      
      <section>
        <Container>
          <Row className="d-flex justify-content-between">
            <Col lg={5} md={12} className="d-flex flex-column justify-content-center text-center">
              <img
                src={History}
                alt="História do Subway"
                className="rounded-5 textimg img-fluid textimg"
              />
            </Col>
            <Col
              lg={6}
              md={12}
              className="d-flex flex-column"
            >
              <h2>A história do SUBWAY®</h2>
              <p className="paragraph">
                Com um empréstimo de US$ 1.000, o amigo, o Dr. Peter Buck,
                ofereceu-se como sócio de Fred, e um relacionamento de negócios
                que iria mudar o panorama do setor de lanches rápidos se formou.
                A primeira loja foi aberta em Bridgeport, Connecticut, em agosto
                de 1965. Depois, estabeleceram uma meta de abrir 32 lojas em 10
                anos. Fred logo aprendeu os fundamentos de administrar um
                negócio, assim como a importância de servir um produto bem feito
                e de alta qualidade, prestando excelente atendimento ao cliente,
                mantendo os custos operacionais baixos e encontrando ótimos
                endereços. Estas lições iniciais continuaram a servir como base
                para os vitoriosos restaurantes SUBWAY® em todo o mundo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="d-flex justify-content-between">
            <Col lg={6} md={12} className="d-flex flex-column">
              <h2>SUBWAY®, a franquia</h2>
              <p className="paragraph">
                Em 1974, a dupla possuía e operava 16 lojas de sanduíche
                &quot;submarinos&quot; em Connecticut. Entendendo que não
                chegariam à meta de 32 lojas no prazo, começaram a abrir
                franquias, lançando a marca SUBWAY a um período de crescimento
                notável, que continua ainda hoje.
              </p>
            </Col>
            <Col
              lg={5}
              md={12}
              className="d-flex flex-column justify-content-center text-center"
            >
              <img
                src={Franchise}
                alt="Franquia Subway"
                className="rounded-5 textimg img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="d-flex justify-content-between">
            <Col
              lg={5}
              md={12}
              className="d-flex flex-column justify-content-center text-center"
            >
              <img
                src={Future}
                alt="Um novo futuro"
                className="rounded-5 textimg img-fluid"
              />
            </Col>
            <Col lg={6} md={12} className="d-flex flex-column">
              <h2>Um novo futuro</h2>
              <p className="paragraph">
                Hoje, a marca SUBWAY® é a maior cadeia de sanduíches
                &quot;submarinos&quot; do mundo, com mais de 39 mil unidades em
                todo o mundo. Nós nos tornamos a principal opção para pessoas
                que procuram refeições rápidas e nutritivas, que toda a família
                pode apreciar. Desde o começo, Fred tinha uma visão clara do
                futuro da marca SUBWAY. Enquanto continuamos a crescer, somos
                guiados pela sua paixão por deliciar os clientes ao servir
                sanduíches saborosos e feitos conforme o pedido.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="d-flex justify-content-around align-items-center">
            <Col
              lg={5}
              md={12}
              className="d-flex flex-column position-relative workfranchise p-0"
            >
              <img src={WorkWithUs} alt="Trabalho Conosco" />
              <a href="https://br.indeed.com/jobs?q=subway" className="btn-overlay">
                <Button
                  btnType="button"
                  content="Trabalhe Conosco"
                  bgColor="var(--yellow-800)"
                  border="1px solid var(--yellow-800)"
                  color="var(--light)"
                  padding="1rem 8.3rem"
                  bdRadius="50px"
                  fontWeight="700"
                  bgColorHover="var(--yellow-900)"
                  borderHover="1px solid var(--yellow-900)"
                />
              </a>
            </Col>
            <Col
              lg={5}
              md={12}
              className="d-flex flex-column position-relative workfranchise p-0"
            >
              <img src={BeFranchisee} alt="Seja um Franqueado" />
              <a href="https://br.indeed.com/jobs?q=subway" className="btn-overlay">
                <Button
                  btnType="button"
                  content="Seja um Franqueado"
                  bgColor="var(--yellow-800)"
                  border="1px solid var(--yellow-800)"
                  color="var(--light)"
                  padding="1rem 7.8rem"
                  bdRadius="50px"
                  fontWeight="700"
                  bgColorHover="var(--yellow-900)"
                  borderHover="1px solid var(--yellow-900)"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
