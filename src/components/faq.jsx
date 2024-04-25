import PropTypes from "prop-types";
import { Disclosure, Transition } from "@headlessui/react";

import faq from "../data/faq.jsx";

function Faq() {
    let QnAsHTML = faq.map((QnARow, index) => {
        return <QnA key={index} question={QnARow[0]} answer={QnARow[1]} />;
    });

    return (
        <div className="flex w-full justify-center relative">
            <div id="faq" className="absolute -top-20"></div>
            <div className="flex w-[60%] flex-col rounded-2xl p-2 md:w-full">
                <h1 className="text-4xl text-center text-slate-100 font-bold mb-2">
                    🤔 FAQ 🤔
                </h1>
                {QnAsHTML}
            </div>
        </div>
    );
}

QnA.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};
function QnA({ question, answer }) {
    return (
        <Disclosure as="div" className="mt-4 overflow-hidden">
            <Disclosure.Button
                className="flex w-full justify-center rounded-lg
                     bg-slate-100 px-4 py-2 text-center text-xl font-medium text-slate-900
                      hover:bg-slate-300"
            >
                <span>{question}</span>
            </Disclosure.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform -translate-y-full opacity-0"
                enterTo="transform translate-y opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform translate-y- opacity-100"
                leaveTo="transform -translate-y-full opacity-0"
            >
                <Disclosure.Panel
                    className="px-4 pt-4 text-xl text-slate-100 text-center"
                    style={{ "text-wrap": "balance" }}
                >
                    {answer}
                </Disclosure.Panel>
            </Transition>
        </Disclosure>
    );
}

export default Faq;
