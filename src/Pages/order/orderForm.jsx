import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./orderForm.css";
import { Footer } from "../../components/footer";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    isim: "",
    not: "",
    boyut: "",
    doughThick: "",
    toppings: [],
    adet: 1,
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

  const handleDecrease = () => {
    setFormData((prevData) => ({
      ...prevData,
      adet: prevData.adet > 0 ? prevData.adet - 1 : 0,
    }));
  };

  const handleIncrease = () => {
    setFormData((prevData) => ({
      ...prevData,
      adet: prevData.adet + 1,
    }));
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
        history.push({
          pathname: "/result",
          state: { formData: formData },
        });
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <div className="header-area">
        <img src="Assets/mile1-assets/logo.svg" alt="Logo" />
      </div>
      <div className="formBanner">
        <div className="formBannerContent">
          <h2>Position Absolute Acı Pizza</h2>
          <p>85.50₺</p>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formFirstRow">
          <div className="formRadio">
            Boyut Seç
            <label>
              <input
                name="boyut"
                type="radio"
                value="S"
                onChange={handleChange}
              />
              S
            </label>
            <label>
              <input
                name="boyut"
                type="radio"
                value="M"
                onChange={handleChange}
              />
              M
            </label>
            <label>
              <input
                name="boyut"
                type="radio"
                value="Büyük"
                onChange={handleChange}
              />
              L
            </label>
          </div>

          <div>
            <label className="selectBox">Hamur Seç</label>
            <br></br>
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

        <div className="name">
          <label htmlFor="name">İsminiz</label>
          <div>
            <textarea
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
        <div className="orderArea">
          <div className="orderCounter">
            <button type="button" onClick={handleDecrease}>
              -
            </button>
            <p>{formData.adet}</p>
            <button type="button" onClick={handleIncrease}>
              +
            </button>
          </div>

          <div className="formPrice">
            <h3>Sipariş Toplamı</h3>
            <div className="formSelectionPrice">
              <p>Seçimler:</p>
              <p>{formData.toppings.length * 5 * formData.adet}₺</p>
            </div>
            <div className="formTotalPrice">
              <p>Toplam: </p>
              <p>
                {formData.toppings.length * 5 * formData.adet +
                  formData.adet * 85.5}
                ₺
              </p>
            </div>
            <div className="buttonLocation">
              <button className="orderButton" type="submit">
                Sipariş Ver
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
