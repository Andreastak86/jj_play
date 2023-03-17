import { useState } from "react";
import refQuestions from "@/components/referenceQuestions";
import Image from "next/image";

import Approved from "../images/intervju/approved.png";

export default function ReferanserNavBoxMob({ referenceMob }) {
    const [preperationContent, setPreperationContent] = useState(true);
    const [whatIfContent, setWhatIfContent] = useState(false);
    const [fiveClassicsContent, setFiveClassicsContent] = useState(false);
    const [toAskContent, setToAskContent] = useState(false);

    function DeactivateState() {
        setPreperationContent(false);
        setWhatIfContent(false);
        setFiveClassicsContent(false);
        setToAskContent(false);
    }

    return (
        <>
            <div
                className={`flex flex-col ${
                    referenceMob ? "content" : "hidden"
                }`}
            >
                <div>
                    <ul className='mx-auto text-2xl w-60 text-whit center'>
                        <li
                            className={`h-20 flex justify-start pl-3 items-center text-center cursor-pointer ${
                                preperationContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setPreperationContent(!preperationContent);
                            }}
                        >
                            Referanseperson
                        </li>
                        <li
                            className={`h-20 flex justify-start pl-3 items-center text-center cursor-pointer ${
                                whatIfContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setWhatIfContent(!whatIfContent);
                            }}
                        >
                            Vanlige spørsmål
                        </li>
                    </ul>
                </div>
                <div>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            preperationContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 mx-auto '>
                            <p className='mb-4 italic '>
                                Referansepersoner er ofte den sikreste kilden
                                for den nye arbeidsgiveren til å finne ut om du
                                er den du har gitt deg ut for å være. Du kan ha
                                "lurt" deg gjennom intervju-rundene, men når
                                referansene sjekkes er sannhetens time kommet.
                                Du kan likevel drive kvalitetssikring av denne
                                delen av prosessen på lik linje med CV, søknad,
                                intervju, osv. Referansesjekken skjer nesten
                                utelukkende over telefon og kan ha en varighet
                                fra 10 minutter og opp til 1 time.
                            </p>
                            <Image
                                src={Approved}
                                alt='Bilde av Approved som står vinklet'
                                height={100}
                            />
                            <h2 className='mt-4 '>
                                Hvorfor er referansepersoner viktig?
                            </h2>
                            <p>
                                Referanser oppfattes som det beste informasjons
                                grunnlaget for fremtidig jobb-suksess.
                                <br />
                                Referanser kan avgjøre om du får jobben eller
                                ikke.
                                <br />{" "}
                                <span className='italic '>
                                    PS. Du kan påvirke i din favør.
                                </span>
                            </p>
                            <h3 className='mt-8'>Hvem bør man oppgi?</h3>
                            <p>
                                <span className='font-medium'>Primært:</span> 3
                                siste arbeidsgivere, hvis du har vært ute i
                                arbeid en del år. <br />
                                <span>Sekundært:</span> Kunder, eksterne
                                samarbeidspartnere og leverandører.
                            </p>

                            <h3 className='mt-8'>Hvis du har vært en leder:</h3>
                            <p>
                                – Overordnet.
                                <br />
                                – Sideordnet.
                                <br />– Noen du har vært leder for.
                            </p>

                            <h3 className='mt-8 '>
                                Hvis du bare har hatt én jobb:
                            </h3>
                            <ul>
                                <li>– Din overordnede.</li>
                                <li>– Sideordnet klilega.</li>
                                <li>– Veileder fra studier. .</li>
                                <li>
                                    – Samarbeidspartnere i forbindelse med verv.
                                </li>
                                <li>
                                    – Noen du har vært trener/
                                    <br /> instruktør for.
                                </li>
                                <li>– Venner.</li>
                            </ul>

                            <h3 className='mt-8 '>Hvis du er nyutdannet:</h3>
                            <ul>
                                <li>
                                    – Leder fra sommerjobb eller deltidsjobb.
                                </li>
                                <li>– Veileder fra studier.</li>
                                <li>
                                    – Kontaktpersoner man har fra
                                    hobbyer/fritidsaktiviteter.
                                </li>
                                <li>– Venner.</li>
                            </ul>

                            <h3 className='mt-8 '>
                                Kontrollér bruken av dine referanser.
                            </h3>
                            <ul>
                                <li>
                                    – Spør{" "}
                                    <span className='font-bold'>hva slags</span>{" "}
                                    referanser de vil ha.
                                </li>
                                <li>
                                    – Finn ut{" "}
                                    <span className='font-bold '>når</span>{" "}
                                    referansene blir kontaktet.
                                </li>
                                <li>
                                    – Finn ut{" "}
                                    <span className='font-bold '>hvem</span> de
                                    blir kontatktet av.
                                </li>
                                <li>
                                    – Ikke oppgi referanser i CV med mindre du
                                    blir bedt om det.
                                </li>
                                <li>
                                    – Ikke utsett dine referansepersoner for å
                                    bli kontaktet for ofte.
                                </li>
                            </ul>

                            <h3 className='mt-8'>Forbered dine referanser.</h3>
                            <p>
                                Jo bedre du kan forberede dine referanser,{" "}
                                <br />
                                jo bedre kan de selge deg inn.{" "}
                            </p>

                            <h3 className='mt-8'> Informasjon om stilling:</h3>
                            <p>
                                Arbeidsoppgaver/ansvarsfelt/
                                <br />
                                utviklingsmuligheter.
                            </p>
                            <ul>
                                <li>
                                    – Hva du har vektlagt når du har ”solgt deg
                                    inn”.
                                </li>

                                <li>
                                    – Arbeidsoppgaver du har vektlagt med
                                    relevans for stillingen.
                                </li>

                                <li>
                                    – Hvilke usikkerhetsmomenter den som ringer
                                    har i f.t. deg som kandidat.{" "}
                                </li>

                                <li>
                                    – Styrker og svakheter du selv har påpekt.
                                </li>

                                <li>– Når du tror de vil bli kontaktet.</li>

                                <li>– Hvem de vil bli kontaktet av.</li>

                                <li>– Hvorfor du har lyst på jobben.</li>
                            </ul>
                        </div>
                    </section>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            whatIfContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8'>
                            <h2 className='my-4 text-[22px] '>
                                Spørsmål som dine referanse-personer <br />
                                kan få
                            </h2>
                            <div>
                                <ul className='flex flex-col gap-3 text-black '>
                                    {refQuestions.map((refQuestions) => (
                                        <li>{refQuestions}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            fiveClassicsContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='ml-6 text-[22px]'>
                            <h2>Vær Forberedt</h2>
                        </div>
                    </section>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            toAskContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='ml-6 text-[22px] '>
                            <h2>Cattel 16 PF</h2>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
