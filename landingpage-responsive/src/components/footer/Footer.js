import React from "react";
import "./Footer.scss";

import { Logo, Facebook, Twitter, Instagram } from "../global/SvgComponents.js";

const Footer = () => {
  const lists = {
    product: [
      "Download",
      "Pricing",
      "Locations",
      "Server",
      "Countries",
      "Blog",
    ],
    engage: ["LaslesVpn ?","FAQ","Tutorials","About Us","Privacy Policy","Terms Of Service"],
    earnMoney: ["Affiliate","Become Partner"],
  };
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
                {lists.product.map((el) => {
                  return <li className="listText">{el}</li>;
                })}
              </div>
              <div className="footerList p-0">
                <p className="listTitle">Engage</p>
                {lists.engage.map((el) => {
                  return <li className="listText">{el}</li>;
                })}
              </div>
              <div className="footerList p-0">
                <p className="listTitle">Earn Money</p>
                {lists.earnMoney.map((el) => {
                  return <li className="listText">{el}</li>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
