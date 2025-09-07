import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text-container">
        <h2 className="hero-tittle">Alt på grillen.</h2>
      </div>
      <div className="hero-img-container">
        <img
          src="./StovaBilder/purple-burger-transparent.jpg"
          alt="burger"
          className="hero-img"
        />
      </div>
    </section>
  );
}
