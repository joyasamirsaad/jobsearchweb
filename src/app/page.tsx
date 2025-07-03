//import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="order-2 md:order-1 flex flex-col">
                    <h1>How it works</h1>
                    <p>Lorem ipsum</p>
                </div>
                <div className="order-3 md:order-2 mt-4 md:mt-0">
                    <button>Learn More</button>
                </div>
            </div>
            <div className="order-1 md:order-3 mt-4">
                Cards
            </div>
        </div>
    );
}
