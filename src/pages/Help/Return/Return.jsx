import React from "react";
import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../../components/ui/Divider/Divider";
import Subtitle from "../../../components/ui/GeneralTemplate/Subtitle/Subtitle";
import UnorderedList from "../../../components/ui/GeneralTemplate/UnorderedList/UnorderedList";
import ListElement from "../../../components/ui/GeneralTemplate/UnorderedList/ListElement/ListElement";
const Return = () => {
  return (
    <>
      <Container>
        <Title>Política de cambio y devoluciones</Title>
        <Divider />
        <Article>
          <Section>
            <UnorderedList>
              <ListElement>
                Se aceptarán cambios y/o devoluciones dentro de un plazo de
                hasta 15 días naturales, después de la fecha de compra. Y a
                partir de 24 horas. después de haber recibido su compra.
              </ListElement>
              <ListElement>
                No se procesarán cambios y/o devoluciones de producto sin
                factura de compra. Los cambios y/o devoluciones podrán ser
                aceptados únicamente en la estética.
              </ListElement>
              <ListElement>
                Para hacer válido cualquier cambio y/o devolución, el producto
                deberá presentarse en óptimas condiciones tal cual como fue
                entregado, conservando la caja y envoltorios.
              </ListElement>
              <ListElement>
                Aplican cambios y/o devoluciones productos comprado con
                descuento o promoción; en todos los casos, el valor que será
                tomado a cuenta será el precio pagado por el cliente por el
                artículo.
              </ListElement>
              <ListElement>
                NO aplican cambios y/o devoluciones cuando:
                <UnorderedList>
                  <ListElement>
                    La compra tenga un tiempo transcurrido mayor a 6 meses
                    después de la compra.
                  </ListElement>
                  <ListElement>
                    Cuando el producto llegue al cliente con algún tipo de daño
                    y el mismo no haya sido reportado dentro del plazo de 24
                    horas, se debe reportar vía telefónica al número +504
                    3173-4007 o al correo admin@jadeesthetic.com
                  </ListElement>
                  <ListElement>
                    El producto se percibe desgastado o con evidencia de notable
                    uso.
                  </ListElement>
                </UnorderedList>
              </ListElement>
            </UnorderedList>
          </Section>
          <Section>
            <Subtitle>Devoluciones</Subtitle>./src/pages/AboutJade
            <Paragraph>
              El cliente podrá optar por las siguientes alternativas de acuerdo
              a su elección y método de pago:
            </Paragraph>
            <UnorderedList>
              <ListElement>
                Si el cliente pago con transferencia o tarjeta de
                crédito/debito, el cliente podrá optar a un reembolso mediante
                Certificado de Regalo/Nota de Crédito de Jade Esthetic Spa.
              </ListElement>
              <ListElement>
                Si el cliente pago con Transferencia y no desea optar por el
                certificado de regalo/Nota de Crédito, el cliente recibirá su
                pago mediante transferencia/ACH. De acuerdo al procedimiento
                detallo más adelante en esta política.
              </ListElement>
              <ListElement>
                Si el cliente pago con TC, y no desea optar por el certificado
                de regalo/Nota de Crédito, el cliente recibirá su reembolso
                mediante una devolución a su tarjeta de crédito. De acuerdo al
                procedimiento detallado más adelante en esta política.
              </ListElement>
            </UnorderedList>
            <Paragraph>
              Las devoluciones se harán mediante los mecanismos a continuación
              descritos:
            </Paragraph>
            <UnorderedList>
              <ListElement>
                Certificado de regalo / Nota de crédito: Será de acuerdo a la
                suma pagada por el producto(s) a devolver, se podrá ejecutar en
                la estética de forma inmediata. El Certificado de regalo/ Nota
                de crédito no tiene fecha de vencimiento y puede ser utilizado
                en la estética, *Jade Esthetic Spa no se hace responsable por
                extravío de dicho documento, por lo que no se puede hacer
                reposición del mismo.
              </ListElement>
              <ListElement>
                *Devoluciones en Transferencia/ACH**: El reembolso de la suma
                pagada por el producto(s) a de-volver se podrá realizar con la
                siguiente información compartida por el cliente:
                <UnorderedList>
                  <ListElement>Número de cuenta de banco</ListElement>
                  <ListElement>Nombre del banco</ListElement>
                  <ListElement>Número de identidad</ListElement>
                  <ListElement>Nombre completo</ListElement>
                  <ListElement>Tipo de cuenta (ahorro o cheque)</ListElement>
                  <ListElement>
                    Es importante mencionar que si el reembolso/devolución es
                    por medio de ACH Jade Esthetic Spa se hará cargo por la
                    comisión de envío y el cliente por la comisión de recepción;
                    el tiempo de ejecución de dicha transacción es
                    aproximadamente de 15-20 días hábiles.
                  </ListElement>
                </UnorderedList>
              </ListElement>
              <ListElement>
                Devoluciones en Tarjeta de Crédito/Débito: El reembolso de la
                suma pagada por el producto(s) a devolver se hará directamente
                en la tarjeta con la que se haya realizado la compra y en un
                plazo aproximado de 25 días hábiles*
                <Paragraph>
                  Debe compartir los datos necesarios para ingresar la solicitud
                  de reversión a tarjeta:
                </Paragraph>
                <UnorderedList>
                  <ListElement>Foto de la tarjeta de identidad.</ListElement>
                  <ListElement>Foto de la parte frontal.</ListElement>
                  <ListElement>Comprobante de orden de compra.</ListElement>
                </UnorderedList>
              </ListElement>
            </UnorderedList>
            <Paragraph>
              Todos estos requerimientos son solicitados por el banco emisor
              para poder realizar el reembolso correspondiente. En caso de no
              estar de acuerdo en compartir los datos requeridos deberá aceptar
              otro medio para la devolución.
            </Paragraph>
            <Paragraph>
              A partir de 24 horas de haber generado la solicitud. Para
              cualquier duda puede comunicarse con Servicio al Cliente al
              teléfono a. número +504 3173-4007 en un horario de 8:00am a 5:00pm
              de lunes a viernes y los sábados de 8:00am-5:00pm.
            </Paragraph>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Return;
