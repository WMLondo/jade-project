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
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 862px;
  height: 395px;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--neutral-color-max);
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 514px;
  height: 327px;
`;

export const Title = styled.h3`
  font-size: var(--font-size-xl);
  color: var(--neutral-color-min-100);
  font-weight: 700;
  width: 100%;
  height: 63px;
`;

export const Sku = styled.span`
  font-size: var(--font-size-s);
  color: var(--neutral-color-min-300);
  font-weight: 700;
`;

export const Price = styled.span`
  text-align: left;
  width: 241px;
  height: 43px;
  font-weight: 400;
  font-size: var(--font-size-xxl);
  color: var(--neutral-color-min-100);
`;

export const ExitIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  color: var(--neutral-color-min-100);
  &:hover {
    color: var(--danger-color);
  }
`;
