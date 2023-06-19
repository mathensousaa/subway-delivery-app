import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.svg'
import Button from '../Button/Button';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img alt="Logo Subway" src={Logo} height="24"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id=" basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#menu">Cardápio</Nav.Link>
            <Nav.Link href="#sales">Promoções</Nav.Link>
            <Nav.Link href="#restaurants">Restaurantes</Nav.Link>
            <Nav.Link href="#about">Sobre nós</Nav.Link>
            <Nav.Link href="#carrers">Carreiras</Nav.Link>
            <Nav.Link href="#franchise">Franquia</Nav.Link>
          </Nav>
          <Button
            btnType='button'
            content='Fazer pedido'
            bgColor='var(--yellow-800)'
            border='1px solid var(--yellow-800)'
            color='var(--light)'
            padding='.5rem 2rem'
            bdRadius='200px'
            fontWeight='700'

            bgColorHover='var(--yellow-900)'
            borderHover='1px solid var(--yellow-900)'
          />
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header