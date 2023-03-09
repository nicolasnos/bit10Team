import React from "react";
import "../css/Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="info-contenedor">
        <h1 className="heading ">
          <span>JUST ONE</span> <br />
          CLICK AWAY
        </h1>
        <div className="heading-sub">
          <p>
            "La capacidad y gusto por la lectura da acceso a lo que ya ha sido
            descubierto por otros".
            <div className="cita">
              <q>Abraham Lincoln.</q>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
