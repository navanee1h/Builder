import React from "react";
// import bgslide from "../../src/vid/bgslide.mp4";
// import { Grid} from '@mui/material';
// import PostSlider from 'ui-component/Slider';

// import img3 from "../assets/images/img3.jpg";

export const Header = (props) => {
  // Define the background image URL
  const backgroundImageUrl = "url('src/assets/images/image1.jpg')";

  return (
    <header id="header">
      <div className="intro">
        <div
          className="overlay headerimage"
          style={{ background: backgroundImageUrl, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
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
