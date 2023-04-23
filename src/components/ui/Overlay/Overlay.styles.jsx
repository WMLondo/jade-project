import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
