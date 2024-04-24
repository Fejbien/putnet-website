import React, { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import titledLogo from "../media/titledLogo.svg";
import logo from "../media/pureLogo.svg";
import menu from "../media/menuIcon.svg";

import navs from "../data/navs.jsx";

function Header() {
    const handleScroll = () => {
        //console.log(window.scrollY);
        if (window.scrollY > 0) {
            if (
                document
                    .querySelector("header")
                    .classList.contains("-translate-y-16")
            )
                document
                    .querySelector("header")
                    .classList.remove("-translate-y-16");
        } else {
            if (
                !document
                    .querySelector("header")
                    .classList.contains("-translate-y-16")
            )
                document
                    .querySelector("header")
                    .classList.add("-translate-y-16");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let navigations = Object.keys(navs).map((key, index) => {
        return (
            <NavButton
                key={index}
                target={navs[key].target}
                href={navs[key].link}
                text={key}
                onClick={() => {
                    setIsOpen(false);
                }}
            />
        );
    });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className="z-30 fixed top-0 h-16 w-full flex justify-between 
        items-center bg-slate-900 shadow-2xl -translate-y-16 transition"
        >
            <div className="flex pl-10 md:hidden">
                <img
                    src={logo}
                    alt="PUT.NET Logo"
                    className="h-16"
                    loading="lazy"
                />
            </div>
            <div className="flex pr-10 h-full md:hidden">{navigations}</div>

            <div className="hidden md:flex md:justify-center md:items-center md:h-full md:w-full">
                <div className="md:flex md:w-full md:h-full md:justify-between md:items-center">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:flex md:w-auto"
                    >
                        <img src={menu} alt="menu icon" loading="lazy"></img>
                    </button>
                    <div className="md:flex md:h-full md:justify-center md:items-center">
                        <img src={logo} alt="logo" className="h-[80%]"></img>
                    </div>

                    <img
                        src={menu}
                        alt="menu icon"
                        className="invisible"
                        loading="lazy"
                    ></img>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50 top-0 left-0"
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="ease-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="w-[66%] h-screen bg-slate-800 fixed z-60 top-0 left-0 flex flex-col">
                            <div className="flex w-full justify-center items-center border-b-[1px] border-b-white mb-4">
                                <img
                                    src={titledLogo}
                                    alt="titled logo"
                                    className="w-[80%] h-[80%]"
                                    loading="lazy"
                                ></img>
                            </div>

                            <div className="flex flex-col w-full justify-center items-center">
                                {navigations}
                            </div>
                            <div className="flex h-full w-full justify-center items-end">
                                <h1 className="text-slate-100 my-6 text-4xl font-semibold">
                                    PUT<span className="text-red-800">.</span>
                                    NET
                                </h1>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </header>
    );
}

function NavButton({ href, text, onClick, target }) {
    return (
        <a
            href={href}
            target={target}
            className="h-full flex items-center pl-4 pr-4 shadow-inner bg-slate-900 transition hover:bg-slate-800
            md:bg-slate-800 md:hover:bg-slate-700 md:shadow-none md:my-2"
            onClick={onClick}
        >
            <span
                className="text-slate-100 uppercase text-m tracking-widest leading-normal font-normal antialiased
            md:text-lg text-center"
            >
                {text}
            </span>
        </a>
    );
}

export default Header;
