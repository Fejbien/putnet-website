import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Welcome from "./components/welcome";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Events from "./components/events";
import Divider from "./components/divider";

import EventSubpage from "./components/eventSubage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <div className="bg-slate-800">
                            <Header />
                            <Welcome />
                            <PageBody />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/event"
                    element={
                        <div className="bg-slate-800">
                            <Header />
                            <EventSubpage />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

function PageBody() {
    return (
        <div className="bg-gradient-to-b from-slate-950 from-5% via-slate-900 via-20% to-slate-800 pt-8">
            <AboutUs />
            <Divider />
            <Events />
            <Divider />
            <Contact />
            <Divider />
            <Projects />
            <Divider />
            <Faq />
        </div>
    );
}

export default App;
