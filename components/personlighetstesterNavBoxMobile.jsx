import { useState } from "react";
import Image from "next/image";
import schema from "../images/intervju/cattel.png";

export default function PersonlighetstesterNavBoxMobile({ personalityMob }) {
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
            <div className={`flex flex-col ${personalityMob ? "content" : "hidden"}`}>
                <div>
                    <ul className='pb-8 mx-auto text-2xl w-60 text-whit center'>
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
                            Tips
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
                            Gjennomføring
                        </li>
                        <li
                            className={`h-20 flex justify-start pl-3 items-center text-center cursor-pointer ${
                                fiveClassicsContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setFiveClassicsContent(!fiveClassicsContent);
                            }}
                        >
                            Vær Forberedt
                        </li>
                        <li
                            className={`h-20 flex justify-start pl-3 items-center text-center cursor-pointer ${
                                toAskContent
                                    ? "bg-[#394F3B] text-white"
                                    : " bg-transparent"
                            }`}
                            onClick={() => {
                                DeactivateState();
                                setToAskContent(!toAskContent);
                            }}
                        >
                            Tester
                        </li>
                    </ul>
                </div>
                <div>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            preperationContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-8 '>
                            <h2 className='my-4 font-bold'>Personlighetstester</h2>
                            <p>
                                Personlighetstester er oftest brukt av
                                rekrutteringsselskap, og ofte i forbindelse med
                                ansettelse på mellomledernivå eller høyere.
                                Testene brukes likevel også i forbindelse med
                                andre stillinger der oppdragsgiver og
                                rekrutteringsselskapet finner det nødvendig å
                                finne ut at kandidaten har de riktige personlige
                                egenskapene i tillegg til den tekniske
                                kompetanse (evnen til å utføre selve arbeidet).
                                Personlighetstestene må ikke forveksles med
                                typiske raske målbare evne-tester som gjøres hos
                                en del vikarbyrå (word-test, engelsk-test,
                                touchmetode-test, synonymord-test,
                                rettskrivningstest, osv.)
                            </p>
                            <p className='mt-4'>
                                Man kan forberede seg og forbedre seg til
                                evnetester, men når det gjelder
                                personlighetstester skal man bare være forberedt
                                på å kunne formidle hvem man er. Det er altså
                                ingen trylleformel for å «gjøre det bra».
                            </p>

                            <h3 className='mt-8'>
                                «Inside»-tips i forbindelse med
                                personlighetstester.
                            </h3>
                            <p>
                                Det finnes hundrevis av tester som brukes i
                                markedet, men det er stor spredning i utbredelse
                                og kvalitet. Grunnet omfanget er det vanskelig å
                                forberede seg til en spesiell type test, men som
                                tidligere nevnt er det ikke spesielle
                                forberedelser forbundet med personlighetstester
                                likevel. Jeg vil likevel prøve å gi noen tips
                                her slik at man vet hva man går til.
                            </p>
                            <h3 className='mt-8'>Klassisk fremdrift.</h3>
                            <p>
                                Det er ofte vanlig at det er ca 100 søkere på
                                jobber som skal besettes. Personlighetstester og
                                intervju er relativt tidkrevende og kostbart så
                                det sier seg selv at man ikke kan teste alle de
                                100. Det er vanlig at man tar inn ca 10 personer
                                til førstegangsintervju. Dette intervjuet varer
                                ca 30-60 minutter. Ut i fra dette sitter man
                                gjerne igjen med ca 2-6 kandidater man ønsker å
                                gå videre med. Disse innkalles da til
                                gjennomføring av test. Testens varighet er ca 1
                                time og er et utgangspunkt for et dybdeintervju
                                som kan skje samme dagen eller senere. Dette er
                                som nevnt det normale, men det finnes også
                                tilfeller hvor man skal testes i evner også.
                                Testdagen kan da bli opp mot 4-5 timer inkludert
                                personlighetstest, tallfølger, synonymord-test,
                                engelstest, osv. Vi vil likevel holde videre
                                fokus på selve personlighetstesten i denne
                                artikkelen. Det skal også nevnes at vi vil legge
                                fokus på de litt tyngre testene og ser da bort
                                fra en del 10 minutters hobbytester som finnes.
                            </p>
                            <h3 className='mt-8'>Omfang og tid.</h3>
                            <p>
                                En personlighetstest består ofte av relativt
                                mange spørsmål. Ca 100-150 spørsmål er ganske
                                vanlig. Ofte skal man sette kryss for ulike
                                valg, men det finnes også tester hvor man skal
                                fullføre setninger. Tid for gjennomføring
                                varierer, men er ofte på ca 1 time. Det skal dog
                                nevnes at det som oftest ikke er satt
                                tidsfrister på gjennomføring av oppgaven, men
                                leseren som skal vurdere testen vil ofte se på
                                tidsbruken som en indikasjon på hvor hurtig du
                                jobber. Selv om det ikke vedrører testen er det
                                interessant at noen gjør testen på ca 30
                                minutter mens andre kanskje bruker opptil 90
                                minutter.
                            </p>
                        </div>
                    </section>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            whatIfContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-8 '>
                            <h2 className='my-4'>Gjennomføring.</h2>
                            <p>
                                I utgangspunktet har man ikke dårlig tid, men
                                hvis man skal sitte og fundere på hvert spørsmål
                                så vil det enda med at du har brukt svært lang
                                tid på testen. Grunntanken er at du skal krysse
                                av/svare det første som slår deg inn. Dette er
                                som oftest det riktige også. Man kan oppleve at
                                man har fått nesten samme spørsmålet for «ca 40
                                spørsmål siden». Dette er i grunnen meningen.
                                Man skal vite at det kan være flere tilfeller av
                                skjult kontroll underveis som skal sikre at
                                personen ikke har prøvd å lure testen. Noen
                                ganger kan man oppleve å få samme spørsmålet men
                                med en litt annen vridning. Det kan bli ganske
                                flaut hvis man har ytret to ulike holdnings
                                eller- adferdsmønstre fordi man prøvde å være
                                «smart». Man skal altså svare raskt og greit
                                uten å prøve å lure testen. Noen tester er
                                selvfølgelig lettere å lure enn andre, men i
                                værste fall ender du opp med en jobb hvor
                                personligheten din ikke passer. Når du sitter
                                misfornøyd etter 3 måneder i jobben kan man jo
                                spørre seg hvor lurt det var.
                            </p>
                            <h3 className='mt-8'>Normativ – ipsativ.</h3>
                            <p>
                                Når man gjennomfører testen vil samme svar kunne
                                slå ut i normativ og ipsativ vurdering, og dette
                                er nettopp grunnstammen i hele analysen. For å
                                forstå sammenhengen av dette har jeg dristet meg
                                til å lage en veldig kort forklaring på
                                uttrykkene:
                                <br /> Normativ: Personen sett ut i fra en norm.
                                Dvs sett i forhold til et kvalitativt utvalg av
                                lignende folk som har tatt samme testen. Rent
                                matematisk vil man regne ut hvordan du har svart
                                i forhold til alle de andre. Jo større
                                sammenligningsgrunnlag – jo bedre kvalitet. Man
                                kan ofte måle det slik at med de svarene
                                kandidaten har gitt så virker han som en bedre
                                f.eks. prosjektleder enn andre. Dette sett ut i
                                fra høy score på de elementene som ansees som
                                viktig for en prosjektleder.
                                <br /> Ipsativ: Personen sett ut i fra eget syn.
                                Svarene er ypperlig i forhold til å måle
                                selvinnsikt. Grovt sett kan man si det slik: En
                                person trenger ikke å være en god kommunikatør
                                selv om han tror det selv. Det er nok av dem som
                                tror noe annet om seg selv enn det intervjueren
                                oppfatter. Ipsativ vurdering av svarmaterialet
                                er altså et godt grunnlag for
                                samtaler/dybdeintervju. Til informasjon er
                                manglende selvinnsikt aldri noe godt tegn.
                            </p>
                            <h3 className='mt-8'>
                                Analyse/<br />vurdeing og bruk av testen.
                            </h3>
                            <p>
                                Selve testen er ofte laget av psykologer som har
                                brukt lang tid og mye ressurser på å utvikle
                                denne. De seriøse selskapene har også en
                                psykolog blant dem som ofte er test-ansvarlig.
                                Man skal være sertifisert for å bruke mange av
                                testene. Det viser seg imidlertid at det er mye
                                slett arbeid her. Dette skyldes noen ganger at
                                selskap har kjøpt inn tester og slipper til både
                                autoriserte og ikke autoriserte til å bruke
                                dette verktøyet. Mange kandidater får aldri
                                tilbakemelding fra testen de har tatt. De blir
                                heller ikke konfrontert med utsagn i testen og
                                skjønner dermed ikke hvorfor de har tatt den.
                                Andre igjen føler at de får svært ukvalifisert
                                vurdering ut i fra testen. De fleste
                                rekrutteringsselskap har for øvrig dette som et
                                av sine spesialfelt og pleier å gjøre dette på
                                en kvalitetssikret måte. Her følger et eksempel
                                på strukturert bruk av testen.
                            </p>
                            <p className='my-4'>
                            – Diskutere testresultatet med kandidaten.
                                </p>
                                <p className="my-4">
                                – Kandidaten involveres aktivt i tolkning og
                                nyansering av resultatet.
                                </p>
                                <h3>
                                Hypoteser:
                            </h3>
                            <ul>
                                <li>– Bekreftet</li>
                                <li>– Avkreftet</li>
                                <li>– Eksemplifisert</li>
                            </ul>
                            <h3 className='mt-4'>
                                Oppsummere styrker og utviklingsområder.
                            </h3>
                            <ul>
                                <li>– Gir råd til kandidaten.</li>
                                <li>– Konkluderer en kandidatbeskrivelse.</li>
                                <li>– Klargjør momenter til referansesamtaler.</li>
                            </ul>
                            <p className='my-4'>
                                Når det gjelder selve vurderingen av testen så
                                er den altså et utgangspukt for et dybdeintervju
                                og da med normativ og ipsativ vurdering som
                                grunnlaget for samtalen. Med dette som
                                utgangspunkt vil man faktisk kunne lære mer om
                                seg selv. Samtalen kan altså ha stor verdi selv
                                om du ikke får jobben.
                            </p>
                        </div>
                    </section>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            fiveClassicsContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-6 '>
                            <h2 className='mt-4'>Vær Forberedt</h2>
                            <p className="mb-4"> <a
                                className='text-sm italic'
                                href='https://www.stepstone.com/en/'
                                target={"_blank"}
                            >
                                Kilde: Stepstone
                            </a>
                            </p>
                            <p>
                                Det blir i dag mer og mer vanlig å bruke
                                personlighetstester ved utvelgelse av nye
                                medarbeidere. Les videre og vær forberedt!
                                <br />
                                Som et ledd i det å finne den riktige kandidaten
                                til stillingen som er utlyst, bruker flere og
                                flere bedrifter ulike former for
                                personlighetstester. Det finnes et stort utvalg
                                av slike tester på det norske markedet. Alle
                                konsulentselskap som bistår ved utvelgelser har
                                sine egne tester. Dette gjelder også større
                                firmaer. I tillegg finnes det et stort utbud av
                                tester som mindre firmaer kjøper.
                                <br />
                                Målet med testene er å finne personer som passer
                                inn i det klima som allerede finnes i
                                organisasjonen. I tillegg til å yte en god jobb
                                faglig, har bedriftsledere sett viktigheten av
                                at medarbeidere også fungerer godt sosialt.
                                Ulike miljøer og arbeidsoppgaver krever ulike
                                personligheter. Salgsorganisasjoner kan se etter
                                utpregede sosiale, pågående og selvsikre
                                personer, mens for et revisjonsbyrå vil kanskje
                                nøyaktighet og flid være de viktigste faktorene
                                ved en utvelgelse.
                                <br />
                                Testene er gjerne utformet som et langt
                                spørreskjema hvor man har flere svar muligheter.
                                Det gjelder da å finne det svaret som passer
                                best for deg. Det er også vanlig å ha en rekke
                                påstander man skal vurdere passer til en selv.
                                Det er også viktig å være ærlig når en
                                gjennomfører en slik test. Gode tester vil kunne
                                avsløre bløff, og du vil få en sprikende
                                personlighet. Klarer du likevel å bløffe testen,
                                vil du i verste fall få en jobb som du slett
                                ikke passer inn i.
                                <br />
                                Testene er ofte kategoriske og blir kun brukt
                                som et supplement til intervjuer, referanser,
                                vitnemål og attester. Enkelte firmaer har en mal
                                på hvordan man ønsker at medarbeidere skal
                                fungere og tenke. Dette er gjerne bedrifter med
                                en klar og uttalt profil. Personlighetstesten er
                                da gjerne en god pekepinn på om kandidaten er
                                noe å satse på.
                                <br />
                                En enkel test tar gjerne mellom ti og tretti
                                minutter. Det gjelder å bruke denne tiden godt.
                                Sørg for at du har forstått hvordan testen
                                utføres. Les gjerne gjennom spørsmålene raskt
                                først. Start på toppen av listen og arbeid deg
                                systematisk nedover. Er det spørsmål du lurer
                                på, svar på disse til slutt. Det er viktig at
                                man besvarer alle spørsmålene og ikke lar noe
                                stå igjen. Ubesluttsomhet er aldri et godt
                                personlighetstrekk.
                            </p>
                            <h2 className='mt-8'>
                                Personligheten kan gi deg jobb.
                            </h2>
                            <p className="mt-2 font-semibold">
                                Jobbintervjuet er ikke lenger det eneste nåløyet
                                du må passere hvis du vil bytte jobb. Nå er det
                                personlighetstester som gjelder, også i helt
                                vanlige jobber.
                            </p>
                            <p className='my-4 text-sm italic'>
                                Kilde: Heidi Ertzeid Tirsdag 08.06.2004
                            </p>
                            <p className='my-4'>
                                Før var det vanligst å bruke slike tester for å
                                finne ut hvilke psykiske problemer folk hadde å
                                stri med. Nå eksploderer bruken av
                                personlighetstester i jobbsammenheng. Din
                                kommende sjef mener ikke lenger at et intervju
                                er nok for å finne ut om du er egnet til jobben
                                du søker på. Derfor må du belage deg på å ta en
                                personlighetstest.
                            </p>
                            <h2 className='mt-8'>
                                I tida – antall firma som leverer
                                personlighetstester har økt kraftig.
                            </h2>
                            <p className='mt-2'>
                                Testbruk er mer og mer vanlig. Vi får stadig
                                nye tester og aktører. Den siste tida har det
                                også blitt mer vanlig å teste personlighet på
                                alle nivåer, for eksempel også ved ansettelser
                                av sekretærer, sier Ole I. Iversen. Han har
                                doktorgrad i psykologi og har vurdert de nærmere
                                30 testene som brukes i Norge i dag. Professor i
                                psykologi Hilmar Nordvik ser den samme trenden.
                                <br />– Slike tester er veldig i tida. Man finner spor
                                av personligheten til folk overalt, og det har
                                de som ansetter etter hvert begynt å skjønne.
                                Kunnskap er ikke nok for å kunne mestre en jobb.
                            </p>
                            <h2 className='mt-4'>Testene kan lures</h2>

                                <p className="mt-2 font-semibold"> Hittil er personlighetstester brukt mest
                                i jobber der sosiale evner er viktige, som for
                                eksempel ledere, selgere og konsulenter.</p>
                            
                            <p className='my-4'>
                                Selv om de fleste testene har mange spørsmål som
                                stilles på mange forskjellige måter, går det an
                                å lure dem.{" "}
                                <span className='font-semibold '>
                                    – Vet du hvilke egenskaper firmaet du søker
                                    jobb hos vil ha, kan du greie å lure testen,
                                    sier Hilmar Nordvik.
                                </span>{" "}
                                Likevel mener han at de aller beste testene på
                                markedet er mer eller mindre vanntette.
                            </p>
                            <h2 className="mt-8">Kvalitetsopprensking</h2>
                            <p className='mt-2 font-semibold'>
                                {" "}
                                – Disse testene har spørsmål som fanger opp om
                                du er for opptatt av å gi et godt inntrykk.
                                Problemer med slike tester er at det kommer
                                veldig an på personen som tolker
                                testresultatene. Man kan komme til å tolke mer
                                ut av resultatene enn man har dekning for, sier
                                Nordvik.
                            </p>
                            <h3 className='mt-8'>
                                I mengden av personlighetstester er det ikke
                                alle som holder mål.
                            </h3>
                            <p className='mt-2'>
                                – Det kunne godt å ha vært en
                                kvalitetsopprensking på området. Det finnes en
                                del korte tester som brukes ukritisk. Likevel er
                                det meste av testbruken i Norge ganske nøktern,
                                sier Nordvik.
                            </p>
                            <h3 className='mt-8'>
                                Eksempel på personlighetstest
                            </h3>
                            <ol className='mt-2'>
                                <li>
                                    Jeg foretrekker å bruke den tida som er
                                    nødvendig for å gjøre en oppgave grundig.
                                    (Pliktoppfyllende og systematisk).
                                </li>
                                <li>
                                    Jeg liker å treffe nye mennesker.
                                    (Utadvendt).
                                </li>
                                <li>
                                    Jeg kommer vanligvis tidsnok til avtaler.
                                    (Pliktoppfyllende og systematisk).
                                </li>
                                <li>
                                    Jeg pleier å være aktiv og ta ordet når
                                    flere er samlet. (Utadvendt).
                                </li>
                                <li>
                                    Jeg er flink til å overholde tidsfrister.
                                    (Pliktoppfyllende og systematisk).
                                </li>
                                <li>
                                    Jeg foretrekker å gå ut med venner framfor å
                                    ha en rolig kveld hjemme. (Utadvendt).
                                </li>
                            </ol>
                            <h2 className='mt-4'>
                                Kontrollspørsmål</h2>
                                <p className="mt-2"> For å sjekke om kandidaten har en tendens
                                til å framstille seg selv positivt benyttes
                                kontrollspørsmål, som disse:</p>
                            
                            <ol className='my-4'>
                                <li>Jeg hjelper alltid andre.</li>
                                <li>Jeg baksnakker aldri andre.</li>
                                <li>Jeg overskrider aldri fartsgrensene.</li>
                            </ol>
                            <p className='text-sm italic'>
                                Kilde: Ole I. Iversen
                            </p>
                        </div>
                    </section>
                    <section
                        className={`mx-3 xxs:mx-1 xs:mx-0 ${
                            toAskContent ? "content" : "hidden"
                        }`}
                    >
                        <div className='pb-8 ml-6 '>
                            <h2 className='mt-4'>
                                Dette ser de etter i 16 PF.
                            </h2>

                            <a
                                className='text-sm italic '
                                href='https://psykologtidsskriftet.no/oppsummert/2004/01/cattells-16pf5-i-norsk-utgave'
                                target={"_blank"}
                            >
                                Kilde: Cattel 16 PF, 5. versjon/Norsk
                                Psykologforening
                            </a>
                            <p className='my-4'>
                                Her er personlighetstrekkene arbeidsgiverne er
                                interessert i å vite noe om. Du vil bli stilt
                                flere spørsmål innen for hvert trekk. Ut fra
                                svarene du gir vurderer arbeidsgiveren om du er
                                egnet til en spesiell type arbeid. Du vil få en
                                samlet poengsum fra en til ti.
                                <br /> Eks.:{" "}
                                <p className='mt-2 italic'>
                                    Vil du jobbe i reklamebransjen, kan det
                                    lønne seg å være abstrakt i resonneringen,
                                    vil du bli forsker kan det lønne seg å være
                                    konkret i resonneringen.
                                </p>
                            </p>
                            <Image src={schema}></Image>
                            <h2 className='mt-4'>
                                Hva er 16 Personality Questionnaire <br />– 5.
                                versjon.
                            </h2>
                            <p className='my-4 text-sm italic'>
                                Testen er laget av Raymond Cattell m.fl.
                                <br />
                                Kilde: Assessio
                            </p>
                            <p className='my-4'>
                                Hensikt: Personlighetstest <br />
                                Alder: Voksne <br />
                                Språk:40 ulike språk bl.a.; norsk, svensk,
                                dansk, finsk, engelsk (Aus, UK, US, Can),
                                fransk, tysk, gresk, italiensk, portugisisk,
                                spansk, tyrkisk, kinesisk og japansk.
                            </p>
                            <p className='my-4'>
                                De 16 primære skalaene kan kombineres til 5
                                globale skalaer som gir en mer allmenn og
                                bredere bilde av personligheten uttrykt gjennom
                                begrepene:
                            </p>
                            <ul className='my-4'>
                                <li><span className="font-medium">Ekstraversjon</span> (ekstravert – introvert)</li>
                                <li><span className="font-medium">Angst</span> (lav angst – høy angst)</li>
                                <li><span className="font-medium">Tøffhet</span> (mottakelig – tøff)</li>
                                <li><span className="font-medium">Uavhengighet</span> (medgjørlig – egenrådig)</li>
                                <li><span className="font-medium">Selvkontroll</span> (ukontrollert – høy selvkontroll)</li>
                            </ul>
                            <h3 className='mt-4'>
                                Komme i gang</h3>
                                <p className="font-medium"> For å benytte 16PF må du være sertifisert
                                i verktøyet og lisensiert hos Assessio. Se våre
                                kursdatoer for 16PF under utdanning på våre
                                hjemmesider.</p>
                            <p className='my-4'>
                                <span className='italic '>
                                    16PF Tolkningsguide
                                </span>{" "}
                                (Lord, 2000) er en bok som gir en enkel og
                                pedagogisk beskrivelse av hvordan kombinasjoner
                                av poengverdiene kan tolkes. Forskjellige
                                tolkningsmuligheter av poengverdiene som faller
                                innenfor normalintervallet vies stor
                                oppmerksomhet. De prinsippene som presenteres
                                for tilbakemeldingssamtalene gir støtte til en
                                effektiv tilbakemelding av resultatet på 16 PF.
                                I 16 PF introduksjonspakke inngår: Svensk
                                Manual, 10 stk spørrehefte, 10stk *
                                svarblanketter, 10 stk* profiloversikt, samt 10
                                stk* blanketter for sammenfatning av
                                testresultat.
                            </p>

                            <h2 className='mt-8'>
                                Hva er Hogans personlighetsinventorium – HPI.
                            </h2>
                            <p className='my-4 text-sm italic'>
                                Testen er laget av Joyce & Robert Hogan
                                <br />
                                Kilde: Assessio
                            </p>
                            <p className='my-4'>
                                Hensikt: Personlighetstest
                                <br /> Alder: Voksne
                                <br /> Språk: Norsk
                            </p>
                            <p className='my-4'>
                                Hogans personlighetsinventorium, HPI, er en
                                personlighetstest først og fremst utviklet for
                                bruk innen arbeidslivet. Bruksområder er
                                rekruttering, utvelgelse, lederutvikling og
                                karriereplanlegging.
                                <br /> HPI gir informasjon om personlige
                                karakteristika som kommer til uttrykk i sosialt
                                samspill og som fremmer, eller hemmer, en
                                persons evne til å oppnå sine mål når det
                                gjelder utdanning og arbeidsliv. HPI bygger på
                                mange års forskning knyttet til
                                femfaktormodellen, Big Five.
                            </p>
                            <p className='my-4'>
                                HPI inneholder 7 primære personlighetsskalaer:
                            </p>
                            <ul className='my-4'>
                                <li>
                                    – <span className="font-medium">Tilpasning</span> (grad av emosjonalitet,
                                    stressmestring, selvkritikk)
                                </li>
                                <li>
                                    – <span className="font-medium">Ambisjon</span> (måler holdning til yrkesmessige
                                    mål og innstilling til karriere)
                                </li>
                                <li>
                                    – <span className="font-medium">Selskapelighet</span> (i hvilken utstrekning en
                                    person har behov for/ setter pris på sosial
                                    interaksjon)
                                </li>
                                <li>
                                    – <span className="font-medium">Sympatiskhet</span> (måler taktfølelse,
                                    vennskapelighet, lydhørhet)
                                </li>
                                <li>
                                    – <span className="font-medium">Ordentlighet</span> (grad av
                                    selvkontroll/impulsivitet, nøyaktighet)
                                </li>
                                <li>
                                    – <span className="font-medium">Intellektualitet</span> (skalaen berører
                                    livsstilsspørsmål, originalitet, innstilling
                                    til rutinearbeid)
                                </li>
                                <li>
                                    – <span className="font-medium">Studieinteresse</span> (speiler i hvilken
                                    utstrekning en person trives med
                                    ”akademiske” aktiviteter og kunnskap)
                                </li>
                            </ul>
                            <p className='my-4'>
                                Forskning har identifisert et antall
                                yrkesskalaer. Disse skalaene gir et direkte mål
                                på hvor godt personen er skikket til visse typer
                                av arbeidsoppgaver:
                            </p>
                            <ul className='my-4'>
                                <li>
                                    – <span className="font-medium">Serviceinnstilling</span> (identifiserer personer
                                    som er vennlige, morsomme, hjelpsomme)
                                </li>
                                <li>
                                    – <span className="font-medium">Stresstoleranse</span> (identifiserer personer som
                                    kan håndtere stress godt)
                                </li>
                                <li>
                                    – <span className="font-medium">Integritet</span> (identifiserer ærlige, pålitelige
                                    personer)
                                </li>
                                <li>
                                    – <span className="font-medium">Administrativt potensial</span> (identifiserer
                                    nøyaktige og produktive personer med blikk
                                    for detaljer)
                                </li>
                                <li>
                                    – <span className="font-medium">Selgerpotensial</span> (identifiserer sosialt
                                    kompetente og trygge personer som evner å
                                    skape interesse for et produkt eller en
                                    tjeneste)
                                </li>
                                <li>
                                    – <span className="font-medium">Lederpotensial</span> (identifiserer personer som
                                    på en positiv og effektiv måte kan lede
                                    andres arbeid)
                                </li>
                            </ul>
                            <h3 className='mt-8'>Hvordan komme i gang?</h3>

                                <p>For å benytte HPI må du være sertifisert
                                og lisensiert hos Assessio. Vi setter opp åpne
                                kurs i HPI på nyåret 2005. Ved interesse for
                                interne kurs kontakt vår utdanningskoordinator.
                                Kursdeltakere vil motta en introduksjonspakke.
                                Den består av manual, spørsmålshefte, 10 stk*,
                                svarblanketter, 10 stk*, samt dataprogram (m. 10
                                administreringer og skåringer*). Samlet pris er
                                kr. 5000,-
                                </p>
                                <p className="mt-4">
                                HPI er helt databasert med mulighet til både å
                                administrere testen elektronisk eller å mate inn
                                tester som er besvart på papir Dataprogrammet
                                poengsetter og regner ut resultatet, som
                                presenteres i fire ulike rapporter. Alle
                                administreringer gir tilgang til samtlige
                                rapporter.</p>

                                <p className='mt-4'>I den norske manualen beskrives bakgrunnen
                                for testen, utprøvningsarbeidet, samt
                                retningslinjer for tolkning. Samtlige skalaer
                                beskrives i detalj og hensiktsmessige hypoteser
                                og skalakombinasjoner presenteres.</p>

                                <p className="mt-4">
                                Tolkningsrapporten gir atferdskarakteristika
                                koblet til ulike poengnivåer på respektive
                                skala, samt detaljert informasjon om
                                testpersonens svar.</p>

                                <p className="mt-4">
                                Lederutviklingsrapporten gir informasjon om den
                                testedes lederegenskaper med utgangspunkt i hans
                                eller hennes resultat på respektive primærskala.
                                Rapporten gir også forslag til utviklende tiltak
                                for ett bedre og mer effektivt lederskap.</p>

                                <p className="mt-4">
                                Profilrapporten gir kortfattet informasjon om
                                inneholdet i de ulike skalaene, samt en grafisk
                                presentasjon av resultatet.</p>

                                <p className="mt-4">
                                Datarapporten inneholder opplysninger om hvert
                                item, råskårer og percentilverdier for skalaene
                                og råskårer for homogene itemkluster. </p>

                           
                            <h2 className="mt-8">Hva er Myers-BriggsType Indicator®-MBTI®</h2>
                            <p className='my-4 text-sm'>
                                Testen er laget av Isabel Myers & Katherine C.
                                Briggs.
                                <br />
                                Kilde: Assessio
                            </p>
                            <p className='my-4'>
                                Hensikt: Personlighetsindikator
                                <br />
                                Norsk/svensk. MBTI er også tilgjengelig på
                                britisk, dansk, hollandsk, spansk, italiensk,
                                tysk og fransk.
                            </p>
                            <p className='my-4'>
                                Myers-Briggs Type Indicator®, bygger på den
                                sveitsiske psykiateren C. G. Jungs teori om
                                psykologiske typer, og er en av verdens mest
                                benyttede personlighetstester. Den har over 50
                                års forskning bak seg og har blitt en av verdens
                                ledende personlighetsindikatorer. MBTI® er først
                                og fremst et instrument for selvinnsikt og
                                personlig utvikling, og viser hvordan
                                forskjeller mellom mennesker kan ivaretas og
                                benyttes på en konstruktiv måte.
                            </p>
                            <p className='my-4'>
                                Grunntanken bak MBTI® er at et hvert individ har
                                basale, foretrukne måter å forholde seg på
                                (eller ulike preferanser) når det gjelder:
                            </p>
                            <ul className='my-4'>
                                <li>– Hvor oppmerksomhet og energi rettes</li>
                                
                                <li>– Ekstraversjon (mot den ytre
                                    verden/omverdenen) eller</li>
                                <li>– Introversjon (mot sin egne indre verden)</li>
                                <li>– Hvordan man tar inn informasjon</li>
                                <li>– Sansning (via sine fem sanser) eller</li>
                                <li>– Intuisjon (mer intuitivt, via den «sjette sansen»)</li>
                                <li>– Hvordan man gjør bedømminger som ligger til
                                    grunn for beslutninger</li>
                                <li>– Tenkning (på grunnlag av logikk og objektivitet) eller
                                </li>
                                <li>– Følelse (på grunnlag av individuelle
                                    verdier)
                                </li>
                                <li>– Hvordan man hanskes med den ytre verden
                                    (omverdenen)</li>
                                <li>– Avgjørelse (planlagt og systematisk) eller</li>
                                <li>– Oppfattelse (fleksibelt og spontant)</li>
                            </ul>
                            
                            <p className='my-4'>
                                Forskjellige kombinasjoner av preferanser har
                                stor betydning for mange livsområder, som for
                                eksempel hvilket yrke man velger og trives i,
                                hvilke karriereveier som passer best med hvordan
                                man reagerer i ulike konfliktsituasjoner,
                                hvordan man løser problemer og treffer
                                beslutninger, hvordan man kommuniserer med andre
                                (og hvordan man misoppfatter og blir
                                misoppfattet!), hvordan man bidrar til et teams
                                arbeid, hvordan man fungerer som leder og
                                medarbeider og hvordan man foretrekker å leve.
                                Kunnskap om egne og andres preferanser leder til
                                økt forståelse for både seg selv og andre.
                            </p>
                            <h3 className='mt-8'>
                                Komme i gang</h3>
                                <p className="mt-4"> For å benytte MBTI må du være sertifisert
                                og lisensiert hos Assessio. Se våre kursdatoer
                                for MBTI. Kursdeltakere mottar en
                                introduksjonspakke. Den består av en amerikansk
                                manual, 2 spørrehefter (Step 1), 1 pk
                                selvskåringsark, 2 hefter Introduksjon til type
                                og 2 hefte.
                            </p>
                            <p className='my-8 font-bold'>
                                Lykke til med testene.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
