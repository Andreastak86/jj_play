import Head from "next/head"
import Image from "next/image"
import listDec from "../../../images/sokjobb/ph_diamond-fill.png"
import blob from "../../../images/sokjobb/vector1.png"
import blobMobil from "../../../images/sokjobb/vector-mobil.png"
import arrowDown from "../../../images/sokjobb/arrow-down.png"

export default function SokJobb() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="max-w-full lg:max-w-7xl">
          <header className="ml-10 ">
            <div>
              <h1 className="mt-[8rem] text-2xl lg:text-4xl text-green-600">
                CV - CURRICULUM VITAE
              </h1>
              <p className="max-w-sm mt-8 mr-10 text-gray-600 lg:max-w-xl">
                CV regnes av de fleste som det viktigste dokumentet i
                forbindelse med jobbsøking. Jeg skal her redegjøre for hva CV
                egentlig er, hvordan den kan bygges opp, hva skal man ha med,
                hvilket design skal man bruke, osv.
              </p>
            </div>
            <Image
              src={blob}
              width="600"
              height="300"
              className="hidden md:block absolute top-0 right-0 xl:w-[700px] z-[-1] 2xl:right-0"
            />
            <Image
              src={blobMobil}
              width="200"
              height="300"
              className="absolute top-0 right-0 block md:hidden z-[-1]"
            />
          </header>

          <main>
            <section className="flex mx-5 my-10 max-w-[85%] lg:max-w-[75%] pt-[4rem]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl">Hva er egentlig en CV?</h2>
                <p className="">
                  CV er latin og er en forkortelse for Curriculum Vitae. CV
                  betyr kan oversettes med «det lille livsløpet» eller
                  «levnetsløp». CV er altså en kortfattet oppsummering av hva du
                  har gjort i løpet av livet. CV bekrefter bakgrunn og
                  kvalifikasjoner. CV bør i utgangspunktet gi mest mulig
                  informasjon på kortest mulig tid. CV bør kunne stå for seg
                  selv. Husk at når vikarbyråene leter etter folk så er det som
                  oftest kun CV de har tilgjengelig. Ordet «Resymé» brukes noen
                  ganger, men CV er et såpass innarbeidet fremmedord at man med
                  største trygghet kan bruke det uten at noen reagerer. Dette
                  gjelder alle bransjer. Til tross for at CV skal beskrive hva
                  du har gjort gjennom livet så skal man ha i bakhodet at det er
                  potensielle arbeidsgivere som er den aktuelle lesergruppen for
                  dette dokumentet. Informasjonen bør altså være relevant for
                  dem.
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl">Design, form og format</h2>
                <p className="">
                  Det første jeg vil nevne er at tiden for håndskrevet CV er
                  ute, såfremt du ikke har usedvanlig fin og tydelig håndskrift.
                  Vi skal huske på at leseren vil ha mest mulig konkret
                  informasjon på kortest mulig tid. Dette gjør at man skal
                  tilstrebe oversiktlighet og enkelhet. Dette medfører igjen at
                  man bør bruke et av de klassiske oppsett. Man bør i
                  utgangspunktet skrive CV på ordinært hvitt papir. Man har hørt
                  mange «vandrerhistorier» om folk som fikk jobben fordi CV og
                  søknad var skrevet på rosa papir. Det er sikkert noen som har
                  fått jobb med denne metoden, men da har sikkert innholdet vært
                  usedvanlig bra også. Rent kvalitietsmessig bør man altså tenke
                  innhold og oversiktlighet fremfor kreative påfunn. Bruk gjerne
                  standard skrifttyper som Times New Roman eller Arial.
                  Skriftstørrelse 11 og 12 er godt leselig på en utskrift og
                  rett på skjermen. Unngå derfor mindre skriftstørrelse enn
                  dette. Variér ikke med for mange skriftstørrelser i samme
                  dokument (CV) og ha gjerne samme skrifttype og størrelse i
                  søknaden.
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl">
                  {" "}
                  Kronologisk, omvendt kronologisk eller tematisk?
                </h2>
                <p>
                  I CV’ens barndom satte man ofte opp alt man hadde gjort i
                  kronologisk rekkefølge. Det ble dermed en sammenhengende rekke
                  av hva man hadde gjort gjennom livet. Man tok da ikke hensyn
                  til å dele opp i tematiske grupper som arbeid og utdanning.
                  Man startet gjerne med grunnskolen og endte opp med hva man
                  gjorde på den dagen man skreve dokumentet. I dag er det mest
                  vanlig sette CV opp tematisk. Man skiller da mellom arbeid,
                  utdanning, verv, osv. Dette skyldes at det normalt sett blir
                  mest oversiktlig. Det er i tillegg mest vanlig å skrive i
                  omvendt kronologisk rekkefølge innenfor hvert tema. Dette
                  skyldes at man vil få leseren til å fokusere på det siste man
                  har gjort, siden dette ofte er det mest relevante i forhold
                  til jobben du søker på.
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl">
                  {" "}
                  Årstall, måned eller datohenvsninger
                </h2>
                <p>
                  Det viktigste er at man er noenlunde konsekvent. Hvis man
                  varierer mye mellom de ulike formene vitner det om manglende
                  kontroll på når du egentlig gjorde hva. I tillegg vil det fort
                  gjøre at CV blir mer uoversiktlig. Hvis du kun bruker årstall
                  vil du kunne skape usikkerhet hos leseren. Hvis du for
                  eksempel sluttet i en jobb i 97 og begynte i den neste i 97,
                  så vil ikke leseren kunne vite om du jobbet 6 måneder hvert
                  sted, om du jobbet 1 måned i en relevant jobb, om du jobbet 11
                  mnd i en relevant jobb, eller om du rett og slett prøver å
                  skjule et hull i CV! Har du kun lange arbeidsforhold vil du
                  kunne bruke årstall, men de fleste bør minimum gå ned til
                  månedshenvisninger.
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl">
                  {" "}
                  Utdanning eller arbeidsforhold først i CV?
                </h2>
                <p>
                  Hvis du velger å sette CV opp tematisk vil dette automatisk
                  bli et spørsmål. Historisk sett er det utdanning som har stått
                  først. Du skal imidlertid selv finne ut hva som er mest
                  relevant i forhold til jobben og sette det som passer best
                  først. En nyutdannet vil gjerne sette fokus på sin utdanning
                  fremfor sine sommerjobber, mens en person med god merittliste
                  fra arbeidslivet vil sette fokus på det fremfor at personen
                  opprinnelig bare har folkeskolen.
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl">
                  {" "}
                  Hull i CV. Hva gjorde du egentlig på??
                </h2>
                <p>
                  På intervjuet skal du være forberedt på å svare for hull i CV.
                  Vi skal imdidlertid være klar over at det er det skriftlige
                  dokument som ofte alene er utgangspunktet for om du kommer på
                  intervju eller ikke. Dette gjør at det kan være smart å gjøre
                  seg mest mulig attraktiv ved å tette alvorlige hull i CV
                  allerede på det skriftlige stadiet. Her er eksempler på
                  «gyldige» grunner til hull i CV: – Førstegangstjeneste –
                  Hjemme med barn – Bygget hus – Var hjelpearbeider for Røde
                  Kors i Afrika – Reiste jorden rundt – Innvilget seg en
                  velfortjent «pause»
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl"> En eller flere CV-er?</h2>
                <p>
                  De fleste nøyer seg gjerne med èn enkelt og generell CV. Det
                  er uansett viktig at du oppdaterer ting som tlf.nummer, alder,
                  osv. for hver jobb du søker. Mange velger imidlertid å
                  spesialskrive CV med tanke på den enkelte jobben eller
                  bransjen de skal søke. Dette krever en del mer arbeid men hvis
                  du lager dem bransjevis så er det ikke så mange CV’er du
                  egentlig trenger å lage. Jeg vil anbefale det siste for det
                  gjør at du kan treffe leseren mye bedre. Du vil også kunne
                  underbygge din søknad enda bedre. I tillegg vil du ha en CV
                  som er veldig godt faglig rettet som utgangspunkt for hva dere
                  skal snakke om på et evt. intervju. En person som er svært
                  dyktg innenfor IT vil kanskje bruke en svært IT-rettet CV i
                  noen tilfeller, mens personen vil bruke en CV som fokuserer på
                  at han kanskje er en god selger og kundebehandler i en annen
                  CV.
                </p>
              </div>
            </section>
            <section className="flex mx-5 mb-10 max-w-[85%] lg:max-w-[75%]">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl"> CV pr e-post</h2>
                <p>
                  Hvordan du skal sende søknad og CV vil framgå av
                  stillingsannonsen. Står det ikke noe om dette, så er det papir
                  som fortsatt er hovedregelen. Dette er imidlertid på vei til å
                  endre seg. Skal du sende CV-en per epost, så bruk standard
                  filformater, dvs at du i de fleste tilfeller bruker word.
                  Sjekk at sideskiftene havner på fornuftige steder for det er
                  ganske kjedelig om du har kjempet for å få din CV på én side
                  og så havner den på to når mottaker skriver ut.
                </p>
              </div>
            </section>
            <section className="pt-10 pb-20 text-white bg-green-700">
              <div className="flex flex-col justify-between mx-10 lg:mx-20 lg:flex-row">
                <div className="">
                  <h2 className="pb-5 text-2xl text-white">
                    {" "}
                    Dette bør CV inneholde:
                  </h2>
                  <h3 className="my-5 text-xl italic text-white">
                    Overskrift:
                  </h3>
                  <ul className="leading-8">
                    <li>– CV</li>
                    <li>– Curriculum Vitae</li>
                    <li>– Levnetsbeskrivelse</li>
                    <li>– Oversikt over utdanning og praksis</li>
                  </ul>
                  <p className="mt-8">
                    Navnet ditt kan stå i det øvre området på hver side, men la
                    det ikke stå CV øverst på hver side for dette kan virke
                    forvirrende for leseren. Bruk gjerne stor font til å skrive
                    overskriften (f.eks. CV) og navn slik at din CV blir markert
                    og lett å finne.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Personalia og kontaktinformasjon:
                  </h3>
                  <p className="mt-8">
                    {" "}
                    Navn, adresse, fødselsår(alder), sivilstatus, antall barn,
                    mobilnummer og e-post adresse bør komme tydelig frem helt i
                    starten. Dette kan gjerne stå strukturert satt opp rett
                    under overskriften.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Kjernekompetanse
                    <span className="md:hidden">
                      <br />
                    </span>
                    /nøkkelkvalifikasjoner:
                  </h3>
                  <p className="mt-8">
                    Det er stadig mer vanlig å starte sin CV med
                    kjernekompetanse. Her kan man oppsummere sine viktigste
                    egenskaper som arbeidssøker. Man skal imidlertid være
                    bevisst på at man her skal få frem den viktigste kompetansen
                    og ikke sine personlige egenskaper. Kjernekompetanse skal
                    presenteres i kortversjon, dvs. at man bør holde seg under 5
                    linjer. Det bør heller ikke være kopiert fra søknaden. Har
                    man en lang CV er det behagelig for leseren å ha en slags
                    oppsummering å forholde seg til. På dette punktet går man
                    rett på sak og trenger ikke å være spesielt beskjeden.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">Utdanning:</h3>
                  <p className="mt-8">
                    Ønsket innhold er minimum: Tidsrom, lærested og utdanning.
                    Sett dette gjerne opp omvendt kronologisk(dvs. det nyeste
                    sist). Det er vanlig å ikke ta med grunnskole. Du kan også
                    vurdere å ta bort videregående skole dersom dette er en
                    forutsetning for den videre utdanningen som er tatt. På den
                    annen side skader det ikke å ta med denne linjen Har du gode
                    karakterer kan du gjerne ta med snittkarakteren din for å gi
                    leseren et bilde av at du har hederlige resultater.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Arbeidserfaring:
                  </h3>
                  <p className="mt-8">
                    {" "}
                    Ønsket innhold er minimum: Tidsrom, arbeidsgiver og
                    tittel/innhold. Sett dette gjerne opp omvendt kronologisk.
                    Det er vanlig å ta med en kort beskrivelse av arbeidsinnhold
                    og ansvarområder. Hvis selskapet er ukjent kan du gjerne ta
                    med hva selskapet driver med. Ta gjerne med kortvarige
                    jobber (sommerjobber, osv) hvis du har lite arbeidserfaring.
                    Dette viser at du er i stand til å være en ansvarlig
                    arbeidstaker selv om du i hovedsak kanskje har vært student
                    i den senere tid. Har du hatt svært mange kortvarige
                    vikariat eller sommerjobb på samme sted flere ganger, kan
                    det være lurt å samle dem Har du som arbeidstaker fått
                    utmerkelser som «beste selger», «månedens ansatte», e.l. så
                    kan du gjerne ta dette med.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">Kurs:</h3>
                  <p className="mt-8">
                    {" "}
                    Ønsket innhold er minimum: Tidsrom, kurs, kursarrangør og
                    varighet. Sett dette gjerne opp omvendt kronologisk.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">Språk:</h3>
                  <p className="mt-8">
                    Her er det viktig å gradere sine kunnskaper. Del gjerne opp
                    i muntlig og skriftlig. Du må også prøve å formidle om du er
                    god, meget god, flytende, e.l. Hvis du kun har grunnleggende
                    basiskunnskaper fra skolebenken så ta gjerne med språket,
                    men få frem at dette nettopp er basiskunnskaper.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Sertifikater:
                  </h3>
                  <p className="mt-8">
                    Her kan du gjerne ta med førerkort for bil, motorsykkel,
                    lastebil, osv. Du kan også ta med truckførerbevis og
                    kranførerbevis. I tillegg til dette kan du ta med andre
                    sertifikater du måtte ha. Hvis det er IT-sertifiseringer
                    kommer de imidlertid kanskje under kurs eller utdanning i
                    stedet.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">Verv:</h3>
                  <p className="mt-8">
                    Om du har styreverv eller posisjon i selskap eller
                    foreninger så ta det gjerne med her. Om du ikke har noe så
                    dropper du selvfølgelig dette punktet.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Interesser:
                  </h3>
                  <p className="mt-8">
                    Skriv gjerne dine interesser ned i stikkordsform. Det er
                    ikke dette som gjør at du får jobben, men det kan være med å
                    vise din potensielle arbeidsgiver at du har et interessant
                    liv også utenfor jobben. Sunne interesser som viser at du
                    trives med andre, lever sunt, viser omsorg for din familie
                    er alltid positivt. Du kan også legge inn interesser som er
                    direkte relevant for jobben du søker. Mange som vil jobbe
                    hos en bokhandler er genuint interessert i bøker selv om de
                    ikke har jobbet i bokhandel før.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Personlige egenskaper:
                  </h3>
                  <p className="mt-8">
                    Dette er et punkt man skal være litt forsiktig med. Å skrive
                    at man er det ene og det andre kan fort virke litt negativt.
                    Et lite triks kan imidlertid være å skrive at «Man er av
                    andre blitt oppfattet som………..»
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    Referanser:
                  </h3>
                  <p className="mt-8">
                    Skriv: Referanser oppgies på forespørsel. Da vil du sikre
                    deg at du kan velge de rette referansene til ulike jobber,
                    samt at du har mulighet til å forberede referansene før de
                    kontaktes. Les mer om dette her.
                  </p>
                  <h3 className="my-5 text-xl italic text-white">
                    CV-eksempler:
                  </h3>
                  <p className="mt-8">
                    Det er ingen fasit på hvilken CV-type du skal bruke, men her
                    har du i hvert fall eksempler på ulike måter å lage CV.
                  </p>
                  <ul>
                    {" "}
                    <li className="flex my-2 hover:underline">
                      {" "}
                      <Image
                        src={arrowDown}
                        height="20"
                        width="20"
                        className="self-start mr-2"
                      />
                      <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjakt.korttruckCV-1.doc">
                        Eksempel på enkel én-sides CV for truckfører. Ordinær
                        med årstall til venstre. Kan brukes for seg selv
                      </a>
                    </li>
                    <li className="flex my-2 hover:underline">
                      <Image
                        src={arrowDown}
                        height="20"
                        width="20"
                        className="self-start mr-2"
                      />
                      <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjaktkort-CV2doc-1.doc">
                        Eksempel på enkel én-sides CV. Brukes som
                        interessevekker for lengre CV.
                      </a>
                    </li>
                    <li className="flex my-2 hover:underline">
                      <Image
                        src={arrowDown}
                        height="20"
                        width="20"
                        className="self-start mr-2"
                      />
                      <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjakt.lang-CV-1.doc">
                        Eksempel på utfyllende CV. 4 sider med omfattende
                        beskrivelse av jobb, kurs. osv.
                      </a>
                    </li>
                    <li className="flex my-2 hover:underline">
                      <Image
                        src={arrowDown}
                        height="20"
                        width="20"
                        className="self-start mr-2"
                      />
                      <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjakt.CVEU-standard-1.doc">
                        Eksempel på CV etter EU-normen. Et standardisert skjema
                        som man fyller ut.
                      </a>
                    </li>
                    <li className="flex my-2 hover:underline">
                      <Image
                        src={arrowDown}
                        height="20"
                        width="20"
                        className="self-start mr-2"
                      />
                      <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjakt.vedleggsoversikt.doc">
                        Eksempel på vedleggsliste til søknad. Det er likevel
                        relativt sjelden du trenger å sende med alt når du søker
                        jobb.
                      </a>
                    </li>
                  </ul>
                  <p className="my-5">
                    Du finner også hjelp til å skrive CV og flere ulike CV-maler
                    blant annet i tekstbehandlingsprogrammet Microsoft Word.
                    Velg Fil/Ny/Andre dokumenter – velg så CV-veiviser eller
                    velg en CV-mal.
                  </p>
                  <p className="my-5">
                    Mer om CV etter EU-norm: EU har også laget en standardisert
                    CV-mal på 13 språk som skal gjøre det enklere for
                    arbeidsgivere i flere land å sammenlikne jobbkandidater.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
