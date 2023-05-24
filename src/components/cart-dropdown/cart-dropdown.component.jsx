import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

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