import React from "react";
import "./footer.scss";
import { FaHandPointRight, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footer-wrapper">
      <div className="footer-address">
        <h2>Address</h2>
        <div className="footer-divider" />
        <p className="address">
          Jackie street near swiss park and other address down below. Just a
          placeholder address. Zip code is 34234, House number: 32423, just meet
          us directly at our office. we ill be available twenty four by seven.
        </p>
      </div>
      <div className="footer-link">
        <h2>Important Links</h2>
        <div className="footer-divider" />

        <div className="link-wrapper">
          <div className="link">
            <FaHandPointRight />
            <p>About our policy.</p>
          </div>
          <div className="link">
            <FaHandPointRight />
            <p>How to get a membership.</p>
          </div>
          <div className="link">
            <FaHandPointRight />
            <p>How to meet any of our members.</p>
          </div>
          <div className="link">
            <FaHandPointRight />
            <p>Conduct a program.</p>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <h2>Our Contacts</h2>
        <div className="footer-divider" />
        <div className="contact-section">
          <div className="contact">
            <FaPhone />
            <p>+464 45435 435 345</p>
          </div>
          <div className="contact">
            <FaPhone />
            <p>+464 45435 435 345</p>
          </div>
          <div className="contact">
            <FaPhone />
            <p>+464 45435 435 345</p>
          </div>

          <div className="contact">
            <FaMailBulk />
            <p>hello@hello.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
