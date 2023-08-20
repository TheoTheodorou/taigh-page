import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="group relative">
      <div className="  relative h-auto w-full overflow-hidden bg-white group-hover:opacity-75 ">
        <Link to={props.href}>
          <img
            src={props.imageSrc}
            className="h-full w-full object-cover object-center"
            to={props.href}
          />
          <img src={props.titleSrc} className="w-full" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
