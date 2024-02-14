import React from 'react';
import ImgFirst from '../img/news/news-1.jpg';
import ImgSecond from '../img/news/news-2.jpg';
import ImgThrid from '../img/news/news-3.jpg';

export default function News() {
  return (
    <div id="news" className="text-[#343a40]">
      <h1 className="text-center mt-16 font-bold ml-6">News & Insights</h1>
      <div className="flex flex-col gap-[5vw] w-full max-w-[1400px] py-[5vw] md:py-[8vw] px-[5vw] m-auto">
        <div className="flex flex-col md:flex-row items-center gap-[5vw] mt-[8vw]">
          <div className="w-full md:w-[40%] h-[auto]">
            <img src={ImgFirst} alt="image of the youlp members" className="w-full h-auto" />
          </div>

          <div className="w-full md:w-[60%]">
            <h2 className="text-[5vw] md:text-[2.5vw] font-medium text-[#5F73F1]">
              Trip to Samarkand with other YouLP teams
            </h2>
            <p className="text-[2.2vw] md:text-[1.5vw] text-[#747577] font-bold my-[1vw]">
              04.11.2023
            </p>
            <p className="text-[2vw] md:text-[1.2vw]">
              The fifth module of YouLP will be held in Samarkand and will
              involve teamwork with other YouLP teams.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-[5vw] mt-[8vw]">
          <div className="w-full md:w-[50%]">
            <img src={ImgSecond} alt="image of the youlp lesson" className="w-full h-auto" />
          </div>

          <div className="w-full md:w-[50%]">
            <h2 className="text-[5vw] md:text-[2.5vw] font-medium text-[#5F73F1]">
              What is YLDP? How to make a social team.
            </h2>
            <p className="text-[2.2vw] md:text-[1.5vw] text-[#747577] font-bold my-[1vw]">
              07.10.2023
            </p>
            <p className="text-[2vw] md:text-[1.2vw]">
              Mirjalal Mirsabitov talked about making a social project and how
              to find partners for it and make this project successful.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-[5vw] mt-[8vw]">
          <div className="w-full md:w-[50%]">
            <img src={ImgThrid} alt="youlp members image" className="w-full h-auto" />
          </div>

          <div className="w-full md:w-[50%] mb-[8vw]">
            <h2 className="text-[5vw] md:text-[2.5vw] font-medium text-[#5F73F1]">
              A botanic garden plogging trip and panel discussion
            </h2>
            <p className="text-[2.2vw] md:text-[1.5vw] text-[#747577] font-bold my-[1vw]">
              22.10.2023
            </p>
            <p className="text-[2vw] md:text-[1.2vw]">
              The YouLP team took a plogging trip to the Botanic Gardens and
              spent part of their 4 modules in the Botanic Garden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
