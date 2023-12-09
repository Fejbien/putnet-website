import PUTNETLogo from "../media/pureLogo.svg";

/*
Dodawanie projektu:
    "Nazwa projektu": {
        description: "Opis projektu",
        links: { 
            "Nazwa linku": "https://adres/",
            "Nazwa linku 2": "https://adres2/",
            ...
        },
        image: logo,
    },

    klucz "Nazwa projektu" jest wymagane
    pole "description" jest wymagane
    pole "links" jest opcjonalne, sklada sie z mapy, gdzie klucz to nazwa linku, a wartosc to adres
    pole "image" przyjmuje zainportowany obrazek (najlepiej w formacie .svg aspect ratio 1:1)
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
    },
    TimeTracko: {
        description: "Aplikacja do śledzenia czasu pracy",
        image: ":D",
    },
};

export default projectsData;
