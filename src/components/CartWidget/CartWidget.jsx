import cart from './assets/cart.svg'
import styles from './CartWidget.module.css'

export const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" className={styles.cart__svg}/>
            <span> 0 </span>
        </div>

    )
}

