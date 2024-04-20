/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import styles from './ItemListContainer.module.css'

//Desestructurar en la creacion del componente
export const ItemListContainer = ({greeting, bgGrey}) => {

    //Desestructurar asignando los valores de props (Parametro) a variables
    //const {bgBlue, greeting} = props
    //const bgBlue = props.bgBlue
    //const greeting = props.greeting

    const defaultTitle = "Bienvenidos a mi tienda"
    
    return(
        <main >
            <h1> { greeting ? greeting : defaultTitle } </h1>
                
            <p className={bgGrey ? styles.bgOk : styles.bgDefault}>Suspendisse ut malesuada sapien, vitae mollis diam. Suspendisse tristique et ex non faucibus. Pellentesque a urna risus. Ut non enim finibus, tempus dui eget, tincidunt sem. Phasellus sed mauris elit. Pellentesque condimentum lorem vitae justo congue, ut semper nisi gravida. Sed viverra nibh eget tincidunt convallis. In egestas non tortor at tempor. Nullam maximus mi ac pharetra dictum.</p>
            
        </main>
        
    )
}

