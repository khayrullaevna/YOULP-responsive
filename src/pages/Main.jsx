import React from "react";
import main from "../img/main-outbg.png";

const Main = () => {
  return (
    <div className="container mx-auto py-10 md:py-16 px-4 md:px-8 lg:px-12 xl:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#5F73F1] leading-tight mb-6">
            <span className="text-3xl md:text-5xl text-[#343a40] block">
              Join Our
            </span>
            Young Leaders
          </h1>
          <div className="flex gap-4">
            <button
              className="btn-primary"
              onClick={() =>
                window.open("https://forms.gle/hg9C3uJZLdPwjAyQ9", "_blank")
              }
            >
              Apply now
            </button>

            <button className="btn-secondary">More ...</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={main}
            alt="Header Image"
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
