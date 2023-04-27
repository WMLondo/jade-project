import React from "react";
import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Subtitle from "../../../components/ui/GeneralTemplate/Subtitle/Subtitle";
import Divider from "../../../components/ui/Divider/Divider";

const Mision = () => {
  return (
    <>
      <Container>
        <Title>Misión y Visión</Title>
        <Divider />
        <Article>
          <Section>
            <Subtitle>Misión</Subtitle>
            <Paragraph>
              Satisfacer las necesidades de belleza de nuestros clientes
              mediante servicios de excelencia en calidad, brindado por personal
              altamente profesional que inspira confianza y seriedad,
              permitiéndonos superar las expectativas de nuestros clientes.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Visión</Subtitle>
            <Paragraph>
              Para el 2024 ser líder en el mercado local como un centro de
              estética, embellecimiento, y distribución de productos para la
              belleza, manteniendo un alto prestigio en todos sus servicios, con
              alta rentabilidad y satisfacción plena de todos sus clientes;
              sirviendo además como institución referencial para sus demás
              iguales por su eficiencia y dinamismo.
            </Paragraph>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Mision;
