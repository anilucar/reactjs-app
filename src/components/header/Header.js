import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <li className="navbar-brand" >
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navbar-brand" >
                        <Link to="/form">Form</Link>
                    </li>
                    <li className="navbar-brand" >
                        <Link to="/about">About</Link>
                    </li>
                    <li className="navbar-brand" >
                        <Link to="/users">Users</Link>
                    </li>
                </nav>

                {this.props.children}
            </div>
        )
    }
}

export default Header;
