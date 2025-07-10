//import Image from "next/image";
import Card from '../../components/Card';
import CardsContainer from '../../components/CardsContainer';
import Container from '../../components/Container';
import Feedback from '../../components/Feedback';

export default function Home() {
    return (
        <div className="bg-[#FBFBFB]">
            <div className="container mx-auto px-4 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/*How it works*/}
                    <h1 className="mt-30 col-span-1 md:col-span-2">How it works</h1>
                    <div className="order-1 md:order-1 flex flex-col">
                        <p className="text-[#b6b6b6]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                    </div>
                    <div className="order-2 md:order-3 col-span-1 md:col-span-2">
                        <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-8">
                            <Card iconClass="fa-solid fa-arrow-right-to-bracket" title="Register" description="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien." />
                            <Card iconClass="fa-regular fa-file-lines" title="Create a Resume" description="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien." />
                            <Card iconClass="fa-solid fa-clipboard-list" title="Find job" description="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien." />
                            <Card iconClass="fa-solid fa-arrow-up-from-bracket" title="Apply job" description="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien." /> 
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end order-3 md:order-2 md:col-start-2 md:row-start-2">
                        <button className="text-[#00CBA3] px-6 py-2 text-sm font-semibold bg-transparent border-2 border-[#00CBA3] rounded-md cursor-pointer self-center hover:text-white hover:bg-[#00CBA3] transition-colors duration-300 ease-in-out">Learn More</button>
                    </div>  
                </div>

                <Container title="We will help you to become an employee in your dream company" description={[
                        "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                        "Sit amet consectetur adipiscing elit quisque faucibus ex.",
                        "Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
                    ]}
                    btnText="Learn More"
                    btnLink="#"
                    imgSrc="/grayimg.jpg"
                    imgAlt="gray image"
                    imagePosition="left"
                />
            </div>
            <div className="bg-[#EEF9F6]"> {/*Popular jobs*/}
                <CardsContainer containerTitle="Popular Job Categories" 
                    containerDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
                    btnText="View More"
                    btnLink="#"
                />
            </div>
            
            <CardsContainer containerTitle="Recently Added Jobs" 
                containerDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
                btnText="View More"
                btnLink="#"
            /> {/*Recently added jobs*/}

            <Feedback />

            <div className="relative z-10 flex justify-center"> {/*Register CV*/}
                <div className="bg-[#003a2c] text-white rounded-xl text-center w-full max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto -mb-35 shadow-lg">

                    <div className="w-[80%] mx-auto p-4 md:p-12">
                        <h1 className="text-2xl font-bold mb-2">Register your CV now!</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                        <button className="text-white px-6 py-2 text-sm font-semibold bg-transparent border-2 border-white rounded-md cursor-pointer hover:text-[#003a2c] hover:bg-white transition-colors duration-300 ease-in-out">Register Now</button>
                    </div>
                </div>
            </div>


        </div> 
        
    );
}
