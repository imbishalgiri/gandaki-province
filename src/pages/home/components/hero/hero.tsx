import React from "react";
import "./hero.scss";

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className="heroes_section">
      <img
        className="image"
        src="/assets/images/hero-image.png"
        alt="Hero image"
      />
      <div className="overlay"></div>
      <div className="content container">
        <div className="content_left">
          <div className="content_left-item">
            <div className="left_heading">Ranger foundation of mars</div>
            <div className="left_description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words,
            </div>
          </div>
        </div>
        {/* heroes right section */}
        <div className="content_right">
          <div className="content_right-item">
            <div className="upper">
              <div className="hexagon_outer">
                <img src="/assets/images/hex-2.jpg" className="hexagon_inner" />
              </div>
              <div className="hexagon_outer">
                <img src="/assets/images/hex-3.jpg" className="hexagon_inner" />
              </div>
            </div>
            <div className="lower">
              <div className="hexagon_outer">
                <img src="/assets/images/hex-1.jpg" className="hexagon_inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
