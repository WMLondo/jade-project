import React from "react";
import classes from "./Footer.module.css";
import RedirectIcon from "./RedirectIcon/RedirectIcon";
import { BiMessage, BiMapPin } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FaTiktok, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Divider from "../ui/Divider/Divider";
import FooterLinks from "./FooterLinks/footerLinks";

const iconStyles = {
  height: "44px",
  width: "44px",
  color: "var(--neutral-color-max)",
};

const aboutLinks = [
  {
    label: "Acerca de Jade",
    path: "/jade/acerca",
  },
  {
    label: "Misión y visión",
    path: "/jade/mision_&_vision",
  },
  {
    label: "Compromiso con la excelencia y la calidad",
    path: "/jade/compromiso",
  },
  {
    label: "Valores y Enfoque",
    path: "/jade/valores_&_enfoques",
  },
];

const helpLinks = [
  {
    label: "Politicas de Privacidad",
    path: "/ayuda/privacidad",
  },
  {
    label: "Términos de uso",
    path: "/ayuda/terminos",
  },
  {
    label: "Envío y entrega en tienda",
    path: "/ayuda/envio",
  },
  {
    label: "Política de devoluciones y reembolsos",
    path: "/ayuda/devolucion",
  },
];

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["icons-container"]}>
        <RedirectIcon
          linkContent="Encontrar local"
          description="Encuentra donde estamos ubicados."
          path="/jade/ubicacion"
          isInsideApp={true}
        >
          <BiMapPin style={iconStyles} />
        </RedirectIcon>
        <RedirectIcon
          linkContent="Iniciar conversacion"
          description="¿Ayuda? Escribenos con gusto te ayudamos. "
          path="https://wa.link/lpbgsh"
          isInsideApp={false}
        >
          <BiMessage style={iconStyles} />
        </RedirectIcon>
        <RedirectIcon
          linkContent="Llamar"
          description="Linea Telefonica"
          path="tel:+5042516-1103"
          isInsideApp={false}
        >
          <IoCallOutline style={iconStyles} />
        </RedirectIcon>
        <RedirectIcon
          linkContent="info@jadeesthetic.com"
          description="Correo Electrónico "
          path="mailto:info@jadeesthetic.com?subject=Información sobre un pedido"
          isInsideApp={false}
        >
          <GoMail style={iconStyles} />
        </RedirectIcon>
      </div>
      <Divider />
      <div className={classes["link-container"]}>
        <FooterLinks
          key="about"
          title="Acerca de Jade"
          linkOptions={aboutLinks}
        />
        <FooterLinks key="help" title="Ayuda" linkOptions={helpLinks} />
      </div>
      <Divider />
      <div className={classes["end-line-container"]}>
        <span className={classes.copyright}>
          &#64; {new Date().getFullYear()} Jade. Todos los Derechos Reservados
        </span>
        <div className={classes["social-media-container"]}>
          <a
            href="https://www.facebook.com/JadeEstheticspa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              style={{
                height: "24px",
                width: "24px",
                color: "var(--neutral-color-max)",
              }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@jadeestheticspahn?_t=8bkPF0uAxuQ&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok
              style={{
                height: "27px",
                width: "27px",
                color: "var(--neutral-color-max)",
              }}
            />
          </a>
          <a
            href="https://instagram.com/jade_esthetichn?igshid=ZjE2NGZiNDQ="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={{
                height: "27px",
                width: "27px",
                color: "var(--neutral-color-max)",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
