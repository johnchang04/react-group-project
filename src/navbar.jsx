import React, {Component} from 'react'; 
import {Nav, Navbar, NavDropdown, Container, Form, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar fluid="true" bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/landing"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <LinkContainer to="/landing"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/about"><Nav.Link>About us</Nav.Link></LinkContainer>
              <LinkContainer to="/topdog"><Nav.Link>Chef's Choice</Nav.Link></LinkContainer>
              

              <NavDropdown title="Restaurants" id="basic-nav-dropdown">
                <LinkContainer to="/marugame"><NavDropdown.Item>Marugame</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/cafe3"><NavDropdown.Item>Cafe 3</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/topdog"><NavDropdown.Item>Top Dog</NavDropdown.Item></LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/topdog"><Nav.Link>Chef's Choice</Nav.Link></LinkContainer>
              </NavDropdown>
            </Nav>

            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar; 