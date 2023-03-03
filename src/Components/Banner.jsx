import React from "react";
import "../css/Banner.css";

const Banner = () => {
  return (
    <section className="background">
      <div className="content">
        <h2>
          <span>JUST ONE</span> CLICK AWAY
        </h2>
        <p>
          "La capacidad y gusto por la lectura da acceso
          <br /> a lo que ya ha sido descubierto por otros".
        </p>
        <a
          href="https://www.muyinteresante.es/actualidad/13260.html"
          target={"_blank"}
        >
          Abraham Lincon
        </a>
      </div>
    </section>
  );
};

export default Banner;
