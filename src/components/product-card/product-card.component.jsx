import "./product-card.styles.scss";
import Button from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, currency } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
 

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </div>
      <Button onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
