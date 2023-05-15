import React from "react";
import Divider from "../../ui/Divider/Divider";
import LogOutButton from "../Buttons/LogOutButton/LogOutButton";
import classes from "./ProfileDropdown.module.css";
import ProfileOption from "./ProfileOption/ProfileOption";

const ProfileDropdown = ({ userName, userEmail }) => {
  return (
    <div className={classes.dropdown}>
      <div className={classes["info-container"]}>
        <strong className={classes.user}>{userName}</strong>
        <span className={classes.email}>{userEmail}</span>
      </div>
      <ProfileOption path="perfil">Mostrar Perfil</ProfileOption>
      <Divider />
      <LogOutButton customCss={classes.option} />
    </div>
  );
};

export default ProfileDropdown;
