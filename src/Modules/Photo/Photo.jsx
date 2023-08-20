import React, { useState, useEffect, useRef } from "react";

import PhotoAlbum from "react-photo-album";

import photo1_small from "/src/Resources/photo/1-small.jpg";
import photo2_small from "/src/Resources/photo/2-small.jpg";
import photo3_small from "/src/Resources/photo/3-small.jpg";
import photo4_small from "/src/Resources/photo/4-small.jpg";
import photo5_small from "/src/Resources/photo/5-small.jpg";
import photo6_small from "/src/Resources/photo/6-small.jpg";
import photo7_small from "/src/Resources/photo/7-small.jpg";
import photo8_small from "/src/Resources/photo/8-small.jpg";
import photo9_small from "/src/Resources/photo/9-small.jpg";
import photo10_small from "/src/Resources/photo/10-small.jpg";
import photo11_small from "/src/Resources/photo/11-small.jpg";
import photo12_small from "/src/Resources/photo/12-small.jpg";
import photo13_small from "/src/Resources/photo/13-small.jpg";
import photo14_small from "/src/Resources/photo/14-small.jpg";
import photo15_small from "/src/Resources/photo/15-small.jpg";
import photo16_small from "/src/Resources/photo/16-small.jpg";
import photo17_small from "/src/Resources/photo/17-small.jpg";
import photo18_small from "/src/Resources/photo/18-small.jpg";
import photo19_small from "/src/Resources/photo/19-small.jpg";
import photo20_small from "/src/Resources/photo/20-small.jpg";
import photo21_small from "/src/Resources/photo/21-small.jpg";
import photo22_small from "/src/Resources/photo/22-small.jpg";
import photo23_small from "/src/Resources/photo/23-small.jpg";
import photo24_small from "/src/Resources/photo/24-small.jpg";
import photo25_small from "/src/Resources/photo/25-small.jpg";

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

import CloseIcon from "/src/Resources/assets/CloseIcon.jsx";

const small_photos = [
  { id: 1, src: photo1_small, width: 400, height: 300 },
  { id: 2, src: photo2_small, width: 400, height: 300 },
  { id: 3, src: photo3_small, width: 595, height: 300 },
  { id: 4, src: photo4_small, width: 300, height: 400 },
  { id: 5, src: photo5_small, width: 300, height: 450 },
  { id: 6, src: photo6_small, width: 300, height: 450 },
  { id: 7, src: photo7_small, width: 533, height: 300 },
  { id: 8, src: photo8_small, width: 300, height: 400 },
  { id: 9, src: photo9_small, width: 533, height: 300 },
  { id: 10, src: photo10_small, width: 400, height: 300 },
  { id: 11, src: photo11_small, width: 300, height: 400 },
  { id: 12, src: photo12_small, width: 400, height: 300 },
  { id: 13, src: photo13_small, width: 400, height: 300 },
  { id: 14, src: photo14_small, width: 533, height: 300 },
  { id: 15, src: photo15_small, width: 478, height: 300 },
  { id: 16, src: photo16_small, width: 300, height: 400 },
  { id: 17, src: photo17_small, width: 444, height: 300 },
  { id: 18, src: photo18_small, width: 300, height: 375 },
  { id: 19, src: photo19_small, width: 300, height: 375 },
  { id: 20, src: photo20_small, width: 300, height: 375 },
  { id: 21, src: photo21_small, width: 300, height: 375 },
  { id: 22, src: photo22_small, width: 300, height: 400 },
  { id: 23, src: photo23_small, width: 300, height: 400 },
  { id: 24, src: photo24_small, width: 300, height: 375 },
  { id: 25, src: photo25_small, width: 300, height: 375 },
];

const large_photos = [
  { id: 1, src: photo1, width: 1351, height: 1013 },
  { id: 2, src: photo2, width: 1351, height: 1013 },
  { id: 3, src: photo3, width: 2000, height: 1008 },
  { id: 4, src: photo4, width: 458, height: 611 },
  { id: 5, src: photo5, width: 1600, height: 2400 },
  { id: 6, src: photo6, width: 1548, height: 2323 },
  { id: 7, src: photo7, width: 1600, height: 900 },
  { id: 8, src: photo8, width: 772, height: 1030 },
  { id: 9, src: photo9, width: 1152, height: 648 },
  { id: 10, src: photo10, width: 1404, height: 1053 },
  { id: 11, src: photo11, width: 805, height: 1074 },
  { id: 12, src: photo12, width: 1121, height: 840 },
  { id: 13, src: photo13, width: 1555, height: 1166 },
  { id: 14, src: photo14, width: 1555, height: 876 },
  { id: 15, src: photo15, width: 1247, height: 783 },
  { id: 16, src: photo16, width: 701, height: 935 },
  { id: 17, src: photo17, width: 1600, height: 1082 },
  { id: 18, src: photo18, width: 382, height: 478 },
  { id: 19, src: photo19, width: 843, height: 1054 },
  { id: 20, src: photo20, width: 847, height: 1058 },
  { id: 21, src: photo21, width: 469, height: 587 },
  { id: 22, src: photo22, width: 758, height: 1011 },
  { id: 23, src: photo23, width: 875, height: 1166 },
  { id: 24, src: photo24, width: 595, height: 743 },
  { id: 25, src: photo25, width: 602, height: 753 },
];

export default function Photo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageClick = (id) => {
    const largeImage = large_photos[id];
    if (largeImage) {
      setSelectedImage(largeImage.src);
      setIsModalOpen(true);
      setIsImageLoaded(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow property when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div>
      <PhotoAlbum
        layout="columns"
        photos={small_photos}
        onClick={({ index }) => {
          console.log("Clicked on photo", index);
          handleImageClick(index);
        }}
        componentsProps={(containerWidth) => ({
          imageProps: {
            loading: (containerWidth || 0) > 600 ? "eager" : "lazy",
            className: "hover:opacity-90 cursor-pointer bg-gray-100",
          },
        })}
      />

      {isModalOpen && (
        <div
          ref={modalRef}
          onClick={handleOutsideClick}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90"
        >
          <div className="relative inline-block">
            <img
              src={selectedImage}
              alt="Selected"
              onLoad={handleImageLoad}
              className="max-w-screen f max-h-screen border-4 border-black border-opacity-10 object-contain shadow-lg"
            />
            {isImageLoaded && (
              <button
                className="absolute right-3 top-3 z-10 flex h-6 w-6 transform cursor-pointer items-center justify-center rounded-full border border-white border-opacity-50 bg-black bg-opacity-50 p-0.5 shadow-lg transition hover:scale-110"
                onClick={() => closeModal()}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
