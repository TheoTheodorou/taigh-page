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
  { src: photo1, width: 4504, height: 3378 },
  { src: photo2, width: 4504, height: 3378 },
  { src: photo3, width: 5184, height: 2614 },
  { src: photo4, width: 4, height: 3 },
  { src: photo5, width: 4672, height: 7008 },
  { src: photo6, width: 4672, height: 7008 },
  { src: photo7, width: 3840, height: 2160 },
  { src: photo8, width: 2574, height: 3432 },
  { src: photo9, width: 3840, height: 2160 },
  { src: photo10, width: 4679, height: 3509 },
  { src: photo11, width: 2684, height: 3579 },
  { src: photo12, width: 3735, height: 2801 },
  { src: photo13, width: 5184, height: 3888 },
  { src: photo14, width: 5184, height: 2920 },
  { src: photo15, width: 4158, height: 2611 },
  { src: photo16, width: 2338, height: 3117 },
  { src: photo17, width: 4080, height: 2758 },
  { src: photo18, width: 1274, height: 1292 },
  { src: photo19, width: 2810, height: 3513 },
  { src: photo20, width: 2822, height: 3528 },
  { src: photo21, width: 1564, height: 1955 },
  { src: photo22, width: 2527, height: 3369 },
  { src: photo23, width: 2916, height: 3888 },
  { src: photo24, width: 1982, height: 2477 },
  { src: photo25, width: 2008, height: 2510 },
];

export default function Photo() {
  return (
    <a href="https://www.google.com">
      <PhotoAlbum
        layout="rows"
        photos={photos}
        componentsProps={(containerWidth) => ({
          imageProps: {
            loading: (containerWidth || 0) > 600 ? "eager" : "lazy",
          },
        })}
      />
    </a>
  );
}
