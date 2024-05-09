import styles from './Navigation.module.css'
import logoBS from '../../assets/logo-bsheep.png'
import { CartWidget } from "../CartWidget/CartWidget.jsx"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
        <Navbar bg="dark" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoBS} alt="Logo Black Sheep" className={styles.navbarLogo} />
                </Navbar.Brand>
            
                <Nav className="d-flex gap-3">
                        <Link to="/">Inicio </Link>
                        <Link to="/products">Products</Link>
                        <Link to="/category/grass">Grass</Link>
                        <Link to="/category/fire">Fire</Link>
                        <Link to="/category/water">Water</Link>
                        <Link to="/category/electric">Electric</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/about">About us</Link>
                </Nav>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}
