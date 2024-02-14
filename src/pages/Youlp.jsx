import React from 'react';
import imgOne from '../img/yulp/yulp-1.jpg';
import imgSecond from '../img/yulp/yulp-2.jpg';
import imgThird from '../img/yulp/yulp-3.jpg';

export default function Youlp() {
  return (
    <div id="youlp" className="container text-[#343a40]">
      <h1 className="text-center mt-16 font-bold">What is YouLP?</h1>
      <div className="flex flex-col gap-10 lg:gap-20 xl:gap-32 py-10 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 xl:gap-32 max-w-screen-xl mx-auto">
          <div>
            <h2 className="mb-4 text-2xl md:text-3xl font-medium">
              Young Leadership Program
            </h2>
            <p className="text-lg md:text-xl">
              The Young Leadership Program (YouLP) is a youth initiative
              organized by the Mahorat & Management, and
              Friedrich-Ebert-Stiftung in Uzbekistan (FES). The program aims to
              empower the young people of Uzbekistan by cultivating their
              leadership, interpersonal, and community engagement skills.
            </p>
          </div>

          <div>
            <img src={imgOne} alt="about Young Leadership Program" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 xl:gap-32 max-w-screen-xl mx-auto mt-10 md:mt-20">
          <div>
            <img src={imgSecond} alt="Program Overview:" />
          </div>

          <div>
            <h2 className="mb-4 text-2xl md:text-3xl font-medium">
              Program Overview:
            </h2>
            <p className="text-lg md:text-xl">
              The program lasts for three months and consists of a five-module
              Continuing Professional Development (CPD) curriculum. The training
              includes offline guest lectures by local experts, online
              zoom/telegram chat meetups featuring experts from abroad, case
              study analyses, practical field trips, and a variety of
              team-building activities and informal meetups initiated by the
              team. Each module consists of 8 hours of training, including team
              building activities, guest speaker lectures including a Q/A
              session, Soft skills, case studies or module tasks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20 xl:gap-32 max-w-screen-xl mx-auto mt-10 md:mt-20">
          <div>
            <h2 className="mb-4 text-2xl md:text-3xl font-medium">
              Internship Programme
            </h2>
            <p className="text-lg md:text-xl">
              The internship programme also includes leadership skills
              development including debate and communications training. During
              the programme, Interns have the opportunity to participate in
              media training with seasoned professionals and contribute to a
              formal public debate. They spend a weekend retreat exploring their
              own leadership styles and developing personal and professional
              skills for leading change with confidence.
            </p>
          </div>

          <div>
            <img
              src={imgThird}
              alt="youlp members teaching in a class masterclass"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

