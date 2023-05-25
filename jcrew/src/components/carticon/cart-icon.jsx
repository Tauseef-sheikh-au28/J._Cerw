import {ReactComponent as Shoppingbag} from './shopping.svg'
import './carticon.scss'
const CartIcon = ()=>{
    return (
        <div className='cart-icon-container'>
        <Shoppingbag className='shopping-icon'/>
        <span className='item-count'></span>
        </div>
    )
}
export default CartIcon;