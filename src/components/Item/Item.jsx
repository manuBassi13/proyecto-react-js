/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export const Item = ({ id, name, description, price, image}) => {

    const handleOnClick = () => {
        console.log("Click")
    }

    return(
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            <p>{description}</p>
            <button onClick={handleOnClick}>
                Detalles
            </button>
        </div>
    )
}