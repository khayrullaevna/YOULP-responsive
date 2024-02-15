import React from 'react';
import { Icon } from '@iconify/react';

import imagePersonOne from '../img/interns/Mashkhura.jpg';
import imagePersonTwo from '../img/interns/Imron.jpg';
import imagePersonThree from '../img/interns/Azimkhuja.jpg';
import imagePersonFour from '../img/interns/Dilnoza.jpg';
import imagePersonFive from '../img/interns/Shukhrat.jpg';
import imagePersonSix from '../img/interns/Gulrukh.jpg';
import imagePersonSeven from '../img/interns/Sevara.jpg';
import imagePersonEight from '../img/interns/Ayubxon.jpg';
import imagePersonNine from '../img/interns/Fatima.jpg';
import imagePersonTen from '../img/interns/Zukhra.jpg';
import imagePersonEleven from '../img/interns/Kamron.jpg';
import imagePersonTwelwe from '../img/interns/Oqil.jpg';
import imagePersonThirteen from '../img/interns/Raximaxon.jpeg';
import imagePersonFourteen from '../img/interns/Madinabonu.jpeg';
import imagePersonFifteen from '../img/interns/Mirfayz.jpg';
import imagePersonSixteen from '../img/interns/Parizoda.jpg';
import imagePersonSeventeen from '../img/interns/Emilia.jpg';
import imagePersonEighteen from '../img/interns/abror.jpg';
import imagePersonNineteen from '../img/interns/Khilolakhon.jpg';
import imagePersonTwenty from '../img/interns/Meyirbek.jpg';
import imagePersonTwentyOne from '../img/interns/Fyodor.jpg';
import imagePersonTwentyTwo from '../img/interns/Durdona.jpg';

const internsData = [
  {
    name: 'Mashkhura Rakhmonova',
    image: imagePersonOne,
    instagram: 'https://www.instagram.com/_rakhmonovaa_/',
    linkedin: 'https://www.linkedin.com/in/mashhura-rahmonova-388044276',
  },
  {
    name: 'Imron Kodirov',
    image: imagePersonTwo,
    instagram: 'https://www.instagram.com/imronkodirovs',
    linkedin: 'https://www.linkedin.com/in/imronkodirov',
  },
  {
    name: 'Azimkhuja Kayimkhujaev',
    image: imagePersonThree,
    instagram: 'https://www.instagram.com/azim.k.m?igsh=dDBrb3VpODg3bDh6',
    linkedin: 'https://www.linkedin.com/in/azimkhuja-kayumkhujaev',
  },
  {
    name: 'Dilnoza Nishanova',
    image: imagePersonFour,
    instagram: 'https://www.instagram.com/melody_dilnoza/',
    linkedin: 'https://www.linkedin.com/in/dilnoza-nishanova/',
  },
  {
    name: 'Shukhrat Boysariev',
    image: imagePersonFive,
    instagram: 'https://instagram.com/shukhratboysariev',
    linkedin: 'https://www.linkedin.com/in/shukhratboysariev',
  },
  {
    name: 'Gulrukh Nuriddinova',
    image: imagePersonSix,
    instagram: 'https://instagram.com/about.thhera?igshid=OGQ5ZDc2ODk2ZA==',
    linkedin:
      'https://www.linkedin.com/in/gulrukh-nuriddinova-625357206?trk=contact-info',
  },
  {
    name: 'Sevara Saydaliyeva',
    image: imagePersonSeven,
    instagram:
      'https://www.instagram.com/saydaliyeva_sevara_0809?igsh=MWpncDRiaHNvdDd3dg==',
    linkedin:
      'https://www.linkedin.com/in/sevara-saydaliyeva-5644a7254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Ayubxon Nigmokhujaev',
    image: imagePersonEight,
    instagram: 'https://www.instagram.com/nigmanhodzayev/',
    linkedin: 'https://www.linkedin.com/in/ayubkhon-nigmonkhujaev/',
  },
  { name: 'Fatima Mullaeva', image: imagePersonNine, instagram: '#', linkedin: '#' },
  {
    name: 'Zukhra Mullayeva',
    image: imagePersonTen,
    instagram:
      'https://www.instagram.com/sunshine_over_mountains?igsh=emVtdXVtYnRlaHR5',
    linkedin: '#',
  },
  {
    name: 'Kamron Turabekov',
    image: imagePersonEleven,
    instagram: '#',
    linkedin: 'https://uz.linkedin.com/in/kamron-turabekov-919101202',
  },
  {
    name: 'Oqil Ibragimov',
    image: imagePersonTwelwe,
    instagram:
      'https://instagram.com/okil_ibragimov_?igsh=MWQxaDlkcWEyZ3I5Nw%3D%3D',
    linkedin: 'https://www.linkedin.com/in/okil-ibragimov-88198028a/',
  },
  {
    name: 'Raximaxon Abduqodirova',
    image: imagePersonThirteen,
    instagram: 'https://www.instagram.com/theonewhosenameisnotchelsea/',
    linkedin: 'https://www.linkedin.com/in/raximaxon-abduqodirova-b682b0268/',
  },
  {
    name: 'Madinabonu Alimova',
    image: imagePersonFourteen,
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Mirfayz Salimov',
    image: imagePersonFifteen,
    instagram: 'https://www.instagram.com/mirfayz.me/',
    linkedin: 'https://uz.linkedin.com/in/mirfayzsalimov',
  },
  {
    name: 'Parizoda Yandashova',
    image: imagePersonSixteen,
    instagram: '#',
    linkedin:
      'https://www.linkedin.com/in/parizoda-yandashova-46b477200/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Emilia Ponomaryova',
    image: imagePersonSeventeen,
    instagram:
      'https://www.instagram.com/emiliaponomaryova?igsh=bTJvYm5pYXAwdjgw',
    linkedin: '#',
  },
  {
    name: 'Abror Musulmonov',
    image: imagePersonEighteen,
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Khilolakhon Kayumova',
    image: imagePersonNineteen,
    instagram:
      'https://www.instagram.com/xilolaxon_qayumova?igsh=bHFyYjZpYjRxZmdz',
    linkedin: 'https://uz.linkedin.com/in/khilolakhon-kayumova-2b695a195',
  },
  {
    name: 'Meyirbek Abdikadirov',
    image: imagePersonTwenty,
    instagram: '#',
    linkedin: 'linkedin.com/in/Meyirbek',
  },
  {
    name: 'Fyodor Amanov',
    image: imagePersonTwentyOne,
    instagram: '#',
    linkedin:
      'https://www.linkedin.com/in/fyodor-amanov/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Durdona Mukhammadiyeva',
    image: imagePersonTwentyTwo,
    instagram: '#',
    linkedin: 'https://www.linkedin.com/in/durdona-mukhammadiyeva-557944225/',
  },
];

const socialMediaIcons = {
  instagram: 'skill-icons:instagram',
  linkedin: 'skill-icons:linkedin',
};

const OurIntern = () => {
  return (
    <div id="intern" className="container mx-auto px-4 lg:px-8 xl:px-12">
      <h1 className="text-center mt-16 font-bold text-3xl lg:text-4xl">
        Our Interns
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12 mt-12">
        {internsData.map((intern, index) => (
          <div key={index} className="flex flex-col gap-4 items-center">
            <img
              src={intern.image}
              className="rounded-lg w-64 h-64"
              alt={`${intern.name}, member of the YouLP 2023`}
            />
            <div className="text-lg text-center">
              <p>{intern.name}</p>
              <div className="flex justify-center gap-4">
                {intern.instagram && (
                  <a
                    href={intern.instagram}
                    aria-label={`Direct to ${intern.name}'s Instagram`}
                  >
                    <Icon
                      icon={socialMediaIcons.instagram}
                      className="w-6 h-6"
                    />
                  </a>
                )}
                {intern.linkedin && (
                  <a
                    href={intern.linkedin}
                    aria-label={`Direct to ${intern.name}'s LinkedIn`}
                  >
                    <Icon
                      icon={socialMediaIcons.linkedin}
                      className="w-6 h-6"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurIntern;