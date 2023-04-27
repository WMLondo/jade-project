import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import classes from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["error-container"]}>
      <h1 className={classes.title}>404</h1>
      <span className={classes.subtitle}>Pagina no encontrada</span>
      <p className={classes.result}>La página que buscas no parece existir</p>
      <Button onClick={() => navigate("/")}>Regresar al Inicio</Button>
    </div>
  );
};

export default Error;
