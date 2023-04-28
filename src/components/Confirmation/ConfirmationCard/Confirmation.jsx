import React from "react";
import styles from "./ConfirmationPage.module.css";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¡Gracias por su compra!</h2>
      <p className={styles.message}>{message}</p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Regresar al Inicio
      </Button>
    </div>
  );
};

export default ConfirmationPage;
