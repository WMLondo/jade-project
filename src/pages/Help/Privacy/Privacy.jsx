import React from "react";
import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../../components/ui/Divider/Divider";
import UnorderedList from "../../../components/ui/GeneralTemplate/UnorderedList/UnorderedList";
import ListElement from "../../../components/ui/GeneralTemplate/UnorderedList/ListElement/ListElement";

const Privacy = () => {
  return (
    <>
      <Container>
        <Title>Políticas de privacidad</Title>
        <Divider />
        <Article>
          <Section>
            <UnorderedList>
              <ListElement>
                Recolección de información personal: la estética puede recopilar
                información personal, como nombre, dirección, número de teléfono
                y dirección de correo electrónico, en el momento de la reserva
                de cita.
              </ListElement>
              <ListElement>
                Uso de la información personal: la estética utilizará la
                información personal proporcionada para confirmar la cita,
                enviar recordatorios y brindar información adicional relevante.
              </ListElement>
              <ListElement>
                Uso de la información personal: la estética utilizará la
                información personal proporcionada para confirmar la cita,
                enviar recordatorios y brindar información adicional relevante.
              </ListElement>
              <ListElement>
                Compartir de información personal: la estética no compartirá
                información personal con terceros, a menos que sea necesario
                para el cumplimiento de obligaciones legales.
              </ListElement>
              <ListElement>
                Seguridad de la información personal: la estética tomará medidas
                de seguridad razonables para proteger la información personal
                proporcionada.
              </ListElement>
              <ListElement>
                Retención de información personal: la estética retendrá la
                información personal el tiempo necesario para cumplir con los
                fines para los que se recopiló la información.
              </ListElement>
              <ListElement>
                Cancelación de la cita y eliminación de información personal:
                los clientes tienen derecho a cancelar la cita y solicitar la
                eliminación de su información personal en cualquier momento.
              </ListElement>
            </UnorderedList>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Privacy;
