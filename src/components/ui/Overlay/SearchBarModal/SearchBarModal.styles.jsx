import styled, { keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 744px;
  height: auto;
  border-radius: 12px;
  background-color: var(--neutral-color-max);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: calc(100% - 64px);
  height: 148px;
  padding: 32px;
`;

export const ExitIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  color: var(--neutral-color-min-100);
  margin: 32px;
  cursor: pointer;
  &:hover {
    color: var(--danger-color);
  }
`;

export const OptionResults = styled.div`
  width: 100%;
  height: auto;
  gap: 4px;
`;

export const OptionResult = styled.span`
  height: 56px;
  border-radius: 5px;
  width: 100%;
  color: var(--neutral-color-min-100);
  font-weight: 700;
  font-size: var(--font-size-m);
`;
