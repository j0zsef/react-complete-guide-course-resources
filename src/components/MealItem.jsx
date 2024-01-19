export default function MealItem({ image, name, price, description }) {
  const addToCart = () => {
    //add to cart. probs use store.
  };
  return (
    <article className="meal-item">
      <img src={`http://localhost:3000/${image}`} />
      <h3>{name}</h3>
      <div className="meal-item-price">{price}</div>
      <div className="meal-item-description">{description}</div>
      <button className="meal-item-actions button" onClick={addToCart}>
        Add To Cart
      </button>
    </article>
  );
}
