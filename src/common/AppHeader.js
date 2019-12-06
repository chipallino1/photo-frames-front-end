import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Shop</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            {this.props.authenticated ? (
                                <ul>
                                    <li>
                                        <NavLink to="/profile">Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/photo-frames">Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/orders">Orders</NavLink>
                                    </li>
                                    {
                                        this.props.currentUser.role === 'ADMIN' ?
                                            (
                                                <li>
                                                    <NavLink to="/createItem">Home</NavLink>
                                                </li>
                                            ) : (
                                                null
                                            )
                                    }

                                    <li>
                                        <a onClick={this.props.onLogout}>Logout</a>
                                    </li>
                                </ul>
                            ) : (
                                <ul>
                                    <li>
                                        <NavLink to="/Home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/photo-frames">Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signup">Signup</NavLink>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;