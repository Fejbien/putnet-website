import React from "react";

import fbIcon from "../media/facebookIcon.svg";
import mailIcon from "../media/mailIcon.svg";
import pinIcon from "../media/pinIcon.svg";

import urls from "../data/urls.js";

function Contact() {
    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="contact" className="absolute -top-20"></div>

            <div className="flex flex-row w-[70%] gap-10 md:w-full md:flex-col-reverse">
                <div className="flex flex-col w-1/2 min-h-[200px] md:w-full">
                    <iframe
                        id="PUTMap"
                        src={urls["mapURL"]}
                        title="PUTMap"
                        allowFullScreen
                        className="w-full h-full min-h-[200px]"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="w-1/2 flex-col items-center md:w-full">
                    <h1 className="text-slate-100 text-4xl text-left md:text-center">
                        Kontakt:
                    </h1>
                    <IconAndTextHolder>
                        <img
                            src={pinIcon}
                            alt="pin icon"
                            className="mr-4"
                            loading="lazy"
                        ></img>
                        <LinkText>
                            <a
                                href={urls["addressURL"]}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Adres: ul. Piotrowo 2, 60-965 Poznań
                            </a>
                        </LinkText>
                    </IconAndTextHolder>
                    <IconAndTextHolder>
                        <img
                            src={mailIcon}
                            alt="mail icon"
                            className="mr-4"
                            loading="lazy"
                        ></img>
                        <LinkText>
                            <a href={urls["mailURL"]}>
                                Email: przykladowy@gmail.com
                            </a>
                        </LinkText>
                    </IconAndTextHolder>
                    <IconAndTextHolder>
                        <img
                            src={fbIcon}
                            alt="mail icon"
                            className="mr-4"
                            loading="lazy"
                        ></img>
                        <LinkText>
                            <a href={urls["fbURL"]}>
                                Facebook: Grupa .NET Politechnika Poznańska
                            </a>
                        </LinkText>
                    </IconAndTextHolder>
                </div>
            </div>
        </div>
    );
}

const IconAndTextHolder = (props) => (
    <div className="flex flex-row items-center md:justify-start mt-6 md:mt-2 md:px-2">
        {props.children}
    </div>
);

const LinkText = (props) => (
    <p
        className="text-slate-100 font-medium text-2xl 
        hover:text-orange-100 transition hover:underline 
        md:text-center md:text-lg"
        style={{ "text-wrap": "balance" }}
    >
        {props.children}
    </p>
);

export default Contact;
