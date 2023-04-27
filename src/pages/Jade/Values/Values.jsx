import React from "react";

import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../../components/ui/Divider/Divider";
import Subtitle from "../../../components/ui/GeneralTemplate/Subtitle/Subtitle";

const Values = () => {
  return (
    <>
      <Container>
        <Title>Valores y Enfoques</Title>
        <Divider />
        <Article>
          <Section>
            <Subtitle>Honestidad</Subtitle>
            <Paragraph>
              Reconocimiento de nuestra vocación por el servicio a nuestros
              intereses personales o de grupos.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Profesionalismo</Subtitle>
            <Paragraph>
              Al aplicar lo conocimiento de nuestro equipo para apoyar los
              servicios que presta la clínica estética.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Eficiencia</Subtitle>
            <Paragraph>
              Obtención de los mejores resultados en el logro de los objetivos
              por medio del uso racional de los recursos disponible.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Ética</Subtitle>
            <Paragraph>
              Apego a los códigos, normas y principios en el ejercicio de
              nuestro equipo estético.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Credibilidad</Subtitle>
            <Paragraph>
              Reconocimiento y confianza en nuestra calidad de servicios,
              conocimientos y compromisos institucional con nuestros clientes.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Compromiso</Subtitle>
            <Paragraph>
              Con el cliente que solicita nuestros servicios, brindándole
              confianza, respecto, confidencialidad y apoyo
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Calidad</Subtitle>
            <Paragraph>
              En la atención brindada a los clientes, tanto en los servicios
              estéticos como personal de apoyo y administrativo.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Congruencia</Subtitle>
            <Paragraph>
              Identificarse con la misión y visión de la institución y
              comprometerse con ella.
            </Paragraph>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Values;
