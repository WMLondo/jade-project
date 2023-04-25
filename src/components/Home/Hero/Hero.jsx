import React from "react";
import OptionCard from "../../ui/Card/OptionCard/OptionCard";
import firstOptionImage from "../../../assets/img/homeImg/option-1.jpg";
import secondOptionImage from "../../../assets/img/homeImg/option-2.png";
import thirdOptionImage from "../../../assets/img/homeImg/option-3.png";
import fourthOptionImage from "../../../assets/img/homeImg/option-4.png";
import fiveOptionImage from "../../../assets/img/homeImg/option-5.png";

import classes from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.hero}>
      <div className={classes["options-container"]}>
        <OptionCard
          src={firstOptionImage}
          optionClassName={classes["option-card-1"]}
          title="Bienestar y relajación"
          buttonLabel="VER SERVICIOS"
          imgHeight="610px"
          imgWidth="100%"
          buttonClick={() => navigate("servicios")}
        />
        <div className={classes["column-container"]}>
          <div className={classes["row-container"]}>
            <OptionCard
              src={secondOptionImage}
              optionClassName={classes["option-card-2"]}
              title="Todo lo que necesitas al alcance de un click"
              paragraph="Todo para el cuidado de tu piel en línea. Compra ahora y disfruta de nuestra calidad."
              buttonLabel="COMPRA YA"
              buttonClick={() => navigate("tienda")}
            />
            <OptionCard
              src={thirdOptionImage}
              optionClassName={classes["option-card-3"]}
              title="Nuevos Productos"
              buttonLabel="EXPLORAR LA NUEVA LINEA"
              contentMargin="0px auto"
              buttonClick={() => navigate("tienda?search=nueva-linea")}
            />
          </div>
          <div className={classes["row-container"]}>
            <OptionCard
              src={fourthOptionImage}
              optionClassName={classes["option-card-4"]}
              title="Tendencia de Productos"
              buttonLabel="VER PRODUCTOS EN TENDENCIA"
              contentMargin="0px auto"
              buttonClick={() => navigate("tienda?search=tendencia-producto")}
            />
            <OptionCard
              src={fiveOptionImage}
              optionClassName={classes["option-card-5"]}
              title="Descubre tu mejor piel"
              paragraph="Descubre nuestra selección de productos de cuidado de la piel de calidad para ayudarte a alcanzar tu mejor piel. "
              buttonLabel="DESCUBRE MAS"
              buttonClick={() =>
                navigate("tienda?search=descubre-tu-mejor-piel")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
