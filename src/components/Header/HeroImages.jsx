import React from "react";
import imagesData from "./images.json";

export default function HeroImages() {
  return (
    <>
      <div
        className="container carousel slide carousel-fade"
        id="carouselFade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner img-container rounded">
          {imagesData.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""} `}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/${image.src}`}
                className="d-block hero-image"
                alt={image.alt}
              />
              <div className="header-title">
                <h1 className="display-4 fw-bolder">Shopping made easy.</h1>
                <p className="lead fw-normal text-white-50 mb-0">
                  Shop till you drop !
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
