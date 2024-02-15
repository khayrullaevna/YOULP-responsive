import React from 'react';
import newsImage1 from '../img/news/news-1.jpg';
import newsImage2 from '../img/news/news-2.jpg';
import newsImage3 from '../img/news/news-3.jpg';

const newsItems = [
  {
    image: newsImage1,
    title: 'Trip to Samarkand with other YouLP teams',
    date: '04.11.2023',
    description: 'The fifth module of YouLP will be held in Samarkand and will involve teamwork with other YouLP teams.'
  },
  {
    image: newsImage2,
    title: 'What is YLDP? How to make a social team.',
    date: '07.10.2023',
    description: 'Mirjalal Mirsabitov talked about making a social project and how to find partners for it and make this project successful.'
  },
  {
    image: newsImage3,
    title: 'A botanic garden plogging trip and panel discussion',
    date: '22.10.2023',
    description: 'The YouLP team took a plogging trip to the Botanic Gardens and spent part of their 4 modules in the Botanic Garden.'
  }
];

const News = () => {
  return (
    <div id="news" className="text-[#343a40]">
      <h1 className="text-center mt-16 font-bold ml-6">News & Insights</h1>
      <div className="flex flex-col gap-[5vw] w-full max-w-[1400px] py-[5vw] md:py-[8vw] px-[5vw] m-auto">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const NewsItem = ({ image, title, date, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[5vw]">
      <div className="w-full md:w-[40%] h-[auto]">
        <img src={image} alt="News Image" className="w-full h-auto" />
      </div>

      <div className="w-full md:w-[60%]">
        <h2 className="text-[5vw] md:text-[2.5vw] font-medium text-[#5F73F1]">
          {title}
        </h2>
        <p className="text-[2.2vw] md:text-[1.5vw] text-[#747577] font-bold my-[1vw]">
          {date}
        </p>
        <p className="text-[2vw] md:text-[1.2vw]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default News;
