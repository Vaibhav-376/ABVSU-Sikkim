"use client";
import Slider from "react-slick";
import Image from "next/image";
import { bannerImages } from "@/lib/constants";


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-full  mx-auto">
      <Slider {...settings}>
        {bannerImages.map((item, index) => (
          <div key={index} className="relative w-full  h-[30vh] md:h-[70vh]">
            <Image
              src={item.imgSrc}
              alt={`Banner ${index + 1}`}
              layout="fill"
              className=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
