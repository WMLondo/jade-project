import React from "react";
import classes from "./Guide.module.css";
import GuideCard from "../../ui/Card/GuideCard/GuideCard";

const Guide = () => {
  return (
    <section className={classes.guide}>
      <div className={classes["text-container"]}>
        <h2 className={classes.title}>¿No se por donde empezar?</h2>
        <p className={classes.description}>
          Revisa nuestras guías certificadas por nuestros expertos
        </p>
      </div>
      <div className={classes.options}>
        <GuideCard path="guide">
          Cómo elegir la base de maquillaje perfecta para tu tipo de piel
        </GuideCard>
        <GuideCard path="guide">
          Guía de maquillaje para un look natural de día
        </GuideCard>
        <GuideCard path="guide">
          Guía de productos esenciales de maquillaje para principiantes
        </GuideCard>
        <GuideCard path="guide">
          Cómo lograr un look de maquillaje ahumado perfecto{" "}
        </GuideCard>
        <GuideCard path="guide">
          Guía de productos de maquillaje sin crueldad animal{" "}
        </GuideCard>
        <GuideCard path="guide">
          Cómo aplicar correctamente el corrector para ocultar imperfecciones{" "}
        </GuideCard>
        <GuideCard path="guide">
          Guía de productos de maquillaje con protección solar{" "}
        </GuideCard>
        <GuideCard path="guide">
          Cómo elegir la paleta de sombras de ojos adecuada para tu tono de piel{" "}
        </GuideCard>
      </div>
    </section>
  );
};

export default Guide;
