import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { useCartStore } from "../../store";

export default function Header() {
  const setCartModal = useCartStore((state) => state.setCartModal);
  const inShoppingCart = useCartStore((state) => state.inShoppingCart);

  function openModal() {
    setCartModal((prev) => !prev);
  }
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo-link" aria-label="Gå til hjem">
          <h1>Stova</h1>
        </a>
        <button className="shopping-Cart-Icon" onClick={openModal}>
          <FaShoppingCart
            size={28}
            style={{ marginLeft: "12px", cursor: "pointer" }}
          />
          <small>{inShoppingCart.length}</small>
        </button>
      </nav>
    </header>
  );
}
