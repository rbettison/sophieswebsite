import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


class Header extends React.Component {

    render() {
        return (
            <Container>
                <Navbar className="justify-content-center" expand="lg" bg="light" variant="light">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link eventKey="home" href="/">
                                Home
                            </Nav.Link>
                        {/* <Link to="/">Home</Link> */}
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="about" href="/whoweare">
                                Who we are
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="blog" href="/blog">
                                Blog
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Container>
        );
    }
}

export default Header;