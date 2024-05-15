/* eslint-disable no-unused-vars */
import styles from './Navigation.module.css'
import logoBS from '../../assets/logo-bsheep.png'
import { CartWidget } from "../CartWidget/CartWidget.jsx"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'



export const Navigation = () => {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoBS} width="100px" alt="Logo Black Sheep"  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.navLinks}>
                            <Link to="/">Inicio</Link>
                            <Link to="/products">Productos</Link>
                            <Link to="/category/canastos">Canastos</Link>
                            <Link to="/category/personal">Uso Personal</Link>
                            <Link to="/category/ceramica">Ceramica</Link>
                            <Link to="/category/textil">Textil</Link>
                            <Link to="/cart">Cart</Link>
                            <Link to="/about">About us</Link>
                            <Link to="/dashboard">Dash</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    )
}
