import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavbarRouter() {
  return (
    <div>
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Rick And Morty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Characters</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
            <Nav.Link href="/episode">Episode</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
