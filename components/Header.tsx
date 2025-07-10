"use client";
import Link from 'next/link';
import { useEffect } from "react";
//import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const normalizePath = (path: string) => path.replace(/\/$/, "");
    const isActive = (href: string) => normalizePath(pathname) === normalizePath(href);

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
        const navMenu = document.querySelector('.navbar ul') as HTMLElement | null;
        const overlay = document.getElementById('menu-overlay');

        if (!hamburger || !navMenu) return;

        const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay?.classList.toggle('active');
        overlay?.classList.remove('active');
        };

        const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        };

        // Toggle mobile menu on hamburger click
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking on any navbar link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
        });

        // Close menu when clicking outside hamburger and nav menu
        const handleClickOutside = (e: MouseEvent) => {
        if (!hamburger.contains(e.target as Node) && !navMenu.contains(e.target as Node)) {
            closeMenu();
        }
        };
        document.addEventListener('click', handleClickOutside);

        // Cleanup event listeners on unmount
        return () => {
        hamburger.removeEventListener('click', toggleMenu);
        navLinks.forEach(link => {
            link.removeEventListener('click', closeMenu);
        });
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);


return (
    <div className="bg-gradient-md">   
    {/*<div className="bg-gradient-to-r" style={{ backgroundImage: "linear-gradient(to right, #f5f5f5 0%, #f5f5f5 60%, #00cba3 60%, #00cba3 100%)",}}>*/}
    {/*for filling the right and left bg with the appropriate colors*/}
        <header className="container mx-auto px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-x-20 bg-[#F5F5F5] min-h-150">
                {/*<header id="home" className="sticky top-0 z-50 bg-white shadow-md"></header>*/}
                <div className="flex flex-col col-span-1 md:col-span-3 flex-1 min-h-150 md:h-full">{/*navbar and below*/}
                        <div className="flex flex-row items-center mt-5"> {/*navbar*/}
                            <img className="logo" src="/logo.png" alt="job search logo"></img>
                            <nav className="navbar">
                                <div className="w-fit ml-auto">
                                    <div className="hamburger ml-auto">
                                        <span></span>
                                        <span className="!w-5"></span>
                                        <span></span>
                                    </div>

                                    <ul>
                                        <li><Link href="/" className={isActive("/") ? "active-link" : ""}>Home</Link></li>
                                        <li><Link href="/job" className={isActive("/job") ? "active-link" : ""}>Job</Link></li>
                                        <li><Link href="/about" className={isActive("/about") ? "active-link" : ""}>About Us</Link></li>
                                        <li><Link href="/contact" className={isActive("/contact") ? "active-link" : ""}>Contact</Link></li>
                                        <li className="flex flex-col gap-2 mt-4 md:hidden">
                                            <button className="text-black px-3 py-1 text-sm text-left cursor-pointer font-semibold hover:text-[#00CBA3] transition-colors duration-300 ease-in-out">Sign in</button>
                                            <button className="text-black px-3 py-1 text-sm rounded text-left cursor-pointer font-semibold hover:text-[#00CBA3] transition-colors duration-300 ease-in-out"><i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>Create Account</button>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                        <div className="flex flex-col my-auto">{/*below navbar*/}
                            <h1>Search, Find, & Apply</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                            <div className="grid md:grid-cols-[1fr_auto] bg-white rounded-xl">
                                <div className="grid grid-cols-[1fr_1fr] gap-1"> {/*search fields*/}
                                    <div className="flex items-center w-full">
                                        <i className="fa-solid fa-magnifying-glass inputform text-black text-xs md:text-base ml-2 !mr-0 !rounded-r-none"></i>
                                        <input type="text" placeholder="Job title or keyword" className="inputform w-full text-xs md:text-base !ml-0 !rounded-l-none"/>
                                    </div>
                                    <div className="flex items-center w-full">
                                        <i className="fa-solid fa-location-dot inputform text-black text-xs md:text-base !mr-0 !rounded-r-none"></i>
                                        <input type="text" placeholder="Location" className="inputform w-full text-xs md:text-base !ml-0 !rounded-l-none" list="options"/>
                                    </div>
                                    <datalist id="options">
                                        <option value="Beirut" />
                                        <option value="Zahle" />
                                        <option value="Koura" />
                                    </datalist>
                                </div>
                                <div className="flex self-center justify-center md:justify-end mb-2 md:mb-0">
                                    <button className="flex-shrink-0 px-4 mx-2 h-10 bg-[#00CBA3] text-white border-none cursor-pointer rounded">Search</button>
                                </div>
                            </div>
                        </div>
                </div>
                    
            
                <div className="flex flex-col col-span-1 md:col-span-2 bg-[#00CBA3] md:rounded-bl-[4rem] flex-1 min-h-150 md:h-full p-4">
                    <div className="invisible md:visible md:flex justify-end gap-2 mt-5">
                        <button className="text-white px-3 py-1 text-sm cursor-pointer hover:text-black transition-colors duration-300 ease-in-out">Sign in</button>
                        <button className="bg-white text-black px-3 py-1 text-sm rounded flex-shrink-0 cursor-pointer hover:text-[#00CBA3] transition-colors duration-300 ease-in-out"><i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>Create Account</button>
                    </div>

                    <div className="relative text-white w-full min-h-150">
                        <div className="absolute top-[10%] left-[15%] w-20 h-20 bg-white rounded-md -rotate-12 flex justify-center items-center"><i className="fa-solid fa-handshake-angle text-5xl" style={{color: "#00cba3",}}></i></div>
                        <div className="absolute top-[30%] right-[15%] w-20 h-20 bg-white rounded-md rotate-18 flex justify-center items-center"><i className="fa-solid fa-square-poll-vertical text-5xl" style={{color: "#00cba3",}}></i></div>
                        <div className="absolute top-[70%] left-[10%] w-20 h-20 bg-white rounded-md -rotate-15 flex justify-center items-center"><i className="fa-solid fa-shield-halved text-5xl" style={{color: "#00cba3",}}></i></div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    
        
        
);
}