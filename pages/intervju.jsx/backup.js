import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Shape from "../../images/kontakt/Vector_8.svg";
// import Kontakt from "../../images/kontakt/people-laptop.svg";
import Mobile from "../../images/kontakt/mobile.svg";

import Questions from "./questions";

export default function Intervju() {
    return (
        <>
            <div className='lg:max-w-7xl lg:mb-20'>
                <Image
                    className='absolute top-0 right-0 z-[-10] invisible lg:visible'
                    src={Shape}
                    alt='vektor grafikk'
                />
                <Image
                    className='absolute top-0 right-0 z-[-10] invisible lg:visible'
                    src={Mobile}
                    alt='vektor grafikk'
                />
            </div>
            <h1 className='px-10 text-4xl text-center py-9 text-jj-color-green lg:text-left lg:ml-20 lg:text-6xl lg:mt-14'>
                Intervju
            </h1>
            <section className='px-10 mx-auto mb-5 text-lg leading-8 w-96 lg:text-left lg:ml-20 xl:w-3/4 lg:w-2/4'>
                <p>
                    Gratulerer med innkalling til intervju! Vi har fortsatt et
                    lite stykke igjen, men dette er den morsomme delen. Følg
                    linkene under så får du tips og triks, samt en liste med de
                    vanligste spørsmålene som stilles av intervjuerne. Takk for
                    følget og lykke til!
                </p>
            </section>
            <section className='mx-auto'>
                <h2 className='py-4'>Forberedelse og gjennomføring</h2>
                <p>
                    Det er mange som har søkt utallige jobber før de blir
                    innkalt til intervju. <br /> Har man søkt mange nok jobber
                    burde det være logisk at man tok vare på denne gyldne
                    sjansen. <br />
                    For intervjueren oppleves det ikke alltid slik.
                    <br />
                    Jeg skal nå gå gjennom tips i forhold til forberedelse og
                    gjennomføring av et intervju. <br />
                    Ditt mål er å få et jobbtilbud ved å overbevise intervjueren
                    om at:
                </p>
                <ul className='py-4 italic '>
                    <li>Du kan gjøre jobben</li>
                    <li>Du har lyst på jobben</li>
                    <li>Du passer i jobben</li>
                </ul>
            </section>
            <section className='mx-auto'>
                <h2 className='py-4'>Intervjuforberedelser</h2>
                <p>Å være godt forberedt gir bedre resultater!</p>
                <p>
                    Gjør research om bedriften på internett eller via folk som
                    kjenner bedriften. Finn ut hvor bedriften ligger rent
                    fysisk. Bruk gjerne internett. F.eks. VisVeg Finn ut om
                    bedriften har suksess/gode resultater. Forbered svar til
                    sannsynlige intervjuspørsmål. Finn ut hva du skal ha på deg.
                    Man skal prøve å «matche» dem man skal treffe. Gjør klar de
                    dokumentene du skal ha med deg. Ta gjerne med CV,
                    dokumentliste, attester og vitnemål. Gjør klar spørsmål du
                    ønsker å stille. Er du ikke forberedt får du ikke jobben.
                </p>
                <h3 className='py-4'>På intervjustedet:</h3>
                <p>
                    Vær tidlig ute, men ikke for tidlig. Følg husets
                    innsjekkingsformaliteter (skrive seg inn, besøkskort, e.l.)
                    Ta deg tid til å roe deg ned. Har du stresset så få pusten
                    tilbake. Sjekk utseende/klær. Skjeve slipsnåler, vrengte
                    krager, løse hårnåler, osv. Vent på å bli hentet. Bruk
                    ventetiden til å observere folk og lokale.
                </p>
                <h3 className='py-4'>Intervjuteknikk:</h3>
                <p>
                    Presenter deg tydelig og ha et fast og godt håndtrykk.
                    Førsteinntrykk er viktig. Hvis det er flere intervjuere, så
                    finn ut hvilke roller de har. Vær engasjert når de forteller
                    om bedriften. Tenk på øyekontakt. Vær høflig og vennlig.
                    Sitt ordentlig i stolen. Vær deg selv! Still jobbrelaterte
                    spørsmål. Lytt til spørsmålene og svar. Dette er viktigere
                    enn man tror. Match din kompetanse til deres behov. Bruk
                    eksempler når du svarer. Vær positiv Være sensitiv i forhold
                    til intervjuer, se etter signaler på at vedkommende kjeder
                    seg. Spør om videre fremdrift. Forsøk å få et nytt intervju
                    gjennom god opptreden, gode spørsmål og gode svar.
                </p>
                <h3 className='py-4'>Intervju «dont’s»:</h3>
                <p>
                    Ikke røyk eller tygg tyggegummi. Ikke drikk alkohol eller
                    spis hvitløk før intervjuet Ikke kritiser nåværende eller
                    tidligere kollegaer eller arbeidsgiver. Ikke spør om lønn.
                    Unngå å bare svare ja og nei. Ikke prøv å være
                    «kjempekompis» Vis motivasjon men ikke stress på for å få en
                    avgjørelse raskt. Ikke vis engstelse eller kjedsomhet. Ikke
                    begi deg inn på diskusjoner om kjønn, religion, alder etc.
                </p>
                <h3 className='py-4'>Hva intervjuere ser etter:</h3>
                <ul>
                    <li>Profesjonell og teknisk kompetanse</li>
                    <li>Arbeidsmoral</li>
                    <li>Personlighet og talent</li>
                    <li>Helse</li>
                    <li>«The fit factor»</li>
                </ul>
            </section>
            <section className=''>
                <div className='py-4 my-6 bg-jj-color-green '>
                    <h2 className='mb-2 text-white'>
                        De 50 vanligste spørsmålene du blir stilt
                    </h2>
                    <ol className='text-white '>
                        {Questions.map((Questions) => (
                            <li>{Questions}</li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className='mx-auto'>
                <h2>5 Klassikere</h2>
                <p>
                    Det er noen spørsmål som nesten alltid går igjen. Dette er
                    spørsmål som kan skape hodebry for dem som ikke er
                    forberedt, men som kan gå som en drøm hvis man har tenkt
                    gjennom hva man skal svare.
                </p>
                <h3 className='py-4'>1. Fortell om deg selv.(spm.1)</h3>
                <p>
                    Tips: Her er det om å gjøre å kunne gi intervjueren et godt
                    bilde av deg og hva du har gjort på en uanstrengt måte.
                    Fremgangsmetoden kan være som følger: fortell kort om dine
                    personalia og familie/bosituasjon i dag, fortelle deretter
                    kronologisk hva du gjorde for eksempel fra ungdomsskolen
                    eller gymnaset og frem til i dag, deretter kan du krydre på
                    med å fortelle litt om interesser, verv medlemskap eller
                    lignende. For å få med alle moment det være stor fordel å
                    bruke CV som en huskeliste. Hvis du får angitt tid for
                    besvarelse så tilpass deg i forhold til det.
                </p>
                <h3 className='py-4'>
                    2. Hvorfor vil du jobbe hos oss?(spm.5)
                </h3>
                <p>
                    Tips: Skryt litt av selskapet (det liker de alltid). Bruk
                    muligheten til å fortelle at din kompetanse og arbeidsmåte
                    passer veldig bra med slik du har oppfattet selskapet.
                </p>
                <h3 className='py-4'>
                    3. Hvorfor skal vi velge deg og ikke en av de andre
                    kandidatene?(spm.10)
                </h3>
                <p>
                    Tips: Hvis du ikke har fått solgt deg inn på forrige
                    spørsmål så er dette muligheten til å selge seg selv inn. Få
                    frem at du har alle forutsetninger for å gjøre det bra i
                    denne jobben, relatér tidligere relevant erfaring med den
                    jobben du har søkt på (bruk eksempler), si at du mener du
                    vil passe inn sosialt sett, få frem at du er motivert for
                    jobben, osv. Til tross for at dette kan bli en lang tirade
                    av selvskryt skal du få frem at det sikkert er mange gode
                    søkere, men at du likevel mener å kunne tilføre det lille
                    ekstra.
                </p>
                <h3 className='py-4'>
                    4. Nevn 3 sterke og 3 svake sider.(spm.13)
                </h3>
                <p>
                    Tips: Her er klassikeren over alle klassikere. De tre sterke
                    sidene klarer de fleste å få frem på en utmerket måte så det
                    bruker vi ikke tid på her. Utfordringen ligger i å formidle
                    de svake sidene. Kunsten er å få frem en side som ikke er
                    utpreget negativ, men som kan ha en positiv vinkling også.
                    Typisk eksempel: Jeg kan noen ganger jobbe fordype meg litt
                    vel mye i en oppgave, MEN det er fordi jeg anser oppgaven
                    som meget viktig i forhold til potensielle senere
                    følgefeil.Med dette har man oppveiet det svake med noe
                    positivt. En annen variant som selgerne bruker er: Jeg er
                    litt rastløs. Med dette har en potensiell selger svart det
                    som en salgsleder fint kan akseptere og som han gjerne vil
                    prøve å utnytte til noe positivt. Det viktigste er at man
                    ikke sitter stille og roter seg inn en pinlig stillhet uten
                    svar. Det er nok av folk som har følt at denne delen av
                    intervjuet gikk så dårlig at man har prestert dårlig på
                    resten av intervjuet. På den annen side skal man vite at
                    intervjueren nødvendigvis ikke er på jakt etter selve
                    svarene, men faktisk hvordan du er i stand til å besvare et
                    slikt spørsmål. PS. Har man ingen svake sider er jeg stygt
                    redd for at du gikk i fellen som heter manglende
                    selvinnsikt!
                </p>
                <h3 className='py-4'>
                    5. Vurderer du andre stillinger for øyeblikket?(spm.26)
                </h3>
                <p>
                    Tips: Er svaret nei kan du underbygge det med at det er
                    nøyaktig DENNE jobbe du vil ha. Er svaret ja kan du vinkle
                    det til at du har ettertraktet kompetanse som markedet
                    etterspør, men at du prioriterer denne jobben svært høyt.
                    Uansett skal du ikke gå i fellen med å ytre at du egentlig
                    ønsker å jobbe et helt annet sted eller i en helt annen type
                    stilling.
                </p>
            </section>
            <section className='py-4 mx-auto my-6 text-white bg-jj-color-green '>
                <h2 className='py-4 text-white'>5 Klassikere. Del 2</h2>
                <h3 className='py-4 text-white'>
                    1. Hvorfor sluttet du i forrige jobb, evt. ønsker å forlate
                    nåværende jobb? (spm.2)
                </h3>
                <p>
                    Tips: Svaret kan være så mangt, men fortell for all del ikke
                    noe negativt om arbeidsgiver.
                </p>
                <h3 className='py-4 text-white'>
                    2. Hvorfor var du arbeidsledig så lenge?(spm.18)
                </h3>
                <p>
                    Hadde du karantenteperiode fra forrige arbeidsgiver er alt
                    ok. Har du innvilget deg en pause etter et langt arbeidsliv
                    så kan det også fortelles på en troverdig måte. Har du vært
                    i en kriseutsatt bransje (it-bransjen da boblen sprakk) kan
                    du søke forståelse for at det var vanskelig å få jobb. Har
                    du ingen god grunn må du kamuflere svaret, men selvfølgelig
                    uten usannheter. F.eks . sykdom i nærmeste familie, bygget
                    hus selv i stedet for å kjøpe tjenesten, osv.
                </p>
                <h3 className='py-4 text-white'>
                    3. Hva frustrerte deg i din tidligere jobb, sjefen,
                    kollegaer….??(spm.30)
                </h3>
                <p>
                    Tips: Her vil de ha deg ut på glattisen. Hold deg for god
                    til å kritisere andre.
                </p>
                <h3 className='py-4 text-white'>
                    4. Hvorfor har du byttet jobber så ofte?(spm.19)
                </h3>
                <p>
                    Tips: Her er det vanskelig å gi et tips siden alle har
                    forskjellig sammensetning av bakgrunn. Prøv likevel å komme
                    med gode argumenter for ulike jobb- overganger. Et
                    jobbskifte kan for eksempel skyldes flytting, bedriften la
                    ned, høyere lønn, større personlige utfordringer, osv.
                </p>
                <h3 className='py-4 text-white'>
                    5. Hvor mye ønsker du å tjene?(spm.50)
                </h3>
                <p>
                    Tips: Forhandlingsteknikk innen lønn kunne jeg skrevet flere
                    sider om alene, men her holder vi oss til kortversjonen.
                    Noen ganger er lønnen satt i forhold til tariff og da er er
                    jo saken grei. Andre ganger er det imidlertid forhandlinger
                    som må på banen. Til syvende og sist skal intervjuer sitte
                    igjen med følelsen av at her er det mulighet for å komme til
                    enighet. Ikke la konkrete lønnskrav diskvalifisere deg på et
                    tidlig stadie. Din forrige lønn kan være et utgangspunkt
                    hvis det passer i forholdt til situasjonen. Man skal også
                    vite at bruttolønn ikke er eneste nøkkelen til god økonomi.
                    Får man fri telefon, avis, adsl, firmabil, e.l. så kan det
                    kompensere for mye bruttolønn. Man skal dog være observant
                    på skattereglene i disse tider hvor frynsegoder forfølges
                    (Vinmonopolet m.fl.).
                </p>
            </section>
            <section>
                <h2 className='py-4'>Spørsmål du kan stille selv</h2>
                <h3 className='py-4'>Om selskapet:</h3>
                <p>
                    Fortell meg litt mer om selskapet. Fortelle meg litt mer om
                    produktene/tjenestene deres.
                </p>
                <h3 className='py-4'>Om jobben:</h3>
                <p>
                    Er dette en nyopprettet stilling eller er det en som
                    slutter? Hva er totalt antall personer i denne avdelingen
                    (divisjonen)? Hvem kommer jeg til å jobbe sammen med? Hva
                    slags resultater forventes det av meg? Hva slags oppgaver er
                    det første jeg vil måtte gå løs på? Finnes det en skriftlig
                    jobb-beskrivelse? Hva slags konkrete utfordringer vil jeg
                    måtte håndtere? Kan du beskrive mitt ansvarsområde? Hvordan
                    bli min myndighet på dette området? Hvem rapporterer
                    stillingen til? Er det etablert et budsjett? For øvrig vil
                    du finne mange spørsmål etterhvert som intervjuet går sin
                    gang. Grip mulighetene til å få svar på ting, samt at du
                    samtidig viser engasjement.
                </p>
                <h3 className='py-4'>Om karrieremuligheter:</h3>
                <p>
                    Hvordan er fremtiden i bedriften hvis man gjør en god jobb?
                    Hvordan blir man introdusert til muligheter som måtte åpne
                    seg? Er det folk som har jobbet seg oppover i bedriften
                    allerede? Ikke still så mange spørsmål at det virkes som om
                    du ikke er interessert i stillingen du intervjues for.
                </p>
                <h3 className='py-4'>Om prosessen:</h3>
                <p>
                    Er det noen områder der du er i tvil om min kompetanse?
                    Finnes det noen tvil om min evne til å fylle denne
                    stillingen? Hvordan er prosessen videre, når tar dere evt.
                    beslutning? Hvor mange søkere er det? Hvordan ser du min
                    mulighet? Er det trolig at jeg vil gå videre? Spørsmålene
                    stilles for å rette opp i evt dårlige inntrykk eller
                    manglende argumentering for kunnskap.
                </p>
                <h3 className='py-4'>Målet med intervjuet:</h3>
                <p>
                    Ditt mål er å få et jobb tilbud ved å overbevise
                    intervjueren om at: Du kan GJØRE jobben. Bevis din dyktighet
                    og erfaring gjennom eksempler. Du har LYST på jobben. Still
                    spørsmål. Vis at du kan mye om jobben, firmaet og bransjen.
                    Du PASSER i jobben. Still spørsmål om alt som kan overbevise
                    om at DU passer inn.
                </p>
            </section>
            <section className='py-4 mx-auto my-6 text-white bg-jj-color-green '>
                <h2 className='py-4 text-white'>PERSONLIGHETSTESTER</h2>
                <p>
                    Personlighetstester er oftest brukt av rekrutteringsselskap,
                    og ofte i forbindelse med ansettelse på mellomledernivå
                    eller høyere. Testene brukes likevel også i forbindelse med
                    andre stillinger der oppdragsgiver og rekrutteringsselskapet
                    finner det nødvendig å finne ut at kandidaten har de riktige
                    personlige egenskapene i tillegg til den tekniske kompetanse
                    (evnen til å utføre selve arbeidet). Personlighetstestene må
                    ikke forveksles med typiske raske målbare evne-tester som
                    gjøres hos en del vikarbyrå (word-test, engelsk-test,
                    touchmetode-test, synonymord-test, rettskrivningstest, osv.)
                </p>
                <p>
                    Man kan forberede seg og forbedre seg til evnetester, men
                    når det gjelder personlighetstester skal man bare være
                    forberedt på å kunne formidle hvem man er. Det er altså
                    ingen trylleformel for å «gjøre det bra».
                </p>
                <h3 className='py-4 text-white '>
                    «Inside»-tips i forbindelse med personlighetstester.
                </h3>
                <p>
                    Det finnes hundrevis av tester som brukes i markedet, men
                    det er stor spredning i utbredelse og kvalitet. Grunnet
                    omfanget er det vanskelig å forberede seg til en spesiell
                    type test, men som tidligere nevnt er det ikke spesielle
                    forberedelser forbundet med personlighetstester likevel. Jeg
                    vil likevel prøve å gi noen tips her slik at man vet hva man
                    går til.
                </p>
                <h3 className='py-4 text-white '>Klassisk fremdrift.</h3>
                <p>
                    Det er ofte vanlig at det er ca 100 søkere på jobber som
                    skal besettes. Personlighetstester og intervju er relativt
                    tidkrevende og kostbart så det sier seg selv at man ikke kan
                    teste alle de 100. Det er vanlig at man tar inn ca 10
                    personer til førstegangsintervju. Dette intervjuet varer ca
                    30-60 minutter. Ut i fra dette sitter man gjerne igjen med
                    ca 2-6 kandidater man ønsker å gå videre med. Disse
                    innkalles da til gjennomføring av test. Testens varighet er
                    ca 1 time og er et utgangspunkt for et dybdeintervju som kan
                    skje samme dagen eller senere. Dette er som nevnt det
                    normale, men det finnes også tilfeller hvor man skal testes
                    i evner også. Testdagen kan da bli opp mot 4-5 timer
                    inkludert personlighetstest, tallfølger, synonymord-test,
                    engelstest, osv. Vi vil likevel holde videre fokus på selve
                    personlighetstesten i denne artikkelen. Det skal også nevnes
                    at vi vil legge fokus på de litt tyngre testene og ser da
                    bort fra en del 10 minutters hobbytester som finnes.
                </p>
                <h3 className='py-4 text-white'>Omfang og tid.</h3>
                <p>
                    En personlighetstest består ofte av relativt mange spørsmål.
                    Ca 100-150 spørsmål er ganske vanlig. Ofte skal man sette
                    kryss for ulike valg, men det finnes også tester hvor man
                    skal fullføre setninger. Tid for gjennomføring varierer, men
                    er ofte på ca 1 time. Det skal dog nevnes at det som oftest
                    ikke er satt tidsfrister på gjennomføring av oppgaven, men
                    leseren som skal vurdere testen vil ofte se på tidsbruken
                    som en indikasjon på hvor hurtig du jobber. Selv om det ikke
                    vedrører testen er det interessant at noen gjør testen på ca
                    30 minutter mens andre kanskje bruker opptil 90 minutter.
                </p>
                <h3 className='py-4 text-white'>Gjennomføring.</h3>
                <p>
                    I utgangspunktet har man ikke dårlig tid, men hvis man skal
                    sitte og fundere på hvert spørsmål så vil det enda med at du
                    har brukt svært lang tid på testen. Grunntanken er at du
                    skal krysse av/svare det første som slår deg inn. Dette er
                    som oftest det riktige også. Man kan oppleve at man har fått
                    nesten samme spørsmålet for «ca 40 spørsmål siden». Dette er
                    i grunnen meningen. Man skal vite at det kan være flere
                    tilfeller av skjult kontroll underveis som skal sikre at
                    personen ikke har prøvd å lure testen. Noen ganger kan man
                    oppleve å få samme spørsmålet men med en litt annen
                    vridning. Det kan bli ganske flaut hvis man har ytret to
                    ulike holdnings eller- adferdsmønstre fordi man prøvde å
                    være «smart». Man skal altså svare raskt og greit uten å
                    prøve å lure testen. Noen tester er selvfølgelig lettere å
                    lure enn andre, men i værste fall ender du opp med en jobb
                    hvor personligheten din ikke passer. Når du sitter
                    misfornøyd etter 3 måneder i jobben kan man jo spørre seg
                    hvor lurt det var.
                </p>
                <h3 className='py-4 text-white'>Normativ - ipsativ.</h3>
                <p>
                    Når man gjennomfører testen vil samme svar kunne slå ut i
                    normativ og ipsativ vurdering, og dette er nettopp
                    grunnstammen i hele analysen. For å forstå sammenhengen av
                    dette har jeg dristet meg til å lage en veldig kort
                    forklaring på uttrykkene: Normativ: Personen sett ut i fra
                    en norm. Dvs sett i forhold til et kvalitativt utvalg av
                    lignende folk som har tatt samme testen. Rent matematisk vil
                    man regne ut hvordan du har svart i forhold til alle de
                    andre. Jo større sammenligningsgrunnlag - jo bedre kvalitet.
                    Man kan ofte måle det slik at med de svarene kandidaten har
                    gitt så virker han som en bedre f.eks. prosjektleder enn
                    andre. Dette sett ut i fra høy score på de elementene som
                    ansees som viktig for en prosjektleder. Ipsativ: Personen
                    sett ut i fra eget syn. Svarene er ypperlig i forhold til å
                    måle selvinnsikt. Grovt sett kan man si det slik: En person
                    trenger ikke å være en god kommunikatør selv om han tror det
                    selv. Det er nok av dem som tror noe annet om seg selv enn
                    det intervjueren oppfatter. Ipsativ vurdering av
                    svarmaterialet er altså et godt grunnlag for
                    samtaler/dybdeintervju. Til informasjon er manglende
                    selvinnsikt aldri noe godt tegn.
                </p>
                <h3 className='py-4 text-white'>
                    Analyse/vurdeing og bruk av testen.
                </h3>
                <p>
                    Selve testen er ofte laget av psykologer som har brukt lang
                    tid og mye ressurser på å utvikle denne. De seriøse
                    selskapene har også en psykolog blant dem som ofte er
                    test-ansvarlig. Man skal være sertifisert for å bruke mange
                    av testene. Det viser seg imidlertid at det er mye slett
                    arbeid her. Dette skyldes noen ganger at selskap har kjøpt
                    inn tester og slipper til både autoriserte og ikke
                    autoriserte til å bruke dette verktøyet. Mange kandidater
                    får aldri tilbakemelding fra testen de har tatt. De blir
                    heller ikke konfrontert med utsagn i testen og skjønner
                    dermed ikke hvorfor de har tatt den. Andre igjen føler at de
                    får svært ukvalifisert vurdering ut i fra testen. De fleste
                    rekrutteringsselskap har for øvrig dette som et av sine
                    spesialfelt og pleier å gjøre dette på en kvalitetssikret
                    måte. Her følger et eksempel på strukturert bruk av testen.
                </p>
                <p>
                    Diskutere testresultatet med kandidaten. Kandidaten
                    involveres aktivt i tolkning og nyansering av resultatet.
                    Hypoteser: -Bekreftet -Avkreftet -Eksemplifisert Oppsummere
                    styrker og utviklingsområder. Gir råd til kandidaten.
                    Konkluderer en kandidatbeskrivelse. Klargjør momenter til
                    referansesamtaler. Når det gjelder selve vurderingen av
                    testen så er den altså et utgangspukt for et dybdeintervju
                    og da med normativ og ipsativ vurdering som grunnlaget for
                    samtalen. Med dette som utgangspunkt vil man faktisk kunne
                    lære mer om seg selv. Samtalen kan altså ha stor verdi selv
                    om du ikke får jobben.
                </p>
                <h3 className='py-4 text-white'>Vær forberedt.</h3>
                <p>
                    Det blir i dag mer og mer vanlig å bruke personlighetstester
                    ved utvelgelse av nye medarbeidere. Les videre og vær
                    forberedt! Som et ledd i det å finne den riktige kandidaten
                    til stillingen som er utlyst, bruker flere og flere
                    bedrifter ulike former for personlighetstester. Det finnes
                    et stort utvalg av slike tester på det norske markedet. Alle
                    konsulentselskap som bistår ved utvelgelser har sine egne
                    tester. Dette gjelder også større firmaer. I tillegg finnes
                    det et stort utbud av tester som mindre firmaer kjøper.
                    Målet med testene er å finne personer som passer inn i det
                    klima som allerede finnes i organisasjonen. I tillegg til å
                    yte en god jobb faglig, har bedriftsledere sett viktigheten
                    av at medarbeidere også fungerer godt sosialt. Ulike miljøer
                    og arbeidsoppgaver krever ulike personligheter.
                    Salgsorganisasjoner kan se etter utpregede sosiale, pågående
                    og selvsikre personer, mens for et revisjonsbyrå vil kanskje
                    nøyaktighet og flid være de viktigste faktorene ved en
                    utvelgelse. Testene er gjerne utformet som et langt
                    spørreskjema hvor man har flere svar muligheter. Det gjelder
                    da å finne det svaret som passer best for deg. Det er også
                    vanlig å ha en rekke påstander man skal vurdere passer til
                    en selv. Det er også viktig å være ærlig når en gjennomfører
                    en slik test. Gode tester vil kunne avsløre bløff, og du vil
                    få en sprikende personlighet. Klarer du likevel å bløffe
                    testen, vil du i verste fall få en jobb som du slett ikke
                    passer inn i. Testene er ofte kategoriske og blir kun brukt
                    som et supplement til intervjuer, referanser, vitnemål og
                    attester. Enkelte firmaer har en mal på hvordan man ønsker
                    at medarbeidere skal fungere og tenke. Dette er gjerne
                    bedrifter med en klar og uttalt profil. Personlighetstesten
                    er da gjerne en god pekepinn på om kandidaten er noe å satse
                    på. En enkel test tar gjerne mellom ti og tretti minutter.
                    Det gjelder å bruke denne tiden godt. Sørg for at du har
                    forstått hvordan testen utføres. Les gjerne gjennom
                    spørsmålene raskt først. Start på toppen av listen og arbeid
                    deg systematisk nedover. Er det spørsmål du lurer på, svar
                    på disse til slutt. Det er viktig at man besvarer alle
                    spørsmålene og ikke lar noe stå igjen. Ubesluttsomhet er
                    aldri et godt personlighetstrekk.
                    <a href='https://www.stepstone.com/en/'>Kilde: Stepstone</a>
                </p>
                <h2 className='py-4 text-white'>
                    Personligheten kan gi deg jobb.
                </h2>
                <p>
                    Jobbintervjuet er ikke lenger det eneste nåløyet du må
                    passere hvis du vil bytte jobb. Nå er det
                    personlighetstester som gjelder, også i helt vanlige jobber.
                    <br />
                    Før var det vanligst å bruke slike tester for å finne ut
                    hvilke psykiske problemer folk hadde å stri med. Nå
                    eksploderer bruken av personlighetstester i jobbsammenheng.
                    Din kommende sjef mener ikke lenger at et intervju er nok
                    for å finne ut om du er egnet til jobben du søker på. Derfor
                    må du belage deg på å ta en personlighetstest.
                </p>
                <h3 className='py-4 text-white'>
                    -I tida.
                    <br /> Antall firma som leverer personlighetstester har økt
                    kraftig.
                </h3>
                <p>
                    - Testbruk er mer og mer vanlig. Vi får stadig nye tester og
                    aktører. Den siste tida har det også blitt mer vanlig å
                    teste personlighet på alle nivåer, for eksempel også ved
                    ansettelser av sekretærer, sier Ole I. Iversen. Han har
                    doktorgrad i psykologi og har vurdert de nærmere 30 testene
                    som brukes i Norge i dag. Professor i psykologi Hilmar
                    Nordvik ser den samme trenden. - Slike tester er veldig i
                    tida. Man finner spor av personligheten til folk overalt, og
                    det har de som ansetter etter hvert begynt å skjønne.
                    Kunnskap er ikke nok for å kunne mestre en jobb.
                </p>
                <h3 className='py-4 text-white'>Testene kan lures</h3>
                <p>
                    <span className='font-bold '>
                        Hittil er personlighetstester brukt mest i jobber der
                        sosiale evner er viktige, som for eksempel ledere,
                        selgere og konsulenter.
                    </span>
                    <br />
                    Selv om de fleste testene har mange spørsmål som stilles på
                    mange forskjellige måter, går det an å lure dem.{" "}
                    <span className='font-bold '>
                        -Vet du hvilke egenskaper firmaet du søker jobb hos vil
                        ha, kan du greie å lure testen, sier Hilmar Nordvik.
                    </span>
                    <br />
                    Likevel mener han at de aller beste testene på markedet er
                    mer eller mindre vanntette.{" "}
                    <span className='font-bold '>
                        Kvalitetsopprensking - Disse testene har spørsmål som
                        fanger opp om du er for opptatt av å gi et godt
                        inntrykk. Problemer med slike tester er at det kommer
                        veldig an på personen som tolker testresultatene. Man
                        kan komme til å tolke mer ut av resultatene enn man har
                        dekning for, sier Nordvik.
                    </span>
                    <br />
                    <span className='font-bold '>
                        I mengden av personlighetstester er det ikke alle som
                        holder mål.
                    </span>
                    <br />- Det kunne godt å ha vært en kvalitetsopprensking på
                    området. Det finnes en del korte tester som brukes ukritisk.
                    Likevel er det meste av testbruken i Norge ganske nøktern,
                    sier Nordvik.
                </p>
                <h2 className='py-4 text-white'>
                    Eksempel på personlighetstest
                </h2>
                <ol className='my-2 ml-4 '>
                    <li>
                        Jeg foretrekker å bruke den tida som er nødvendig for å
                        gjøre en oppgave grundig. (Pliktoppfyllende og
                        systematisk).
                    </li>
                    <li>Jeg liker å treffe nye mennesker. (Utadvendt).</li>
                    <li>
                        Jeg kommer vanligvis tidsnok til avtaler.
                        (Pliktoppfyllende og systematisk).
                    </li>
                    <li>
                        Jeg pleier å være aktiv og ta ordet når flere er samlet.
                        (Utadvendt).
                    </li>
                    <li>
                        Jeg er flink til å overholde tidsfrister.
                        (Pliktoppfyllende og systematisk).
                    </li>
                    <li>
                        Jeg foretrekker å gå ut med venner framfor å ha en rolig
                        kveld hjemme. (Utadvendt).
                    </li>
                </ol>
                <h3 className='py-4 text-white'>
                    Kontrollspørsmål
                    <br /> For å sjekke om kandidaten har en tendens til å
                    framstille seg selv positivt benyttes kontrollspørsmål, som
                    disse:
                </h3>
                <ol className='my-2 ml-4'>
                    <li>Jeg hjelper alltid andre.</li>
                    <li>Jeg baksnakker aldri andre.</li>
                    <li>Jeg overskrider aldri fartsgrensene.</li>
                </ol>
                <a>Kilde: Ole I. Iversen</a>
                <h3 className='py-4 text-white'>
                    Link til forskjellige personlighetstester
                </h3>
                <p className='py-2 font-semibold '>Cattel 16 PF, 5.</p>
                <p>
                    Her er personlighetstrekkene arbeidsgiverne er interessert i
                    å vite noe om. Du vil bli stilt flere spørsmål innen for
                    hvert trekk. Ut fra svarene du gir vurderer arbeidsgiveren
                    om du er egnet til en spesiell type arbeid. Du vil få en
                    samlet poengsum fra en til ti. Eks.: Vil du jobbe i
                    reklamebransjen, kan det lønne seg å være abstrakt i
                    resonneringen, vil du bli forsker kan det lønne seg å være
                    konkret i resonneringen
                </p>
                <p className='py-2 font-semibold '>
                    Hva er Hogans personlighetsinventorium - HPI.
                    <br />
                    Testen er laget av Joyce & Robert Hogan
                </p>
                <p>
                    Hensikt Personlighetstest Alder Voksne Språk Norsk Hogans
                    personlighetsinventorium, HPI, er en personlighetstest først
                    og fremst utviklet for bruk innen arbeidslivet. Bruksområder
                    er rekruttering, utvelgelse, lederutvikling og
                    karriereplanlegging. HPI gir informasjon om personlige
                    karakteristika som kommer til uttrykk i sosialt samspill og
                    som fremmer, eller hemmer, en persons evne til å oppnå sine
                    mål når det gjelder utdanning og arbeidsliv. HPI bygger på
                    mange års forskning knyttet til femfaktormodellen, Big Five.
                    HPI inneholder 7 primære personlighetsskalaer: Tilpasning
                    (grad av emosjonalitet, stressmestring, selvkritikk)
                    Ambisjon (måler holdning til yrkesmessige mål og innstilling
                    til karriere) Selskapelighet (i hvilken utstrekning en
                    person har behov for/ setter pris på sosial interaksjon)
                    Sympatiskhet (måler taktfølelse, vennskapelighet, lydhørhet)
                    Ordentlighet (grad av selvkontroll/impulsivitet,
                    nøyaktighet) Intellektualitet (skalaen berører
                    livsstilsspørsmål, originalitet, innstilling til
                    rutinearbeid) Studieinteresse (speiler i hvilken utstrekning
                    en person trives med ”akademiske” aktiviteter og kunnskap)
                    Forskning har identifisert et antall yrkesskalaer. Disse
                    skalaene gir et direkte mål på hvor godt personen er skikket
                    til visse typer av arbeidsoppgaver: Serviceinnstilling
                    (identifiserer personer som er vennlige, morsomme,
                    hjelpsomme) Stresstoleranse (identifiserer personer som kan
                    håndtere stress godt) Integritet (identifiserer ærlige,
                    pålitelige personer) Administrativt potensial (identifiserer
                    nøyaktige og produktive personer med blikk for detaljer)
                    Selgerpotensial (identifiserer sosialt kompetente og trygge
                    personer som evner å skape interesse for et produkt eller en
                    tjeneste) Lederpotensial (identifiserer personer som på en
                    positiv og effektiv måte kan lede andres arbeid) Hvordan
                    komme i gang? For å benytte HPI må du være sertifisert og
                    lisensiert hos Assessio. Vi setter opp åpne kurs i HPI på
                    nyåret 2005. Ved interesse for interne kurs kontakt vår
                    utdanningskoordinator. Kursdeltakere vil motta en
                    introduksjonspakke. Den består av manual, spørsmålshefte, 10
                    stk*, svarblanketter, 10 stk*, samt dataprogram (m. 10
                    administreringer og skåringer*). Samlet pris er kr. 5000,-
                    HPI er helt databasert med mulighet til både å administrere
                    testen elektronisk eller å mate inn tester som er besvart på
                    papir Dataprogrammet poengsetter og regner ut resultatet,
                    som presenteres i fire ulike rapporter. Alle
                    administreringer gir tilgang til samtlige rapporter. I den
                    norske manualen beskrives bakgrunnen for testen,
                    utprøvningsarbeidet, samt retningslinjer for tolkning.
                    Samtlige skalaer beskrives i detalj og hensiktsmessige
                    hypoteser og skalakombinasjoner presenteres.
                    Tolkningsrapporten gir atferdskarakteristika koblet til
                    ulike poengnivåer på respektive skala, samt detaljert
                    informasjon om testpersonens svar. Lederutviklingsrapporten
                    gir informasjon om den testedes lederegenskaper med
                    utgangspunkt i hans eller hennes resultat på respektive
                    primærskala. Rapporten gir også forslag til utviklende
                    tiltak for ett bedre og mer effektivt lederskap.
                    Profilrapporten gir kortfattet informasjon om inneholdet i
                    de ulike skalaene, samt en grafisk presentasjon av
                    resultatet. Datarapporten inneholder opplysninger om hvert
                    item, råskårer og percentilverdier for skalaene og råskårer
                    for homogene itemkluster.
                </p>
                <p className='py-2 font-semibold '>
                    Hva er Myers-BriggsType Indicator®-MBTI®
                    <br />
                    Testen er laget av Isabel Myers & Katherine C. Briggs.
                </p>
                <p>
                    Hensikt Personlighetsindikator Norsk/svensk. MBTI er også
                    tilgjengelig på britisk, dansk, hollandsk, spansk,
                    italiensk, tysk og fransk. Myers-Briggs Type Indicator®,
                    bygger på den sveitsiske psykiateren C. G. Jungs teori om
                    psykologiske typer, og er en av verdens mest benyttede
                    personlighetstester. Den har over 50 års forskning bak seg
                    og har blitt en av verdens ledende personlighetsindikatorer.
                    MBTI® er først og fremst et instrument for selvinnsikt og
                    personlig utvikling, og viser hvordan forskjeller mellom
                    mennesker kan ivaretas og benyttes på en konstruktiv måte.
                    Grunntanken bak MBTI® er at et hvert individ har basale,
                    foretrukne måter å forholde seg på (eller ulike preferanser)
                    når det gjelder: Hvor oppmerksomhet og energi rettes
                    Ekstraversjon (mot den ytre verden/omverdenen) eller
                    Introversjon (mot sin egne indre verden) Hvordan man tar inn
                    informasjon Sansning (via sine fem sanser) eller Intuisjon
                    (mer intuitivt, via den «sjette sansen») Hvordan man gjør
                    bedømminger som ligger til grunn for beslutninger Tenkning
                    (på grunnlag av logikk og objektivitet) eller Følelse (på
                    grunnlag av individuelle verdier) Hvordan man hanskes med
                    den ytre verden (omverdenen) Avgjørelse (planlagt og
                    systematisk) eller Oppfattelse (fleksibelt og spontant)
                    Forskjellige kombinasjoner av preferanser har stor betydning
                    for mange livsområder, som for eksempel hvilket yrke man
                    velger og trives i, hvilke karriereveier som passer best med
                    hvordan man reagerer i ulike konfliktsituasjoner, hvordan
                    man løser problemer og treffer beslutninger, hvordan man
                    kommuniserer med andre (og hvordan man misoppfatter og blir
                    misoppfattet!), hvordan man bidrar til et teams arbeid,
                    hvordan man fungerer som leder og medarbeider og hvordan man
                    foretrekker å leve. Kunnskap om egne og andres preferanser
                    leder til økt forståelse for både seg selv og andre. Komme i
                    gang For å benytte MBTI må du være sertifisert og lisensiert
                    hos Assessio. Se våre kursdatoer for MBTI. Kursdeltakere
                    mottar en introduksjonspakke. Den består av en amerikansk
                    manual, 2 spørrehefter (Step 1), 1 pk selvskåringsark, 2
                    hefter Introduksjon til type og 2 hefte
                </p>
            </section>
        </>
    );
}
