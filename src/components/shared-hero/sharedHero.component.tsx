import React from "react";
import "./sharedHero.style.scss";

type SharedHeroProps = {
  image?: string;
  title?: string;
};

const SharedHero: React.FC = ({
  image = "/assets/images/gallery-header.jpg",
  title = "Gallery",
}: SharedHeroProps): JSX.Element => {
  return (
    <div className="shared_hero">
      <img src={image} alt="a person looking at the gallery" />
      <div className="overlay">{title}</div>
    </div>
  );
};

export default SharedHero;
