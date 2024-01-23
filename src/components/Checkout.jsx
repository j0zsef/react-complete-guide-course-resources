export default function Checkout() {
  return (
    <form method="dialog">
      <h2>Checkout</h2>
      <p>Total Amount: 420</p>
      <div className="control">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" required />
      </div>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="modal-actions">
        <button className="button">Close</button>
        <button className="button">Submit Order</button>
      </div>
    </form>
  );
}
