import React from "react";
import "./home.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function Home() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Ana Sayfa</title>
          <link rel="stylesheet" href="src/Pages/home/home.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="hero">
            <div className="logo-container">
              <img src="Assets/mile1-assets/logo.svg" alt="Logo" />
            </div>
            <img src="Assets/mile1-assets/home-banner.png" alt="Hero Image" />
            <span>
              KOD ACIKTIRIR <br />
              PIZZA, DOYURUR
            </span>
            <Link to="/orderForm">
              <button>ACIKTIM</button>
            </Link>
          </div>
        </body>
      </html>
    </>
  );
}
