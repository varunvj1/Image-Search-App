import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  const images = props.images.map(image => {
    //parameter.urls.regular . Check this on Network > GET > Preview > results > urls.regular
    return <ImageCard key={image.id} image={image} />;
  });
  console.log(props.images);
  return <div className="image-list"> {images} </div>;
};

export default ImageList;
