import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="group relative">
      <div className="  relative h-auto w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 ">
        <Link to={props.href}>
          <img
            src={props.link1}
            className="h-full w-full object-cover object-center"
            to={props.href}
          />
        </Link>
      </div>
      <img src={props.link2} className="w-full" />
    </div>
  );
}

export default Card;
