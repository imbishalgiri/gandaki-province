import React from "react";
import "./notice.styles.scss";

const Notice: React.FC = (): JSX.Element => {
  const getNoticeItems = () => {
    const elements = [1, 2, 3, 4, 5];
    return elements.map((el) => {
      return (
        <div key={el} className="notice_item">
          <div className="date_time">
            <div className="date">May 13, 2023</div>
            <div className="category">general</div>
            {el === 1 || el === 2 ? <div className="recent">New</div> : null}
          </div>
          <div className="notice_description">
            This is a notice regarding our tour to one of the most sacred and
            holy place in this world (Las Vegas).
          </div>
        </div>
      );
    });
  };

  return (
    <div className="notice_section">
      <div className="container">
        <div className="notice_section-left">
          <div className="left_heading">Notice Section</div>
          <div className="notice_items">{getNoticeItems()}</div>
        </div>
        <div className="notice_section-right">
          <div className="left_heading">Notice Section</div>
          <div className="notice_items">{getNoticeItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
