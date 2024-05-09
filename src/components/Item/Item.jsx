/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const Item = ({ id, name, description, price, image}) => {

    const handleOnClick = () => {
        console.log("Click")
    }

    return(
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            <Link to={`/products/${id}`} onClick={handleOnClick}>
                Detalles
            </Link>
        </div>
    )
}