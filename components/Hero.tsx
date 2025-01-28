import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-hero-shape">
      <div className="container flex">
        <div className="relative -mr-8 flex flex-col justify-center">
          <h1 className="h1-bold mb-8">
            Nice to meet you! <br />
            I’m{" "}
            <span className="relative after:absolute after:-left-1 after:bottom-0 after:block after:h-1 after:w-[80%] after:bg-primary-yellow">
              Serhii Orlenko.
            </span>
          </h1>
          <p className="mb-12 max-w-md">
            Based in Poland I’m a front-end
            developer passionate about building
            accessible web apps that users love.
          </p>
          <Button
            url="/#contact"
            label="Contact me"
          />
          <div className="bg-hero-oval absolute -right-[32] bottom-[70px] h-[130] w-[130]"></div>
        </div>
        <div className="flex-grow">
          <Image
            className="w-full"
            src="/images/hero-image-desktop.jpg"
            width="445"
            height="720"
            alt="Serhii Orlenko"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
