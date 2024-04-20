import styles from './Navbar.module.css'
import logoBS from '../../assets/logo-bsheep.png'
import { CartWidget } from "../CartWidget/CartWidget.jsx"

export const NavBar = () => {
    return (
        <header className={styles.header}>
            <img src={logoBS} alt="Logo Black Sheep" className={styles.navbarLogo} />
                <nav>
                    <ul className={styles.navbarList}>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <CartWidget/>
        </header>
    )
}
