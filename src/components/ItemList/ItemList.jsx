/* eslint-disable react/prop-types */
import { Item } from '../Item/Item'


export const ItemList = ({ productsList }) => {

    //Recibe los productos de ItemListContainer
    //por cada elem del array productList va a renderizar un elemento Item y 
    //le pasa todas las propiedades del elemento (...elem) y setea una key 
    //la key es pedida por react cuando hacemos un map y renderizamos una lista (para que pueda identificar cada elemento)
    //productList? (renderizado condicional)
    return(
        <div>
            {productsList?.map((elem) => {
                return <Item key={elem.id} {...elem}/>
            })}
        </div>
    )
}