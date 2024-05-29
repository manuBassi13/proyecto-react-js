/* eslint-disable react/prop-types */
import { ItemCount } from "../ItemCount/ItemCount"
import  Card  from "react-bootstrap/Card"
import { useCartContext } from "../../context/CartContext"

export const ItemDetail = (item) => {
    const {id, name, description, price, stock, type, image } = item
    const { addToCart } = useCartContext()
    
    const handleAddToCart = (cantItems) => {
        addToCart(item, cantItems)
    }
    return(
        
            <div className='d-flex justify-content-center'>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Card.Text>$ {price}</Card.Text>
                            <ItemCount 
                                stock={stock}
                                initial={1}
                                handleAddToCart={handleAddToCart}
                            />
                        </Card.Body>
                    </Card>
            </div>

        
            
        
    )
}