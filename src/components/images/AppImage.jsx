import React from "react";
import "./ImageStyles.css";

const AppImage = ({ imgSrc, imgAlt, imgClass }) => 
  <img className={imgClass} src={imgSrc} alt={imgAlt} />

export default AppImage;
