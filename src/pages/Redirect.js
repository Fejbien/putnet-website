import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PureLogo from "../media/pureLogo.svg";
import Redirects from "../data/redirects.js";

const Redirect = () => {
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        if (id in Redirects) {
            const url = Redirects[id][0];
            window.location.href = url;
        } else {
            window.location.href = "/";
        }
    }, [id]);

    let show = "Nie znaleziono przekierowania powracanie...";
    if (id in Redirects) show = Redirects[id][1];

    return (
        <div className="flex w-screen h-screen justify-center items-start">
            <div className="text-white font-bold text-4xl flex flex-col justify-center items-center pt-40">
                <img src={PureLogo} alt="Pure Logo" className="w-64 h-64" />
                <span className="text-center px-6 py-2">{show}</span>
            </div>
        </div>
    );
};

export default Redirect;
