import React from "react";
import "./home.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import KoreIcon from "./1.svg";
import Pizza from "./2.svg";
import Burger from "./3.svg";
import Kizartmalar from "./4.svg";
import FastFood from "./5.svg";
import Gazli from "./6.svg";
import { Footer } from "../../components/footer.jsx";

export function Home() {
  return (
    <>
      <div className="hero">
        <img className="" src="Assets/mile1-assets/logo.svg" alt="Logo" />
        <div className="hero-content">
          <p>KOD ACIKTIRIR</p>
          <p>PIZZA, DOYURUR</p>
          <Link to="/orderForm">ACIKTIM</Link>
        </div>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <img src={KoreIcon} />
            <Link to="/orderForm">YENİ! Kore</Link>
          </li>

          <li>
            <img src={Pizza} />
            <Link to="/orderForm">Pizza</Link>
          </li>
          <li>
            <img src={Burger} />
            <Link to="/orderForm">Burger</Link>
          </li>
          <li>
            <img src={Kizartmalar} />
            <Link to="/orderForm">Kızartmalar</Link>
          </li>
          <li>
            <img src={FastFood} />
            <Link to="/orderForm">Fast Food</Link>
          </li>
          <li>
            <img src={Gazli} />
            <Link to="/orderForm">Gazlı İçecek</Link>
          </li>
        </ul>
      </nav>
      {/*<div class="grid-container">
        <div class="item item1">
          <div className="item1-content">
            <p>Özel</p>
            <p>Lezzetus</p>
            <p>Position: Absolute Acı Pizza</p>
            <Link to="/orderForm">Sipariş Ver</Link>
          </div>
        </div>
        <div class="item item2">
          <div className="item2-content">
            <p>Hackathlon</p>
            <p>Burger Menü</p>
            <Link to="/orderForm">Sipariş Ver</Link>
          </div>
        </div>
        <div class="item item3">
          {" "}
          <div className="item3-content">
            <p>
              <span>Çoooook</span> hızlı
            </p>
            <p>npm gibi kurye</p>
            <Link to="/orderForm">Sipariş Ver</Link>
          </div>
        </div>
  </div>*/}

      <div class="flex-container">
        <div className="item1-content">
          <p>Özel</p>
          <p>Lezzetus</p>
          <p>Position: Absolute Acı Pizza</p>
          <Link to="/orderForm">Sipariş Ver</Link>
        </div>
        <div className="container-right">
          <div className="item2-content">
            <p>Hackathlon</p>
            <p>Burger Menü</p>
            <Link to="/orderForm">Sipariş Ver</Link>
          </div>
          <div class="item item3">
            <div className="item3-content">
              <p>
                <span>Çoooook</span> hızlı
              </p>
              <p>npm gibi kurye</p>
              <Link to="/orderForm">Sipariş Ver</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bestsellers">
        <h3>en çok paketlenen menüler</h3>
        <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
        <nav className="navbar2">
          <ul>
            <li>
              <img src={KoreIcon} />
              <Link to="/orderForm">Ramen</Link>
            </li>

            <li>
              <img src={Pizza} />
              <Link to="/orderForm">Pizza</Link>
            </li>
            <li>
              <img src={Burger} />
              <Link to="/orderForm">Burger</Link>
            </li>
            <li>
              <img src={Kizartmalar} />
              <Link to="/orderForm">French Fries</Link>
            </li>
            <li>
              <img src={FastFood} />
              <Link to="/orderForm">Fast Food</Link>
            </li>
            <li>
              <img src={Gazli} />
              <Link to="/orderForm">Soft Drinks</Link>
            </li>
          </ul>
        </nav>
        <div className="bestSellerContainer">
          <div className="bestItem1">
            <h3>Terminal Pizza</h3>
            <div className="itemRatings1">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
          <div className="bestItem2">
            <h3>Position Absolute Acı Pizza</h3>
            <div className="itemRatings2">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
          <div className="bestItem3">
            <h3>useEffect Tavuklu Burger</h3>
            <div className="itemRatings3">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
