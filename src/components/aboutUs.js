import React from "react";
import aboutUsImg from "../media/aboutUs.jpg";

function AboutUs() {
    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="aboutUs" className="absolute -top-20"></div>

            <div className="flex flex-row w-[70%] gap-10 md:w-full md:flex-col">
                <div className="flex flex-col w-1/2 md:w-full">
                    <h1 className="text-slate-100 text-4xl text-center">
                        O nas
                    </h1>
                    <p className="text-slate-100 text-lg text-center pt-4 md:px-2">
                        Grupa PUT.NET to studenckie Koło naukowe działające na
                        Wydziale Informatyki oraz Wydziale Elektrycznym
                        Politechniki Poznańskiej. Tworzą je osoby pasjonujące
                        się różnymi technologiami. Ponadto interesują nas też
                        inne zagadnienia powiązane z sektorem IT i najnowszymi
                        technologiami oraz przedsiębiorczością w start-up’ach.
                        Organizujemy otwarte prelekcje i warsztaty, w trakcie
                        których uczestnicy dzielą się wiedzą i doświadczeniem.
                        Staramy się na bieżąco zdobywać wiedzę by następnie
                        przekazywać ją uczniom, studentom i pasjonatom. Projekty
                        realizowane przez nas odnoszą sukcesy w konkursach
                        krajowych i międzynarodowych. Wygrywamy też często
                        hackatony jak i zapraszamy ekspertów z IT na nasze
                        spotkania.
                    </p>
                </div>
                <div className="w-1/2 flex items-center md:w-full">
                    <div className="h-fit">
                        <img
                            src={aboutUsImg}
                            alt="Team work about us"
                            className="h-auto w-auto"
                            loading="lazy"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
