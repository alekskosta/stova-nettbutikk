import { useCartStore } from "../../store";
import "./ProductCard.css";
export default function ProductCard({ prod }) {
  const setInShoppingCart = useCartStore((state) => state.setInShoppingCart);

  function getRandomId() {
    return Math.random();
  }

  function addToCart(product) {
    setInShoppingCart((prevState) => [
      ...prevState,
      { ...product, cartLineId: getRandomId() },
    ]);
  }

  return (
    <article className="card">
      <img src={prod.image} className="card-img" alt={prod.name} />
      <div className="card-text">
        <h3 className="card-title">{prod.name}</h3>
        <p>Pris: {prod.price} kr</p>
        <p>{prod.category}</p>
        <button type="button" onClick={() => addToCart(prod)}>
          Kjøp
        </button>
      </div>
    </article>
  );
}
