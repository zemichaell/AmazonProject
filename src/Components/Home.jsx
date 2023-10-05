import React from "react";
import "../Components/Home.css";
import Footer from "./Footer";
import Product from "../Components/Product";

// Images

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Lean: An Essential Guide to Lean Startup, Lean Six Sigma, Lean Analytics, Lean Enterprise, Lean Manufacturing, Agile Project..."
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81KvxAB68sL._AC_UY218_.jpg"
          />
          <Product
            id="412365"
            title="Dash Stand Mixer (Electric Mixer for Everyday Use): 6 Speed Stand Mixer with 3 Quart Stainless Steel Mixing Bowl, Dough..."
            price={5.15}
            rating={4}
            image="https://m.media-amazon.com/images/I/71xp55lKbEL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="385214"
            title="SAMSUNG Odyssey Ark 55-Inch Curved Gaming Screen, 4K UHD 165Hz 1ms (GTG) Quantum Mini-LED Gamer"
            price={2017.61}
            rating={3}
            image="https://m.media-amazon.com/images/I/81mVo0xRU0L._AC_UY218_.jpg"
          />
          <Product
            id="569980"
            title="Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
            price={34.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51cGlUCK5WL._AC_SL1000_.jpg"
          />
          <Product
            id="10498"
            title="Ring Video Doorbell Wired bundle with Echo Pop"
            price={104.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41NH5jrMWvL._SY355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="385214"
            title="GE Profile Opal 1.0 Nugget Ice Maker| Countertop Pebble Ice Maker | Portable Ice Machine Makes up to 34 lbs. of Ice Per Day | Stainless Steel Finish"
            price={2017.61}
            rating={3}
            image="https://m.media-amazon.com/images/I/81DFtu9KzcL._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="987456"
            title="ANJ Power Recliner Chair Set of 3, PU Leather Electric Home Theater Seating with USB Ports and Cup Holders, Red Overstuffed Reclining Furniture with Hidden Arm Storage"
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/71IGUO0-IsL._AC_SX425_.jpg"
          />
          <Product
            id="258963"
            title="Jarenie 79 Convertible Sectional Sofa, Modern L Shaped 3-Seater Couches with Reversible Chaise for Living Room, Apartment and Small Space, Dark Grey"
            price={2099}
            rating={4}
            image="https://m.media-amazon.com/images/I/61zvFY-owZL._AC_UL320_.jpg"
          />
          <Product
            id="982145"
            title="Red L Shaped Corner Arabic Sofa Seating, Arabic Majlis, Sectional Sofas, Moroccan Livingroom Home Decor, Turkish Floor Sofas (L Sofa Full Set)"
            price={1499}
            rating={4}
            image="https://m.media-amazon.com/images/I/81sdLFLYdRL._SX500_.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
