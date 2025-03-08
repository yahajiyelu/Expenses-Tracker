import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies'

const Header = () => {
    const token = Cookies.getItem("jwtToken");

    const navigate = useNavigate();

    const onLogout = () => {
        const res = window.confirm("Are you sure?")
        if (res) {
            navigate('/login');
            Cookies.removeItem('jwtToken');
        }
    };

    return (
        <Navbar fixed="top" style={{ padding: '0 20px', minHeight: '10vh', width: '100%' }} expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#">ET</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/track" className="nav-link">Track</NavLink>
                    <NavLink to="/addincome-or-expense" className="nav-link">AddIncomeOrExpense</NavLink>

                    {!token ? (
                        <NavLink as={NavLink} to="/login" className="nav-link">
                            Login/SignUp
                        </NavLink>
                    ) : (
                        <NavLink className="nav-link" to="/login" onClick={onLogout}>
                            Logout
                        </NavLink>
                    )}
                    {/* <NavDropdown title="Dropdown" id="navbarDropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
