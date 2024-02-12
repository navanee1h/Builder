import React from "react";

export const Header = (props) => {
  // Define the background image URL
  const backgroundImageUrl = "url('src/assets/images/image2.jpg')";

  return (
    <header
      id="header"
      style={{
        background: backgroundImageUrl,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
      <div className="overlay headerimage">
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
    </header>
  );
};
