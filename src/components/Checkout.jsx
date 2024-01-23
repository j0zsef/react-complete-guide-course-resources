import { useContext } from "react";
import { CartContext } from "../store/cart-context.jsx";

export default function Checkout({ onClose }) {
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const handleSubmit = function (event) {
    if (event.nativeEvent.submitter.value === "close") {
      event.preventDefault();
      onClose();
      return;
    }

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    let request = {
      order: {
        customer: customerData,
        items: cartCtx.items,
      },
    };

    async function sendItems() {
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const parsedResponse = await response.json();

        if (!response.ok) {
          throw parsedResponse.message;
        }

        cartCtx.clearCart();

        console.log("Order Success!");
      } catch (e) {
        console.log(e);
        event.preventDefault();
      }
    }
    sendItems();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: {formattedTotalPrice}</p>
      <div className="control">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" required />
      </div>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input id="street" name="street" required />
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="postal-code">Postal</label>
          <input id="postal-code" name="postal-code" required />
        </div>
        <div className="control">
          <label htmlFor="city">City</label>
          <input id="city" name="city" required />
        </div>
      </div>
      <div className="modal-actions">
        <button value="close" className="button">
          Close
        </button>
        <button value="submit" className="button">
          Submit Order
        </button>
      </div>
    </form>
  );
}
