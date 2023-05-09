import React from "react";

const VideoCardLeft = (props) => {
  return (
    <div className="video-card">
      <div className="flex min-h-full max-w-xl flex-col justify-center gap-y-8 p-10 text-center">
        <h2 className="">{props.title}</h2>
        <h3 className="text-center tracking-widest">{props.subtitle}</h3>
        <p className="whitespace-pre-wrap">{props.text}</p>
      </div>
      <iframe
        className="rounded-xl"
        width="960"
        height="540"
        src={props.src}
        title={props.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoCardLeft;
