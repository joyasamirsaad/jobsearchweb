import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
    iconClass?: string;
    location?: string;
    time?:string;
    applyLink?: string;
    imageSrc?: string;
    disableHover?: boolean; 
};

export default function Card ({title, description, iconClass, location, time, applyLink, imageSrc, disableHover = false }: CardProps){
    return (
        <div className={`group rounded-xl p-6 flex flex-col text-left justify-between h-full min-h-[270px] transition-colors duration-300 gap-6 ${disableHover ? 'bg-white' : 'bg-white hover:bg-[#00CBA3]'}`}>
            {imageSrc ? (<img src={imageSrc} alt="job logo" className="w-25 h-25 my-5 object-cover rounded-full"/>) : 
            (<i className={`${iconClass} text-5xl mb-4 text-[#00CBA3] group-hover:text-white transition-colors duration-300`}></i>)
            }

            {/*<i className={`${iconClass} text-5xl mb-4 text-[#00CBA3] group-hover:text-white transition-colors duration-300`}></i>*/}
            <h3 className={`text-lg sm:text-xl font-bold mb-1 ${disableHover ? 'text-black' : 'text-black group-hover:text-white'} transition-colors duration-300`}>
                {title}
            </h3>
            <p className={`text-sm mb-3 ${disableHover ? 'text-gray-500' : 'text-gray-500 group-hover:text-white'} transition-colors duration-300`}>
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
                <Link href={applyLink}><button className={`text-sm font-semibold bg-transparent cursor-pointer transition-colors duration-300 ${disableHover ? 'text-[#00CBA3]' : 'text-[#00CBA3] group-hover:text-white'}`}>Apply Now</button></Link>
                <i className={`fa-solid fa-chevron-right text-sm align-middle transition-colors duration-300 ${disableHover ? 'text-[#00CBA3]' : 'text-[#00CBA3] group-hover:text-white'}`}></i>
            </div>
            )}

        </div>
    );
}