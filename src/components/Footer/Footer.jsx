import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className="mb-3">
          <Col xs={12} md={6} className="mb-3">
            <a
              href="https://www.instagram.com/subwaybrasil/"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              <Button
                border="1px var(--green-900) solid"
                bgColor="transparent"
                bdRadius="200px"
                padding="none"
                buttonSize="48px"
                icon={faInstagram}
                iconColor="var(--green-900)"
                iconSize="xl"
                borderHover="1px var(--green-700) solid"
                bgColorHover="var(--green-700)"
              />
            </a>
            <a
              href="https://www.facebook.com/subwaybrasil/"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              <Button
                border="1px var(--green-900) solid"
                bgColor="transparent"
                bdRadius="200px"
                padding="none"
                buttonSize="48px"
                icon={faFacebookF}
                iconColor="var(--green-900)"
                iconSize="xl"
                borderHover="1px var(--green-700) solid"
                bgColorHover="var(--green-700)"
              />
            </a>
            <a
              href="https://www.twitter.com/SubwayBrasil"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              <Button
                border="1px var(--green-900) solid"
                bgColor="transparent"
                bdRadius="200px"
                padding="none"
                buttonSize="48px"
                icon={faTwitter}
                iconColor="var(--green-900)"
                iconSize="xl"
                borderHover="1px var(--green-700) solid"
                bgColorHover="var(--green-700)"
              />
            </a>
            <a
              href="https://www.tiktok.com/@subway.brasil"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              <Button
                border="1px var(--green-900) solid"
                bgColor="transparent"
                bdRadius="200px"
                padding="none"
                buttonSize="48px"
                icon={faTiktok}
                iconColor="var(--green-900)"
                iconSize="xl"
                borderHover="1px var(--green-700) solid"
                bgColorHover="var(--green-700)"
              />
            </a>
            <a
              href="https://www.tiktok.com/@subway.brasil"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              <Button
                border="1px var(--green-900) solid"
                bgColor="transparent"
                bdRadius="200px"
                padding="none"
                buttonSize="48px"
                icon={faYoutube}
                iconColor="var(--green-900)"
                iconSize="lg"
                borderHover="1px var(--green-700) solid"
                bgColorHover="var(--green-700)"
              />
            </a>
          </Col>
          <Col xs={12} md={6} className="buttonDelivery d-flex">
            <Link to="/menu" className="link">
              <Button
                btnType="button"
                content="Fazer pedido"
                bgColor="var(--green-900)"
                border="1px solid var(--green-900)"
                color="var(--light)"
                padding=".75rem 2.5rem"
                bdRadius="200px"
                fontWeight="700"
                bgColorHover="var(--green-700)"
                borderHover="1px solid var(--green-700)"
                colorHover="var(--light)"
              />
            </Link>
          </Col>
        </Row>
        <Col xs={12}>
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/menu" className="link">
                Cardápio
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="link">
                Sobre nós
              </Link>
            </li>
            <Link to="/franchise" className="link">
                Franquias
            </Link>
          </ul>
        </Col>
        <hr className="my-4" />
        <p className="text-center">
          © {new Date().getFullYear()} Subway. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
