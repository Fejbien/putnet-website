import React from "react";
import logo from "../media/pureLogo.svg";

function Header() {
    return (
        <header className="fixed top-0 h-16 w-full flex justify-between items-center bg-slate-900 shadow-2xl">
            <div className="flex pl-10">
                <img src={logo} alt="PUT.NET Logo" className="h-16" />
            </div>
            <div className="flex pr-10 h-full">
                <NavButton href="#" text="Home" />
                <NavButton href="#" text="About" />
                <NavButton href="#" text="Contact" />
            </div>
        </header>
    );
}

function NavButton({ href, text }) {
    return (
        <a
            href={href}
            className="h-full flex items-center pl-8 pr-8 shadow-inner
            transition bg-slate-900 text-slate-100
            hover:bg-slate-800
            click:bg-slate-700"
        >
            <span className="uppercase text-x tracking-wide leading-normal font-medium">
                {text}
            </span>
        </a>
    );
}

export default Header;
