import styled from "styled-components";
import logo from "../../../../assets/logo/876b5a92-215a-45c2-8d26-3dcd7305cf07.jpg";

export const Logo = styled.img.attrs({
  alt: "logo-jade",
  src: logo,
})`
  height: ${(props) => props.h || "180px"};
  width: ${(props) => props.w || "auto"};
  align-self: center;
`;
