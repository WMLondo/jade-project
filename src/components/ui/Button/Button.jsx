import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.button} ${props.variant || ""}`} {...props}>
      {props.children}
    </button>
  );
};

const DangerButton = (props) => {
  return (
    <>
      <Button
        onClick={props.click}
        className={`${classes["danger-button"]} ${props.variant || ""}`}
        {...props}
      >
        {props.children}
      </Button>
    </>
  );
};

export default Button;
export { DangerButton };
