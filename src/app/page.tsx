//import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-20 flex flex-col bg-[#FAFAFA]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between  mt-20">
                <div className="order-2 md:order-1 flex flex-col">
                    <h1>How it works</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                </div>
                <div className="order-3 md:order-2 mt-4 md:mt-0">
                    <button>Learn More</button>
                </div>
            </div>
            <div className="order-1 md:order-3 mt-4">
                Cards
            </div>
        </div>
        </div>
        
    );
}
