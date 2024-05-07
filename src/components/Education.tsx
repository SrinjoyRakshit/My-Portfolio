"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "My College",
    description:
      "I am a dedicated and innovative frontend developer who honed my skills at my college. My education provided me with a strong foundation in computer science principles and web development best practices. During my time at my college, I excelled in courses related to web technologies, user interface design, and software engineering",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Abacus Institute of Engg. and Mang.
      </div>
    ),
  },
  {
    title: "My School",
    description:
      "I have completed my study upto class 12 at Haripal Gurudayal Institution. Here I learned the basics of computer and a little amount of Computer programming. Also I learned the fundamentals of maths and other subjects that made me proficient in learning.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
        Haripal Gurudayal Institution
      </div>
    ),
  },
  {
    title: "My Pre School",
    description:
      "I have started my learning journey from here",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Ananda Marga Primary School
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
        <div className="text-center mt-5 mb-10">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">My Education</h2>
                <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-orange-600 sm:text-4xl">My learning so far</p>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
