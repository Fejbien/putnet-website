import React from "react";

import fbIcon from "../media/facebookIcon.svg";
import mailIcon from "../media/mailIcon.svg";
import pinIcon from "../media/pinIcon.svg";
import discordIcon from "../media/discordIcon.svg";

import urls from "../data/urls.jsx";

function Contact() {
    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="contact" className="absolute -top-20"></div>

            <div className="flex flex-row-reverse w-[70%] gap-10 md:w-full md:flex-col-reverse">
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
                        Kontakt
                    </h1>
                    <a
                        href={urls["addressURL"]}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkInsides
                            text="ul. Jana Pawła II 28, 61-139 Poznań"
                            icon={pinIcon}
                        />
                    </a>
                    <a href={urls["mailURL"]}>
                        <LinkInsides
                            text="mikolaj.diakowski@student.put.poznan.pl"
                            icon={mailIcon}
                        />
                    </a>
                    <a href={urls["fbURL"]}>
                        <LinkInsides
                            text="Grupa .NET Politechnika Poznańska"
                            icon={fbIcon}
                        />
                    </a>
                    <a href={urls["discordURL"]}>
                        <LinkInsides
                            text="Serwer discord PUT.NET"
                            icon={discordIcon}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

function LinkInsides({ text, icon }) {
    return (
        <IconAndTextHolder>
            <img src={icon} alt="icon" className="mr-4" loading="lazy"></img>
            <LinkText>{text}</LinkText>
        </IconAndTextHolder>
    );
}

const IconAndTextHolder = (props) => (
    <div className="flex flex-row items-center md:justify-start mt-6 md:mt-2 md:px-2 md:w-[90dvw]">
        {props.children}
    </div>
);

const LinkText = (props) => (
    <p
        className="text-slate-100 font-medium text-2xl object-contain break-words
        hover:text-orange-100 transition hover:underline text-ellipsis overflow-hidden
        md:text-center md:text-lg md:w-full md:pr-2 md:pl-2"
        style={{ textWrap: "balance" }}
    >
        {props.children}
    </p>
);

export default Contact;
