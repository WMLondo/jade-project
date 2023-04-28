import React from "react";
import classes from "./Home.module.css";
import Hero from "../../components/Home/Hero/Hero";
import LastAddedItems from "../../components/Home/LastAddedItems/LastAddedItems";
import Divider from "../../components/ui/Divider/Divider";
import Tendecy from "../../components/Home/Tendecy/Tendecy";

const Home = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <LastAddedItems />
      <Divider />
      <Tendecy />
      <Divider />
    </main>
  );
};

export default Home;
