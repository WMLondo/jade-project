import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-self: center;
  position: relative;
  cursor: pointer;
  gap: 8px;
`;

export const SelectedOptionContainer = styled.div`
  width: ${(props) => props.w || "261px"};
  height: ${(props) => props.h || "43px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background: #ffffff;
  border: 1px solid var(---neutral-color-min-300);
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  border: 1px solid var(--neutral-color-min-300);
`;

export const SelectedValue = styled.span`
  font-family: "PTSans";
  font-style: normal;
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 27px;
  color: var(---neutral-color-min-300);
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: calc(100% - 16px);
  width: 32px;
  border-left: 1px solid var(--neutral-color-min-300);
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: var(--neutral-color-min-100);
  padding-left: 8px;
  transition: transform 0.2s linear;
  transform: ${(props) => (props.$isHidden ? "" : "rotateX(180deg)")};
`;

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  display: ${(props) => (props.$isHidden ? "none" : "flex")};
  top: ${(props) => props.h || "43px"};
  width: calc(100% - 2px);
  max-height: 129px;
  border-radius: 0 0 5px 5px;
  list-style: none;
  border: 1px solid var(--neutral-color-min-300);
  position: absolute;
  margin-top: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--neutral-color-min-400);
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    margin: 1px;
    border-radius: 32px;
    background-color: var(--neutral-color-min-200);
    :active {
      background-color: var(--neutral-color-min-100);
    }
  }
`;

export const Option = styled.li`
  width: 100%;
  height: ${(props) => props.h || "43px"};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background: #ffffff;
  border: 1px solid var(---neutral-color-min-300);
  box-shadow: inset 1px 2px 0 rgba(0, 0, 0, 0.05);
  ${(props) =>
    props.$isFocus
      ? css`
          background: var(
            --primary-color-linear-gradient-300-to-400-transform-180
          );
          color: var(--neutral-color-max);
        `
      : ""}
`;

export const OptionTitle = styled.span`
  font-family: PTSans;
  font-style: normal;
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 27px;
  color: var(---neutral-color-min-300);
`;
