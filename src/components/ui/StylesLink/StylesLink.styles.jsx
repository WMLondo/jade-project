import styled, { css } from "styled-components";

const active = css`
  color: var(--primary-color-500);
`;
export const StylesLink = styled(Link)`
  text-decoration: none;
  color: var(--neutral-color-min);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  ${(props) => isActive && active}

  & :hover {
    text-decoration: underline;
    color: var(--primary-color-300);
  }

  &:active {
    color: var(--primary-color-500);
  }
`;
