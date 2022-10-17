import React from "react";
import "./Footer.scss";

import { Logo, Facebook, Twitter, Instagram } from "../global/SvgComponents.js";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="container p-0">
          <div className="row justify-content-between">
            <div className="col-lg-4 ">
              <Logo />
              <p className="smallText">
                LaslesVPN is a private virtual network that has unique features
                and has high security.
              </p>
              <div className="row ">
                <div className="col ">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                </div>
              </div>
              <p className="copyright">©2020LaslesVPN</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-between">
                <div className="footerList p-0">
                  <p className="listTitle">Product</p>
                  <li className="listText">Download</li>
                  <li className="listText">Pricing</li>
                  <li className="listText">Locations</li>
                  <li className="listText">Server</li>
                  <li className="listText">Countries</li>
                  <li className="listText">Blog</li>
                </div>
                <div className="footerList p-0">
                  <p className="listTitle">Engage</p>
                  <li className="listText">LaslesVPN ?</li>
                  <li className="listText">FAQ</li>
                  <li className="listText">Tutorials</li>
                  <li className="listText">About Us</li>
                  <li className="listText">Privacy Policy</li>
                  <li className="listText">Terms of Service</li>
                </div>
                <div className="footerList p-0">
                  <p className="listTitle">Earn Money</p>
                  <li className="listText">Affiliate</li>
                  <li className="listText">Become Partner</li>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
