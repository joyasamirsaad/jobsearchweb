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
        
        <div className="flex flex-col md:flex-row bg-[#F5F5F5]"> 
            {/*<header id="home" className="sticky top-0 z-50 bg-white shadow-md"></header>*/}
                <div className="flex flex-col w-full md:w-[60%] min-h-100 md:min-h-150 container mx-auto">{/*navbar and below*/}
                    <div className="flex flex-row m-10"> {/*navbar*/}
                        <img className="logo" src="/logo.png" alt="job search logo"></img>
                        <nav className="navbar">
                            <div className="container mx-auto px-20">
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
                                </ul>
                            </div>

                        </nav>
                    </div>
                    <div className="flex flex-col my-auto container mx-auto px-20">{/*below navbar*/}
                        <h1>Search, Find, & Apply</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                        <div className="px-4 mt-5 mb-10 flex flex-row justify-between bg-white rounded-xl"> {/*search fields*/}
                            <input type="text" placeholder="Job title or keyword" className="inputform flex-grow min-w-0"></input>
                            <input list="options" placeholder="Location" className="inputform flex-grow min-w-0" />
                            <datalist id="options">
                                <option value="Beirut" />
                                <option value="Zahle" />
                                <option value="Koura" />
                            </datalist>
                            <button className="flex-shrink-0 p-4 m-2 my-4 h-12 bg-[#00CBA3] text-white border-none cursor-pointer rounded">Search</button>
                        </div>
                    </div>
                    
                </div>
                
        
            <div className="flex flex-col md:flex-col md:w-[40%] w-full bg-[#00CBA3] md:rounded-bl-[4rem] min-h-[280px] p-4">
                <div className="flex justify-end gap-2 mt-5 mb-4">
                    <button className="text-white px-3 py-1 text-sm">Sign in</button>
                    <button className="bg-white text-black px-3 py-1 text-sm rounded flex-shrink-0"><i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>Create Account</button>
                </div>

                <div className="text-white">
                    <p>logos</p>
                </div>
            </div>
        </div>
        
    );
}