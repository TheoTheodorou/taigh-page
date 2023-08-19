import React from "react";
import PhotoAlbum from "react-photo-album";

// Importing each photo explicitly
import photo1 from "/src/Resources/photo/1.jpg";
import photo2 from "/src/Resources/photo/2.jpg";
import photo3 from "/src/Resources/photo/3.jpg";
import photo4 from "/src/Resources/photo/4.jpg";
import photo5 from "/src/Resources/photo/5.jpg";
import photo6 from "/src/Resources/photo/6.jpg";
import photo7 from "/src/Resources/photo/7.jpg";
import photo8 from "/src/Resources/photo/8.jpg";
import photo9 from "/src/Resources/photo/9.jpg";
import photo10 from "/src/Resources/photo/10.jpg";
import photo11 from "/src/Resources/photo/11.jpg";
import photo12 from "/src/Resources/photo/12.jpg";
import photo13 from "/src/Resources/photo/13.jpg";
import photo14 from "/src/Resources/photo/14.jpg";
import photo15 from "/src/Resources/photo/15.jpg";
import photo16 from "/src/Resources/photo/16.jpg";
import photo17 from "/src/Resources/photo/17.jpg";
import photo18 from "/src/Resources/photo/18.jpg";
import photo19 from "/src/Resources/photo/19.jpg";
import photo20 from "/src/Resources/photo/20.jpg";
import photo21 from "/src/Resources/photo/21.jpg";
import photo22 from "/src/Resources/photo/22.jpg";
import photo23 from "/src/Resources/photo/23.jpg";
import photo24 from "/src/Resources/photo/24.jpg";
import photo25 from "/src/Resources/photo/25.jpg";

const photos = [
  { src: photo1, width: 4, height: 3 },
  { src: photo2, width: 16, height: 9 },
  { src: photo3, width: 3, height: 4 },
  { src: photo4, width: 4, height: 3 },
  { src: photo5, width: 16, height: 9 },
  { src: photo6, width: 1, height: 1 },
  { src: photo7, width: 4, height: 5 },
  { src: photo8, width: 3, height: 2 },
  { src: photo9, width: 4, height: 3 },
  { src: photo10, width: 16, height: 9 },
  { src: photo11, width: 3, height: 4 },
  { src: photo12, width: 4, height: 3 },
  { src: photo13, width: 16, height: 9 },
  { src: photo14, width: 1, height: 1 },
  { src: photo15, width: 4, height: 5 },
  { src: photo16, width: 3, height: 2 },
  { src: photo17, width: 4, height: 3 },
  { src: photo18, width: 16, height: 9 },
  { src: photo19, width: 3, height: 4 },
  { src: photo20, width: 4, height: 3 },
  { src: photo21, width: 16, height: 9 },
  { src: photo22, width: 1, height: 1 },
  { src: photo23, width: 4, height: 5 },
  { src: photo24, width: 3, height: 2 },
  { src: photo25, width: 4, height: 3 },
];

export default function Gallery() {
  return <PhotoAlbum layout="columns" photos={photos} />;
}
