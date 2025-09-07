import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Stova</h2>
        <p>De beste burgerne, pølsene og drikkene – siden 2024</p>

        <p className="copyright">
          © {new Date().getFullYear()} Stova. All rights reserved.
        </p>
      </div>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Stova på Facebook"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Stova på Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Stova på Youtube"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Stova på Tiktok"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </footer>
  );
}
