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
        underConstruction: true/false
    },

    - klucz "Nazwa projektu" jest wymagane
    - pole "description" jest wymagane
    - pole "links" jest opcjonalne, sklada sie z mapy, gdzie klucz to nazwa linku, a wartosc to adres
    - pole "image" jest opcjonalne, przyjmuje zainportowany obrazek (najlepiej w formacie .svg aspect ratio 1:1)
    - pole "underConstruction" jest wymagane, przyjmuje wartosc true/false, domyslnie false, 
        jesli true, to pod nazwa projektu wyswietli sie "W trakcie tworzenia! |Dolacz do nas na| <- jako link do discorda" 
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
