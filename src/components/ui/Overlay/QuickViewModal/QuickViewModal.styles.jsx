import styled from "styled-components";
import Button from "../../Button/Button";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 862px;
  height: 395px;
  padding: 16px;
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 514px;
  height: 327px;
`;

export const Title = styled.h3`
  font-size: var(--font-size-l);
  color: var(--neutral-color-min-100);
  font-weight: 400;
  width: 100%;
  height: 63px;
`;

export const Sku = styled.span`
  font-size: var(--font-size-s);
  color: var(--neutral-color-min-300);
  font-weight: 700;
`;

export const Price = styled.span`
  text-align: right;
  width: 100%;
  height: 43px;
  font-weight: 400;
  font-size: var(--font-size-xl);
  color: var(--neutral-color-min-100);
`;

export const QuickViewButton = styled(Button)`
  width: 204px;
  height: 54px;
  gap: 8px;
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
