import React from "react";
import "./userCard.styles.scss";
import { Divider } from "@mui/material";

const UserCard: React.FC = (): JSX.Element => {
  return (
    <div className="card_wrapper">
      <div className="image_section">
        <img src="/assets/images/chairman.jpg" alt="member image" />
      </div>

      <div className="credentials">
        <div className="name">Jackie brown</div>
        <Divider className="divider" />
        <div className="designation">CEO (Hello world foundation)</div>
      </div>
    </div>
  );
};

export default UserCard;
