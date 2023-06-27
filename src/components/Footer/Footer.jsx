import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>Subway</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={12} md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Cardápio</a></li>
              <li><a href="/locations">Locations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/Subway">Facebook</a></li>
              <li><a href="https://www.instagram.com/Subway">Instagram</a></li>
              <li><a href="https://www.twitter.com/Subway">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">© {new Date().getFullYear()} Subway. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;