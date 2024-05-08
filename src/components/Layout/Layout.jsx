/* eslint-disable react/prop-types */
import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar/Navbar"

export const Layout = ({ children }) => {

    return(
        <div>
            <NavBar/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}