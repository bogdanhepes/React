import React from "react";

import customer1 from "../../../../../photos/customer1.png";
import customer2 from "../../../../../photos/customer2.png";
import customer3 from "../../../../../photos/customer3.png";

import "./SliderCards.scss";
const SliderCard = () => {
  return (
    <>
      <div className="sliderCardsContainer container">
        <div className="row d-flex">
          <div className="col ">
            <div className="sliderCard card">
              <div className="container p-4 ">
                <div className="row d-flex justify-content-between ">
                  <div className="col-8 d-flex">
                    <img className="img-fluid" src={customer1} alt="" />
                    <div>
                      <p className="listTitle">Viezh Robert</p>
                      <p className="listText">Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <p className="smallText">4.5</p>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1891 6.16509L10.2219 5.58853L8.44844 1.99322C8.4 1.89478 8.32031 1.81509 8.22187 1.76666C7.975 1.64478 7.675 1.74634 7.55156 1.99322L5.77812 5.58853L1.81094 6.16509C1.70156 6.18072 1.60156 6.23228 1.525 6.31041C1.43244 6.40554 1.38143 6.53353 1.38319 6.66625C1.38495 6.79897 1.43933 6.92557 1.53437 7.01822L4.40469 9.81666L3.72656 13.7682C3.71066 13.8601 3.72083 13.9547 3.75592 14.0411C3.79102 14.1276 3.84963 14.2024 3.92511 14.2572C4.00059 14.3121 4.08992 14.3446 4.18297 14.3513C4.27602 14.3579 4.36907 14.3383 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3463 11.7578 14.3635 11.8656 14.3448C12.1375 14.2979 12.3203 14.0401 12.2734 13.7682L11.5953 9.81666L14.4656 7.01822C14.5437 6.94166 14.5953 6.84166 14.6109 6.73228C14.6531 6.45884 14.4625 6.20572 14.1891 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </div>
                </div>
                <div className="rowMessage row">
                  <p className="smallText">
                    “Wow... I am very happy to use this VPN, it turned out to be
                    more than my expectations and so far there have been no
                    problems. LaslesVPN always the best”.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="sliderCard card">
              <div className="container p-4">
                <div className="row d-flex justify-content-between ">
                  <div className="col-8 d-flex">
                    <img className="img-fluid" src={customer2} alt="" />
                    <div>
                      <p className="listTitle">Yessica Christy</p>
                      <p className="listText">Shanxi, China</p>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <p className="smallText">4.5</p>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1891 6.16509L10.2219 5.58853L8.44844 1.99322C8.4 1.89478 8.32031 1.81509 8.22187 1.76666C7.975 1.64478 7.675 1.74634 7.55156 1.99322L5.77812 5.58853L1.81094 6.16509C1.70156 6.18072 1.60156 6.23228 1.525 6.31041C1.43244 6.40554 1.38143 6.53353 1.38319 6.66625C1.38495 6.79897 1.43933 6.92557 1.53437 7.01822L4.40469 9.81666L3.72656 13.7682C3.71066 13.8601 3.72083 13.9547 3.75592 14.0411C3.79102 14.1276 3.84963 14.2024 3.92511 14.2572C4.00059 14.3121 4.08992 14.3446 4.18297 14.3513C4.27602 14.3579 4.36907 14.3383 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3463 11.7578 14.3635 11.8656 14.3448C12.1375 14.2979 12.3203 14.0401 12.2734 13.7682L11.5953 9.81666L14.4656 7.01822C14.5437 6.94166 14.5953 6.84166 14.6109 6.73228C14.6531 6.45884 14.4625 6.20572 14.1891 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </div>
                </div>
                <div className="rowMessage row">
                  <p className="smallText">
                    “I like it because I like to travel far and still can
                    connect with high speed.”.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="sliderCard card">
              <div className="container p-4">
                <div className="row d-flex justify-content-between ">
                  <div className="col-8 d-flex">
                    <img className="img-fluid" src={customer3} alt="" />
                    <div>
                      <p className="listTitle">Kim Young Jou</p>
                      <p className="listText">Seoul, South Korea</p>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <p className="smallText">4.5</p>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1891 6.16509L10.2219 5.58853L8.44844 1.99322C8.4 1.89478 8.32031 1.81509 8.22187 1.76666C7.975 1.64478 7.675 1.74634 7.55156 1.99322L5.77812 5.58853L1.81094 6.16509C1.70156 6.18072 1.60156 6.23228 1.525 6.31041C1.43244 6.40554 1.38143 6.53353 1.38319 6.66625C1.38495 6.79897 1.43933 6.92557 1.53437 7.01822L4.40469 9.81666L3.72656 13.7682C3.71066 13.8601 3.72083 13.9547 3.75592 14.0411C3.79102 14.1276 3.84963 14.2024 3.92511 14.2572C4.00059 14.3121 4.08992 14.3446 4.18297 14.3513C4.27602 14.3579 4.36907 14.3383 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3463 11.7578 14.3635 11.8656 14.3448C12.1375 14.2979 12.3203 14.0401 12.2734 13.7682L11.5953 9.81666L14.4656 7.01822C14.5437 6.94166 14.5953 6.84166 14.6109 6.73228C14.6531 6.45884 14.4625 6.20572 14.1891 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </div>
                </div>
                <div className="rowMessage row">
                  <p className="smallText">
                    “This is very unusual for my business that currently
                    requires a virtual private network that has high security.”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sliderCard card">
        <div className="container p-4">
          <div className="row d-flex justify-content-between ">
            <div className="col-8 d-flex">
              <img className="img-fluid" src={customer1} alt="" />
              <div>
                <p className="listTitle">Viezh Robert</p>
                <p className="listText">Warsaw, Poland</p>
              </div>
            </div>
            <div className="col d-flex justify-content-end">
              <p className="smallText">4.5</p>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1891 6.16509L10.2219 5.58853L8.44844 1.99322C8.4 1.89478 8.32031 1.81509 8.22187 1.76666C7.975 1.64478 7.675 1.74634 7.55156 1.99322L5.77812 5.58853L1.81094 6.16509C1.70156 6.18072 1.60156 6.23228 1.525 6.31041C1.43244 6.40554 1.38143 6.53353 1.38319 6.66625C1.38495 6.79897 1.43933 6.92557 1.53437 7.01822L4.40469 9.81666L3.72656 13.7682C3.71066 13.8601 3.72083 13.9547 3.75592 14.0411C3.79102 14.1276 3.84963 14.2024 3.92511 14.2572C4.00059 14.3121 4.08992 14.3446 4.18297 14.3513C4.27602 14.3579 4.36907 14.3383 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3463 11.7578 14.3635 11.8656 14.3448C12.1375 14.2979 12.3203 14.0401 12.2734 13.7682L11.5953 9.81666L14.4656 7.01822C14.5437 6.94166 14.5953 6.84166 14.6109 6.73228C14.6531 6.45884 14.4625 6.20572 14.1891 6.16509Z"
                  fill="#FEA250"
                />
              </svg>
            </div>
          </div>
          <div className="rowMessage row">
            <p className="smallText">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SliderCard;
