import React from "react";
import { useLocation } from "react-router-dom";
import "./result.css";

export default function Result() {
  const location = useLocation();
  const formData = location.state.formData;

  return (
    <div className="result-page">
      <div className="result-background">
        <div className="result-content">
          <div className="result-logo">
            <img src="Assets/mile1-assets/logo.svg" alt="Logo" />
          </div>
          <div className="result-message">
            <p>lezzetin yolda</p>
            <p>SİPARİŞ ALINDI</p>
            <hr></hr>
          </div>
        </div>
        <div className="selectedForm">
          <h1>Position Absolute Acı Pizza</h1>
          <p>
            Boyut: <span>{formData.boyut}</span>
          </p>
          <p>
            Hamur: <span>{formData.doughThick}</span>
          </p>
          <p>Ek Malzemeler: {formData.toppings.join(", ")}</p>
        </div>
        <div className="price">
          <h3>Sipariş Toplamı</h3>
          <div className="selectionPrice">
            <p>Seçimler:</p>
            <p>{formData.toppings.length * 5}₺</p>
          </div>
          <div className="totalPrice">
            <p>Toplam: </p>
            <p>{formData.toppings.length * 5 + 85.5}₺</p>
          </div>
        </div>
      </div>
    </div>
  );
}
