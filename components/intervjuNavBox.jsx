import Questions from "@/components/questions";
import { useState } from "react";

export default function IntervjuNavBox({ prepare }) {
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
            <div className={`flex ${prepare ? "content" : "hidden"}`}>
                <div className='mb-6 '>
                    <ul className='my-auto text-2xl w-60 text-whit center'>
                        <li
                            className={`h-20 flex justify-start pl-5 items-center text-center cursor-pointer ${
                                preperationContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setPreperationContent(!preperationContent);
                            }}
                        >
                            Forbredelser
                        </li>
                        <li
                            className={`h-20 flex justify-start pl-5 items-center text-start cursor-pointer ${
                                whatIfContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setWhatIfContent(!whatIfContent);
                            }}
                        >
                            Hva vil jeg bli spurt om?
                        </li>
                        <li
                            className={`h-20 flex justify-start pl-5 items-center text-center cursor-pointer ${
                                fiveClassicsContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setFiveClassicsContent(!fiveClassicsContent);
                            }}
                        >
                            5 Klassikere
                        </li>
                        <li
                            className={`h-20 flex justify-start pl-5 items-center text-start cursor-pointer ${
                                toAskContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setToAskContent(!toAskContent);
                            }}
                        >
                            Hva skal jeg spøre om?
                        </li>
                    </ul>
                </div>
                <div>
                    <section
                        className={`w-full ${
                            preperationContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-6 '>
                            <h2>Intervjuforberedelser</h2>
                            <h3 className='mt-4'>
                                Å være godt forberedt gir bedre resultater!
                            </h3>
                            <p className='my-4'>
                                Gjør research om bedriften på internett eller
                                via folk som kjenner bedriften. Finn ut hvor
                                bedriften ligger rent fysisk. Bruk gjerne
                                internett. F.eks. VisVeg Finn ut om bedriften
                                har suksess/gode resultater. Forbered svar til
                                sannsynlige intervjuspørsmål. Finn ut hva du
                                skal ha på deg. Man skal prøve å «matche» dem
                                man skal treffe. Gjør klar de dokumentene du
                                skal ha med deg. Ta gjerne med CV,
                                dokumentliste, attester og vitnemål. Gjør klar
                                spørsmål du ønsker å stille. Er du ikke
                                forberedt får du ikke jobben.
                            </p>
                            <h3 className='mt-4'>På intervjustedet:</h3>
                            <p className='my-4'>
                                Vær tidlig ute, men ikke for tidlig. Følg husets
                                innsjekkingsformaliteter (skrive seg inn,
                                besøkskort, e.l.) Ta deg tid til å roe deg ned.
                                Har du stresset så få pusten tilbake. Sjekk
                                utseende/klær. Skjeve slipsnåler, vrengte
                                krager, løse hårnåler, osv. Vent på å bli
                                hentet. Bruk ventetiden til å observere folk og
                                lokale.
                            </p>
                            <h3 className='mt-4'>Intervjuteknikk:</h3>
                            <p className='my-4'>
                                Presenter deg tydelig og ha et fast og godt
                                håndtrykk. Førsteinntrykk er viktig. Hvis det er
                                flere intervjuere, så finn ut hvilke roller de
                                har. Vær engasjert når de forteller om
                                bedriften. Tenk på øyekontakt. Vær høflig og
                                vennlig. Sitt ordentlig i stolen. Vær deg selv!
                                Still jobbrelaterte spørsmål. Lytt til
                                spørsmålene og svar. Dette er viktigere enn man
                                tror. Match din kompetanse til deres behov. Bruk
                                eksempler når du svarer. Vær positiv Være
                                sensitiv i forhold til intervjuer, se etter
                                signaler på at vedkommende kjeder seg. Spør om
                                videre fremdrift. Forsøk å få et nytt intervju
                                gjennom god opptreden, gode spørsmål og gode
                                svar.
                            </p>
                            <h3 className='mt-4'>Intervju «dont’s»:</h3>
                            <p className='my-4'>
                                Ikke røyk eller tygg tyggegummi. Ikke drikk
                                alkohol eller spis hvitløk før intervjuet Ikke
                                kritiser nåværende eller tidligere kollegaer
                                eller arbeidsgiver. Ikke spør om lønn. Unngå å
                                bare svare ja og nei. Ikke prøv å være
                                «kjempekompis» Vis motivasjon men ikke stress på
                                for å få en avgjørelse raskt. Ikke vis engstelse
                                eller kjedsomhet. Ikke begi deg inn på
                                diskusjoner om kjønn, religion, alder etc.
                            </p>
                            <h3 className='mt-4'>Hva intervjuere ser etter:</h3>
                            <ul className='mt-4'>
                                <li>Profesjonell og teknisk kompetanse</li>
                                <li>Arbeidsmoral</li>
                                <li>Personlighet og talent</li>
                                <li>Helse</li>
                                <li>«The fit factor»</li>
                            </ul>
                        </div>
                    </section>
                    <section
                        className={`w-full ${
                            whatIfContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-8 '>
                            <h2 className='mt-4'>
                                De 50 vanligste spørsmålene du blir stilt
                            </h2>
                            <div className='mt-4'>
                                <ol className='flex flex-col gap-3 text-black '>
                                    {Questions.map((Questions) => (
                                        <li>{Questions}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section
                        className={`w-full ${
                            fiveClassicsContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-6 '>
                            <h2 className='mt-4'>5 Klassikere</h2>
                            <p className='my-4'>
                                Det er noen spørsmål som nesten alltid går
                                igjen. Dette er spørsmål som kan skape hodebry
                                for dem som ikke er forberedt, men som kan gå
                                som en drøm hvis man har tenkt gjennom hva man
                                skal svare.
                            </p>
                            <h3 className='py-4'>
                                1. Fortell om deg selv.(spm.1)
                            </h3>
                            <p className='my-4'>
                                Tips: Her er det om å gjøre å kunne gi
                                intervjueren et godt bilde av deg og hva du har
                                gjort på en uanstrengt måte. Fremgangsmetoden
                                kan være som følger: fortell kort om dine
                                personalia og familie/bosituasjon i dag,
                                fortelle deretter kronologisk hva du gjorde for
                                eksempel fra ungdomsskolen eller gymnaset og
                                frem til i dag, deretter kan du krydre på med å
                                fortelle litt om interesser, verv medlemskap
                                eller lignende. For å få med alle moment det
                                være stor fordel å bruke CV som en huskeliste.
                                Hvis du får angitt tid for besvarelse så tilpass
                                deg i forhold til det.
                            </p>
                            <h3 className='py-4'>
                                2. Hvorfor vil du jobbe hos oss?(spm.5)
                            </h3>
                            <p className='my-4'>
                                Tips: Skryt litt av selskapet (det liker de
                                alltid). Bruk muligheten til å fortelle at din
                                kompetanse og arbeidsmåte passer veldig bra med
                                slik du har oppfattet selskapet.
                            </p>
                            <h3 className='py-4'>
                                3. Hvorfor skal vi velge deg og ikke en av de
                                andre kandidatene?(spm.10)
                            </h3>
                            <p className='my-4'>
                                Tips: Hvis du ikke har fått solgt deg inn på
                                forrige spørsmål så er dette muligheten til å
                                selge seg selv inn. Få frem at du har alle
                                forutsetninger for å gjøre det bra i denne
                                jobben, relatér tidligere relevant erfaring med
                                den jobben du har søkt på (bruk eksempler), si
                                at du mener du vil passe inn sosialt sett, få
                                frem at du er motivert for jobben, osv. Til
                                tross for at dette kan bli en lang tirade av
                                selvskryt skal du få frem at det sikkert er
                                mange gode søkere, men at du likevel mener å
                                kunne tilføre det lille ekstra.
                            </p>
                            <h3 className='py-4'>
                                4. Nevn 3 sterke og 3 svake sider.(spm.13)
                            </h3>
                            <p className='my-4'>
                                Tips: Her er klassikeren over alle klassikere.
                                De tre sterke sidene klarer de fleste å få frem
                                på en utmerket måte så det bruker vi ikke tid på
                                her. Utfordringen ligger i å formidle de svake
                                sidene. Kunsten er å få frem en side som ikke er
                                utpreget negativ, men som kan ha en positiv
                                vinkling også. Typisk eksempel: Jeg kan noen
                                ganger jobbe fordype meg litt vel mye i en
                                oppgave, MEN det er fordi jeg anser oppgaven som
                                meget viktig i forhold til potensielle senere
                                følgefeil.Med dette har man oppveiet det svake
                                med noe positivt. En annen variant som selgerne
                                bruker er: Jeg er litt rastløs. Med dette har en
                                potensiell selger svart det som en salgsleder
                                fint kan akseptere og som han gjerne vil prøve å
                                utnytte til noe positivt. Det viktigste er at
                                man ikke sitter stille og roter seg inn en
                                pinlig stillhet uten svar. Det er nok av folk
                                som har følt at denne delen av intervjuet gikk
                                så dårlig at man har prestert dårlig på resten
                                av intervjuet. På den annen side skal man vite
                                at intervjueren nødvendigvis ikke er på jakt
                                etter selve svarene, men faktisk hvordan du er i
                                stand til å besvare et slikt spørsmål. PS. Har
                                man ingen svake sider er jeg stygt redd for at
                                du gikk i fellen som heter manglende
                                selvinnsikt!
                            </p>
                            <h3 className='py-4'>
                                5. Vurderer du andre stillinger for
                                øyeblikket?(spm.26)
                            </h3>
                            <p className='my-4'>
                                Tips: Er svaret nei kan du underbygge det med at
                                det er nøyaktig DENNE jobbe du vil ha. Er svaret
                                ja kan du vinkle det til at du har ettertraktet
                                kompetanse som markedet etterspør, men at du
                                prioriterer denne jobben svært høyt. Uansett
                                skal du ikke gå i fellen med å ytre at du
                                egentlig ønsker å jobbe et helt annet sted eller
                                i en helt annen type stilling.
                            </p>
                            <h2 className='py-4 '>5 Klassikere. Del 2</h2>
                            <h3 className='py-4 '>
                                1. Hvorfor sluttet du i forrige jobb, evt.
                                ønsker å forlate nåværende jobb? (spm.2)
                            </h3>
                            <p className='my-4'>
                                Tips: Svaret kan være så mangt, men fortell for
                                all del ikke noe negativt om arbeidsgiver.
                            </p>
                            <h3 className='py-4'>
                                2. Hvorfor var du arbeidsledig så lenge?(spm.18)
                            </h3>
                            <p className='my-4'>
                                Hadde du karantenteperiode fra forrige
                                arbeidsgiver er alt ok. Har du innvilget deg en
                                pause etter et langt arbeidsliv så kan det også
                                fortelles på en troverdig måte. Har du vært i en
                                kriseutsatt bransje (it-bransjen da boblen
                                sprakk) kan du søke forståelse for at det var
                                vanskelig å få jobb. Har du ingen god grunn må
                                du kamuflere svaret, men selvfølgelig uten
                                usannheter. F.eks . sykdom i nærmeste familie,
                                bygget hus selv i stedet for å kjøpe tjenesten,
                                osv.
                            </p>
                            <h3 className='py-4 '>
                                3. Hva frustrerte deg i din tidligere jobb,
                                sjefen, kollegaer….??(spm.30)
                            </h3>
                            <p className='my-4'>
                                Tips: Her vil de ha deg ut på glattisen. Hold
                                deg for god til å kritisere andre.
                            </p>
                            <h3 className='py-4'>
                                4. Hvorfor har du byttet jobber så ofte?(spm.19)
                            </h3>
                            <p className='my-4'>
                                Tips: Her er det vanskelig å gi et tips siden
                                alle har forskjellig sammensetning av bakgrunn.
                                Prøv likevel å komme med gode argumenter for
                                ulike jobb- overganger. Et jobbskifte kan for
                                eksempel skyldes flytting, bedriften la ned,
                                høyere lønn, større personlige utfordringer,
                                osv.
                            </p>
                            <h3 className='py-4'>
                                5. Hvor mye ønsker du å tjene?(spm.50)
                            </h3>
                            <p className='my-4'>
                                Tips: Forhandlingsteknikk innen lønn kunne jeg
                                skrevet flere sider om alene, men her holder vi
                                oss til kortversjonen. Noen ganger er lønnen
                                satt i forhold til tariff og da er er jo saken
                                grei. Andre ganger er det imidlertid
                                forhandlinger som må på banen. Til syvende og
                                sist skal intervjuer sitte igjen med følelsen av
                                at her er det mulighet for å komme til enighet.
                                Ikke la konkrete lønnskrav diskvalifisere deg på
                                et tidlig stadie. Din forrige lønn kan være et
                                utgangspunkt hvis det passer i forholdt til
                                situasjonen. Man skal også vite at bruttolønn
                                ikke er eneste nøkkelen til god økonomi. Får man
                                fri telefon, avis, adsl, firmabil, e.l. så kan
                                det kompensere for mye bruttolønn. Man skal dog
                                være observant på skattereglene i disse tider
                                hvor frynsegoder forfølges (Vinmonopolet m.fl.).
                            </p>
                        </div>
                    </section>
                    <section
                        className={`w-full ${
                            toAskContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-6 '>
                            <h2>Spørsmål du kan stille selv</h2>
                            <h3 className='py-4'>Om selskapet:</h3>
                            <p className='my-4'>
                                Fortell meg litt mer om selskapet. Fortelle meg
                                litt mer om produktene/tjenestene deres.
                            </p>
                            <h3 className='py-4'>Om jobben:</h3>
                            <p className='my-4'>
                                Er dette en nyopprettet stilling eller er det en
                                som slutter? Hva er totalt antall personer i
                                denne avdelingen (divisjonen)? Hvem kommer jeg
                                til å jobbe sammen med? Hva slags resultater
                                forventes det av meg? Hva slags oppgaver er det
                                første jeg vil måtte gå løs på? Finnes det en
                                skriftlig jobb-beskrivelse? Hva slags konkrete
                                utfordringer vil jeg måtte håndtere? Kan du
                                beskrive mitt ansvarsområde? Hvordan bli min
                                myndighet på dette området? Hvem rapporterer
                                stillingen til? Er det etablert et budsjett? For
                                øvrig vil du finne mange spørsmål etterhvert som
                                intervjuet går sin gang. Grip mulighetene til å
                                få svar på ting, samt at du samtidig viser
                                engasjement.
                            </p>
                            <h3 className='py-4'>Om karrieremuligheter:</h3>
                            <p className='my-4'>
                                Hvordan er fremtiden i bedriften hvis man gjør
                                en god jobb? Hvordan blir man introdusert til
                                muligheter som måtte åpne seg? Er det folk som
                                har jobbet seg oppover i bedriften allerede?
                                Ikke still så mange spørsmål at det virkes som
                                om du ikke er interessert i stillingen du
                                intervjues for.
                            </p>
                            <h3 className='py-4'>Om prosessen:</h3>
                            <p className='my-4'>
                                Er det noen områder der du er i tvil om min
                                kompetanse? Finnes det noen tvil om min evne til
                                å fylle denne stillingen? Hvordan er prosessen
                                videre, når tar dere evt. beslutning? Hvor mange
                                søkere er det? Hvordan ser du min mulighet? Er
                                det trolig at jeg vil gå videre? Spørsmålene
                                stilles for å rette opp i evt dårlige inntrykk
                                eller manglende argumentering for kunnskap.
                            </p>
                            <h3 className='py-4'>Målet med intervjuet:</h3>
                            <p className='my-4'>
                                Ditt mål er å få et jobb tilbud ved å overbevise
                                intervjueren om at: Du kan GJØRE jobben. Bevis
                                din dyktighet og erfaring gjennom eksempler. Du
                                har LYST på jobben. Still spørsmål. Vis at du
                                kan mye om jobben, firmaet og bransjen. Du
                                PASSER i jobben. Still spørsmål om alt som kan
                                overbevise om at DU passer inn.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
