import "./Franchise.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import FranchiseHero from "../../assets/franchiseHero.jpg";
import FranchiseHeroSmall from "../../assets/franchiseHeroSmall.jpg";
import International from "../../assets/international.jpg";
import OurChain from "../../assets/ourChain.jpg";
import Sub from "../../assets/subBackground.png";
import OurFood from "../../assets/ourFood.jpg";
import WannaFranchisee from "../../assets/wannaFranchisee.jpg";

const Franchise = () => {
  return (
    <div className="gradientBackground">
      <Header />

      <section className="heroFranchise text-center d-flex align-items-center">
        <picture>
          <source srcSet={FranchiseHero} media="(min-width: 992px)" />
          <source srcSet={FranchiseHeroSmall} media="(max-width: 768px)" />
          <img src={FranchiseHero} className="img-fluid" alt="Hero" />
        </picture>
      </section>

      <section>
        <Container>
          <Row className="d-flex flex-column flex-md-row justify-content-between">
            <Col
              lg={5}
              md={12}
              className="franchiseMain d-flex flex-column justify-content-center mb-4 mb-lg-0"
            >
              <h1 className="h1 mb-3 franchiseText">
                Já se imaginou franqueado do Subway?
              </h1>
              <a href="/carrers">
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
                  borderHover="1px solid var(--green-700)"
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
          <Row className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <Col lg={6} md={12} className="mb-2">
              <h1 className="h1 whyText">Por que escolher a Subway?</h1>
            </Col>
            <Col lg={6} md={12} className="mb-2">
              <p className="text-light">
                Além de ser uma empresa comprovada com custo inicial baixo, a
                SUBWAY é continuamente classificada como a franquia nº 1.
                Descubra por que a SUBWAY® é a sua melhor opção.
              </p>
            </Col>
          </Row>

          <Row className="d-flex flex-column flex-md-row justify-content-between">
            <Col xl={4} md={12} className="cardWrapper mb-md-4">
              <Card
                imgClass="img-fluid rounded-20"
                cardWidth="23rem"
                scr={International} 
                alt="Internacional"
                bdRadius="20px"
                title={
                  <h5 className="custom-title">Crescimento internacional</h5>
                }
                content={
                  <p className="custom-text">
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
            <Col xl={4} md={12} className="cardWrapper mb-md-4">
              <Card
                imgClass="img-fluid rounded-20"
                cardWidth="23rem"
                scr={OurFood}
                alt="Nossa Comida"
                bdRadius="20px"
                title={<h5 className="custom-title">Nossa comida</h5>}
                content={
                  <p className="custom-text">
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
            <Col xl={4} md={12} className="cardWrapper mb-md-4">
              <Card
                imgClass="img-fluid rounded-20"
                cardWidth="23rem"
                scr={OurChain}
                alt="Nossa rede de apoio"
                bdRadius="20px"
                title={<h5 className="custom-title">Nossa rede de apoio</h5>}
                content={
                  <p className="custom-text">
                    Quem é proprietário de um restaurante SUBWAY® tem todo um
                    suporte de qualidade internacional, esse apoio é constante e
                    nele está incluso:
                    <br/>
                    <br/>
                     • Treinamentos;
                     <br/>
                     •  Desenvolvimento de produtos;
                     <br/>
                     • Diretrizes de projeto de loja e equipamentos.
                  </p>
                }
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="stepsSection">
        <Container className="noPadding">
          <Row className="position-relative d-flex flex-column flex-md-row justify-content-around">
            <Col xl={6} md={12} className="stepsCol mb-4">
              <h1 className="h1 steps">Próximas etapas</h1>
              <div className="stepBox">
                <a href="/carrers">
                  <Button
                    btnType="button"
                    content="1. SOLICITAR UM CATÁLOGO"
                    bgColor="rgba(0, 98, 40, 0.6)"
                    border="1px solid #00622899"
                    color="var(--light)"
                    padding=".75rem 2.5rem"
                    bdRadius="200px"
                    fontWeight="700"
                    bgColorHover="var(--green-700)"
                    borderHover="1px solid var(--green-900)"
                  />
                </a>
                <h3 className="stepText">
                  A finalidade do preenchimento deste formulário é a obtenção de
                  maiores informações sobre a oportunidade de obter uma
                  franquia.
                </h3>
              </div>
              <div className="stepBox">
                <a href="/carrers">
                  <Button
                    btnType="button"
                    content="2. CANDIDATAR-SE A PROPRIETÁRIO"
                    bgColor="rgba(0, 98, 40, 0.6)"
                    border="1px solid #00622899"
                    color="var(--light)"
                    padding=".75rem 2.5rem"
                    bdRadius="200px"
                    fontWeight="700"
                    bgColorHover="var(--green-700)"
                    borderHover="1px solid var(--green-900)"
                  />
                </a>
                <h3 className="stepText">
                  Este formulário é utilizado para adquirir uma nova franquia,
                  uma franquia adicional ou para a aquisição e transferência de
                  uma loja existente.
                </h3>
              </div>
            </Col>
            <Col xl={6} md={12} className="stepsCol mb-4 mb-md-0 p-5">
              <h2 className="h2 apply1">Sou qualificado?</h2>
              <p className="applyText">
                Quando você se torna um franqueado SUBWAY®, você já começa
                ganhando, pois somos a maior rede de restaurantes do mundo e uma
                das marcas mais reconhecidas globalmente. Além de você iniciar
                seu empreendimento com clientes já fidelizados, também pode
                contar com toda a nossa estrutura e experiência de mercado.
              </p>

              <h2 className="h2 apply2">O seu investimento</h2>
              <p className="applyText">
                Ter uma franquia SUBWAY® é contar com um modelo de negócio
                simples e eficiente, que tem custo inicial mais baixo do que a
                maioria dos outros restaurantes. As taxas iniciais de franquia
                variam entre USD 10.000 e USD 15.000 (dólares americanos),
                dependendo do país. Os custos individuais variam, por isso, fale
                conosco e tire todas as suas dúvidas.
              </p>
            </Col>
            <Col lg={12} md={12} className="imgCol">
              <img src={Sub} alt="Sub" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
