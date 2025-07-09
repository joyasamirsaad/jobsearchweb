'use client';

import { useState } from 'react';
import { peopleFeedback } from '../data/peopleFeedback';

export default function Feedback() {
    const [index, setIndex] = useState(0);
    const person = peopleFeedback[index];

    const next = () => setIndex((index + 1) % peopleFeedback.length);
    const prev = () => setIndex((index - 1 + peopleFeedback.length) % peopleFeedback.length);

    return (
        <div className="container mx-auto px-4 md:px-20 pb-30 bg-[#FBFBFB] grid md:grid-cols-[3fr_2fr] gap-8 items-start text-center md:text-left">
            <div className="order-1 md:order-1"> {/*Text*/}
                <h1 className="text-2xl font-bold mb-4">People&apos;s Feedback about JobNow!</h1>
                <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.</p>
                <blockquote className="text-lg font-medium text-black mb-6">&quot;{person.feedback}&quot;</blockquote>

                <div className="hidden md:block"> {/* Name + Job + Arrows on desktop only */}
                    <div className="font-semibold text-black">{person.name}</div>
                    <p className="text-sm text-gray-500">{person.job}</p>
                    <div className="flex gap-4 mt-4">
                        <button onClick={prev} className="w-8 h-8 rounded-full bg-[#d3d3d3] flex items-center justify-center hover:bg-[#00CBA3] transition-colors duration-200" aria-label="Previous testimonial" title="Previous testimonial">
                            <i className="fas fa-arrow-left text-white text-sm"></i>
                        </button>

                        <button onClick={next} className="w-8 h-8 rounded-full bg-[#d3d3d3] flex items-center justify-center hover:bg-[#009e84] transition-colors duration-200" aria-label="Next testimonial" title="Next testimonial">
                            <i className="fas fa-arrow-right text-white text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="order-2 md:order-2 flex flex-col items-center md:items-end"> {/*Image*/}
                <img src={person.image} alt={person.name} className="w-[360px] h-[360px] md:w-[460px] md:h-[360px] object-cover rounded-xl mb-6"/>
                <div className="md:hidden flex flex-col items-center"> {/* Name + Job + Arrows on mobile only */}
                    <div className="font-semibold text-black">{person.name}</div>
                    <p className="text-sm text-gray-500">{person.job}</p>
                    <div className="flex gap-4 mt-4">
                        <button onClick={prev} className="w-8 h-8 rounded-full bg-[#d3d3d3] flex items-center justify-center" aria-label="Previous testimonial" title="Previous testimonial">
                            <i className="fas fa-arrow-left text-white text-sm"></i>
                        </button>
                        <button onClick={next} className="w-8 h-8 rounded-full bg-[#00CBA3] flex items-center justify-center" aria-label="Next testimonial" title="Next testimonial">
                            <i className="fas fa-arrow-right text-white text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
