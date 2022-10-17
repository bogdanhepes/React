import React, { useEffect, useState } from "react";
import { NextArrow, PreviousArrow } from "../../global/SvgComponents";
import "./Slider.scss";
import SliderCard from "./sliderComponents/sliderCard/SliderCards";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const dots = document.getElementsByClassName("dot");

  useEffect(() => {
    for (let i = 0; i < dots.length; i++)
      i === slideIndex - 1
        ? (dots[i].className += " active")
        : (dots[i].className = "dot");
  }, [slideIndex, dots]);

  return (
    <>
      <div className="sliderContainer">
        <div className="container-fluid text-center ">
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
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <SliderCard />
              </div>
              <div className="carousel-item ">
                <SliderCard />
              </div>
              <div className="carousel-item ">
                <SliderCard />
              </div>
              <div className="carousel-item ">
                <SliderCard />
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
