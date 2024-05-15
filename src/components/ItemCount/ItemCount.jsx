/* eslint-disable react/prop-types */
import { useState } from "react";
import  Button  from "react-bootstrap/Button";

export const ItemCount = ({stock}) => {
    const [cantItems, setCantItems] = useState(0);

    const handleAdd = () => {
        setCantItems(cantItems + 1)
    }
    const handleSubs = () => {        
        cantItems > 0 ? setCantItems(cantItems - 1) : alert('No se puede restar')  
    }
    const handleAddToCart = () => {
        console.log(`Se agregaron ${cantItems} al carrito`)
    }

    return(
        <>
            <div>
                <p>Stock: {stock}</p>
            </div>
            <div>
                <Button className="btn" onClick={handleSubs}>-</Button>
                <span>  {cantItems}  </span>
                <Button onClick={handleAdd}>+</Button>
            </div>
            <br />
            <Button onClick={handleAddToCart} > Agregar al carrito </Button>
            
        </>
    )
}