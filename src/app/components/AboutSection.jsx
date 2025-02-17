"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-base sm:text-lg">
        <li>Python</li>
        <li>Java</li>
        <li>PHP</li>
        <li>Spark</li>
        <li>Apex</li>
        <li>SOQL</li>
        <li>React.js</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Neo4j</li>
        <li>Cassandra</li>
        <li>HADOOP</li>
        <li>Hive</li>
        <li>Flume</li>
        <li>Kafka</li>
        <li>HTML, CSS, JS</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul>
        <li>Higher degree in dual web application development.</li>
        <li>
          Official specialization course of the Community of Madrid in Big Data
        </li>
      </ul>
    ),
  },
  {
    title: "experiencie",
    id: "experiencie",
    content: (
      <ul>
        <li id="About">1 year in salesforce development at Accenture:</li>
        <li>
          I have 1 year of experience as a Salesforce developer at Accenture,
          where I designed, developed, and implemented customized solutions on
          the Salesforce platform. I worked with technologies such as Apex,
          Lightning Web Components (LWC), SOQL, SOSL, and Triggers, optimizing
          process automation and improving CRM system efficiency.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a web developer with two degrees in Web Application Development
            and Big Data with 1 year of experiencie in Salesforce. I enjoy
            designing and building functional, user-friendly applications that
            provide real value. Beyond technical skills, I bring strong
            problem-solving abilities, adaptability, and teamwork to every
            project. I have a keen eye for detail, a passion for continuous
            learning, and a results-driven mindset. My ability to analyze
            requirements, improve processes, and develop efficient solutions
            makes me a valuable asset to any development team. I'm always eager
            to take on new challenges and collaborate on exciting projects.
            Let's create something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiencie")}
              active={tab === "experiencie"}
            >
              {" "}
              Experiencie{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
