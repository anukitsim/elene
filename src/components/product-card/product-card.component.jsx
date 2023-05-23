import "./product-card.styles.scss";
import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
    const {name, price, imageUrl, currency} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

  return(
    <div className="product-card-container">
        
        <img src={imageUrl} alt={`${name}`}/>
        <div className="product-footer">
        <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="currency">{currency}</span>
           
        </div>
        <Button onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
};

export default ProductCard;
