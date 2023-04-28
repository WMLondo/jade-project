import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  width: 365px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 400px;
  padding-bottom: 32px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px;
  border-radius: 5px 5px 0px 0px;
  background-color: var(--neutral-color-max);
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContentContainer = styled.div`
  padding: 0px 16px;
  width: 100%;
  max-width: calc(100% - 32px);
`;

export const Title = styled.h4`
  margin-bottom: 16px;
  font-size: var(--font-size-l);
  font-weight: 700;
  color: var(---neutral-color-min-100);
  text-align: center;
`;

export const Description = styled.p`
  font-family: "PTSans";
  font-weight: 400;
  font-size: var(--font-size-m);
  color: var(---neutral-color-min-200);
  text-align: center;
`;
