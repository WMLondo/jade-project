import styled from "styled-components";
import { Link } from "react-router-dom";

export const StylesLink = styled(Link)`
  text-decoration: none;
  font-family: "PTSans";
  color: ${(props) => props.color || "var(--neutral-color-max)"};
  font-style: normal;
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 21px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  &:hover {
    text-decoration: underline;
    color: var(--primary-color-300);
  }

  &:active {
    color: var(--primary-color-500);
  }
`;
