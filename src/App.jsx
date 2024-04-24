import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";

import HomePage from "./pages/HomePage";
import EventSubpage from "./components/eventSubPage";

function App() {
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <div className="bg-slate-800">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<HomePage />} />
                    <Route path="/event" element={<EventSubpage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
