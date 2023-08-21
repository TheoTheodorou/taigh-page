import React from "react";
import Card from "../../Components/Card";

const Home = () => {
  const cards = [
    {
      id: 1,
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5e7b455293633531355748f4/1603849852926-FK0MXGAFOGPACP4UUPHP/Gif_Export_3.gif",
      titleSrc: new URL(
        "/src/Resources/assets/Video_Banner.jpg",
        import.meta.url
      ).href,
      href: "/video",
    },
    {
      id: 2,
      imageSrc: new URL("/src/Resources/photo/7.jpg", import.meta.url).href,
      titleSrc: new URL(
        "/src/Resources/assets/photo_Banner.jpg",
        import.meta.url
      ).href,
      href: "/photo",
    },
  ];

  return (
    <div className="xl:gap-x-30 mt-6 space-y-12 p-8 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:space-y-0">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Home;
