import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { faInstagram, faFacebook, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row className='mb-3'>
          <Col xs={6}>
            <a href="https://www.instagram.com/subwaybrasil/" target='_blank' rel='noreferrer'>
              <Button 
                border="1px var(--green-900) solid"
                bgColor="transparent"
                bdRadius="200px"
                padding="none"

                icon={faInstagram}
                iconColor="var(--green-900)"
                iconSize="xl"
              />
            </a>
          </Col>
          <Col xs={6}>
            Botao
          </Col>
        </Row>
          <Col xs={12} md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Cardápio</a></li>
              <li><a href="/locations">Locations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
        <hr className="my-4" />
        <p className="text-center">© {new Date().getFullYear()} Subway. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;