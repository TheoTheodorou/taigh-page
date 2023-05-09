import React from "react";

const About = () => {
  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-around gap-x-12 py-10 lg:px-36">
        <div className="flex min-h-full max-w-xl flex-col justify-center gap-y-8 p-10 text-center">
          <h2 className="">Who's Taigh?</h2>
          <h3 className="text-center tracking-widest">
            I'm a London-born creative with an insatiable appetite to paint
            stories through digital media.
          </h3>
          <p>
            In my work, I make it a point to create unique and thought provoking
            content that stands out from the rest.{" "}
          </p>
          <p>
            As is evident in my projects, I believe it's important for
            everyone's voice to be heard. There are individuals from all walks
            of life who have many stories to tell; For this reason, I try to
            always have a purpose behind what I create.
          </p>
          <p>
            With over 5 years of experience having worked in digital marketing
            producing content for AMC, Universal, Curzon and Altitude, my grasp
            of the media landscape is constantly evolving.
          </p>
        </div>
        <img
          src={new URL("/src/Resources/legacy/Taigh.jpg", import.meta.url).href}
          alt=""
          className="w-full max-w-2xl shrink"
        />
      </div>
    </div>
  );
};

export default About;
