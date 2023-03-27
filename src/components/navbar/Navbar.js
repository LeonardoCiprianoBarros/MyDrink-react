import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../Styles.css'
import './navbar.css'
import img from '../img/img.svg'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand as={Link} to="/"><img src={img} alt="logo"></img> My Drink</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='btn_nav' href="#link">sobre</Nav.Link>
            <NavDropdown  title="Produtos" className='btn_nav' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Whisky</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Red Label</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Outros....
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className='btn_nav' as={Link} to='/Contato'>Contato</Nav.Link>
          </Nav>

          <Nav>
            
            <Nav.Link as={Link} to='/Login' className='btn_nav btn-sair' >Sair</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default NavBar;