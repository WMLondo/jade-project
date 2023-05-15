import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ProfileOption.module.css";

const ProfileOption = ({ path, children }) => {
  const navigate = useNavigate();
  return (
    <button
      className={classes.option}
      onClick={() => {
        navigate(`${path}`);
      }}
    >
      {children}
    </button>
  );
};

export default ProfileOption;
