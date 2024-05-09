/* eslint-disable react/prop-types */


export const ItemDetail = ({ name, description, price, stock, type, image }) => {
    console.log(type)
    return(
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            <p>Description: {description}</p>
            <p>$ {price}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}