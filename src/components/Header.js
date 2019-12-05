import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <NavLink to="/profile">Profile</NavLink>

                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default Header;
