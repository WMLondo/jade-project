import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) => `width: ${props.width}`};
  ${(props) => `height: ${props.height}`};
  cursor: pointer;
  background-color: #10a252;
  border-radius: 40px;
`;

export const TagLabel = styled(Link)`
  font-family: "PTSans", sans-serif;
  font-weight: 400;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 13px;
  line-height: 23px;
  margin: 0px 21px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
