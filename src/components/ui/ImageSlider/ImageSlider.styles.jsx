import styled from "styled-components";

export const SliderContainer = styled.div`
  max-width: 284px;
  height: 327px;
  position: relative;
  overflow: hidden;
`;

export const SliderList = styled.ul`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const SliderItem = styled.li`
  flex: 0 0 284px;
  height: 327px;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SliderPrev = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin: 0 10px;
`;

export const SliderNext = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin: 0 10px;
`;

export const SliderDots = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SliderDot = styled.li`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin-right: 5px;
  cursor: pointer;

  &.active {
    background-color: #fff;
  }
`;
