import React from "react";

const VideoCardLeft = ({ src, title, subtitle, text, alternate }) => {
  const textRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "-200px 0px -200px 0px", // Adjust these values as needed
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const videoComponent = (
    <div className="relative mx-10 overflow-hidden pt-[56.25%] lg:static lg:mx-0 lg:w-[960px] lg:shrink-0 lg:overflow-auto lg:pt-0">
      <iframe
        className="absolute left-0 top-0 h-full w-full rounded-xl border-0 lg:static lg:left-auto lg:top-auto lg:min-h-[540px]"
        width="960"
        height="540"
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  );

  const textComponent = (
    <div
      className={`gap-x-4 rounded-md py-10 opacity-0 ${
        isVisible ? "animate-fadeInUp opacity-100" : ""
      }`}
      ref={textRef}
    >
      <div className="mx-auto flex min-h-full max-w-xl flex-col justify-center gap-y-8 p-10 text-center xl:text-left">
        <h2 className="">{title}</h2>
        <h3 className="tracking-widest">{subtitle}</h3>
        <p className="whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="lg:flex lg:flex-wrap lg:justify-around">
      {alternate ? textComponent : videoComponent}
      {alternate ? videoComponent : textComponent}
    </div>
  );
};

export default VideoCardLeft;
