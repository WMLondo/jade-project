import React from "react";
import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Subtitle from "../../../components/ui/GeneralTemplate/Subtitle/Subtitle";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../../components/ui/Divider/Divider";

const Terms = () => {
  return (
    <>
      <Container>
        <Title>Términos de uso</Title>
        <Divider />
        <Article>
          <Section>
            <Paragraph>
              Bienvenido al sitio web de Jade Esthetic Spa. Al acceder y
              utilizar nuestro sitio web, usted acepta nuestros términos y
              condiciones y se compromete a cumplir con ellos. Por favor, lea
              detenidamente los siguientes términos de uso:
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Objeto del sitio web</Subtitle>
            <Paragraph>
              Este sitio web ha sido creado para proporcionar información sobre
              nuestros servicios de estética y cosmética. No somos responsables
              de cualquier daño o perjuicio que pueda surgir del uso de la
              información publicada en el sitio web.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Propiedad intelectual</Subtitle>
            <Paragraph>
              El contenido de este sitio web, incluyendo imágenes, textos,
              logotipos, diseños y software, es propiedad exclusiva de Estética.
              Queda prohibido cualquier uso no autorizado de los mismos.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Enlaces de terceros</Subtitle>
            <Paragraph>
              El sitio web puede contener enlaces a sitios de terceros. No somos
              responsables de los contenidos o la disponibilidad de estos sitios
              web.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Limitación de responsabilidad</Subtitle>
            <Paragraph>
              Estética no se hace responsable de cualquier daño o pérdida que
              pueda surgir del uso del sitio web o de la información publicada
              en él.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Actualización de la información</Subtitle>
            <Paragraph>
              Nos esforzamos por mantener la información del sitio web
              actualizada y precisa. Sin embargo, no podemos garantizar la
              precisión o integridad de la información publicada en el sitio
              web.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Privacidad</Subtitle>
            <Paragraph>
              Estética recopila, procesa y utiliza información personal de
              acuerdo con nuestras políticas de privacidad.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Modificaciones de los términos y condiciones</Subtitle>
            <Paragraph>
              Nos reservamos el derecho de modificar estos términos y
              condiciones en cualquier momento y sin previo aviso. Al utilizar
              nuestro sitio web, usted acepta estos términos y condiciones y se
              compromete a cumplir con ellos. Si tiene alguna pregunta o
              comentario sobre los términos y condiciones, por favor contáctenos
              a través de nuestro sitio web.
            </Paragraph>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Terms;
