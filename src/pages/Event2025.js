import React from "react";

function EventSubPage() {
    return (
        <>
            <style>{`
		#talks-2025 p {margin:1em;}
	    	#talks-2025 a {text-decoration:underline;}
	    `}</style>
            <div
                id="talks-2025"
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
                            src="/put-net-software-engineering-talks-2025-logo-small.png"
                            alt="Logo"
                        />
                        <h3 style={{ textAlign: "center" }}>
                            Środa, 26 marca, od 18:00
                        </h3>
                        <h3 style={{ textAlign: "center" }}>
                            Sala 1 Centrum Wykładowego
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
                                (pierwsza sala wykładowa po prawej stronie
                                budynku)
                            </span>
                        </h3>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd4lOJFCG-e99xDroy86qzu97aE0FFNRCBsQpBTgm-HM3uG8A/viewform"
                            style={{
                                textAlign: "center",
                                display: "block",
                                color: "white",
                                fontStyle: "italic",
                                margin: "1em",
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
                            firmy, takie jak Allegro czy Sii aby wygłosili
                            prelekcje na ważne informatyczne tematy!
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
                                JetBrains IDE - beyond the shift-shift
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
                                        href="https://www.linkedin.com/in/kacper-koza-352a5913b/"
                                    >
                                        Kacper Koza
                                    </a>{" "}
                                    – Senior Software Engineer @{" "}
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
                                    Każdego dnia w pracy spędzamy sporo czasu na
                                    różnego rodzaju spotkaniach. W efekcie
                                    zostają nam zaledwie dwie godziny na
                                    upragnione programowanie. Podczas
                                    prezentacji spróbuję pokazać, jak efektywnie
                                    wykorzystać ten czas i zwiększyć
                                    produktywność w środowiskach
                                    programistycznych oferowanych przez
                                    JetBrains.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Praktyczne zastosowanie zwinności (Agile) w
                                budowaniu efektywnych zespołów
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
                                        href="https://www.linkedin.com/in/magdalenafar/"
                                    >
                                        Magdalena Far
                                    </a>{" "}
                                    – Scrum Master @{" "}
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
                                    Zapraszamy na wystąpienie, podczas którego
                                    poznasz praktyczne aspekty wykorzystania
                                    zwinności w budowaniu skutecznych zespołów.
                                    W trakcie prezentacji dowiesz się jakie
                                    czynniki decydują o powodzeniu zespołów w
                                    dynamicznym środowisku pracy. Przedstawię
                                    techniki budowania psychologicznego
                                    bezpieczeństwa w zespole. Poznasz sprawdzone
                                    narzędzia wspierające samoorganizację i
                                    autonomię. Omówimy praktyczne aspekty
                                    komunikacji i współpracy. Prezentacja
                                    zakończy się zestawem konkretnych wskazówek,
                                    które będziesz mógł zastosować w swoich
                                    przyszłych projektach. Niezależnie od tego,
                                    czy masz już doświadczenie ze zwinnością,
                                    czy dopiero zaczynasz swoją przygodę z
                                    Agile, to wystąpienie dostarczy Ci
                                    wartościowej wiedzy, którą wykorzystasz w
                                    przyszłej karierze zawodowej. Zapraszamy do
                                    aktywnego udziału. poniżej krótki opis:
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Dobre praktyki wpływające na czytelność kodu na
                                przykładzie aplikacji ASP.NET Core
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
                                    – Team Leader @{" "}
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
                                    W naszej prezentacji pokażemy, jak w
                                    praktyce zbudować czytelną i elastyczną
                                    aplikację ASP.NET Core w formie modularnego
                                    monolitu. Zaczynając od podstaw, omówimy
                                    sposób podziału aplikacji na osobne moduły i
                                    zarządzania nimi, a następnie przejdziemy do
                                    tego, w jaki sposób można taki moduł
                                    wydzielić do mikroserwisu, gdy zajdzie
                                    potrzeba skalowania lub dalszego rozwoju.
                                    Podzielimy się również praktycznymi
                                    wskazówkami dotyczącymi obsługi wyjątków,
                                    walidacji, a także kluczowymi zasadami
                                    architektonicznymi (takimi jak SOLID, wzorce
                                    projektowe czy coupling & cohesion). Nie
                                    zabraknie przykładów kodu, w tym przydatnych
                                    podczas realizacji projektów uczelnianych
                                    czy rozwiązywania zadań rekrutacyjnych. Na
                                    koniec pokażemy, jak podejść do tworzenia
                                    bibliotek w taki sposób, by były łatwe w
                                    utrzymaniu, a zarazem otwarte na dalsze
                                    rozszerzenia.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Dlaczego nie rozumiesz swojego pracodawcy?
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
                                        href="https://www.linkedin.com/company/kanal-studencki/"
                                    >
                                        Fundacja Kanał Studencki
                                    </a>{" "}
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
                                    W prezentacji zestawimy perspektywę firmy IT
                                    z perspektywą studenta w temacie rekrutacji
                                    i pierwszej pracy na pozycji stażysty czy
                                    juniora. Pokażemy, gdzie występują różnice w
                                    podejściu i opiniach, popierając to
                                    badaniami na ponad 250 studentach i 10
                                    firmach IT. Przedstawimy praktyczne
                                    wskazówki, jak zwiększyć swoją skuteczność w
                                    rekrutacji oraz jak lepiej odnaleźć się w
                                    środowisku branżowym. Opowiemy też o tym,
                                    dlaczego kompetencje miękkie zyskują na
                                    znaczeniu i jak ich się uczyć.
                                </p>
                            </li>
                            <li
                                style={{
                                    marginBottom: "16px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                }}
                            >
                                Narzędzia deweleperskie w przeglądarce - nie
                                tylko dla frontendowców
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
                                        href="https://www.linkedin.com/in/janpieczykolan/"
                                    >
                                        Jan Pieczykolan
                                    </a>{" "}
                                    – Head of IT Development @{" "}
                                    <span style={{ color: "#FF0000" }}>
                                        Santander
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
                                    Zastanawialiście się kiedyś co oferują
                                    wbudowane narzędzia w przeglądarce, z
                                    którymi na co dzień macie mało styczności?
                                    Chce przedstawić możliwości narzędzia, o
                                    którym nie myśli się za dużo w ciągu
                                    codziennej pracy. Przejdziemy od
                                    podstawowych funkcji jak robienie zrzutów
                                    ekranu, po czytanie ruchu sieciowego.
                                </p>
                            </li>
                        </ul>
                        <strong style={{ textAlign: "center" }}>
                            Do zobaczenia na wydarzeniu! &#128075;
                        </strong>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSd4lOJFCG-e99xDroy86qzu97aE0FFNRCBsQpBTgm-HM3uG8A/viewform"
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
