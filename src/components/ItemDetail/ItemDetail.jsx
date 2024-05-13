/* eslint-disable react/prop-types */
import { ItemCount } from "../ItemCount/ItemCount"
import  Card  from "react-bootstrap/Card"

export const ItemDetail = ({ name, description, price, stock, type, image }) => {
    console.log(type)
    return(
        
            <div className='d-flex justify-content-center'>
                    <Card style={{ width: '24rem'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Card.Text>$ {price}</Card.Text>
                            <ItemCount stock={stock} initial={1}/>
                        </Card.Body>
                    </Card>
            </div>

        
            
        
    )
}