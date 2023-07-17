import React from "react";
import "./home.scss";
import Hero from "./components/hero/hero";
import Chairman from "./components/chairman/chairman";
import Notice from "./components/notice/notice.component";
import Teams from "./components/teams/teams.component";
import UserCard from "../../components/user-card/userCard.component";

const HomeComponent: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* Hero section */}
      <Hero />
      {/* Chairman section  */}
      <Chairman />
      {/* Notice section  */}
      <Notice />
      {/* Teams section  */}
      {/* <Teams /> */}

      <UserCard />
      {/* -------------- (END) */}
    </React.Fragment>
  );
};

export default HomeComponent;
