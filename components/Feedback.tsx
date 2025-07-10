'use client';

import { useState } from 'react';
import { peopleFeedback } from '../data/peopleFeedback';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller/*, Navigation*/ } from 'swiper/modules';
import SwiperClass from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Feedback() {
  const [textSwiper, setTextSwiper] = useState<SwiperClass | null>(null);
  const [imageSwiper, setImageSwiper] = useState<SwiperClass | null>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [atStart, setAtStart] = useState(true);

  const slideNext = () => {
    textSwiper?.slideNext();
    imageSwiper?.slideNext();
  };

  const slidePrev = () => {
    textSwiper?.slidePrev();
    imageSwiper?.slidePrev();
  };

  return (
    <section className="bg-[#FBFBFB] py-20 mb-30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center text-center md:text-left">

        {/* LEFT: TEXT SIDE */}
        <div className="w-full min-w-0 order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            People&apos;s Feedback about JobNow!
          </h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lacus non orci euismod vestibulum vitae ut ex.
          </p>

          {/* TEXT SWIPER */}
          <div className="w-full min-w-0 overflow-hidden">
            <Swiper
              simulateTouch={true}
              onSwiper={setTextSwiper}
              controller={{ control: imageSwiper }}
              slidesPerView={1}
              spaceBetween={20}
              modules={[Controller]}
              navigation={false}
              onSlideChange={(swiper) => {
                    setAtStart(swiper.isBeginning);
                    setAtEnd(swiper.isEnd);
                }}
            >
              {peopleFeedback.map((person, index) => (
                <SwiperSlide key={index}>
                  <blockquote className="text-lg font-medium text-black mb-6">&quot;{person.feedback}&quot;</blockquote>

                  {/* Image below feedback on small screens */}
                  <div className="md:hidden mt-4 flex justify-center">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-[280px] h-[280px] object-cover rounded-xl"
                    />
                  </div>

                  <div className="mt-4 font-semibold text-black">{person.name}</div>
                  <p className="text-sm text-gray-500">{person.job}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Arrows under name/job */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <button
                onClick={slidePrev}
                aria-label="Previous slide"
                disabled={atStart}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out
                    ${atStart 
                    ? 'bg-gray-300 opacity-50 pointer-events-none cursor-not-allowed' 
                    : 'bg-[#d3d3d3] hover:bg-[#00CBA3]'
                    }`}
                >
                <i className="fas fa-arrow-left text-white text-sm"></i>
            </button>

            <button
                onClick={slideNext}
                aria-label="Next slide"
                disabled={atEnd}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out
                    ${atEnd 
                    ? 'bg-gray-300 opacity-50 pointer-events-none cursor-not-allowed' 
                    : 'bg-[#d3d3d3] hover:bg-[#009e84]'
                    }`}
                >
                <i className="fas fa-arrow-right text-white text-sm"></i>
            </button>
          </div>
        </div>

        {/* RIGHT: IMAGE SWIPER (visible only on desktop) */}
        <div className="hidden md:flex order-1 md:order-2 justify-center w-full min-w-0 overflow-hidden">
          <Swiper
            simulateTouch={true}
            onSwiper={setImageSwiper}
            controller={{ control: textSwiper }}
            allowTouchMove={true} 
            slidesPerView={1}
            spaceBetween={20}
            modules={[Controller]}
            navigation={false}
            className="w-full"
            onSlideChange={(swiper) => {
              setAtStart(swiper.isBeginning);
              setAtEnd(swiper.isEnd);
            }}
          >
            {peopleFeedback.map((person, index) => (
              <SwiperSlide key={index}>
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-[360px] h-[360px] md:w-[460px] md:h-[360px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}