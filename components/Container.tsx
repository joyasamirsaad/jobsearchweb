import Link from 'next/link';
import Image from 'next/image';

type ContainerProps = {
    title: string;
    description: string[];
    btnText?: string;
    btnLink?: string;
    imgSrc: string;
    imgAlt: string;
    imagePosition: "left" | "right";
}

export default function Container({title, description, btnText, btnLink, imgSrc, imgAlt, imagePosition}: ContainerProps) {
    return (
        <section className={`flex flex-col md:items-center my-30 gap-4 md:flex-row ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="md:min-w-100 w-full mr-10 flex-[1]">
                <Image src={imgSrc} alt={imgAlt} className="min-w-full min-h-full max-h-70 object-cover rounded-lg" width={300} height={400}></Image>
            </div>
            <div className="flex-[3] text-center md:text-left">
                <h1>{title}</h1>
                <p className="text-gray-500">{description.join(' ')}</p>
                {btnText && btnLink && (
                    <Link href={btnLink}><button className="text-[#00CBA3] px-6 py-2 text-sm font-semibold bg-transparent border-2 border-[#00CBA3] rounded-md cursor-pointer self-center">{btnText}</button></Link>
                )}
            </div>
        </section>
    );
}