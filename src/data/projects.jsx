import PUTNETLogo from "../assets/pureLogo.svg";
import AtariMuzeumLogo from "../assets/atariMuzeumLogo.svg";

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
    "Katalog eksponatów Muzeum Atari": {
        description:
            "System katalogowania eksponatów dla Muzeum Atari w Poznaniu",
        image: AtariMuzeumLogo,
        underConstruction: true,
        links: {
            Strona: "https://atarimuzeum.pl/",
            GitHub: "https://github.com/Fejbien/atari-museum",
        },
    },
    "Studencki USOS": {
        description: "Studencki USOS dla Politechniki Poznańskiej",
        underConstruction: true,
    },
    "eMapa Politechniki Poznańskiej": {
        description: "Mapa Politechniki Poznańskiej",
        underConstruction: true,
    },

    "Europejska Karta Studenta": {
        description: "Europejska Karta Studenta",
        underConstruction: true,
    },
};

export default projectsData;
