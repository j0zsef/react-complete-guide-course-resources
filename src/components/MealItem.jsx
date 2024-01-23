import { useContext } from "react";
import { CartContext } from "../store/cart-context.jsx";

export default function MealItem({ id, image, name, price, description }) {
  const cartCtx = useContext(CartContext);
  const addToCart = () => {
    cartCtx.addItemToCart(id, name, parseFloat(price));
  };
  return (
    <article className="meal-item">
      <img src={`http://localhost:3000/${image}`} />
      <h3>{name}</h3>
      <div className="meal-item-price">${price}</div>
      <div className="meal-item-description">{description}</div>
      <button className="meal-item-actions button" onClick={addToCart}>
        Add To Cart
      </button>
    </article>
  );
}
