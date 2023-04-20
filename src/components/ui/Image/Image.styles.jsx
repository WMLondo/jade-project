import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 300px;
  height: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => `${borderRadius}` || ""};
  background-color: var(--neutral-color-max);
`;

export const ImageElement = styled.img`
  width: auto;
  height: 100%;
`;
