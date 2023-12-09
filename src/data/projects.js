import PUTNETLogo from "../media/pureLogo.svg";

/*
Adding a project: 
    "Project Name": { 
        description: "Project description", 
        links: { 
            "Link Name": "https://address/", 
            "Link Name 2": "https://address2/",
            ..., 
        }, 
        image: logo, 
        underConstruction: true/false 
    },

    - the key "Project Name" is required
    - the "description" field is required
    - the "links" field is optional, it consists of a map where the key is the link name and the value is the address
    - the "image" field is optional, it accepts an imported image (preferably in .svg format with a 1:1 aspect ratio)
    - the "underConstruction" field is required, it accepts a value of true/false, set to false if nothing to be added to description, 
        if true, "Under construction! |Join etc...| <- as a link to Discord" will be added below description.
*/

const projectsData = {
    "PUT.NET": {
        description:
            "Strona internetowa koła naukowego PUT.NET Politechniki Poznańskiej",
        links: {
            Strona: "https://net.cs.put.poznan.pl",
            GitHub: "https://github.com/Fejbien/putnet-website",
        },
        image: PUTNETLogo,
        underConstruction: false,
    },
    TimeTracko: {
        description: "Aplikacja do śledzenia czasu pracy.",
        underConstruction: true,
    },
};

export default projectsData;
