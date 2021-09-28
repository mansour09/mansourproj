import React from "react";
import ImageGallery from "react-image-gallery";
//this func is used for image slide show using react class
function Img() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      thumbnailTitle: "عکس جنگل",
      originalTitle: "جنگل",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="shadow container mt-5">
      <ImageGallery items={images} />
    </div>
  );
}
export default Img;
