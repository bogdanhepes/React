import React, { useEffect, useState } from "react";
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
  }, [slideIndex,dots]);

  return (
    <>
      <div className="container">
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
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.75 13.7499H8.925L13.4625 8.29986C13.6747 8.04459 13.7768 7.71548 13.7463 7.38495C13.7158 7.05442 13.5553 6.74953 13.3 6.53736C13.0447 6.32518 12.7156 6.22311 12.3851 6.25358C12.0546 6.28406 11.7497 6.44459 11.5375 6.69986L5.2875 14.1999C5.24545 14.2595 5.20785 14.3222 5.175 14.3874C5.175 14.4499 5.175 14.4874 5.0875 14.5499C5.03084 14.6932 5.00118 14.8457 5 14.9999C5.00118 15.154 5.03084 15.3065 5.0875 15.4499C5.0875 15.5124 5.0875 15.5499 5.175 15.6124C5.20785 15.6775 5.24545 15.7402 5.2875 15.7999L11.5375 23.2999C11.655 23.441 11.8022 23.5544 11.9686 23.6322C12.1349 23.71 12.3164 23.7502 12.5 23.7499C12.7921 23.7504 13.0751 23.6487 13.3 23.4624C13.4266 23.3574 13.5312 23.2285 13.6079 23.0831C13.6846 22.9377 13.7318 22.7785 13.7469 22.6148C13.762 22.4511 13.7447 22.286 13.6959 22.129C13.6471 21.972 13.5678 21.8262 13.4625 21.6999L8.925 16.2499H23.75C24.0815 16.2499 24.3995 16.1182 24.6339 15.8837C24.8683 15.6493 25 15.3314 25 14.9999C25 14.6683 24.8683 14.3504 24.6339 14.116C24.3995 13.8816 24.0815 13.7499 23.75 13.7499Z"
                    fill="#F53838"
                  />
                </svg>
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
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 13.7499H21.075L16.5375 8.29986C16.3253 8.04459 16.2232 7.71548 16.2537 7.38495C16.2842 7.05442 16.4447 6.74953 16.7 6.53736C16.9553 6.32518 17.2844 6.22311 17.6149 6.25358C17.9454 6.28406 18.2503 6.44459 18.4625 6.69986L24.7125 14.1999C24.7545 14.2595 24.7922 14.3222 24.825 14.3874C24.825 14.4499 24.825 14.4874 24.9125 14.5499C24.9692 14.6932 24.9988 14.8457 25 14.9999C24.9988 15.154 24.9692 15.3065 24.9125 15.4499C24.9125 15.5124 24.9125 15.5499 24.825 15.6124C24.7922 15.6775 24.7545 15.7402 24.7125 15.7999L18.4625 23.2999C18.345 23.441 18.1978 23.5544 18.0314 23.6322C17.8651 23.71 17.6836 23.7502 17.5 23.7499C17.2079 23.7504 16.9249 23.6487 16.7 23.4624C16.5734 23.3574 16.4688 23.2285 16.3921 23.0831C16.3154 22.9377 16.2682 22.7785 16.2531 22.6148C16.238 22.4511 16.2553 22.286 16.3041 22.129C16.3529 21.972 16.4322 21.8262 16.5375 21.6999L21.075 16.2499H6.25C5.91848 16.2499 5.60054 16.1182 5.36612 15.8837C5.1317 15.6493 5 15.3314 5 14.9999C5 14.6683 5.1317 14.3504 5.36612 14.116C5.60054 13.8816 5.91848 13.7499 6.25 13.7499Z"
                    fill="#F53838"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
