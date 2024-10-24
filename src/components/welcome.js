import React, { useEffect, useState } from "react";
import codingVideo from "../media/coding.mp4";
import titleLogo from "../media/titledLogo.svg";

import urls from "../data/urls.js";

function Welcome() {
    const [videoHeight, setVideoHeight] = useState(window.innerHeight);
    useEffect(() => {
        function handleResize() {
            setVideoHeight(window.innerHeight);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className=" w-full top-0 left-0" style={{ height: videoHeight }}>
            <video
                autoPlay
                muted
                loop
                id="codingVideo"
                className="bg-cover w-full z-10 overflow-hidden absolute top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2 object-cover"
                style={{ height: videoHeight }}
            >
                <source src={codingVideo} type="video/mp4" />
            </video>
            <div className="flex w-full h-full justify-center items-center">
                <div className="flex w-[40%] h-[40%] justify-center items-center flex-col md:w-[70%] md:h-[70%]">
                    <img
                        src={titleLogo}
                        alt="Title Logo"
                        className="z-20 w-auto h-auto max-w-full max-h-full md:w-[80%]  object-contain"
                        loading="lazy"
                    />
                    <h1 className="z-20 text-slate-100 font-extrabold text-4xl text-center pt-2 md:text-[1.8rem] md:my-4">
                        Koło naukowe Politechniki Poznańskiej
                    </h1>
                    <div className="flex justify-center items-center mt-8 md:flex-col w-[90dvw] md:mt-2">
                        <WelcomeButton
                            href={urls.fbURL}
                            text="Nasz Facebook"
                            target="_blank"
                        />
                        {/* <WelcomeButton
                            href="/event"
                            text="Aktualne wydarzenie!"
                        /> */}
                        <WelcomeButton
                            href={urls.registerURL}
                            text="Dołącz do nas!"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function WelcomeButton({ href, text, target }) {
    return (
        <a
            href={href}
            target={target}
            className="z-20 h-full flex items-center pl-4 pr-4 rounded-lg text-2xl border-2 border-slate-100 m-2 bg-slate-950
            transition hover:bg-red-800 text-center justify-center
            md:w-[90%] md:text-center md:pt-1 md:pb-1 md:text-lg"
        >
            <span className="text-slate-100 uppercase text-m tracking-widest leading-normal font-bold antialiased md:text-2xl">
                {text}
            </span>
        </a>
    );
}

export default Welcome;
