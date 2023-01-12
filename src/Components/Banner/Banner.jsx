import React from "react";
import './Banner.css'
function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
