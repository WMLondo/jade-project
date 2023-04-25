import React from "react";
import classes from "./LogInUser.module.css";
import { FaChevronDown } from "react-icons/fa";
import useFirstName from "../../../hooks/useFirstName";

const LogInUserInfo = ({ user, openHandler, isOpen }) => {
  const firstName = useFirstName(user.name);

  return (
    <div className={classes["user-info-container"]}>
      <span className={classes["greeting"]}>Hola,</span>
      <span className={classes["user-name"]}>
        {firstName}
        <button onClick={openHandler} className={classes["open-option-button"]}>
          <FaChevronDown
            className={`${classes["open-option-icon"]} ${
              isOpen ? classes["icon-active"] : ""
            }`}
          />
        </button>
      </span>
    </div>
  );
};

export default LogInUserInfo;
