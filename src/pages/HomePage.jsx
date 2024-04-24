import Welcome from "../components/welcome";
import AboutUs from "../components/aboutUs";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Events from "../components/events";
import Divider from "../components/divider";

function HomePage() {
    return (
        <>
            <Welcome />
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
            <Footer />
        </>
    );
}

export default HomePage;
