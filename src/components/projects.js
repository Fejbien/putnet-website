import React from "react";
import projectsData from "../data/projects.js";

function Projects() {
    let projects = Object.keys(projectsData).map((key, index) => {
        return (
            <ProjectCard
                key={index}
                title={key}
                description={projectsData[key].description}
                linksData={projectsData[key].links}
                image={projectsData[key].image}
            />
        );
    });

    return (
        <div className="flex w-full justify-center relative">
            <div id="projects" className="absolute -top-20"></div>
            <div className="flex w-[60%] flex-col rounded-2xl p-2 md:w-full">
                <h1 className="text-4xl text-center text-slate-100 font-bold mb-2">
                    Nasze projekty
                </h1>
                <div className="mt-4 flex w-full bg-slate-100 border border-slate-100 rounded-3xl justify-evenly flex-wrap">
                    {projects}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ title, description, linksData, image }) {
    if (!linksData) linksData = {};
    let links = Object.keys(linksData).map((key, index) => {
        return (
            <a
                key={index}
                href={linksData[key]}
                className="underline text-lg font-bold hover:text-orange-100"
            >
                {key}
            </a>
        );
    });

    return (
        <div
            className="flex flex-row p-6 bg-slate-800 m-2 text-slate-100 border rounded-3xl w-full
        md:flex-col"
        >
            <div className="flex flex-col w-4/5 overflow-hidden md:w-full md:mb-4">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="mt-2 md:pb-2 ">{description}</p>
                {linksData && <div className="flex w-full gap-4">{links}</div>}
            </div>
            <div className="flex justify-center h-fit md:h-fit md:justify-start">
                <img
                    src={image}
                    alt={title + " logo"}
                    className="max-h-[300px] min-h-[150px] 
                                md:max-h-[150px] md:min-h-[75px]"
                ></img>
            </div>
        </div>
    );
}

export default Projects;
