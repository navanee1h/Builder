import React from "react";
import image1 from "../assets/images/image1.jpg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <img
          src={image1}
          alt="image1.jpg"
          className="responsive-image" // Add this class for styling
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
