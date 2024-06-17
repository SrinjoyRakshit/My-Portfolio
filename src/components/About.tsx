"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const words = `A passionate Mern Stack developer with a strong background in building dynamic and responsive web applications. My journey in the world of web development began with a curiosity for how websites work, and it quickly grew into a career that I deeply enjoy.
`;

export default function TextGenerateEffectDemo() {
    return (
        <div className="py-10" id="about">
        <div className="text-center mt-5 mb-5">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">About Me</h2>
                <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-yellow-500 sm:text-4xl">About Myself</p>
        </div>
        <div className="px-10 pt-32 bg-black mb-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1 lg:order-1 shadow-2xl ">
            <Image 
            src="/images/hero.jpg"
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-3"  
            alt="dev"
            width={500}
            height={500}
            />
        </div>
        <div className="order-2 lg:order-2  flex flex-col justify-center lg:items-start text-center sm:text-left ">
            <p className="mt-2 text-3xl md:text-5xl sm:text-sm text-white">Hi There</p>
            <h3 className="text-3xl font-normal md:text-7xl  text-white mt-4">I am <br />
                <span className="text-orange-400">Srinjoy Rakshit</span>
                <TextGenerateEffect words={words} />
            </h3>
            </div>
        </div>
        </div>
        </div>
    )
}
