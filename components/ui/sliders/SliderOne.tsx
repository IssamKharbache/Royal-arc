"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
const images = ["/sliderimages/image1.jpg","/sliderimages/image2.jpg","/sliderimages/image3.jpg","/sliderimages/image4.jpg"]
  return (
    <div>
      <Slider {...settings}>
        {
         images.map((image,index)=>(
            <div key={index}>
            <div  className="rounded-md px-2 md:p-10">
              <Image
               
                priority
                src={image}
                alt="logo"
                width={500}
                height={500}
                className="rounded-2xl h-80 object-cover"
              />
            </div>
          </div>
         ))
        }
       
     
       
      </Slider>
    </div>
  );
};

export default SliderOne;