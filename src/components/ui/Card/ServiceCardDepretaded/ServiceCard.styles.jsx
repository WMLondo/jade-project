import styled from "styled-components";

export const ServiceContainer = styled.div`
  width: 447px;
  min-height: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #2c2c2c;
  border-radius: 12px;
`;

export const ServiceTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

export const ServiceContentContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const Title = styled.span`
  font-family: "PTSans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #ffffff;
`;

export const Paragraph = styled.p`
  font-family: "PTSans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #ffffff;
`;
