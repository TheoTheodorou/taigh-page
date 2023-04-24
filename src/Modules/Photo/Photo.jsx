import React from "react";

const Photo = () => {
  return (
    <div>
      <img
        src={new URL("/src/Resources/photo/Aybee_7.jpg", import.meta.url).href}
        alt=""
      />
    </div>
  );
};

export default Photo;
