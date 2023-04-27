import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import ScrollToTop from "../../../helpers/ScrollToTop";

const GeneralLayout = () => {
  ScrollToTop();
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GeneralLayout;
