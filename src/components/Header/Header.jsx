import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.svg'
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img alt="Logo Subway" src={Logo} height="24"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id=" basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <NavLink to="/menu" className="nav-link" activeclassname="active">
              Cardápio
            </NavLink>
            <NavLink to="/menu.sales" className="nav-link" activeclassname="active">
              Promoções
            </NavLink>
            <NavLink to="/restaurants" className="nav-link" activeclassname="active">
              Restaurants
            </NavLink>
            <NavLink to="/aboutUs" className="nav-link" activeclassname="active">
              Sobre nós
            </NavLink>
            <NavLink to="/carrers" className="nav-link" activeclassname="active">
              Carreiras
            </NavLink>
            <NavLink to="/franchise" className="nav-link" activeclassname="active">
              Franquia
            </NavLink>
          </Nav>
          <a href="/menu">
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
          </a>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header