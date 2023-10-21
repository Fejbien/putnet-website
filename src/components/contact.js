import React from "react";

import fbIcon from "../media/facebookIcon.svg";
import mailIcon from "../media/mailIcon.svg";
import pinIcon from "../media/pinIcon.svg";

function Contact() {
    const fbURL = "https://www.facebook.com/put.net/";
    const mailURL = "mailto:przykladowy@email.com";
    const addressURL =
        "https://www.google.com/maps/place/Politechnika+Poznańska,+Kampus+Piotrowo,+Piotrowo+2,+60-965+Poznań/@52.4037202,16.9481836,18z/data=!3m1!4b1!4m6!3m5!1s0x47045b13735ceb35:0x9804598c2b48cc91!8m2!3d52.403719!4d16.9490959!16s%2Fg%2F11gzzgvm9";
    const mapURL =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.1631663339854!2d16.946907215803165!3d52.40371897979235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b13735ceb35%3A0x9804598c2b48cc91!2sPiotrowo%202%2C%2060-965%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1569964957035!5m2!1spl!2spl";

    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="contact" className="absolute -top-20"></div>

            <div className="flex flex-row w-[70%] gap-10 md:w-full md:flex-col-reverse">
                <div className="flex flex-col w-1/2 min-h-[200px] md:w-full">
                    <iframe
                        id="PUTMap"
                        src={mapURL}
                        title="PUTMap"
                        allowFullScreen
                        className="w-full h-full min-h-[200px]"
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
                        ></img>
                        <LinkText>
                            <a
                                href={addressURL}
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
                        ></img>
                        <LinkText>
                            <a href={mailURL}>Email: tutaj email jakis</a>
                        </LinkText>
                    </IconAndTextHolder>
                    <IconAndTextHolder>
                        <img
                            src={fbIcon}
                            alt="mail icon"
                            className="mr-4"
                        ></img>
                        <LinkText>
                            <a href={fbURL}>
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
    <div className="flex flex-row items-center md:justify-start mt-6 md:mt-0">
        {props.children}
    </div>
);

const LinkText = (props) => (
    <p className="text-slate-100 font-medium text-2xl hover:text-orange-100 transition hover:underline md:text-center">
        {props.children}
    </p>
);

export default Contact;
