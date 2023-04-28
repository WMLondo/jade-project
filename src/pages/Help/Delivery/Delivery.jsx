import React from "react";
import Container from "../../../components/ui/GeneralTemplate/Container/Container";
import Subtitle from "../../../components/ui/GeneralTemplate/Subtitle/Subtitle";
import Title from "../../../components/ui/GeneralTemplate/Title/Title";
import Article from "../../../components/ui/GeneralTemplate/Article/Article";
import Paragraph from "../../../components/ui/GeneralTemplate/Paragraph/Paragraph";
import Section from "../../../components/ui/GeneralTemplate/Section/Section";
import Divider from "../../../components/ui/Divider/Divider";
import UnorderedList from "../../../components/ui/GeneralTemplate/UnorderedList/UnorderedList";
import ListElement from "../../../components/ui/GeneralTemplate/UnorderedList/ListElement/ListElement";

const Delivery = () => {
  return (
    <>
      <Container>
        <Title>Envios y Entrega en la Tienda</Title>
        <Divider />
        <Article>
          <Section>
            <Paragraph>
              Al realizar tus compras en Jade Esthetic Spa, podrás elegir el
              tipo de entrega de tu preferencia. Contamos con dos métodos
              disponibles: envío a domicilio (costo adicional) y retiro en la
              estética (gratuito).
            </Paragraph>
            <Paragraph>
              Si el envío es a domicilio te notificaremos cuando el pedido se
              encuentra en camino.
            </Paragraph>
            <Paragraph>
              Si es retiro en la estética, te notificaremos cuando el pedido
              está listo para que puedas acercarte a la tienda seleccionada en
              tu orden. Los pedidos para retiro en tienda permanecen en tienda
              durante 7 días calendario posteriores a la notificación, después
              de los cuales, se iniciará el proceso de cancelación de orden el
              cual pueden incurrir ciertos gastos.
            </Paragraph>
            <Paragraph>
              Retiro en la estética: Al momento de acercarse a la estética para
              el retiro de su compra, se deberá presentar la siguiente
              información: número de pedido y documento de identidad. En caso la
              persona que se acerque a realizar el retiro sea distinta a quien
              realizó la compra, es necesario que al momento de realizar la
              orden el comprador indique quien será la persona asignada,
              indicando nombre completo, documento de identidad y teléfono.
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Productos Entregados a Nivel Nacional:</Subtitle>
            <Paragraph>
              Es requisito del cliente proporcionar la dirección del domicilio
              exacta para hacer la entrega del producto, si la dirección
              proporcionada no es veraz, es incorrecta, inexacta, ilocalizable o
              desactualizada, Jade Esthetic Spa no se hará responsable por la
              entrega del producto en su domicilio, por lo que el cliente podrá
              realizar su retiro en la estética durante los 7 días hábiles
              posteriores a la notificación de entrega; transcurrido dicho
              tiempo sin hacer el retiro del producto, se procederá a la
              reversión correspondiente.
            </Paragraph>
            <Paragraph>
              Para entregas en Tegucigalpa, San Pedro Sula y La Ceiba, el envío
              actualmente cuesta 150 lempiras compras iguales o mayores a 1000
              lempiras; Para entregas en el resto del país se hará un cargo por
              envío según la ciudad que toque entregarse. El producto será
              entregado únicamente a la persona que coloque como beneficiario y
              que presente su tarjeta de identidad al momento de recibir el
              producto.
            </Paragraph>
            <Paragraph>
              Nos reservamos el derecho de denegar el servicio de entrega para
              Zonas de "alto riesgo" o que puedan constituir un riesgo para
              nuestro personal. Estos sitios de entrega son excluidos a criterio
              de la empresa (tanto para entrega gratuita como pagada).
            </Paragraph>
          </Section>
          <Section>
            <Subtitle>Costo de envío</Subtitle>
            <Paragraph>
              El costo de envío depende del lugar de destino, el número de
              productos y su tamaño. El costo total de envío siempre se
              informará antes de pagar la totalidad de la orden.
            </Paragraph>
            <Paragraph>
              Recuerda que siempre tienes la opción de Recolecta en la estética
              gratuitamente.
            </Paragraph>
            <UnorderedList>
              <ListElement>
                El costo de envío en San Pedro Sula, Tegucigalpa y Ceiba varia
                entre 150 a 300 lempiras.
              </ListElement>
              <ListElement>
                El costo en otros municipios de Honduras puede variar entre 250
                a 500 lempiras.
              </ListElement>
            </UnorderedList>
          </Section>
          <Section>
            <Subtitle>Tiempos de entrega</Subtitle>
            <Paragraph>
              Los tiempos de entrega de los artículos serán de la siguiente
              manera:
            </Paragraph>
            <UnorderedList>
              <ListElement>
                Productos entregados en Tegucigalpa, San Pedro Sula y La Ceiba
                tendrán un tiempo de envío/entrega de 2-4 días hábiles
                posteriores a la compra.
              </ListElement>
              <ListElement>
                Productos entregados en el resto del Territorio Nacional tendrán
                un tiempo de envío/entrega de 4-8 días hábiles posteriores a la
                compra.
              </ListElement>
              <ListElement>
                Los días hábiles son considerados de lunes a viernes. Por
                ejemplo, una orden que ingresa un sábado su primer día hábil es
                el siguiente lunes.
              </ListElement>
              <ListElement>
                El día hábil termina a las 5 pm. Por ejemplo, una orden que
                ingresa el día lunes a las 8pm es considerada como si hubiera
                ingresado el siguiente día martes.
              </ListElement>
            </UnorderedList>
          </Section>
        </Article>
      </Container>
    </>
  );
};

export default Delivery;
