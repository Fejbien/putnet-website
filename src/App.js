import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Divider from "./components/divider";
import Faq from "./components/faq";

function App() {
    return (
        <div className="bg-slate-800">
            <Header />
            <Welcome />
            <PageBody />
            <Footer />
        </div>
    );
}

function PageBody() {
    return (
        <div className="bg-gradient-to-b from-slate-950 from-5% via-slate-900 via-20% to-slate-800 pt-8">
            <AboutUs />
            <Divider />
            <Contact />
            <Divider />
            <Faq />
        </div>
    );
}

export default App;
