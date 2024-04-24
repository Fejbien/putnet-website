import React from "react";
import aboutUsImg from "../media/aboutUs.jpg";
import aboutText from "../data/aboutText.js";

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
                        {aboutText}
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
