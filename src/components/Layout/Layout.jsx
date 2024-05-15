/* eslint-disable react/prop-types */
import { Footer } from "../Footer/Footer"
import { Navigation } from "../Navigation/Navigation"
import Container from 'react-bootstrap/Container'
import { Outlet } from "react-router-dom"

export const Layout = () => {

    return(
        <div>
            <Navigation/>
            <Container>
                <Outlet />    
            </Container>
            <Footer/>
        </div>
    )
}