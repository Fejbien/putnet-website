import React from "react";

function EventSubPage() {
    return (
        <>
            <div
                className="event-subpage"
                style={{
                    fontFamily: "arial, helvetica, sans-serif",
                    fontSize: "12pt",
                    color: "#000000",
                }}
            >
                <div
                    className="header"
                    style={{
                        backgroundColor: "#121212",
                        padding: "16px",
                        width: "100%",
                    }}
                >
                    <div
                        className="content"
                        style={{
                            margin: "auto",
                            maxWidth: "1200px",
                            backgroundColor: "#1e1e1e",
                            padding: "16px 24px",
                            color: "white",
                        }}
                    >
                        <img
                            className="logo"
                            style={{
                                paddingBottom: "16px",
                                maxWidth: "100%",
                                margin: "auto",
                                display: "block",
                            }}
                            src="/put-net-software-engineering-talks-2024-logo-small.png"
                            alt="Logo"
                        />
                        <h3 style={{ textAlign: "center" }}>
                            Środa, 24 kwietnia, 17:20 – 21:00
                        </h3>
                        <h3 style={{ textAlign: "center" }}>
                            Sala 8 Centrum Wykładowego
                            <br />
                            Politechniki Poznańskiej
                            <span
                                style={{
                                    textAlign: "center",
                                    display: "block",
                                    fontSize: "14px",
                                    color: "#999",
                                }}
                            >
                                (pierwsze piętro po prawej stronie budynku)
                            </span>
                        </h3>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfP_TQ4tEUc9eTo8u0uE5L_lQMhB4Jl-MhD1A53kw3zRhvldA/viewform"
                            style={{
                                textAlign: "center",
                                display: "block",
                                color: "white",
                                fontStyle: "italic",
                            }}
                        >
                            Kliknij, aby przejść do rejestracji!
                        </a>
                        <p style={{ fontWeight: "bold" }}>Drodzy Studenci,</p>
                        <p>
                            jako{" "}
                            <a
                                style={{ color: "white" }}
                                href="https://net.cs.put.poznan.pl/"
                            >
                                Koło Naukowe Grupa .NET
                            </a>
                            , mamy przyjemność zaprosić Was na wyjątkowe
                            wydarzenie – PUT .NET Software Engineering Talks! To
                            niepowtarzalna okazja do poszerzenia wiedzy na temat
                            umiejętności twardych oraz miękkich, zawarcia nowych
                            znajomości oraz poznania ścieżek kariery i rozwoju w
                            IT. Specjalnie dla Was poprosiliśmy renomowane
                            firmy, takie jak Allegro czy Microsoft, aby
                            wygłosili prelekcje na ważne informatyczne tematy!
                        </p>
                        <p>
                            Nasze spotkanie to idealna okazja do posłuchania
                            inspirujących prelekcji, a także do zadawania pytań
                            i wymiany doświadczeń z ekspertami branży
                            informatycznej. Nie przegapcie szansy na poszerzenie
                            swoich horyzontów i rozwój zawodowy!
                        </p>
                        <p>
                            W przerwie będzie czekać na Was przepyszna pizza,
                            ufundowana przez Allegro! &#127829;
                        </p>
                        <p>
                            Zapoznajcie się z naszymi prelegentami oraz krótkimi
                            opisami ich wystąpień:
                        </p>
                        <ul style={{ paddingLeft: "16px" }}>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Ogarnąć Git'a
                                <span
                                    style={{
                                        fontWeight: "normal",
                                        fontSize: "16px",
                                        marginTop: "8px",
                                        display: "block",
                                        color: "#eee",
                                    }}
                                >
                                    <a
                                        style={{ color: "white" }}
                                        href="https://www.linkedin.com/in/pawelwar/"
                                    >
                                        Paweł Warczyński
                                    </a>{" "}
                                    – Team Leader &amp; Senior Software Engineer
                                    @
                                    <span style={{ color: "#ff5a00" }}>
                                        Allegro
                                    </span>
                                    ,{" "}
                                    <span style={{ color: "#3e6cb8" }}>
                                        Java User Group Poznań
                                    </span>
                                </span>
                                <p
                                    style={{
                                        color: "#ddd",
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "normal",
                                    }}
                                >
                                    Znasz Git’a tylko przez pryzmat sześciu
                                    komend? A może za każdym razem przeraża
                                    Ciebie “detached head”? Budzisz się w nocy
                                    krzycząc - push rejected! Dlaczego powstała
                                    ta git bestia i jak ją mentalnie ogarnąć?
                                    Czas najwyższy poznać korzenie tego
                                    narzędzia i koncepcje stojące za nią.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Konteneryzacja oczami .NET developera
                                <span
                                    style={{
                                        fontWeight: "normal",
                                        fontSize: "16px",
                                        marginTop: "8px",
                                        display: "block",
                                        color: "#eee",
                                    }}
                                >
                                    <a
                                        style={{ color: "white" }}
                                        href="https://www.linkedin.com/in/mateusz-bryll/"
                                    >
                                        Mateusz Bryll
                                    </a>{" "}
                                    – Team Leader, .NET / Angular engineer @
                                    <span style={{ color: "#ff5a00" }}>
                                        Allegro
                                    </span>
                                </span>
                                <p
                                    style={{
                                        color: "#ddd",
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "normal",
                                    }}
                                >
                                    Podczas prelekcji skupimy się na praktycznym
                                    spojrzeniu na konteneryzację aplikacji, z
                                    wykorzystaniem aplikacji bazującej na .NET
                                    Framework jako studium przypadku. Razem
                                    spojrzymy na punkty styku, gdzie praca
                                    programisty łączy się z elementami
                                    infrastruktury, podkreślając, jak i dlaczego
                                    programiści korzystają z klastrów Kubernetes
                                    oraz Dockera. Głównym celem będzie
                                    wskazanie, w jaki sposób konteneryzacja
                                    wpływa na codzienną pracę programistów i jak
                                    przyczynia się do efektywniejszej współpracy
                                    z zespołami DevOps oraz czego można się po
                                    takiej współpracy spodziewać.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Chmura – najlepszy przyjaciel studenta
                                <span
                                    style={{
                                        fontWeight: "normal",
                                        fontSize: "16px",
                                        marginTop: "8px",
                                        display: "block",
                                        color: "#eee",
                                    }}
                                >
                                    <a
                                        style={{ color: "white" }}
                                        href="https://www.linkedin.com/in/k-pi/"
                                    >
                                        Kacper Wiśniewski
                                    </a>{" "}
                                    – DevOps Engineer @{" "}
                                    <span style={{ color: "#79addd" }}>
                                        Sii
                                    </span>
                                </span>
                                <p
                                    style={{
                                        color: "#ddd",
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "normal",
                                    }}
                                >
                                    W ramach tego segmentu postaramy się
                                    pokazać, że chmura może być przydatna nie
                                    tylko dla przedsiębiorstw i projektów dużej
                                    skali, ale i stanowić świetny atut w
                                    portfolio studenta. Kiedy słyszymy słowo
                                    "chmura" najczęściej wyobrażamy sobie
                                    niewidzialną infrastrukturę, na której
                                    działają tysiące aplikacji. To oczywiście po
                                    części prawda, jednak dostawcy chmurowi mają
                                    do zaoferowania znacznie więcej niż samą
                                    infrastrukturę. Za pomocą kilku
                                    rzeczywistych przykładów pokażemy, jak można
                                    wykorzystać różne usługi oferowane przez
                                    AWS, Azure czy GCP w swoich projektach –
                                    zarówno uczelnianych, jak i prywatnych.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Jak zacząć w IT?
                                <span
                                    style={{
                                        fontWeight: "normal",
                                        fontSize: "16px",
                                        marginTop: "8px",
                                        display: "block",
                                        color: "#eee",
                                    }}
                                >
                                    <a
                                        style={{ color: "white" }}
                                        href="https://www.linkedin.com/in/michal-sibera/"
                                    >
                                        Michał Sibera
                                    </a>{" "}
                                    – .NET Developer @{" "}
                                    <span style={{ color: "#4dbec6" }}>
                                        Sea
                                    </span>
                                </span>
                                <p
                                    style={{
                                        color: "#ddd",
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "normal",
                                    }}
                                >
                                    W dzisiejszym dynamicznym świecie
                                    technologii, zrozumienie aktualnego
                                    krajobrazu rynku IT oraz skuteczne budowanie
                                    własnego wizerunku są kluczowe dla sukcesu
                                    zawodowego. Czy zastanawiałeś się, jak
                                    skutecznie prezentować swoje umiejętności i
                                    doświadczenie przed potencjalnymi
                                    pracodawcami? Czy wiesz, na co obecnie
                                    zwracają uwagę rekruterzy i jakie
                                    umiejętności są najbardziej pożądane? W tej
                                    prelekcji odkryjemy aktualne trendy i
                                    wymagania rynku IT oraz przekażemy konkretne
                                    porady, które pomogą Ci wystartować w tej
                                    branży.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Czy AI zabierze mi pracę?
                                <span
                                    style={{
                                        fontWeight: "normal",
                                        fontSize: "16px",
                                        marginTop: "8px",
                                        display: "block",
                                        color: "#eee",
                                    }}
                                >
                                    <a
                                        style={{ color: "white" }}
                                        href="https://www.linkedin.com/in/rafalczuprynski/"
                                    >
                                        Rafał Czupryński
                                    </a>{" "}
                                    – Customer Success Account Manager @
                                    <span style={{ color: "#7fba00" }}>
                                        Microsoft
                                    </span>
                                </span>
                                <p
                                    style={{
                                        color: "#ddd",
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "normal",
                                    }}
                                >
                                    Rozwoju technologicznego nie zatrzymamy.
                                    Świat na naszych oczach zmienia się,
                                    wystarczy rozejrzeć się dookoła lub sięgnąć
                                    po telefon komórkowy. Zaczynamy zadawać
                                    sobie pytania - dokąd to wszystko zmierza;
                                    czy warto się teraz uczyć, na przykład
                                    informatyki; czy programiści będą jeszcze
                                    potrzebni? Podczas sesji przedstawię kilka
                                    trendów technologicznych, które obecnie
                                    obserwujemy. Zastanowimy się też nad tym
                                    jaki mogą one mieć wpływ na naszą pracę i
                                    codzienność.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Jak zbudować Software House od zera?
                                <span
                                    style={{
                                        fontWeight: "normal",
                                        fontSize: "16px",
                                        marginTop: "8px",
                                        display: "block",
                                        color: "#eee",
                                    }}
                                >
                                    <a
                                        style={{ color: "white" }}
                                        href="https://www.linkedin.com/in/jakob-wolitzki/"
                                    >
                                        Jakob Wolitzki
                                    </a>{" "}
                                    – Co-Founder @{" "}
                                    <span style={{ color: "#fda51f" }}>
                                        Deltologic
                                    </span>
                                </span>
                                <p
                                    style={{
                                        color: "#ddd",
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "normal",
                                    }}
                                >
                                    To niepowtarzalna okazja dla przyszłych
                                    przedsiębiorców i osób zainteresowanych
                                    branżą IT, by zgłębić tajniki zakładania i
                                    rozwijania własnego biznesu
                                    technologicznego. Podczas naszej prelekcji,
                                    uczestnicy zdobędą cenne wskazówki na temat
                                    pierwszych kroków w budowaniu software
                                    house'u. Poruszymy kluczowe aspekty, takie
                                    jak tworzenie atrakcyjnej oferty, wybór
                                    odpowiedniej niszy rynkowej, zdobywanie
                                    pierwszych klientów, a także strategie na
                                    efektywne i skuteczne zatrudnianie
                                    developerów oraz współpracę z
                                    podwykonawcami.
                                </p>
                            </li>
                        </ul>
                        <strong style={{ textAlign: "center" }}>
                            Do zobaczenia na wydarzeniu! &#128075;
                        </strong>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfP_TQ4tEUc9eTo8u0uE5L_lQMhB4Jl-MhD1A53kw3zRhvldA/viewform"
                            style={{
                                display: "block",
                                marginTop: "28px",
                                marginBottom: "8px",
                                fontSize: "24px",
                                padding: "12px",
                                backgroundColor: "#b91f1f",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            Zarejestruj się teraz!
                        </a>
                        <span
                            style={{
                                color: "#ffffff",
                                textAlign: "center",
                                display: "block",
                                marginBottom: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            Rezerwacja miejsc jest obowiązkowa!
                        </span>
                        <span style={{ textAlign: "center", display: "block" }}>
                            <a
                                href="https://net.cs.put.poznan.pl"
                                style={{ display: "inline", color: "#999" }}
                            >
                                Odwiedź naszą stronę
                            </a>
                            <span style={{ color: "#999" }}> | </span>
                            <a
                                href="https://www.facebook.com/put.net"
                                style={{ color: "#999" }}
                            >
                                Polub nas na Facebooku
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventSubPage;
