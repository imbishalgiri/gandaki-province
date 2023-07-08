import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/navbar/navbar";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import "./layout.scss";
import Logo from "./../../public/assets/images/logo.svg";

const HomeLayout = (): ReactElement => {
  return (
    <div>
      <div className="upper_nav layout_spacing">
        <div className="upper_nav-left">
          <Logo />
        </div>
        <div className="upper_nav-right">
          <div className="phone center">
            <FaPhoneAlt />
            <div className="phone_number">9867475421, 9865609876</div>
          </div>
          <div className="email center">
            <FaMailBulk />
            <div className="email_address">jamiefox@gmail.com</div>
          </div>
        </div>
      </div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
