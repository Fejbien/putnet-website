import fbIcon from "../assets/facebookIcon.svg";
import mailIcon from "../assets/mailIcon.svg";
import pinIcon from "../assets/pinIcon.svg";
import discordIcon from "../assets/discordIcon.svg";

import urls from "../data/urls.jsx";

/*
Adding a contacts: 
    { 
        url: "https://address/", 
        text: "Contact description",
        icon: icon,
    },

    - the "url" field is required
    - the "text" field is required
    - the "icon" field is required, it accepts an imported image (preferably in .svg format with a 1:1 aspect ratio)
*/

const contacts = [
    {
        url: urls["addressURL"],
        text: "ul. Jana Pawła II 28, 61-139 Poznań",
        icon: pinIcon,
    },
    {
        url: urls["mailURL"],
        text: "mikolaj.diakowski@student.put.poznan.pl",
        icon: mailIcon,
    },
    {
        url: urls["fbURL"],
        text: "Grupa .NET Politechnika Poznańska",
        icon: fbIcon,
    },
    {
        url: urls["discordURL"],
        text: "Serwer discord PUT.NET",
        icon: discordIcon,
    },
];

export default contacts;
