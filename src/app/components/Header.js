import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../css/header.module.css';


class Header extends React.Component {

    render() {
        return (
            <table className="navBarOuterContainer">
                <tbody>
                <tr className="navBarContainer">
                        <td className="navItem">
                            <a className="navItemText" href="/">
                                HOME
                            </a>
                        </td>
                        <td className="navItem">
                            <a className="navItemText" href="/aboutsophie">
                                ABOUT SOPHIE
                            </a>
                        </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Header;