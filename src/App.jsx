import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Modal from "./components/modal/Modal.jsx";
import Hero from "./components/hero/Hero.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Modal />
      </main>
      <Footer />
    </>
  );
}

export default App;
