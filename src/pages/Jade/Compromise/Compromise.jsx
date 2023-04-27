import React from "react";
import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../../components/ui/Divider/Divider";
import UnorderedList from "../../../components/ui/GeneralTemplate/UnorderedList/UnorderedList";
import ListElement from "../../../components/ui/GeneralTemplate/UnorderedList/ListElement/ListElement";

const Compromise = () => {
  return (
    <>
      <Container>
        <Title>Compromiso Sobre la excelencia y calidad</Title>
        <Divider />
        <Article>
          <Section>
            <Paragraph>
              En Jade Esthetic Spa estamos comprometidos con la excelencia y la
              calidad como dos de los pilares fundamentales en nuestra estética,
              estos dos valores nos ayudan a garantizar un servicio de calidad y
              satisfacción del cliente
            </Paragraph>
          </Section>
          <Section>
            <UnorderedList>
              <ListElement>
                Proporcionar un servicio personalizado y cercano al cliente,
                siempre buscando satisfacer sus necesidades y expectativas.
              </ListElement>
              <ListElement>
                Garantizar un equipo estético altamente capacitado y con
                experiencia en las últimas técnicas y tecnologías utilizadas en
                el sector.
              </ListElement>
              <ListElement>
                Cumplir con todas las normativas legales y sanitarias
                pertinentes, velando por la seguridad y bienestar de los
                clientes.
              </ListElement>
              <ListElement>
                Utilizar productos de calidad y certificados en todos los
                tratamientos que se ofrezcan.
              </ListElement>
              <ListElement>
                Prestar un seguimiento y control postoperatorio para asegurar la
                óptima recuperación de los clientes y garantizar los resultados
                esperados.
              </ListElement>
              <ListElement>
                Fomentar la continua formación del equipo estético y el uso de
                las últimas tecnologías para mejorar los tratamientos y
                servicios ofrecidos.
              </ListElement>
              <ListElement>
                Implementar una política transparente de precios y servicios,
                con la finalidad de ofrecer una atención de calidad y accesible
                a los clientes.
              </ListElement>
              <ListElement>
                Disponer de un sistema de quejas y reclamaciones, para resolver
                de forma rápida y eficiente cualquier incidencia, y obtener un
                feedback de los clientes para mejorar el servicio ofrecido.
              </ListElement>
              <ListElement>
                Mantener una comunicación constante con los clientes a través de
                distintos canales, para ofrecer información actualizada y
                promociones especiales.
              </ListElement>
              <ListElement>
                Compromiso total con la ética médica y la privacidad de los
                clientes, garantizando siempre la confidencialidad de los datos
                y respetando su integridad moral y física en cada paso del
                proceso.
              </ListElement>
            </UnorderedList>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Compromise;
