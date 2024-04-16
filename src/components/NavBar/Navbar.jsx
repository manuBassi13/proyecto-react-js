import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => {
    return (
        <nav>
            <h3>BlackSheep</h3>
            <div>
                <ul className="nav-list">
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar