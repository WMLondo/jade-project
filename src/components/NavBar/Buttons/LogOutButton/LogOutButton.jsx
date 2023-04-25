import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = ({ customCss }) => {
  const { logout } = useAuth0();

  return (
    <button
      className={customCss}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <FiLogOut />
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
