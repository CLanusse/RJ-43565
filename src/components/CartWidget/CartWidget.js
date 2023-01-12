import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.scss'

const CartWidget = () => {

    const { totalCantidad } = useCartContext()
    return (
        <Link to="/cart" className='cart-widget'>
            <FaShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget