import React from "react";
import Card from "../../Components/Card";

const Home = () => {
  const cards = [
    {
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5e7b455293633531355748f4/1603849852926-FK0MXGAFOGPACP4UUPHP/Gif_Export_3.gif",
      titleSrc: new URL(
        "/src/Resources/Assets/Video_Banner.jpg",
        import.meta.url
      ).href,
      href: "/video",
    },
    {
      imageSrc: new URL(
        "/src/Resources/photo/India_Couple.jpg",
        import.meta.url
      ).href,
      titleSrc: new URL(
        "/src/Resources/Assets/photo_Banner.jpg",
        import.meta.url
      ).href,
      href: "/photo",
    },
  ];

  return (
    <div className="">
      <img
        className="mx-auto w-full object-fill"
        src={
          new URL("/src/Resources/Assets/Banner-3.jpg", import.meta.url).href
        }
        alt=""
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16  lg:max-w-none lg:py-32">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-0">
            {cards.map((card) => (
              <Card
                link1={card.imageSrc}
                link2={card.titleSrc}
                classname={card.classname}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
