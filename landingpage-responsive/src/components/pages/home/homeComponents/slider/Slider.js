import React, { useEffect, useState } from "react";

import { NextArrow, PreviousArrow } from "../../../../global/SvgComponents";
import "./Slider.scss";
import SliderCards from "./sliderComponents/sliderCard/SliderCards";

import customer1 from "../../../../photos/customer1.png";
import customer2 from "../../../../photos/customer2.png";
import customer3 from "../../../../photos/customer3.png";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const dots = document.getElementsByClassName("dot");

  useEffect(() => {
    for (let i = 0; i < dots.length; i++)
      i === slideIndex - 1
        ? (dots[i].className += " active")
        : (dots[i].className = "dot");
  }, [slideIndex, dots]);

  const customers={names : ["Viezh Robert", "Yessica Christy", "Kim Young Jou"],
   locations : ["Warsaw, Poland", "Shanxi, China", "Seoul, South Korea"],
   ratings : [4.5, 4.6, 4.7],
   messages : [
    "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    "“I like it because I like to travel far and still can connect with high speed.”.",
    "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  ],
   photos : [customer1, customer2, customer3],}

   

  return (
    <>
      <div className="sliderContainer">
        <div className="container text-center ">
          <h2 className="bigText mx-auto">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="smallText mx-auto">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div
            id="customerCarousel"
            className="carousel carousel-dark slide "
            data-bs-ride="true"
          >
            <div className="carousel-inner d-flex">
              <div className="carousel-item active">
                <SliderCards
                  customers={customers}
                />
              </div>
              <div className="carousel-item ">
                <SliderCards
                  customers={customers}
                />
              </div>
              <div className="carousel-item ">
                <SliderCards
                  customers={customers}
                />
              </div>
              <div className="carousel-item ">
                <SliderCards
                  customers={customers}
                />
              </div>
            </div>
            <div className="sliderTools d-flex justify-content-between">
              <div className="indicators">
                <button
                  type="button"
                  data-bs-target="#customerCarousel"
                  data-bs-slide-to="0"
                  className="dot active"
                  aria-current="true"
                  aria-label="Slide 1"
                  onClick={() => setSlideIndex(1)}
                ></button>
                <button
                  className="dot"
                  type="button"
                  data-bs-target="#customerCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  onClick={() => setSlideIndex(2)}
                ></button>
                <button
                  className="dot"
                  type="button"
                  data-bs-target="#customerCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  onClick={() => setSlideIndex(3)}
                ></button>
                <button
                  className="dot"
                  type="button"
                  data-bs-target="#customerCarousel"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                  onClick={() => setSlideIndex(4)}
                ></button>
              </div>
              <div>
                <button
                  className="prev"
                  type="button"
                  data-bs-target="#customerCarousel"
                  data-bs-slide="prev"
                  onClick={() =>
                    slideIndex !== 1
                      ? setSlideIndex(slideIndex - 1)
                      : setSlideIndex(dots.length)
                  }
                >
                  <PreviousArrow />
                </button>
                <button
                  className="next"
                  type="button"
                  data-bs-target="#customerCarousel"
                  data-bs-slide="next"
                  onClick={() =>
                    slideIndex !== dots.length
                      ? setSlideIndex(slideIndex + 1)
                      : setSlideIndex(1)
                  }
                >
                  <NextArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
