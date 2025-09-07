import { useCartStore } from "../../store";
import "./Modal.css";

export default function Modal() {
  const inShoppingCart = useCartStore((state) => state.inShoppingCart);
  const setInShoppingCart = useCartStore((state) => state.setInShoppingCart);
  const cartModal = useCartStore((state) => state.cartModal);
  const setCartModal = useCartStore((state) => state.setCartModal);

  function closeModal() {
    setCartModal((prev) => !prev);
  }

  function toPayment() {
    alert("Her stopper det :)");
  }

  function removeAtCart(cartLineId) {
    setInShoppingCart((prev) =>
      prev.filter((item) => item.cartLineId !== cartLineId)
    );
  }

  const groupedProd = {};

  for (const item of inShoppingCart) {
    groupedProd[item.id] ??= { ...item, quantity: 0 };
    groupedProd[item.id].quantity += 1;
  }

  const grouped = Object.values(groupedProd);

  return (
    <>
      {cartModal && (
        <div className="modal-overlay" id="cartModal">
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <div className="modal__header">
              <button
                className="modal__close"
                aria-label="Lukk"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="modalTitle" id="modalTitle">
                Handlekurv
              </h3>
            </div>
            <div className="modal__body">
              {inShoppingCart.length === 0 ? (
                <h4>Du har ingenting i kassen</h4>
              ) : (
                grouped.map((item) => (
                  <article key={item.id}>
                    <div className="modal-prod">
                      <div>
                        <h4>
                          {item.name} X {item.quantity}
                        </h4>
                        <p>Pris: {item.price * item.quantity}</p>
                      </div>
                      <div
                        onClick={() => removeAtCart(item.cartLineId)}
                        className="modal-x"
                      >
                        X
                      </div>
                    </div>
                    <hr />
                  </article>
                ))
              )}
            </div>
            <div className="modal__footer">
              <button onClick={toPayment} className="modal-button">
                Til betaling
              </button>
              <p>
                SUM ={" "}
                {inShoppingCart.reduce((sum, item) => sum + item.price, 0)} kr
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
