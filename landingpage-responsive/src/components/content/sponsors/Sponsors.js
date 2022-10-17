import React from "react";

import netflix from "../../photos/netflix.png";
import reddit from "../../photos/reddit.png";
import amazon from "../../photos/amazon.png";
import discord from "../../photos/discord.png";
import spotify from "../../photos/spotify.png";

const Sponsors = () => {
  return (
    <>
      <div className="sponsorsContainer">
        <div className="container d-flex justify-content-center">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col col-sm-8 col-lg-2">
              <img className="img-fluid" src={netflix} alt="" />
            </div>
            <div className="col col-sm-8 col-lg-2">
              <img className="img-fluid" src={reddit} alt="" />
            </div>
            <div className="col col-sm-8 col-lg-2">
              <img className="img-fluid" src={amazon} alt="" />
            </div>
            <div className="col col-sm-8 col-lg-2">
              <img className="img-fluid" src={discord} alt="" />
            </div>
            <div className="col col-sm-8 col-lg-2">
              <img className="img-fluid" src={spotify} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
