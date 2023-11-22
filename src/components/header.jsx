import React from "react";
// import bgslide from "../../src/vid/bgslide.mp4";
// import { Grid} from '@mui/material';
// import PostSlider from 'ui-component/Slider';
 

import image1 from "../assets/images/image1.jpg";


export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        {/* <video src={bgslide} autoPlay loop muted /> */}
        {/* <Grid xs={12} sm={12} md={4.3} lg={4.3}>
          <StyledBox>
            <PostSlider medias={sliderData} />
          </StyledBox>
        </Grid> */}
        <img src={image1} alt="image1.jpg" />
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
                  className="btn btn-custom btn-lg page-scroll">
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
