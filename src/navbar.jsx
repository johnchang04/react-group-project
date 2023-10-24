import React from 'react'; 
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function NavigationBar() {
    return (
      <Navbar bg="dark" expand="lg">
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/landing"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/landing"><Nav.Link>About us</Nav.Link></LinkContainer>
              <LinkContainer to="/cafe3"><Nav.Link>Restaurant of the Month</Nav.Link></LinkContainer>
              

              <NavDropdown title="Restaurants" id="basic-nav-dropdown">
              <LinkContainer to="/marugame"><NavDropdown.Item>Marugame</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/cafe3"><NavDropdown.Item>Cafe 3</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/topdog"><NavDropdown.Item>Top Dog</NavDropdown.Item></LinkContainer>
              
              <NavDropdown.Divider />
              <LinkContainer to="/topdog"><Nav.Link>Chef's Choice</Nav.Link></LinkContainer>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar; 