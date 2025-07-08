import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
    iconClass?: string;
    location?: string;
    time?:string;
    applyLink?: string;
    imageSrc?: string;
};

export default function Card ({title, description, iconClass, location, time, applyLink, imageSrc }: CardProps){
    return (
        <div className="group bg-white rounded-xl p-6 flex flex-col text-left transition-colors duration-300 hover:bg-[#00CBA3]">
            {imageSrc ? (<img src={imageSrc} alt="job logo" className="w-25 h-25 my-5 object-cover rounded-full"/>) : 
            (<i className={`${iconClass} text-5xl mb-4 text-[#00CBA3] group-hover:text-white transition-colors duration-300`}></i>)
            }

            {/*<i className={`${iconClass} text-5xl mb-4 text-[#00CBA3] group-hover:text-white transition-colors duration-300`}></i>*/}
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-black group-hover:text-white transition-colors duration-300">
                {title}
            </h3>
            <p className="text-sm mb-3 text-gray-500 group-hover:text-white transition-colors duration-300">
                {description}
            </p>
            {location && time && (
                <div className="flex flex-row items-center gap-2 text-xs my-2">
                    <div className="flex items-center bg-[#F5F5F5] px-2 py-2 rounded-sm">
                    <i className="fa-solid fa-location-dot mr-1 align-middle"></i>
                    <span className="align-middle">{location}</span>
                    </div>
                    <div className="flex items-center bg-[#F5F5F5] px-2 py-2 rounded-sm">
                    <i className="fa-solid fa-suitcase mr-1 align-middle"></i>
                    <span className="align-middle">{time}</span>
                    </div>
                </div>
            )}

            {applyLink && (
            <div className="flex flex-row gap-2 items-center">
                <Link href={applyLink}><button className="text-[#00CBA3] group-hover:text-white transition-colors duration-300 text-sm font-semibold bg-transparent cursor-pointer">Apply Now</button></Link>
                <i className="fa-solid fa-chevron-right text-[#00CBA3] group-hover:text-white transition-colors duration-300 text-sm align-middle"></i>
            </div>
            )}

        </div>
    );
}