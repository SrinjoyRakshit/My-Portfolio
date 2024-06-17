"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Frontend Developer Intern",
    description:
      "I worked as  a frontend developer intern for 2 months in Octanet Services where I made two projects. One is a basic landing page using raw Html and CSS and another is a To-Do list app with the help of React.js and Tailwind CSS.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Octanet Services Pvt Ltd.
      </div>
    ),
  },
  {
    title: "Mern Stack Developer Intern",
    description:
      "I worked as a Mern stack web developer intern during the Summer Internship in Celebal Technologies where I made a lot of projects like Spotify Clone, Admin Dashboard and many more. The main project what I made is a Full stack Quora Clone.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
        Celebal Technologies
      </div>
    ),
  }
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
        <div className="text-center mt-5 mb-10">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Experience</h2>
                <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-orange-600 sm:text-4xl">My Work Experiences</p>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
