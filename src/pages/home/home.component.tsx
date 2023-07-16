import React from "react";
import "./home.scss";
import Hero from "./components/hero/hero";
import Chairman from "./components/chairman/chairman";

const HomeComponent: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Hero />
      {/*  */}
      <Chairman />
      {/*  */}
      <div className="notice_section">I am notice section.</div>
      {/*  */}
      <div className="members_section">I am members section.</div>
    </React.Fragment>
  );
};

export default HomeComponent;
