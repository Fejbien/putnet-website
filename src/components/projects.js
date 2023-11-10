import React from "react";

function Projects() {
    return (
        <div className="flex w-full justify-center relative">
            <div id="projects" className="absolute -top-20"></div>
            <div className="flex w-[60%] flex-col rounded-2xl p-2 md:w-full">
                <h1 className="text-4xl text-center text-slate-100 font-bold mb-2">
                    Nasze projekty
                </h1>
                <div className="mt-4 flex w-full bg-slate-100 border border-slate-100 rounded-3xl justify-evenly flex-wrap">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

function ProjectCard() {
    return (
        <div
            className="flex flex-row p-6 bg-slate-800 m-2 text-slate-100 border rounded-3xl
        md:flex-col"
        >
            <div className="flex flex-col w-fit overflow-hidden">
                <h1 className="text-4xl font-bold">Nazwa</h1>
                <p className="mt-2 mr-10 md:max-w-[25ch] md:text-ellipsis md:whitespace-nowrap md:overflow-hidden md:pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Maecenas volutpat blandit aliquam etiam erat velit
                    scelerisque in dictum. Cursus risus at ultrices mi tempus
                    imperdiet nulla malesuada pellentesque. Diam vel quam
                    elementum pulvinar etiam non quam lacus suspendisse. Gravida
                    arcu ac tortor dignissim. Velit scelerisque in dictum non
                    consectetur. Nulla facilisi etiam dignissim diam quis enim
                    lobortis scelerisque fermentum. Cursus sit amet dictum sit
                    amet justo. Vulputate ut pharetra sit amet aliquam id diam.
                    Viverra adipiscing at in tellus integer feugiat scelerisque.
                </p>
                <a
                    href="/"
                    className="text-white font-bold underline hover:text-red-900 md:pb-2"
                >
                    Zobacz wiecej
                </a>
            </div>
            <div className="flex ">
                <img src="https://placehold.co/600" alt="placeholder"></img>
            </div>
        </div>
    );
}

export default Projects;
