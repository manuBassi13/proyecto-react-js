/* eslint-disable react/prop-types */
import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"
export const ItemCount = ({stock, initial, handleAddToCart}) => {
    const [cantItems, setCantItems] = useState(0);
    const [itemAdded, setItemAdded] = useState(false)
    const navigate = useNavigate()

    const handleAdd = () => {
        setCantItems(cantItems + 1)
    }
    const handleSubs = () => {        
        cantItems > 0 ? setCantItems(cantItems - 1) : alert('No se puede restar')  
    }
    
    const handleTerminarCompra = () => {
        setItemAdded(false)
        navigate("/cart")
    }

    const handleAgregarAlCarrito = () => {
        setItemAdded(true)
        handleAddToCart(cantItems)
        
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
            <br/>
            { 
                itemAdded
                ? <Button onClick={handleTerminarCompra} > Terminar Compra </Button>
                : <Button onClick={handleAgregarAlCarrito} > Agregar al carrito </Button>
            }
            
        </>
    )
}