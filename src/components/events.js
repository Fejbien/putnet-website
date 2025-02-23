import React from "react";

import eventLogo from "../media/eventLogo.png";
import urls from "../data/urls";

function Events() {
    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="events" className="absolute -top-20"></div>

            <div className="flex flex-row-reverse w-[70%] gap-10 md:w-full md:flex-col">
                <div className="flex flex-col w-1/2 md:w-full items-center justify-center">
                    <h1 className="text-slate-100 text-4xl text-center">
                        PUT.NET Software Engineering Talks
                    </h1>
                    <p className="text-slate-100 text-lg text-center pt-4 md:px-2">
                        Zapraszmy ble ble opis tez by trzeba
                    </p>
                    <div className="flex flex-col justify-center items-center mt-4 ">
                        <a
                            href={urls.eventImagesURL2024}
                            target="_blank"
                            rel="noreferrer"
                            className="z-21 h-full w-full flex items-center px-4 py-2 rounded-lg text-2xl border-2 border-slate-100 m-2 bg-slate-950
                                transition hover:bg-red-800 justify-center
                                md:w-[90%] md:text-center md:pt-1 md:pb-1 md:text-lg"
                        >
                            <span className="text-slate-100 uppercase text-lg tracking-widest leading-normal font-normal text-center antialiased md:text-xl">
                                Aktualne wydarzenie!
                            </span>
                        </a>
                    </div>
                    <p className="text-slate-100 text-lg text-center pt-4 md:px-2">
                        A w czasie czekania mozecie zobaczyc zdjecia z
                        poprzedniego wydarzenia ble ble no tutaj opis trzeba
                    </p>
                    <div className="flex flex-col justify-center items-center mt-4 ">
                        <a
                            href={urls.eventImagesURL2024}
                            target="_blank"
                            rel="noreferrer"
                            className="z-21 h-full w-full flex items-center px-4 py-2 rounded-lg text-2xl border-2 border-slate-100 m-2 bg-slate-950
                                transition hover:bg-red-800 justify-center
                                md:w-[90%] md:text-center md:pt-1 md:pb-1 md:text-lg"
                        >
                            <span className="text-slate-100 uppercase text-lg tracking-widest leading-normal font-normal text-center antialiased md:text-xl">
                                Zobacz zdjęcia z minionego wydarzenia!
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center md:w-full">
                    <div className="h-fit md:pr-5 md:pl-5">
                        <img
                            src={eventLogo}
                            alt="Logo wydarzenia PUT.NET Software Engineering Talks"
                            className="h-auto w-auto rounded-lg border-2 border-white"
                            loading="lazy"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
