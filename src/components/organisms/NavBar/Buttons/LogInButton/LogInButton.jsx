import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonContainer } from "./LogInButton.styles";
import { FaRegUserCircle } from "react-icons/fa";

const LogInButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <ButtonContainer onClick={() => loginWithRedirect()}>
      <FaRegUserCircle style={{ width: "24px", height: "24px" }} />
      Iniciar Sesion
    </ButtonContainer>
  );
};

export default LogInButton;
