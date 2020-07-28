import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../css/header.module.css';


class Header extends React.Component {

    render() {
        return (
            <Container>
                <Navbar className="navBarContainer">
                    <Nav className="navBarInnerContainer">
                        <Nav.Item className="navItem">
                            <Nav.Link eventKey="home" href="/">
                                HOME
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="navItem">
                            <Nav.Link eventKey="about" href="/aboutsophie">
                                ABOUT SOPHIE
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Container>
        );
    }
}

export default Header;