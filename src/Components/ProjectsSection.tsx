"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Land Verification Website",
    description:
      "A land verification website for verifying land ownership in Nigeria",
    image: "/images/NaijaVerify.png",
    tag: ["All", "Web",],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "WeatherChecker Website",
    description: "A weather checking website for getting weather updates",
    image: "/images/WeatherChecker.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Banking Application",
    description: "A banking application for managing finances",
    image: "/images/BankApp.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Website",
    description: "A website for ordering food",
    image: "/images/Foodie.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bank Website",
    description: "A website for managing bank transactions",
    image: "/images/BankWebsite.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Football pitch clone",
    description:
      "A web application for arranging and managing football pitches",
    image: "/images/Football.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className="text-center">
      <h2 className="text-7xl mb-10 mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600 font-extrabold ">
        MY PROJECTS
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
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;