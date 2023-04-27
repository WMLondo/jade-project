import styled from "styled-components";
import { CardContainer, FormContainer, Title } from "./FormCard.styled";

const FormCard = ({ title, children, w, h, bg }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <FormContainer width={w} height={h} bg={bg}>
        {children}
      </FormContainer>
    </CardContainer>
  );
};

export default FormCard;
