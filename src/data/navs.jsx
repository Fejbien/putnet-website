import urls from "./urls";

/*
Adding a navigation item:
    "name": {
        link: "url",
        target: "_blank"
    }
    - the "name" field is required
    - the "link" field is required
    - the "target" field is requierd, it accepts a value of "_blank" or "_self"
*/

const navs = {
    home: { link: "/#", target: "_self" },
    "o nas": { link: "/#aboutUs", target: "_self" },
    wydarzenie: { link: "/event", target: "_self" },
    kontakt: { link: "/#contact", target: "_self" },
    projekty: { link: "/#projects", target: "_self" },
    faq: { link: "/#faq", target: "_self" },
    "dołącz do nas!": {
        link: urls.registerURL,
        target: "_blank",
    },
};

export default navs;
