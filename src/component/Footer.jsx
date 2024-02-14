import React from "react";
import Logo from "../img/logo-outbg.png";

const Footer = () => {
  return (
    <footer className="w-full xl:w-[100vw] py-[3vw] md:py-[5vw] px-[3vw] m-auto flex flex-col text-[#343a40] bg-[#f1f3f5]">
      <div className="flex flex-col sm:flex-col justify-center md:flex-col lg:flex-row xl:flex-row items-center">
        <a
          href="#main"
          className="py-[2vw] md:py-[3vw]"
          aria-label="company logo"
        >
          <img src={Logo} className="w-[40vw] m-auto" alt="company logo" />
        </a>

        <div className="flex flex-col sm:justify-center sm:items-center sm:mt-5 md:justify-center md:items-center lg:justify-between lg:items-start xl:justify-between xl:items-start md:mt-5 text-lg md:ml-10">
          <a
            href="#youlp"
            className="text-[#343a40] font-semibold no-underline hover:text-[#5F73F1]"
            aria-label="direct to what is youlp section"
          >
            What is YouLP?
          </a>

          <a
            href="#intern"
            className="text-[#343a40] no-underline hover:text-[#5F73F1]"
            aria-label="direct to our interns section"
          >
            Our Interns
          </a>
          <a
            href="#news"
            className="text-[#343a40] no-underline hover:text-[#5F73F1]"
            aria-label="direct to News & Insights section"
          >
            News & Insights
          </a>
          <a
            href="#"
            className="text-[#343a40] no-underline hover:text-[#5F73F1]"
            aria-label="direct to Internship Programmes section"
          >
            Internship Programs
          </a>
          <a
            href="#"
            className="text-[#343a40] no-underline hover:text-[#5F73F1]"
            aria-label="direct to Applications section"
          >
            Applications
          </a>
        </div>

        <div className="flex flex-col items-center md:justify-center md:items-center sm:justify-center sm:items-center sm:mt-5 xl:justify-between xl:items-start lg:justify-between lg:items-start md:mt-5 text-lg md:ml-10">
          <h4 className="text-[#343a40] font-semibold p-1">Connect with us</h4>

          <span className="text-[#343a40]">
            Safdosh Street, 10, Tashkent, Uzbekistan
          </span>
          <a
            href="tel:+998997214262"
            className="text-[#343a40] no-underline hover:text-[#5F73F1]"
            aria-label="direct to youlp call center"
          >
            +998 99 721 42 62
          </a>
          <a
            href="mailto:info.yldp@gmail.com"
            className="text-[#343a40] no-underline hover:text-[#5F73F1]"
            aria-label="direct to youlp email"
          >
            info.yldp@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center md:justify-center md:items-center sm:justify-center sm:items-center sm:mt-5 xl:justify-between xl:items-start lg:justify-between lg:items-start md:mt-5 text-lg md:ml-10">
          <h4 className="text-[#343a40] font-semibold mb-4">
            Our Social media
          </h4>

          <ul className="flex gap-[20px] p-0 opacity-70">
            <li className="translate-y-[4px]">
              <a
                href="https://t.me/yldpuzb"
                className="text-[#343a40] text-[30px] hover:text-[#5F73F1]"
                aria-label="direct to youlp telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </li>
            <li className="translate-y-[4px]">
              <a
                href="https://www.linkedin.com/company/yldpuz/"
                className="text-[#343a40] text-[30px] hover:text-[#5F73F1]"
                aria-label="direct to youlp linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="translate-y-[4px]">
              <a
                href="https://www.instagram.com/youlp.uz/"
                className="text-[#343a40] text-[30px] hover:text-[#5F73F1]"
                aria-label="direct to youlp instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-center font-light">
        © YouLP 2024 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
