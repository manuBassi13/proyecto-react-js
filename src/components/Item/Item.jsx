/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  Card  from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export const Item = ({ id, name, description, price, image}) => {

    const handleOnClick = () => {
        console.log("Click")
    }

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link variant="primary" to={`/products/${id}`} onClick={handleOnClick}>
                    Detalles
                </Link>
            </Card.Body>
        </Card>
    )
}