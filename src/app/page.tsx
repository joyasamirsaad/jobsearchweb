//import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#FBFBFB]">
            <div className="container mx-auto px-4 md:px-20 flex flex-col bg-[#FBFBFB]">
                <h1 className="mt-20">How it works</h1>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="order-1 md:order-1 flex flex-col md:max-w-[60%]">
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end order-3 md:order-2 mt-4 md:mt-0">
                        <button className="text-[#00CBA3] px-6 py-2 text-sm font-semibold bg-transparent border-2 border-[#00CBA3] rounded-md cursor-pointer self-center">Learn More</button>
                    </div>
                </div>
                <div className="order-2 md:order-3 mt-4">
                    <p>Cards</p>
                </div>
            </div>
        </div>
        
    );
}
