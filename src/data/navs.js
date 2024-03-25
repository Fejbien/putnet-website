import urls from "./urls";

const navs = {
    home: { link: "#", target: "_self" },
    "o nas": { link: "#aboutUs", target: "_self" },
    kontakt: { link: "#contact", target: "_self" },
    projekty: { link: "#projects", target: "_self" },
    faq: { link: "#faq", target: "_self" },
    "dołącz do nas": {
        link: urls.registerURL,
        target: "_blank",
    },
};

export default navs;
