import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);

    const navigateToCheckout = useNavigate();

    const goToCheckout = () => {
        navigateToCheckout ('/checkout');
    }


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItems.map((item) => (
                <CartItem cartItem={item} key={item.id} />
               ))}
            </div>
            <Button onClick={goToCheckout}>Check out</Button>
        </div>
    )

};

export default CartDropdown;