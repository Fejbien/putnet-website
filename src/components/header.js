import React, { useEffect, useState } from "react";
import logo from "../media/pureLogo.svg";

function Header() {
    return (
        <header className="fixed top-0 h-16 w-full flex justify-between items-center bg-slate-900 shadow-2xl hidden">
            <div className="flex pl-10">
                <img src={logo} alt="PUT.NET Logo" className="h-16" />
            </div>
            <div className="flex pr-10 h-full">
                <NavButton href="#" text="home" />
                <NavButton href="#" text="o nas" />
                <NavButton href="#" text="prelekcje" />
                <NavButton href="#" text="hall of fame" />
                <NavButton href="#" text="kontakt" />
                <NavButton href="#" text="faq" />
            </div>
        </header>
    );
}

function NavButton({ href, text }) {
    return (
        <a
            href={href}
            className="h-full flex items-center pl-4 pr-4 shadow-inner
            bg-slate-900 transition
            hover:bg-slate-800"
        >
            <span className="text-slate-100 uppercase text-m tracking-widest leading-normal font-normal antialiased">
                {text}
            </span>
        </a>
    );
}

export default Header;
