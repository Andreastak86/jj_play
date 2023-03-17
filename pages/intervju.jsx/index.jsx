import Image from "next/image";
import React, { useState } from "react";

import IntervjuNavBox from "@/components/intervjuNavBox";
import PersonlighetstesterNavBox from "@/components/personlighetstesterNavBox";
import ReferanserNavBox from "@/components/referanserNavBox";
import IntervjuNavBoxMobile from "@/components/intervjuNavBoxMob";


import Blob from "@/images/blob/blob.svg";
import BigBlob from "@/images/blob/bigBlob.png";
import PersonlighetstesterNavBoxMobile from "@/components/personlighetstesterNavBoxMobile";
import ReferanserNavBoxMob from "@/components/referanserNavBoxMob";

const Mobile_Card = ({ title }) => {
    return (
        <div className='flex items-center justify-center max-w-full CONTAINER max-h-fit '>
            <h2 className='self-center text-2xl text-white'>{title}</h2>
        </div>
    );
};

export default function Intervju() {
    const [prepare, setPrepare] = useState(true);
    const [personality, setPersonality] = useState(false);
    const [reference, setReference] = useState(false);
    const [prepareMob, setPrepareMob] = useState(true);
    const [personalityMob, setPersonalityMob] = useState(false);
    const [referenceMob, setReferenceMob] = useState(false);

    function DeactivateState() {
        setPrepare(false);
        setPersonality(false);
        setReference(false);
        setPrepareMob(false);
        setPersonalityMob(false);
        setReferenceMob(false);
    }

    return (
        <>
            <main className='mx-3 xxs:mx-10 xs:mx-20 md:w-[688px] md:mx-auto lg:w-[796px] xl:w-[1088px] md:text-lg'>
                {/* <div className='lg:max-w-7xl lg:mb-20'> */}
                    {/* <Image
                        className='absolute top-0 right-0 md:hidden z-[-5]'
                        src={Blob}
                    /> */}
                    <Image
                        className='absolute top-0 right-0 hidden w-2/5 lg:block z-[-5] lg:w-[558px]'
                        src={BigBlob}
                    />
                {/* </div> */}
                <h1 className='mx-3 mt-8 text-2xl xxs:mx-1 xs:mx-0 md:text-left md:text-3xl xl:text-4xl lg:pt-16'>
                    Intervju
                </h1>
                <section className='mx-3 my-4 xxs:mx-1 xs:mx-0 md:pb-8 xl:pb-48 lg:w-3/6 lg:pb-40'>
                    <p>
                        Gratulerer med innkalling til intervju! Vi har fortsatt
                        et lite stykke igjen, men dette er den morsomme delen.
                        Følg linkene under så får du tips og triks, samt en
                        liste med de vanligste spørsmålene som stilles av
                        intervjuerne. Takk for følget og lykke til!
                    </p>
                    <p>
                        Det er mange som har søkt utallige jobber før de blir
                        innkalt til intervju. <br /> Har man søkt mange nok
                        jobber burde det være logisk at man tok vare på denne
                        gyldne sjansen. <br />
                        For intervjueren oppleves det ikke alltid slik.
                        <br />
                        Jeg skal nå gå gjennom tips i forhold til forberedelse
                        og gjennomføring av et intervju. <br />
                        Ditt mål er å få et jobbtilbud ved å overbevise
                        intervjueren om at:
                    </p>
                    <ul className='py-4 italic '>
                        <li>Du kan gjøre jobben</li>
                        <li>Du har lyst på jobben</li>
                        <li>Du passer i jobben</li>
                    </ul>
                </section>
                <section className=''>
                    {/* Nav-boks mobil variant */}
                    <div className='flex flex-col gap-6 text-center MOBILE-CARDS md:hidden'>
                        <Mobile_Card title={"Forberedelse og gjennomføring"} />
                        <div className='flex flex-col items-start justify-center max-w-full gap-3 mx-auto mb-8 CONTAINER max-h-fit '>
                        <h2
                            className={`text-2xl ${prepareMob ? "underline" : " no-underline"}`}
                            onClick={() => {
                                DeactivateState();
                                setPrepareMob(true);
                            }}
                        >
                            Forberedelse
                        </h2>
                        <h2
                            className={`text-2xl ${personalityMob ? "underline" : " no-underline"}`}
                            onClick={() => {
                                DeactivateState();
                                setPersonalityMob(true);
                            }}
                        >
                            Personlighetstester
                        </h2>
                        <h2
                            className={`text-2xl ${referenceMob ? "underline" : " no-underline"}`}
                            onClick={() => {
                                DeactivateState();
                                setReferenceMob(true);
                            }}
                        >
                            Referanser
                        </h2>
                        </div>
                    </div>

                    {/* Nav-boks for desktop variant */}
                    <div className='DESKTOP-CARDS hidden cursor-pointer   md:p-5 md:visible text-white border-b-2 border-b-[#394F3B]  md:flex md:w-full md:justify-evenly md:text-center md:mx-auto md:my-5 place-content-center lg:max-w-[1120px] center'>
                        <h2
                            className='text-2xl '
                            onClick={() => {
                                DeactivateState();
                                setPrepare(true);
                            }}
                        >
                            Forberedelse
                        </h2>
                        <h2
                            className='text-2xl '
                            onClick={() => {
                                DeactivateState();
                                setPersonality(true);
                            }}
                        >
                            Personlighetstester
                        </h2>
                        <h2
                            className='text-2xl '
                            onClick={() => {
                                DeactivateState();
                                setReference(true);
                            }}
                        >
                            Referanser
                        </h2>
                    </div>
                </section>

                <div className="hidden md:block">
                    <IntervjuNavBox prepare={prepare} />
                    <PersonlighetstesterNavBox personality={personality} />
                    <ReferanserNavBox reference={reference} />
                </div>
                <div className=" md:hidden">
                    <IntervjuNavBoxMobile prepareMob={prepareMob} />
                    <PersonlighetstesterNavBoxMobile personalityMob={personalityMob} />
                    <ReferanserNavBoxMob referenceMob={referenceMob} />
                            
                </div>
            </main>
        </>
    );
}
