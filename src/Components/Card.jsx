import React from "react";

function Card(props) {
  return (
    <div className="group relative">
      <div className="  relative h-auto w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 ">
        <img
          src={props.link1}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <img src={props.link2} className="w-full" />
    </div>
  );
}

export default Card;
