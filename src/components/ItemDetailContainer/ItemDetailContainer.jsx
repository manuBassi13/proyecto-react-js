import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  Spinner  from "react-bootstrap/Spinner"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/dbConnection"


export const ItemDetailContainer = () => {
    const { prodId } = useParams()
    const [ product, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productsCollection = collection(db, "products")
        const refDoc = doc(productsCollection, prodId)

        getDoc(refDoc).then((res) => {
            setProduct({id:res.id, ...res.data()})
            setLoading(false)
        }).catch((err) =>{
            console.log(err)
            setLoading(false)
        })
        // getProductById(prodId)
        // .then((res) => {
        //     setProduct(res)
        //     setLoading(false)
        // })
    }, [prodId])
    
    return (
        <main>
            { 
                loading ? <Spinner animation="border" variant="primary"/>
                : <ItemDetail {...product}/>
            }
            
        </main>
    )
    
}