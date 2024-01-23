import { useContext } from "react";
import { CartContext } from "../store/cart-context.jsx";

export default function Cart({ onCheckout }) {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  let modalActions = <button className="button">Close</button>;

  if (cartCtx.items.length > 0) {
    modalActions = (
      <>
        <button className="button">Close</button>
        <button className="button">Checkout</button>
      </>
    );
  }

  return (
    <form onSubmit={onCheckout} method="dialog">
      <h2>Your Cart</h2>
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
      {cartCtx.items.length > 0 && (
        <ul className="cart-items">
          {cartCtx.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li className="cart-item" key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() => cartCtx.updateItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => cartCtx.updateItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="cart-total">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
      <div className="modal-actions">{modalActions}</div>
    </form>
  );
}
