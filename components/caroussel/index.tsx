import React from 'react';
import { Slideshow } from "@taikai/rocket-kit";
import { CarousselWrapper, Image } from './styles';
// import Image from 'next/image';

const Caroussel = () => {

  return (
    <CarousselWrapper>
      <Slideshow
        autoPlay
        dynamicHeight
        interval={5000}
        showArrows
        slideSelected={0}
        slidesNumber={3}
        stopOnHover
      >
        <Image
          alt="img"
          src="/sea_view.png"
        // width={100}
        // height={800}
        // src="/images/sea_view.png"
        />
        <Image
          alt="img"
          src="/living_room.png"
        // width={100}
        // height={800}
        // src="/images/living_room.png"
        />
        <Image
          alt="img"
          src="/balcon.png"
        // width={100}
        // height={800}
        // src="/images/balcon.png"
        />
      </Slideshow>
    </CarousselWrapper>
  );
}

export default Caroussel;