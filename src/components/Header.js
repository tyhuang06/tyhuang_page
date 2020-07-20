import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
  render() {
    return(
      <Container className="p-0" fluid={true}>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">My Projects</Nav.Link>
                <Nav.Link href="/contact">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;