"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PetshelterPHP",
    description:
      "PetShelter is a web application developed with PHP that enables users to adopt animals. It features a user registration and login system stored in SQL. Regular users can browse and request adoptions, while administrators have the ability to accept or reject adoption requests. The platform also includes additional functionalities to enhance the adoption process.",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidGutDesarrollador/petshelterPHP.git",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "MRConverter",
    description:
      "MRConverter is a web application built with Python and Django that allows users to convert YouTube videos into MP3 or MP4 formats. Users can select their preferred bitrate (kbps) and resolution for optimal quality. Additionally, the platform supports downloading entire playlists instead of individual videos, making it a powerful tool for media conversion.",
    imgUrl: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/davidGutDesarrollador/DonConvertidor",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "NFL Statistics",
    description:
      "NFL Statistics is a Big Data project that analyzes the performance of NFL teams and players. The project uses data from the NFL API to generate insights and statistics on player performance, team rankings, and game outcomes. The data is processed using Nifi, Hive and Python and stored in HADOOP for easy access and analysis.",
    imgUrl: "/images/projects/3.png",
    tag: ["All", "Big Data"],
    gitUrl: "https://github.com/davidGutDesarrollador/NFL_Statistics/tree/main",
    previewUrl: "https://github.com/davidGutDesarrollador/NFL_Statistics/blob/main/TRABAJO%20FINAL%20DAVID%20GUTIERREZ%20(2).pdf",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <h2
        id="projects"
        className="text-center text-4xl font-bold text-white mt-4 mb-8"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Big Data"
          isSelected={tag === "Big Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
