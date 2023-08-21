import React from "react";
import VideoCard from "../../Components/VideoCard";

const Video = () => {
  const cards = [
    {
      id: 1,
      title: "TerraCycle's Clothing Swap",
      subtitle: "(2022)",
      text: "TerraCycle employees seek to give their used clothes a new home. Shot with Canon C200.",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "The Morning Show Flavour",
      subtitle: "(2022)",
      text: "Musical artist Nesha Nycee joins us in South London with a special guest.",
      src: "https://www.youtube.com/embed/LX51UYH0M3I",
    },
    {
      id: 3,
      title: "FitMe Clothing",
      subtitle: "(2022)",
      text: "We join Tex  Mkay in Candem  to delve into the  inspiration behind his brand.",
      src: "https://www.youtube.com/embed/r3PmX7GYLtY",
    },
    {
      id: 4,
      title: "Remi Rough",
      subtitle: "(2021)",
      text: "I spoke to local artist @remirough about his recent Mural in East Dulwich. Remi is known for his striking use of colour and graffiti-style geometry.",
      src: "https://www.youtube.com/embed/BpbHPvv-kYI",
    },
    {
      id: 5,
      title: "Walworth Living Room",
      subtitle: "(2020)",
      text: "The Walworth Living Room is a communal space for all ages and backgrounds. We sat down some of the regulars, and found out how their lives have been impacted by it.",
      src: "https://www.youtube.com/embed/0eSrSuzPGJ0",
    },
    {
      id: 6,
      title: "Mr Hare & Mr Hare",
      subtitle: "(2021)",
      text: `A live performance by Mr Hare & Mr Hare \n\n“Containing a slick mixture of Jazz, Hip Hop, Jungle, dope keys and Turntablism."`,
      src: "https://www.youtube.com/embed/i1t2QDcrfDw",
    },
    {
      id: 7,
      title: "Bali in 4k",
      subtitle: "(2020)",
      text: "A cinematic music video highlighting the best areas to visit in and around Bali, Indonisia. Featuring Ubud, Gili Trawangan and Nusa Penida.",
      src: "https://www.youtube.com/embed/dsxj0Ul3tw0",
    },
    {
      id: 8,
      title: "Who are Substance?",
      subtitle: "(2018) ",
      text: "This video was great fun to make, as it was my first experience playing around with motion graphics.\n\nThis is a promotional video for the digital company Substance Global.",
      src: "https://player.vimeo.com/video/257167830?h=2a458323bc",
    },
    {
      id: 9,
      title: "Kennington Chartist Project",
      subtitle: "(2018)",
      text: "A Day of workshops, participation and action in Kennington Park. Celebrating the legacy of the 1848 Chartist Rally on Kennington Common.",
      src: "https://www.youtube.com/embed/6blbWvPYD0k",
    },
    {
      id: 10,
      title: "Showreel",
      subtitle: "(2018)",
      text: "A Day of workshops, participation and action in Kennington Park. Celebrating the legacy of the 1848 Chartist Rally on Kennington Common.",
      src: "https://www.youtube.com/embed/KZaajUZ2QyA",
    },
  ];

  const getThumbnailUrl = (src) => {
    if (src.includes("youtube")) {
      const videoId = src.split("embed/")[1];
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return ""; // Default thumbnail if none matches
  };

  return (
    <div className="flex min-h-screen flex-col justify-center gap-20">
      <div className="bg-[#171717] pt-10 lg:pt-0">
        <VideoCard
          title="TAIGH'S SHOWREEL"
          subtitle="(2018-2023)"
          src="https://www.youtube.com/embed/dtbOdfsX3Es"
          textcol={"text-white"}
        ></VideoCard>
      </div>

      {cards.map((card, i) => (
        <VideoCard
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          text={card.text}
          src={card.src}
          thumbnail={getThumbnailUrl(card.src)} // Add this line
          alternate={i % 2 === 0} // This will toggle the alternate prop for every card
          textcol={"text-black"}
        />
      ))}
    </div>
  );
};

export default Video;
