import styles from './Navbar.module.css'
import logo from '../../assets/logo-bsheep.png'
import { CartWidget } from "../CartWidget/CartWidget.jsx"

export const NavBar = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Black Sheep" className={styles.navbar__logo} />
            <nav>
                <ul className={styles.navbar__list}>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}
