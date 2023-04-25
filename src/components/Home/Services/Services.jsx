import React from "react";
import ServiceCard from "../../ui/Card/ServiceCard/ServiceCard";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section className={classes["services-section"]}>
      <h2 className={classes.title}>
        Relájate y déjate cuidar por nuestros expertos
      </h2>

      <div className={classes.services}>
        <ServiceCard
          imgUrl="https://blog.meliacuba.es/wp-content/uploads/2014/03/YhiSpaPrincesaServicio_PPM__NEW_DSC42331-560x360.jpg"
          title="Nicol Rodriguez"
          paragragh='"Con una combinación de técnicas avanzadas y productos de alta calidad, te guiaré en un viaje hacia una piel más saludable, radiante y rejuvenecida"'
        />
        <ServiceCard
          imgUrl="https://blog.meliacuba.es/wp-content/uploads/2014/03/YhiSpaPrincesaServicio_PPM__NEW_DSC42331-560x360.jpg"
          title="Nicol Rodriguez"
          paragragh='"Con una combinación de técnicas avanzadas y productos de alta calidad, te guiaré en un viaje hacia una piel más saludable, radiante y rejuvenecida"'
        />
        <ServiceCard
          imgUrl="https://blog.meliacuba.es/wp-content/uploads/2014/03/YhiSpaPrincesaServicio_PPM__NEW_DSC42331-560x360.jpg"
          title="Nicol Rodriguez"
          paragragh='"Con una combinación de técnicas avanzadas y productos de alta calidad, te guiaré en un viaje hacia una piel más saludable, radiante y rejuvenecida"'
        />
      </div>
    </section>
  );
};

export default Services;
