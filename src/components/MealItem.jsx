import { useContext } from "react";
import { CartContext } from "../store/cart-context.jsx";

export default function MealItem({ id, image, name, price, description }) {
  const cartCtx = useContext(CartContext);
  const addToCart = () => {
    cartCtx.addItemToCart(id, name, parseFloat(price));
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="poop" />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={addToCart}>
            Add To Cart
          </button>
        </p>
      </article>
    </li>
  );
}
