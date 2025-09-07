import { useState } from "react";
import "./Products.css";
import ProductCard from "../productCard/ProductCard";
import { productsArray } from "../../data";

export default function Products() {
  const [meny, setMeny] = useState(productsArray);
  const [isActive, setIsActive] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  function getBurgers() {
    setMeny(productsArray.filter((item) => item.category === "Burger"));
    setIsActive("Burger");
  }

  function getSausage() {
    setMeny(productsArray.filter((item) => item.category === "Pølse"));
    setIsActive("Pølse");
  }

  function getDrinks() {
    setMeny(productsArray.filter((item) => item.category === "Drikkevare"));
    setIsActive("Drikkevare");
  }

  function getAll() {
    setMeny(productsArray);
    setIsActive("all");
    setIsPressed((prev) => !prev);
  }

  return (
    <section>
      <div className="button-center">
        <button
          className={isActive === "all" ? "meny-button active" : "meny-button"}
          onClick={getAll}
        >
          {isPressed ? "Skjul meny" : "Vår meny"}
        </button>
      </div>
      {isPressed && (
        <>
          <div className="prod-buttons">
            <button
              onClick={getBurgers}
              className={isActive === "Burger" ? "active" : "meny-button"}
            >
              Burger
            </button>
            <button
              onClick={getSausage}
              className={isActive === "Pølse" ? "active" : "meny-button"}
            >
              Pølser
            </button>
            <button
              onClick={getDrinks}
              className={isActive === "Drikkevare" ? "active" : "meny-button"}
            >
              Drikke
            </button>
          </div>

          {["all", "Burger"].includes(isActive) && (
            <>
              <h2 className="prod-title">Burgere:</h2>
              <div className="prod-container">
                {meny
                  .filter((prod) => prod.category === "Burger")
                  .map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                  ))}
              </div>
            </>
          )}

          {["all", "Pølse"].includes(isActive) && (
            <>
              <h2 className="prod-title">Pølser:</h2>
              <div className="prod-container">
                {meny
                  .filter((prod) => prod.category === "Pølse")
                  .map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                  ))}
              </div>
            </>
          )}

          {["all", "Drikkevare"].includes(isActive) && (
            <>
              <h2 className="prod-title">Drikke:</h2>
              <div className="prod-container">
                {meny
                  .filter((prod) => prod.category === "Drikkevare")
                  .map((prod) => (
                    <ProductCard key={prod.id} prod={prod} />
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}
