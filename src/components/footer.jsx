import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Icon1 from "./icon-1.png";
import Icon2 from "./icon-2.png";
import Icon3 from "./icon-3.png";
import insta2 from "./li-1.png";
import insta1 from "./li-0.png";
import insta3 from "./li-2.png";
import insta4 from "./li-3.png";
import insta5 from "./li-4.png";
import insta6 from "./li-5.png";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <nav className="footerInfoList">
              <img className="" src="Assets/mile1-assets/logo.svg" alt="Logo" />
              <ul>
                <li>
                  <img src={Icon1} />
                  <Link to="/orderForm">
                    341 Londonderry Road, İstanbul Türkiye
                  </Link>
                </li>
                <li>
                  <img src={Icon2} />
                  <Link to="/orderForm">aciktim@teknolojikyemekler.com</Link>
                </li>
                <li>
                  <img src={Icon3} />
                  <Link to="/orderForm">+90 216 123 45 67</Link>
                </li>
              </ul>
            </nav>
            <div className="footer-menu">
              <h3>Sıccacık Menüler</h3>
              <Link to="/orderForm">Terminal Pizza</Link>
              <Link to="/orderForm">5 Kişilik Hackathlon Pizza</Link>
              <Link to="/orderForm">useEffect Tavuklu Pizza</Link>
              <Link to="/orderForm">Beyaz Console Frosty</Link>
              <Link to="/orderForm">Testler Geçti Mutlu Burger</Link>
              <Link to="/orderForm">Position Absolute Acı Burger</Link>
            </div>
          </div>
          <div className="footer-right">
            <h3>Instagram</h3>
            <nav className="instaList">
              <ul>
                <li>
                  <img src={insta1} />
                  <Link to="/orderForm"></Link>
                </li>
                <li>
                  <img src={insta2} />
                  <Link to="/orderForm"></Link>
                </li>
                <li>
                  <img src={insta3} />
                  <Link to="/orderForm"></Link>
                </li>
                <li>
                  <img src={insta4} />
                  <Link to="/orderForm"></Link>
                </li>
                <li>
                  <img src={insta5} />
                  <Link to="/orderForm"></Link>
                </li>
                <li>
                  <img src={insta6} />
                  <Link to="/orderForm"></Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr />
        <p>© 2024 Teknolojik Yemekler.</p>
      </footer>
    </>
  );
}
