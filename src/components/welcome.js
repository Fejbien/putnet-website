import React, { useEffect, useState } from "react";
import codingVideo from "../media/coding.mp4";
import titleLogo from "../media/titledLogo.svg";

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
                className="bg-cover
                w-full z-10
                overflow-hidden bg-red-500
                absolute top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2
                object-cover"
                style={{ height: videoHeight }}
            >
                <source src={codingVideo} type="video/mp4" />
            </video>
            <div className="flex w-full h-full justify-center items-center">
                <div className="flex w-[40%] h-[40%] justify-center items-center flex-col md:w-[80%] md:h-[80%]">
                    <img
                        src={titleLogo}
                        alt="Title Logo"
                        className="z-20 w-auto h-auto max-w-full max-h-full"
                    />
                    <h1 className="z-20 text-slate-100 font-bold text-2xl text-center">
                        Koło naukowe Politechniki Poznańskiej
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
