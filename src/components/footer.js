import React from "react";

import putLogo from "../media/putLogo.png";

function Footer() {
    return (
        <div
            className="bg-gradient-to-b from-slate-800 from-10% via-slate-900 via-15% to-slate-900 pt-8
        flex w-full"
        >
            <div className="flex my-6 md:flex-col-reverse">
                <div className="w-[80%] flex items-center md:w-full">
                    <span className="text-slate-100 px-10 md:text-center">
                        Koło naukowe PUT.NET na Wydziale Informatyki działa od
                        2004 roku, a na Wydziale Elektrycznym od roku 2005.
                        Serdecznie zapraszamy na nasze spotkania, eventy i
                        prelekcje!
                    </span>
                </div>
                <div className="w-[20%] flex justify-center md:w-full md:mb-4">
                    <div className="w-1/2">
                        <img
                            src={putLogo}
                            alt="put Logo"
                            className="w-full"
                            loading="lazy"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
