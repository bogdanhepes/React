import React from "react";
import {
  SmallQuoteMark,
  TestimonialAirbnbLogo,
  TestimonialHubspotLogo,
  TestimonialStrapiLogo,
} from "../../../../global/Svgs";
import "./Card.scss";
const Card = (props) => {
  const logos = [
    <TestimonialAirbnbLogo />,
    <TestimonialHubspotLogo />,
    <TestimonialStrapiLogo />,
  ];
  const messages = [
    "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
    "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
    "Landify saved our time in designing my company page.",
  ];
  const authors = ["Jane Cooper", "Floyd Miles", "Kristin Watson"];
  const authorJobs = [
    "CEO, Airbnb",
    "Vice President, GoPro",
    "Co-Founder, Strapi",
  ];
  return (
    <>
      <div className="card w-100">
        <div className="logo">{logos[parseInt(props.id) - 1]}</div>
        <div className="card-body d-flex p-0">
          <div className="cardQuoteMark">
            <SmallQuoteMark />
          </div>
          <div className="cardContent">
            <div className="message">{messages[parseInt(props.id) - 1]}</div>
            <div className="author">{authors[parseInt(props.id) - 1]}</div>
            <div className="authorJob">
              {authorJobs[parseInt(props.id) - 1]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
