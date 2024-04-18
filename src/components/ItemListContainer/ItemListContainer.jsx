/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import styles from './ItemListContainer.module.css'

//Desestructurar en la creacion del componente
export const ItemListContainer = ({greeting, bgBlue}) => {

    //Desestructurar asignando los valores de props (Parametro) a variables
    //const {bgBlue, greeting} = props
    //const bgBlue = props.bgBlue
    //const greeting = props.greeting

    const defaultTitle = "Bienvenidos a mi tienda"
    
    return(
        <main>
            <h1> { greeting ? greeting : defaultTitle } </h1>
            <div className={bgBlue ? styles.bgBlue : styles.bgDefault}>
                <p> Parrafo 1 </p>
            </div>
        </main>
        
    )
}

