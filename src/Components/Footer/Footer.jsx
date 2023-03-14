import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <span>
          <div className="circle">
            <FaPhoneAlt />
          </div>
          <p>Call us: +84 908 02 02 58</p>
        </span>
        <span>
          <div className="circle">
            <IoIosMail />
          </div>
          <p>Email: chucinog@gmail.com</p>
        </span>
      </div>
      <div className="footer__social">
        <p>Follow us</p>
        <div className="line"></div>
        <div className="circle">
          <FaFacebookF />
        </div>
        <div className="circle">
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
