import PUTNETLogo from "../media/pureLogo.svg";
import UsosPUTLogo from "../media/usosPutLogo.png";

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
    "Studencki USOS": {
        description:
            "Odpowiednik Mobilnego USOS'a, od studentów dla studentów. Pomijając funkcje typowe dla USOSa w trakcie planowania/realizacji są również 2 moduły, których nie ma w Mobilnym USOSie, czyli mapa PP oraz Europejska Karta Studenta. ",
        links: {
            "Sklep play":
                "https://play.google.com/store/apps/details?id=com.ovrbtn.studencki_usos_put&hl=en-US&ah=N9G1_6Ubnv2BbZvApa0rgIKnu5Y",
        },
        image: UsosPUTLogo,
        underConstruction: true,
    },
    "Katalog eksponatów Muzeum Atari": {
        description:
            "System katalogowania eksponatów dla Muzeum Atari w Poznaniu",
        underConstruction: true,
        links: {
            Strona: "https://atarimuzeum.pl/",
        },
    },
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
};

export default projectsData;
