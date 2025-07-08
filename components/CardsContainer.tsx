'use client';
import Link from 'next/link';
import { jobs } from '../data/jobs';
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { /*Navigation,*/ Pagination } from 'swiper/modules';
import "swiper/css";
//import "swiper/css/navigation";
import "swiper/css/pagination";

type CardsContainerProps = {
    containerTitle: string;
    containerDescription: string;
    btnText?: string;
    btnLink?: string;
    location?: string;
    time?:string;
    applyLink?: string;
}

export default function CardsContainer ({containerTitle, containerDescription, btnText, btnLink}: CardsContainerProps) {
    let jobsToRender = jobs;

    if (containerTitle === "Recently Added Jobs") {
    jobsToRender = jobs.slice(5);
    } else if (containerTitle === "Popular Job Categories") {
    jobsToRender = jobs.slice(0, 5);
    }

    return (
        <div className="container mx-auto px-4 py-30 md:px-20 text-center">
            <h1>{containerTitle}</h1>      
            <p className="text-gray-500 max-w-170 mx-auto">{containerDescription}</p>

            <Swiper
                modules={[/*Navigation,*/ Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4.3 },
                }}
                //navigation
                pagination={{ clickable: true }}
            >
                

                {jobsToRender.map((card, index) => (
                    <SwiperSlide key={index} className="mb-10">
                        <Card
                            title={card.title}
                            description={card.description}
                            iconClass={card.iconClass}
                            location={card.location}
                            time={card.time}
                            applyLink={card.applyLink}
                            imageSrc={card.imageSrc}
                            disableHover={containerTitle === "Recently Added Jobs"}
                        /> 
                    </SwiperSlide>
                ))}
            </Swiper>

            {btnText && btnLink && (
                <Link href={btnLink}><button className="text-[#00CBA3] px-6 py-2 text-sm font-semibold bg-transparent border-2 border-[#00CBA3] rounded-md cursor-pointer self-center">{btnText}</button></Link>
            )}
        </div>
    );
}