import React from "react";

const Contact = () => {
  return (
    <div className="p-10">
      <img
        src={
          new URL("/src/Resources/assets/Contact_2.jpg", import.meta.url).href
        }
        alt=""
        className="w-full"
      />
    </div>
  );
};

export default Contact;
