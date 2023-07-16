import React from "react";
import "./chairman.scss";
import P1 from "./../../../../../public/assets/images/polygon-1.svg";
import P2 from "./../../../../../public/assets/images/polygon-2.svg";
import P3 from "./../../../../../public/assets/images/polygon-3.svg";

const Chairman: React.FC = (): JSX.Element => {
  return (
    <div className="chairman_section section">
      <div className="container">
        {/* left part (image and metadata) */}
        <div className="chairman_left">
          <div className="content">
            <img
              src="/assets/images/chairman.jpg"
              alt="String image of chairman"
            />
            <div className="identity">
              <div className="name">Mr. Jane Smith</div>
              <div className="designation">
                Chairman (Ranger foundation of mars)
              </div>
            </div>
          </div>
        </div>

        {/* right part (description) */}
        <div className="chairman_right">
          <div className="heading">Message from chairman</div>
          <div className="description">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </div>
          <div className="svg">
            <P1 />
          </div>
          <div className="svg-1">
            <P2 />
          </div>
          <div className="svg-2">
            <P3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
