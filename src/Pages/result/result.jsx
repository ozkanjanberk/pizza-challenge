import React from "react";
import "./result.css";

export default function Result() {
  return (
    <div className="result-page">
      <div className="result-background">
        <div className="result-content">
          <div className="result-logo">
            <img src="Assets/mile1-assets/logo.svg" alt="Logo" />
          </div>
          <div className="result-message">
            <span>
              TEBRİKLER! <br />
              SİPARİŞİNİZ ALINDI!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
