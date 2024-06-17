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
    title: "Express.js",
    description:
      "I excel in architecting robust server-side applications, leveraging Express.js to its fullest potential. From creating RESTful APIs that seamlessly integrate with various front-end frameworks to optimizing server performance, my proficiency in Express.js enables me to deliver scalable and efficient solutions.",
    link: "/",
  },
  {
    title: "Node.js",
    description:
      "My proficiency in Node.js enables me to develop efficient and scalable server-side applications that power dynamic web experiences. I have extensive experience working with Node.js ensuring seamless integration with frontend applications",
    link: "/",
  },
  {
    title: "MongoDb",
    description:
      "With a strong foundation in database design, I bring extensive expertise to any project requiring scalable and efficient data solutions. My proficiency in MongoDB spans from schema design and query optimization to replication and sharding strategies, allowing me to architect databases that meet stringent performance and scalability requirements.",
    link: "/",
  },
  {
    title: "MySQL",
    description:
      "With a deep understanding of relational database management systems and extensive experience in MySQL, I possess a robust skill set essential for developing and maintaining efficient database solutions. My expertise spans from designing normalized database schemas that ensure data integrity to optimizing complex queries for enhanced performance",
    link: "/",
  },
  {
    title: "Python",
    description:
      "My proficiency in Python is grounded in extensive experience and a deep understanding of the language's versatile capabilities. I excel in leveraging Python's simplicity and power to work in web development and Data Structures and Algorithm.",
    link: "/",
  },
];
