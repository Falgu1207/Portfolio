import React from "react";
import "./Footer.css";
import { FiHome, FiPhone, FiMail, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">

          <div className="location">
            <FiHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Patel Vas , Ghodiyal</p>
              <p>Banaskantha</p>
            </div>
          </div>

          <div className="phone">
            <h4><FiPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            9106747563</h4>
          </div>

          

        </div>
        <div className="right">
            <p>LinkedIn Contact</p>
            <div className="social">
                <FiLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
            </div>
            <div className="email">
            <h4><FiMail size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            falgunigol8824@gmail.com</h4>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
