import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Field } from "../../../atoms/Input/Field/Field.styles";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 744px;
  height: auto;
  min-height: 124px;
  max-height: ${(props) => (props.$isExtended ? "100%" : "124px")};
  border-radius: 12px;
  background-color: var(--neutral-color-max);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: max-height 0.5s ease-out;
  padding: 48px 32px 24px 32px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const SearchBarField = styled(Field)`
  flex-grow: 1;
`;

export const ExitIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  color: var(--neutral-color-min-100);
  margin: 8px 8px 0px 0px;
  cursor: pointer;
  &:hover {
    color: var(--danger-color);
  }
`;

export const ResultContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  list-style: none;
  height: 216px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Result = styled.li`
  height: auto;
  padding: 8px 8px;
  border-radius: 8px;
  width: 100%;
  background-color: var(--neutral-color-max);
  :hover {
    background-color: var(--neutral-color-max-50);
  }
`;

export const ResultLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  cursor: pointer;
  text-decoration: none;
  color: var(--neutral-color-min-100);
`;

export const ResultLabel = styled.span`
  font-family: "PTSans";
  font-style: normal;
  font-weight: 700;
  font-size: var(--font-size-m);
  color: var(--neutral-color-min-50);
  flex-grow: 1;
`;

export const ResultIcon = styled(IoPaperPlaneOutline)`
  width: 24px;
  height: 24px;
`;
