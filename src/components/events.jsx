import React from "react";

import eventLogo from "../media/eventLogo.png";

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
                        Zapraszamy do naszego wyjątkowego wydarzenia PUT.NET
                        Software Engineering Talks, które odbędzie się już 24
                        kwietnia o godzinie 17:20 w sali 8 w budynku Centrum
                        Wykładowego Politechinki Poznańskiej! Przygotuj się na
                        fascynujące prezentacje firm takich jak Allegro, Sii,
                        Microsoft, Deltologic, Sea oraz organizacji JUG Poznań,
                        które podzielą się swoją wiedzą na temat najnowszych
                        technologii i wyzwań w świecie IT. To doskonała okazja,
                        by poszerzyć swoją wiedzę, zdobyć inspirację oraz
                        nawiązać cenne kontakty branżowe. A jeśli to jeszcze nie
                        wystarczy, czeka na Ciebie także przepyszna pizza! Nie
                        przegap tej wyjątkowej okazji
                    </p>

                    <div
                        className="flex flex-row justify-center items-center mt-4 
                        md:flex-col"
                    >
                        <a
                            href="https://forms.gle/dpBnQPk9sxEJSR166"
                            target="_blank"
                            rel="noreferrer"
                            className="z-21 h-full flex items-center mt-6 pl-4 pr-4 rounded-lg text-2xl border-2 border-slate-100 m-2 bg-slate-950
                                transition hover:bg-red-800 justify-center
                                md:w-[90%] md:text-center md:pt-1 md:pb-1 md:text-lg"
                        >
                            <span className="text-slate-100 uppercase text-m tracking-widest leading-normal font-normal text-center antialiased md:text-3xl">
                                Zarejestruj się już teraz!
                            </span>
                        </a>
                        <a
                            href="/event"
                            target="_self"
                            rel="noreferrer"
                            className="z-21 h-full flex items-center mt-6 pl-4 pr-4 rounded-lg text-2xl border-2 border-slate-100 m-2 bg-slate-950
                                transition hover:bg-red-800 justify-center
                                md:w-[90%] md:text-center md:pt-1 md:pb-1 md:text-lg"
                        >
                            <span className="text-slate-100 uppercase text-m tracking-widest leading-normal font-normal text-center antialiased md:text-3xl">
                                Dowiedz się więcej!
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
