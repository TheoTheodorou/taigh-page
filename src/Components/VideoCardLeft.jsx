import React from "react";

const VideoCardLeft = (props) => {
  return (
    <div className="lg:flex lg:flex-wrap lg:justify-around">
      <div className="relative mx-10 overflow-hidden pt-[56.25%] lg:static lg:mx-0 lg:w-[960px] lg:shrink-0 lg:overflow-auto lg:pt-0">
        <iframe
          className="absolute left-0 top-0 h-full w-full rounded-xl border-0 lg:static lg:left-auto lg:top-auto lg:min-h-[540px]"
          width="960"
          height="540"
          src={props.src}
          title={props.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="gap-x-4 rounded-md py-10">
        <div className="mx-auto flex min-h-full max-w-xl flex-col justify-center gap-y-8 p-10 text-center xl:text-left">
          <h2 className="">{props.title}</h2>
          <h3 className="tracking-widest">{props.subtitle}</h3>
          <p className="whitespace-pre-wrap">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCardLeft;
