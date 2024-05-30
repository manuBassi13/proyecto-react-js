import cart from './assets/bag-shopping-solid.svg'
import styles from './CartWidget.module.css'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const {totalQty} = useCartContext()
    
    return(
        <div>
            <img src={cart} alt="cart-widget" className={styles.cart__svg}/>
            <span>{totalQty}</span>
        </div>

    )
}

