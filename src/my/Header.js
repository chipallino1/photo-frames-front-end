import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {Link, NavLink} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Photo-frames shop</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/photo-frames">Photo-frames</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Link to="/profile">Profile</Link>
                    </Nav>
                    <Form inline>
                        {this.props.authenticated ? (
                            <Button variant="outline-info" onClick={this.props.onLogout}>Log out</Button>
                        ) : (
                            <div>
                                <Button variant="outline-info">
                                    <Link to="/login">Log in</Link>
                                </Button>
                                <Button variant="outline-info">
                                    <Link variant="outline-info" to="/signup">Sing up</Link>
                                </Button>
                            </div>
                        )}
                    </Form>
                </Navbar>
            </>
        );
    }
}

export default Header;
