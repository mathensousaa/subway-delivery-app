import "./Franchise.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import FranchiseHero from "../../assets/franchiseHero2.jpg";
import International from "../../assets/international.jpg";
import OurChain from "../../assets/ourChain.jpg";
import Sub from "../../assets/sub2.png";
import OurFood from "../../assets/ourFood.jpg";
import WannaFranchisee from "../../assets/wannaFranchisee.jpg";

const Franchise = () => {
  return (
    <div className="content">
      <Header />

      <section className="hero text-center">
        <a href="/carrers">
          <picture>
            <img src={FranchiseHero} className="img-fluid" alt="Hero" />
          </picture>
        </a>
      </section>

      <section>
        <Container>
          <Row className="d-flex flex-column flex-md-row justify-content-between">
            <Col
              lg={5}
              md={12}
              className="d-flex flex-column justify-content-center mb-4 mb-md-0"
            >
              <h1 className="mb-3 franchiseText">
                Já se imaginou franqueado do Subway?
              </h1>
              <a href="/franchise">
                <Button
                  btnType="button"
                  content="Quero ser um franqueado"
                  bgColor="var(--green-900)"
                  border="1px solid var(--green-700)"
                  color="var(--light)"
                  padding=".75rem 2.5rem"
                  bdRadius="200px"
                  fontWeight="700"
                  bgColorHover="var(--green-700)"
                  borderHover="1px solid var(--green-900)"
                />
              </a>
            </Col>
            <Col
              lg={5}
              md={12}
              className="d-flex flex-column justify-content-center"
            >
              <img
                src={WannaFranchisee}
                alt="Franqueado"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="greenBG">
        <Container>
          <Row className="d-flex flex-column flex-md-row justify-content-between">
            <Col lg={6} md={12} className="mb-4 mb-md-0 p-0">
              <h1 className="whyText">Por que escolher a Subway?</h1>
            </Col>
            <Col lg={6} md={12} className="mb-4 mb-md-0 p-0">
              <p className="whyDescribe">
                Além de ser uma empresa comprovada com custo inicial baixo, a
                SUBWAY é continuamente classificada como a franquia nº 1.
                Descubra por que a SUBWAY® é a sua melhor opção.
              </p>
            </Col>
          </Row>

          <Row className="d-flex flex-column flex-md-row justify-content-between">
            <Col lg={4} md={12} className="mb-4 mb-md-0 p-0">
              <Card
                cardClass="card"
                imgClass="img-fluid rounded-10"
                cardWidth="23rem"
                scr={International}
                alt="Internacional"
                title={
                  <h5 className="custom-title">Crescimento internacional</h5>
                }
                content={
                  <p className="custom-text">
                    <br />
                    Quando você se torna um franqueado SUBWAY®, você já começa
                    ganhando, pois somos a maior rede de restaurantes do mundo e
                    uma das marcas mais reconhecidas globalmente. Além de você
                    iniciar seu empreendimento com clientes já fidelizados,
                    também pode contar com toda a nossa estrutura e experiência
                    de mercado.
                  </p>
                }
              />
            </Col>
            <Col lg={4} md={12} className="mb-4 mb-md-0 p-0">
              <Card
                cardClass="card"
                imgClass="img-fluid rounded-10"
                cardWidth="23rem"
                scr={OurFood}
                alt="Nossa Comida"
                title={<h5 className="custom-title">Nossa comida</h5>}
                content={
                  <p className="custom-text">
                    <br />
                    SUBWAY® é líder de mercado em seu segmento. Os Subs, que é
                    como chamamos nossos sanduíches, são totalmente
                    personalizados ao gosto do cliente. Os pães saem quentinhos
                    do forno e são recheados na hora, com uma grande variedade
                    de ingredientes selecionados, prontos para surpreender a
                    visão e o paladar dos clientes.
                  </p>
                }
              />
            </Col>
            <Col lg={4} md={12} className="mb-4 mb-md-0 p-0">
              <Card
                cardClass="card"
                imgClass="img-fluid rounded-10"
                cardWidth="23rem"
                scr={OurChain}
                alt="Nossa rede de apoio"
                title={<h5 className="custom-title">Nossa rede de apoio</h5>}
                content={
                  <p className="custom-text">
                    <br />
                    Quem é proprietário de um restaurante SUBWAY® tem todo um
                    suporte de qualidade internacional, esse apoio é constante e
                    nele está incluso:
                    <ul>
                      <br />
                      <li>Treinamentos;</li>
                      <li>Desenvolvimento de produtos;</li>
                      <li>
                        Diretrizes de projeto de loja e pedidos de equipamentos.
                      </li>
                    </ul>
                  </p>
                }
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section  className="background-section">
        <Container>
          <Row className="d-flex flex-column flex-md-row justify-content-around">
            <Col lg={6} md={12} className="mb-4 mb-md-0 p-0">
              <h1 className="steps">Próximas etapas</h1>
              <div className="stepBox">
                <Button
                  btnType="button"
                  content="1. SOLICITAR UM CATÁLOGO"
                  bgColor="rgba(0, 98, 40, 0.6)"
                  border="1px solid var(--green-700)"
                  color="var(--light)"
                  padding=".75rem 2.5rem"
                  bdRadius="200px"
                  fontWeight="700"
                  bgColorHover="var(--green-700)"
                  borderHover="1px solid var(--green-900)"
                />
                <h3 className="stepText">
                  A finalidade do preenchimento deste formulário é a obtenção de
                  maiores informações sobre a oportunidade de obter uma
                  franquia.
                </h3>
              </div>
              <div className="stepBox">
                <Button
                  btnType="button"
                  content="2. CANDIDATAR-SE A PROPRIETÁRIO"
                  bgColor="rgba(0, 98, 40, 0.6)"
                  border="1px solid var(--green-700)"
                  color="var(--light)"
                  padding=".75rem 2.5rem"
                  bdRadius="200px"
                  fontWeight="700"
                  bgColorHover="var(--green-700)"
                  borderHover="1px solid var(--green-900)"
                />
                <h3 className="stepText">
                  Este formulário é utilizado para adquirir uma nova franquia,
                  uma franquia adicional ou para a aquisição e transferência de
                  uma loja existente.
                </h3>
              </div>
            </Col>
            <Col lg={6} md={12} className="mb-4 mb-md-0 p-0">
              <h1 className="apply1">Sou qualificado?</h1>
              <p className="applyText">
                Quando você se torna um franqueado SUBWAY®, você já começa
                ganhando, pois somos a maior rede de restaurantes do mundo e uma
                das marcas mais reconhecidas globalmente. Além de você iniciar
                seu empreendimento com clientes já fidelizados, também pode
                contar com toda a nossa estrutura e experiência de mercado.
              </p>

              <h1 className="apply2">O seu investimento</h1>
              <p className="applyText">
                Ter uma franquia SUBWAY® é contar com um modelo de negócio
                simples e eficiente, que tem custo inicial mais baixo do que a
                maioria dos outros restaurantes. As taxas iniciais de franquia
                variam entre USD 10.000 e USD 15.000 (dólares americanos),
                dependendo do país. Os custos individuais variam, por isso, fale
                conosco e tire todas as suas dúvidas.
              </p>
            </Col>
          </Row>
        </Container>
        <img src={Sub} alt="Imagem" className="background-image" />
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;