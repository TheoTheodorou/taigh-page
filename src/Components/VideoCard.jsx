import React from "react";

const VideoCardLeft = ({ src, title, subtitle, text, alternate, textcol }) => {
  const textRef = React.useRef(null);
  const videoRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVideoVisible, setIsVideoVisible] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "-200px 0px -200px 0px",
      }
    );

    const videoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      {
        rootMargin: "200px 0px 200px 0px",
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (videoRef.current) {
        videoObserver.unobserve(videoRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const videoComponent = isVideoVisible ? (
    <div
      className="relative mx-10 overflow-hidden pt-[56.25%] lg:static lg:mx-0 lg:w-[960px] lg:shrink-0 lg:overflow-auto lg:pt-0"
      ref={videoRef}
    >
      <iframe
        className="absolute left-0 top-0 h-full w-full rounded-xl border-0 lg:static lg:left-auto lg:top-auto lg:min-h-[540px]"
        width="960"
        height="540"
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  ) : (
    <div
      className="relative mx-10 overflow-hidden pt-[56.25%] lg:static lg:mx-0 lg:w-[960px] lg:shrink-0 lg:overflow-auto lg:pt-0"
      ref={videoRef}
    >
      {/* Placeholder for the video until it's in the viewport */}
      <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-gray-200"></div>
    </div>
  );

  const textComponent = (
    <div
      className={`gap-x-4 rounded-md py-10 opacity-0 ${textcol} ${
        isVisible ? "animate-fadeInUp opacity-100" : ""
      }`}
      ref={textRef}
    >
      <div className="mx-auto flex min-h-full max-w-xl flex-col justify-center gap-y-8 p-10 text-center lg:py-0 xl:text-left">
        <h2 className="">{title}</h2>
        <h3 className="tracking-widest">{subtitle}</h3>
        <p className="whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );

  const shouldAlternate = alternate && screenWidth > 1500;

  return (
    <div className="lg:flex lg:flex-wrap lg:justify-around lg:py-24">
      {shouldAlternate ? textComponent : videoComponent}
      {shouldAlternate ? videoComponent : textComponent}
    </div>
  );
};

export default VideoCardLeft;
