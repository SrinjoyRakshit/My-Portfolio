"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mt-5">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">My Skills</h2>
                <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl">My skills so far</p>
        </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HTML",
    description:
      "I possess a deep proficiency in HTML, leveraging its full potential to create clean, structured, and semantic code. I utilize the advanced features of HTML5 to build accessible and responsive web pages, ensuring an optimal user experience across all devices",
    link: "/",
  },
  {
    title: "CSS",
    description:
      "I excel in CSS, utilizing its capabilities to craft visually stunning, responsive, and accessible web interfaces. My expertise includes working with modern techniques such as Flexbox and Grid for efficient layout design",
    link: "/",
  },
  {
    title: "Javascript",
    description:
      "My expertise in JavaScript allows me to create dynamic, interactive web applications that engage users and deliver seamless experiences. I am skilled in working with modern JavaScript frameworks such as React and Next.js",
    link: "/",
  },
  {
    title: "React.js",
    description:
      "I am highly proficient in React.js, leveraging its component-based architecture to develop scalable and efficient web applications. My expertise includes working with hooks, context API, and state management libraries such as Redux to create dynamic and interactive user interfaces",
    link: "/",
  },
  {
    title: "Figma",
    description:
      "My proficiency in Figma allows me to create visually appealing designs for web and mobile applications. I use collaborative tools of Figma to work seamlessly with design and development teams, streamlining the design-to-development process",
    link: "/",
  },
  {
    title: "Node.js",
    description:
      "My proficiency in Node.js enables me to develop efficient and scalable server-side applications that power dynamic web experiences. I have extensive experience working with Node.js ensuring seamless integration with frontend applications",
    link: "/",
  },
];
