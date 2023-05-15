import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "PTSans";
  font-style: normal;
  font-weight: 700;
  font-size: var(--font-size-xxl);
  line-height: 51px;
  color: ${(props) => props.color || "var(--neutral-color-min-50)"};
`;

export const H2 = styled.h2`
  font-family: "PTSans";
  font-style: normal;
  font-weight: 700;
  font-size: var(--font-size-xl);
  line-height: 41px;
  color: ${(props) => props.color || "var(--neutral-color-min-50)"};
`;

export const H3 = styled.h3`
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: var(--font-size-l);
  line-height: 33px;
  color: ${(props) => props.color || "var(--neutral-color-min-50)"};
`;
