import React from "react";
import classes from "./Home.module.css";

import Hero from "../../components/Home/Hero/Hero";
import LastAddedItems from "../../components/Home/LastAddedItems/LastAddedItems";
import Services from "../../components/Home/Services/Services";
import Divider from "../../components/ui/Divider/Divider";
import Tendecy from "../../components/Home/Tendecy/Tendecy";

const Home = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <LastAddedItems />
      <Services />
      <Divider />
      <Tendecy />
      <Divider />
    </main>
  );
};

export default Home;
