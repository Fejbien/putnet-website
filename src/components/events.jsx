import eventLogo from "../assets/eventLogo.png";

function Events() {
    return (
        <div className="flex flex-row w-full justify-center items-center relative">
            <div id="events" className="absolute -top-20"></div>

            <div className="flex flex-row-reverse w-[70%] gap-10 md:w-full md:flex-col">
                <div className="flex flex-col w-1/2 md:w-full items-center justify-center">
                    <h1 className="text-slate-100 text-4xl text-center">
                        Tutaj moga
                    </h1>
                    <p className="text-slate-100 text-lg text-center pt-4 md:px-2">
                        byc jakie wydarzenia byly i kalendarz spotkan, mozna
                        bota z dc co 24h executowac cronem skrypt pobieracy dane
                        z api o wydarzeniach jakie sa utworzone na dc
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center md:w-full">
                    <div className="h-fit md:pr-5 md:pl-5">
                        <img
                            src={eventLogo}
                            alt="Logo wydarzenia PUT.NET Software Engineering Talks"
                            className="h-auto w-auto rounded-lg border-2 border-white"
                            loading="lazy"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
