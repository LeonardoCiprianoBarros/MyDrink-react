import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../Styles.css'
import './navbar.css'


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Drink</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='btn_nav' href="#link">Sobre</Nav.Link>
            <NavDropdown  title="Produtos" className='btn_nav' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Whisky</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Red Label</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Outros....
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='btn_nav' href='/Contato'>Contato</Nav.Link>
            <Nav.Link className='btn_nav' href='/Login'>Sair</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default NavBar;