import React from "react";
import Container from "../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../components/ui/Divider/Divider";

const About = () => {
  return (
    <>
      <Container>
        <Title>Acerca de Jade</Title>
        <Divider />
        <Article>
          <Section>
            <Paragraph>
              Ofrecemos servicios y productos de excelencia, con una gran
              formación y experiencia, para que su visita sea satisfactoria,
              Cada tratamiento se realiza con los mejores equipos y tecnologías
              disponibles en el mercado y bajo la supervisión de profesionales
              altamente capacitados.
            </Paragraph>
          </Section>
          <Section>
            <Paragraph>
              Aquí te consentimos, nuestros servicios Micropigmentación, Spa,
              Extensión de pestañas, masaje relajante, Dermapen,
              Microdermoabrasión, exfoliaciones y muchos tratamientos estéticos.
            </Paragraph>
          </Section>
          <Section>
            <Paragraph>
              Nuestra clínica estética es el lugar donde puedes obtener los
              mejores resultados estéticos para tu cuerpo, en un ambiente
              cómodo, relajado y con un enfoque exclusivo en el cuidado y la
              satisfacción de cada uno de nuestros clientes.
            </Paragraph>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default About;
