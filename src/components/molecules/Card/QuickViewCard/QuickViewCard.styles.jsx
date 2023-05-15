import styled, { css } from "styled-components";

export const QuickViewCardContainer = styled.div`
  width: 216px;
  height: auto;
  border-radius: 12px;
  background-color: ${(props) =>
    props.theme === "dark"
      ? "var(--neutral-color-min-100)"
      : "var(--neutral-color-max)"};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin: 16px;
  color: ${(props) =>
    props.theme === "dark"
      ? "var(--neutral-color-max)"
      : "var(--neutral-color-min-100)"};
`;

export const Title = styled.span`
  font-family: "PTSans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;
