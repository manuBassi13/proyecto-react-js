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
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className="bg-dark">
                <Navbar.Brand href="#home">
                    <img src={logoBS} alt="Logo Black Sheep" className={styles.navbarLogo} />
                </Navbar.Brand>
            
                <Nav className="me-auto dark">
                        <Link to="/">Inicio </Link>
                        <Link to="/products">Products</Link>
                        <Link to="/category/canastos">Canastos</Link>
                        <Link to="/category/personal">Uso Personal</Link>
                        <Link to="/category/ceramica">Ceramica</Link>
                        <Link to="/category/textil">Textil</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/dashboard">Dash</Link>
                </Nav>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}
