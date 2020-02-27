import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Header extends Component {

    standardColor = {
        color: 'rgba(255,255,255,0.5)'
    };

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Рамки-опт.бел</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <NavLink to="/Home" style={this.standardColor}>Главная</NavLink>
                        </Nav.Link>
                        <NavLink to="#catalog">
                            <NavDropdown title="Каталог" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink to="/photo-frames">Все</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/a4">А4</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink to="/diploma">На диплом/грамоту</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavLink>
                        <Nav.Link>
                            <NavLink to="/downloadPrice" style={this.standardColor}>Скачать прайс</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/contacts" style={this.standardColor}>Контанкты</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;