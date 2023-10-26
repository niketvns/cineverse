import React from 'react';
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({title, imageUrl}) => {
    return (
        <>
            <main className={`bg-gradient-to-br from-cyan-500 to-blue-500 min-h-[80vh] flex justify-center items-center py-10 relative`}>
                <div className="hero-section lg:max-w-[80%] flex flex-col-reverse md:flex-row justify-between px-4 lg:px-12 gap-8 md:gap-5 flex-1 items-center z-10">
                    <div className="details flex flex-col gap-2 md:gap-8 max-w-[500px]">
                        <h1 className={`text-2xl md:text-5xl font-bold`}>{title}</h1>
                        <p>From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.</p>
                        <Link href='/movie' className={'w-fit'}>
                            <button className={'bg-black text-sm lg:text-lg px-4 py-2 rounded-full text-white border-2 hover:border-2 border-black hover:text-black hover:bg-transparent transition duration-150'}>Explore Movies</button>
                        </Link>
                    </div>
                    <div className="image min-w-[400px]">
                        <Image src={imageUrl} alt='watch movie' width={400} height={400}/>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1689012535">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </main>
        </>
    );
};

export default HeroSection;