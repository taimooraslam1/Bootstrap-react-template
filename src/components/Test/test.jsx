import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./test.scss";

export default function Test() {
  const [bannerOne, setBannerOne] = useState(
    "translate3d(421.913px, 0px, 0px)"
  );
  const [bannerTwo, setBannerTwo] = useState("");

  const handleScroll = () => {
    let forpostion = document.getElementById("item0");
    let elementPosition = forpostion.getBoundingClientRect().top;
    let windowScroll = window.pageYOffset;
    let { innerHeight: height } = window;
    let WindowHeight = height;
    let elementvisibility = windowScroll + WindowHeight - 100;
    setBannerOne("translate3d(0px, 0px, 0px)");
    setBannerTwo("translate3d(0px, 0px, 0px)");
    if (elementvisibility >= elementPosition) {
      let transformInPx = elementvisibility - elementPosition;
      setBannerOne(`translate3d(${transformInPx}px, 0px, 0px)`);
      setBannerTwo(`translate3d(-${transformInPx}px, 0px, 0px)`);
    }
  };

  window.addEventListener("scroll", handleScroll, true);

  return (
    <section className="slidersection">
      <h2 className=" mb-5">MALE COLLECTION</h2>
      <p>Minted in December 2021</p>
      <div className="rotate">
        <div
          id="item0"
          className="d-flex flex-row-reverse "
          style={{ transform: `${bannerOne}` }}
        >
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (23).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (17).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (25).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (13).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (1).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (9).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (21).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (3).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (22).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (12).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
        </div>
        <div
          id="item1"
          className="d-flex"
          style={{ transform: `${bannerTwo}` }}
        >
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (14).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (19).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (26).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (8).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (6).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (24).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (16).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (2).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (4).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <img
              src="https://pjpp.io/img/g (20).webp"
              className="img-fluid p-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
