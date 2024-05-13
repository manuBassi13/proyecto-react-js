/* eslint-disable no-unused-vars */
import styles from './Navigation.module.css'
import logoBS from '../../assets/logo-bsheep.png'
import { CartWidget } from "../CartWidget/CartWidget.jsx"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoBS} alt="Logo Black Sheep" className={styles.navbarLogo} />
                </Navbar.Brand>
            
                <Nav className="me-auto">
                        <Nav.Link to="/">Inicio </Nav.Link>
                        <Nav.Link to="/products">Products</Nav.Link>
                        <Link to="/category/grass">Grass</Link>
                        <Link to="/category/fire">Fire</Link>
                        <Link to="/category/water">Water</Link>
                        <Link to="/category/electric">Electric</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/dashboard">Dash</Link>
                </Nav>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}
