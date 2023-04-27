import React, { useState } from "react";
import Logo from "../ui/Logo/Logo";
import classes from "./NavBar.module.css";

import LogInButton from "./Buttons/LogInButton/LogInButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogInUserInfo from "./LogInUser/LogInUser";
import NavElement, { NavElementWithoutRoute } from "./ListElement/NavElement";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BiBasket } from "react-icons/bi";
import { toggleCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const NavBar = ({ toggleSearch }) => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const [isOpenProfileDropdown, setIsOpenUserModal] = useState(false);

  return (
    <ul className={classes.container}>
      <NavElement path="/ofertas">Ofertas</NavElement>
      <NavElement path="/novedades">Novedades</NavElement>
      <NavElement path="/servicios">Servicios</NavElement>
      <NavElement path="/categorias">
        Categorias
        <FaChevronDown className={classes.icon} />
      </NavElement>
      <NavElement path="/">
        <Logo />
      </NavElement>
      <NavElement path="marcas">
        Marcas
        <FaChevronDown className={classes.icon} />
      </NavElement>
      <NavElementWithoutRoute clickHandler={toggleSearch}>
        <IoSearch className={classes.icon} />
        Buscar
      </NavElementWithoutRoute>
      <NavElementWithoutRoute disabledHover={isAuthenticated}>
        {isAuthenticated ? (
          <LogInUserInfo
            user={user}
            isOpen={isOpenProfileDropdown}
            openHandler={() => {
              setIsOpenUserModal((isOpen) => !isOpen);
            }}
          />
        ) : (
          <LogInButton />
        )}
        {isOpenProfileDropdown && (
          <ProfileDropdown userName={user.name} userEmail={user.email} />
        )}
      </NavElementWithoutRoute>
      <NavElementWithoutRoute clickHandler={() => dispatch(toggleCart())}>
        Cesta
        <BiBasket className={classes.icon} />
      </NavElementWithoutRoute>
    </ul>
  );
};

export default NavBar;
