import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <>
        <Navbar collapseOnSelect fixed = 'top' expand='sm' bg='dark' >
            <Container/>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='reponsive-navbar-nav'>
                <Nav>
                    <Nav.link></Nav.link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default Navigation