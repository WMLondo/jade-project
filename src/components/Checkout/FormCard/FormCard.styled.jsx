import styled from "styled-components";

export const Title = styled.h3`
  font-family: "PTSans";
  font-size: var(--font-size-l);
  font-weight: 700;
  color: var(--neutral-color-min-100);
`;

export const FormContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || "696px"};
  padding: ${(props) => props.p || "16px"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  gap: 16px;
  background-color: ${(props) => props.bg || "var(--nuetral-color-max)"};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;
