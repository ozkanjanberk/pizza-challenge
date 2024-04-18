import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./orderForm.css";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    isim: "",
    not: "",
    boyut: "",
    doughThick: "",
    toppings: [],
    adet: 0,
  });

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const malzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Zeytin",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (e.target.type === "checkbox") {
      const toppings = [...formData.toppings];
      if (checked) {
        toppings.push(value);
      } else {
        const index = toppings.indexOf(value);
        toppings.splice(index, 1);
      }
      setFormData((prevData) => ({
        ...prevData,
        toppings,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const errors = {};
    if (formData.isim.length < 3) {
      errors.isim = "İsim en az 3 karakter olmalıdır.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((res) => {
        console.log(res.data);
        history.push("/result");
      })
      .catch((res) => console.error(res.data));
  }

  return (
    <div>
      <div className="header-area">
        <img src="Assets/mile1-assets/logo.svg" alt="Logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Boyut Seç</p>
          <label>
            <input
              name="boyut"
              type="radio"
              value="Küçük"
              onChange={handleChange}
            />
            Küçük
          </label>

          <label>
            <input
              name="boyut"
              type="radio"
              value="Orta"
              onChange={handleChange}
            />
            Orta
          </label>

          <label>
            <input
              name="boyut"
              type="radio"
              value="Büyük"
              onChange={handleChange}
            />
            Büyük
          </label>
        </div>

        <div>
          <label>Hamur Seç</label>
        </div>
        <div>
          <select
            name="doughThick"
            value={formData.doughThick}
            onChange={handleChange}
          >
            <option disabled selected value="">
              Hamur Kalınlığı
            </option>
            <option value="ekstraInce">Ekstra İnce</option>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="ekstraKalin">Kalın</option>
          </select>
        </div>

        <div>
          <label>Ek Malzemeler:</label>
          <br />
          {malzemeler.map((malzeme, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name="ekMalzemeler"
                value={malzeme}
                onChange={handleChange}
              />
              <label>{malzeme}</label>
              <br />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="name">İsminiz</label>
          <div>
            <input
              type="text"
              name="isim"
              id="name"
              placeholder="İsminizi giriniz..."
              onChange={handleChange}
              value={formData.isim}
              className={errors.isim ? "error" : ""}
            />
            {errors.isim && (
              <span className="error-message">{errors.isim}</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="orderNote">Sipariş Notu</label>
          <div>
            <textarea
              name="not"
              id="orderNote"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              onChange={handleChange}
              value={formData.not}
            ></textarea>
          </div>
        </div>

        <hr></hr>
        <button type="submit">Sipariş Ver</button>
      </form>
    </div>
  );
}
