import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${(props) => props.w || "300px"};
  height: ${(props) => props.h || "300px"};
  border-radius: ${(props) => props.br};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: var(--neutral-color-max);
`;

export const ImageElement = styled.img`
  width: ${(props) => props.imgW || "auto"};
  height: ${(props) => props.imgH || "100%"};
`;
