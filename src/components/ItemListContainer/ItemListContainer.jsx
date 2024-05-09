/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory, setProduct } from '../../utils/MockData'
import { ItemList } from '../ItemList/ItemList'
import { useFetch } from '../../hooks/useFetch'
import { Spinner } from '../spinner/Spinner'
import { usePaginate } from '../../hooks/usePaginate'
import { useParams } from 'react-router-dom'

//Desestructurar en la creacion del componente
export const ItemListContainer = ({greeting, bgGrey}) => {
    //Una vez resuelta la promesa, setea los productos en el state y los pasa como parámetro a ItemList
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

    const itemsPerPage = 1

    const {
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        paginate,
        totalPagesArray,
        currentData,
    } = usePaginate(products, itemsPerPage)

    //Llamada a una API
    //const url = "https://fakestoreapi.com/products"
    //const method = "GET"
    //const {data, loading, error} = useFetch(url, method, null)


    //Desestructurar asignando los valores de props (Parametro) a variables
    //const {bgBlue, greeting} = props
    //const bgBlue = props.bgBlue
    //const greeting = props.greeting


    useEffect(() => {
        setLoading(true)
        if(categoryId) {
            getProductsByCategory(categoryId).then((res) => {
                setProducts(res)
                setLoading(false)
            })
        } else {
            getProducts().then((res) => {
                setProducts(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        //setProduct().then((res) => console.log(res))
    }, [categoryId])

    const defaultTitle = "Bienvenidos a mi tienda"
    
    return(
        <main >
            <h1> { greeting ? greeting : defaultTitle } </h1>
            {loading?<Spinner/>:
            <div>
                <ItemList productsList={products} />

                <button onClick={prevPage}> Prev Page </button>
                {totalPagesArray.map((page) => {
                    if (page < 3){
                        return(
                            <button key={page} onClick={() => paginate(page)}>
                                {page}
                            </button>
                        )
                    } if (page === 3) return "..."
                    if (page === totalPages){
                        return(
                            <button key={page} onClick={() => paginate(page)}>
                                {page}
                            </button>
                        )
                    }
                })}
                <button onClick={nextPage}>Next Page</button>
            </div>  
            }
            
            <p className={bgGrey ? styles.bgOk : styles.bgDefault}>Suspendisse ut malesuada sapien, vitae mollis diam. Suspendisse tristique et ex non faucibus. Pellentesque a urna risus. Ut non enim finibus, tempus dui eget, tincidunt sem. Phasellus sed mauris elit. Pellentesque condimentum lorem vitae justo congue, ut semper nisi gravida. Sed viverra nibh eget tincidunt convallis. In egestas non tortor at tempor. Nullam maximus mi ac pharetra dictum.</p>
            
        </main>
        
    )
}

