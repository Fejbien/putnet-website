import urls from "./urls";

/*
Adding a question:
    [
        "Question",
        "Answer",
    ],
*/

const faq = [
    [
        <>Czy trzeba chodzić cyklicznie na nasze spotkania?</>,
        <>
            Oczywiście, że nie. Możesz chodzić tylko na wybrane spotkania, a i
            tak zdobędziesz dużo wiedzy i poznasz masę ciekawych technologii i
            ciekawych osobistości 😉"
        </>,
    ],
    [
        <>Czy jeśli nie studiuję na Politechnice też mogę przyjść?</>,
        <>
            Oczywiście, że tak. Zapraszamy wszystkich, również osoby spoza
            Politechniki.
        </>,
    ],
    [
        <>Jak do nas dołączyć?</>,
        <>
            Nic prostszego! Zapisz się już dziś i wypełnij nasz{" "}
            <a
                href="/redirect/1"
                className="underline hover:text-orange-100 text-red-500"
                target="_blank"
                rel="noreferrer"
            >
                formularz!
            </a>{" "}
            Następny krok to regularne uczestniczenie w naszych spotkaniach.
            Wszelkie informacje będą na bieżąco pojawiały się w social mediach:{" "}
            <a
                href={urls.fbURL}
                className="underline hover:text-orange-100 text-red-500"
                target="_blank"
                rel="noreferrer"
            >
                Facebooku
            </a>
            ,{" "}
            <a
                href={urls.discordURL}
                className="underline hover:text-orange-100 text-red-500"
                target="_blank"
                rel="noreferrer"
            >
                Discordzie
            </a>{" "}
            i{" "}
            <a
                href={urls.linkedInURL}
                className="underline hover:text-orange-100 text-red-500"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
            ! Zapraszamy!
        </>,
    ],
    [
        <>Czy jesteśmy otwarci na współpracę?</>,
        <>
            Oczywiście, że tak. Prelekcje prowadzą u nas różne osobistości, z
            różnych części świata jak i różnych firm. W kwestiach współpracy
            najlepiej pytać nas na FB bądź drogą mailową (patrz sekcja kontakt).
        </>,
    ],
    [
        <>Czy nasze kursy/prelekcje są płatne?</>,
        <>
            Prelekcje są w pełni darmowe. Pizza, która pojawia się czasem na
            naszych spotkaniach też 🍕
        </>,
    ],
];

export default faq;
