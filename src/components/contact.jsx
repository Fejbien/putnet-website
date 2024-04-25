import PropTypes from "prop-types";

import contacts from "../data/contacts";
import urls from "../data/urls";

function Contact() {
    let contactsMap = contacts.map((contactData, index) => {
        return <ContactsData key={index} contactData={contactData} />;
    });

    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="contact" className="absolute -top-20"></div>

            <div className="flex flex-row-reverse w-[70%] gap-10 md:w-full md:flex-col-reverse">
                <div className="flex flex-col w-1/2 min-h-[200px] md:w-full">
                    <iframe
                        id="PUTMap"
                        src={urls["mapURL"]}
                        title="PUTMap"
                        allowFullScreen
                        className="w-full h-full min-h-[200px]"
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="w-1/2 flex-col items-center md:w-full">
                    <h1 className="text-slate-100 text-4xl text-left md:text-center">
                        Kontakt
                    </h1>
                    {contactsMap}
                </div>
            </div>
        </div>
    );
}

ContactsData.propTypes = {
    contactData: PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
};
function ContactsData({ contactData }) {
    return (
        <a href={contactData.url} target="_blank">
            <LinkInsides text={contactData.text} icon={contactData.icon} />
        </a>
    );
}

LinkInsides.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
function LinkInsides({ text, icon }) {
    return (
        <IconAndTextHolder>
            <img src={icon} alt="icon" className="mr-4" loading="lazy"></img>
            <LinkText>{text}</LinkText>
        </IconAndTextHolder>
    );
}

const IconAndTextHolder = (props) => (
    <div className="flex flex-row items-center md:justify-start mt-6 md:mt-2 md:px-2 md:w-[90dvw]">
        {
            // eslint-disable-next-line react/prop-types
            props.children
        }
    </div>
);

const LinkText = (props) => (
    <p
        className="text-slate-100 font-medium text-2xl object-contain break-words
        hover:text-orange-100 transition hover:underline text-ellipsis overflow-hidden
        md:text-center md:text-lg md:w-full md:pr-2 md:pl-2"
        style={{ textWrap: "balance" }}
    >
        {
            // eslint-disable-next-line react/prop-types
            props.children
        }
    </p>
);

export default Contact;
