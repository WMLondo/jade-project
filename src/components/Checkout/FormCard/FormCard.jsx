import styled from "styled-components";
import { CardContainer, FormContainer, Title } from "./FormCard.styled";

const FormCard = ({ title, children, w, h, bg, p }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <FormContainer width={w} height={h} bg={bg} p={p}>
        {children}
      </FormContainer>
    </CardContainer>
  );
};

export default FormCard;
