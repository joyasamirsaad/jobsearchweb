//import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#FBFBFB]">
    <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="mt-20 col-span-1 md:col-span-2">How it works</h1>
        <div className="order-1 md:order-1 flex flex-col">
            <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
        </div>
        <div className="order-2 md:order-3 col-span-1 md:col-span-2">
            <p>Cards</p>
        </div>
        <div className="flex items-center justify-center md:justify-end order-3 md:order-2 md:col-start-2 md:row-start-2">
            <button className="text-[#00CBA3] px-6 py-2 text-sm font-semibold bg-transparent border-2 border-[#00CBA3] rounded-md cursor-pointer self-center">Learn More</button>
        </div>
        
    </div>
</div>
        
    );
}
