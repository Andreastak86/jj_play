import Head from "next/head"
import Image from "next/image"
import listDec from "../../../images/sokjobb/ph_diamond-fill.png"
import blob from "../../../images/sokjobb/vector1.png"
import blobMobil from "../../../images/sokjobb/vector-mobil.png"
import arrowDown from "../../../images/sokjobb/arrow-down.png"

export default function SokJobb() {
  return (
    <>
      <div className="flex flex-col items-center h-full overflow-hidden">
        <div className="lg:max-w-7xl ">
          <header className="ml-10 ">
            <div>
              <h1 className="mt-[8rem] text-4xl text-green-600">Søknad</h1>
              <p className="max-w-sm mt-8 mr-10 text-gray-600 lg:max-w-xl">
                Søknaden er ditt salgsbrev til bedriften. I korte trekk kan du
                se på søknaden som et brev til arbeidsgiver hvor du skal vise at
                du er den rette. Man må skille mellom søknad i forbindelse med
                en utlyst stilling og en åpen/generell søknad. Teksten er
                trukket ut i fra ulike forelesninger jeg har hatt siste året.
              </p>
            </div>
            <Image
              src={blob}
              width="600"
              height="300"
              className="hidden md:block absolute top-0 right-0 xl:w-[700px] z-[-1]"
            />
            <Image
              src={blobMobil}
              width="200"
              height="300"
              className="absolute top-0 right-0 block md:hidden z-[-1]"
            />
          </header>

          <main>
            <section className="flex max-w-2xl pt-10 m-10">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl"> Hvorfor er søknad viktig?</h2>
                <p>
                  Søknaden er ditt eget salgsbrev. Det er her du hovedsakelig
                  kan utfolde deg med fritekst. Det er her du kan legge fokus på
                  aktuelle kvalifikasjoner, erfaring og tema som du selv ønsker.
                  Tenk argumentasjon og fang leserens oppmerksomhet.
                </p>
              </div>
            </section>
            <section className="flex flex-col justify-between m-10 md:flex-row">
              <div className="flex">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="self-start mr-5"
                />
                <div>
                  <h2 className="pb-5 text-2xl">
                    Hva er viktigst? CV eller søknad?
                  </h2>
                  <p className="">
                    CV = Curriculum Vitae = «det lille livsløpet» CV er altså en
                    kortfattet oppsummering av hva du har gjort. CV bør i
                    utgangspunktet gi mest mulig informasjon på kortest mulig
                    tid. CV bør kunne stå for seg selv. Husk at når vikarbyråene
                    leter etter folk så er det som oftest kun CV de har
                    tilgjengelig. Søknad = salgsbrevet ditt.
                  </p>
                </div>
              </div>
              <p className="p-5 pl-8 ml-10 md:text-white md:bg-gradient-to-r from-green-500 to-green-700 rounded-xl md:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Noen fokuserer på CV andre på søknad og noen på begge deler, dvs
                ingen fasit.
              </p>
            </section>
            <section className="flex max-w-2xl m-10">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl"> Balanse mellom CV og søknad.</h2>
                <p>
                  Hvis ikke området kjernekompetanse selger deg inn så gjør det
                  i søknaden. Skriv ikke «dobbelt». Leseren mister fort
                  interessen hvis personen får «klipp og lim»-følelsen. En kort
                  søknad kan passe med en lang CV. En litt lengre og
                  argumenterende søknad kan passe med en kort CV. Tenk balanse.
                </p>
              </div>
            </section>
            <section className="flex max-w-2xl m-10">
              <Image
                src={listDec}
                width="50"
                height="50"
                className="self-start mr-5"
              />
              <div>
                <h2 className="pb-5 text-2xl"> Hva ser leseren etter?</h2>
                <p>
                  I utgangspunktet: Er dette rett person? Har du de nødvendige
                  tekniske ferdigheter? Dvs. Kan du utføre jobben? Hvor fort vil
                  du bli en økonomisk bidragsyter til firmaet. «The fit factor».
                  Passer du inn sosialt? Er du motivert for jobben? Dette er
                  spørsmål rekruttereren til slutt vil ha besvart. Man må
                  begynne å selge inn momenter som bygger opp om dette allerede
                  når man skal skrive søknad og CV. Under intervjuet vil han
                  kanskje ikke stille disse spørsmålene direkte, men det er som
                  nevnt dette han egentlig vil ha svar på.
                </p>
              </div>
            </section>
            <section className="py-10 text-white bg-green-700">
              <div className="flex flex-col justify-between mx-20 lg:flex-row">
                <article className=" lg:w-[25%]">
                  <h4 className="my-5 text-xl italic text-white">
                    Argumentering
                  </h4>
                  <p className="">
                    Det er her du gjør salgsfremstøtet. Legg full fokus på alt
                    relevant du har gjort i forhold stillingen. Utdyp langt mer
                    enn hva man kan gjøre i CV. Tenk: Hva gjør meg interessant.
                  </p>
                </article>
                <article className="lg:w-[25%]">
                  <h4 className="my-5 text-xl italic text-white">
                    Standardbrev eller ikke?
                  </h4>
                  <p className="">
                    Ha gjerne et standard oppsett…. men tenk alltid at denne
                    søknaden skal selge meg til denne jobben. Ha i hvert fall et
                    avsnitt som er superspesialtilpasset til denne jobben.
                  </p>
                </article>
                <article className="lg:w-[25%]">
                  <h4 className="my-5 text-xl italic text-white">
                    NS eller fri design?
                  </h4>
                  <p className="">
                    NS = Norsk standard. Norsk standard kan virke tørt, men har
                    sine styrker. Fri design kan virke spennende, men kan fort
                    bli uoversiktlig. Finn en balanse. Vær kreativ med måte.
                  </p>
                </article>
              </div>
              <h2 className="my-20 text-xl text-center text-white">
                Eksempel på hvordan du kan sette opp søknadsbrevet ved utlyst
                stilling:
              </h2>
              <div className="flex justify-center">
                <div className=" text-black bg-white w-[80%] p-10 rounded-xl mb-20">
                  <div className="flex justify-between mb-10">
                    <div>
                      <p>Ditt navn</p>
                      <p>Din adresse</p>
                      <p>Postnr. og poststed</p>
                    </div>
                    <div>
                      <p>Sted, Dato</p>
                    </div>
                  </div>
                  <p>Bedriftens navn</p>
                  <p>v/ kontaktperson</p>
                  <p>Adresse</p>
                  <p>Postnr. og poststed</p>
                  <h2 className="my-10">
                    Overskrift: Søknad på stilling som
                    (navnet/stillingsbetegnelsen og/eller evt. referansenummer)
                  </h2>
                  <ul className="mx-5 my-10 list-disc">
                    <li className="my-5">
                      Hvor du fant stillingen og eventuelt henvisning til
                      kontakt, samt at du søker på stillingen
                    </li>
                    <li className="my-5">
                      Kort om personalia (det er vanlig å nevne alder) og hva du
                      gjør per i dag.
                    </li>
                    <li className="my-5">
                      Årsaken til at du søker, din motivasjon, hvorfor denne
                      stillingen, hvorfor denne bedriften (ikke skriv noe
                      negativt om tidligere eller nåværende arbeidsgivere)
                    </li>
                    <li className="my-5">
                      Dine faglige kvalifikasjoner (viktigste utdanning og
                      praksis i forhold til utlysningsteksten, prøv å bruke
                      andre ord enn i teksten, her bruker du det som du fikk
                      frem i stillingsanalysen)
                    </li>
                    <li className="my-5">
                      Personlige egenskaper/fortrinn (her er det viktig å bruke
                      stillingsannonsen, der står det ofte ønskede egenskaper,
                      få med disse uten at det virker som du har klippet direkte
                      fra utlysingsteksten)
                    </li>
                    <li className="my-5">
                      En høflig avslutning hvor du formidler at du gjerne
                      stiller til samtale og at de gjerne kan ringe deg på tlf
                      xxx xx xxx om de lurer på noe.
                    </li>
                  </ul>
                  <p>Med vennlig hilsen</p>
                  <p>Signatur_______</p>
                  <p>Navnet Ditt</p>
                </div>
              </div>
              <div className="flex flex-col ">
                <h3 className="mb-10 text-xl text-center text-white ">
                  Eksempel på søknader
                </h3>
                <div className="flex mx-24 mb-10 hover:underline">
                  <Image
                    src={arrowDown}
                    height="20"
                    width="20"
                    className="self-start mr-2 -rotate-90"
                  />
                  <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjakt.soknad.vanlig.IT-PDF.pdf">
                    Eksempel på vanlig søknad, IT
                  </a>
                </div>
                <div className="flex mx-24 mb-10 hover:underline">
                  <Image
                    src={arrowDown}
                    height="20"
                    width="20"
                    className="self-start mr-2 -rotate-90"
                  />
                  <a href="https://jobbjakt.no/wp-content/uploads/2019/03/jobbjakt.apen_.sokn_.engineering-PDF.pdf">
                    Eksempel på åpen søknad for utdannet <br />
                    person med erfaring
                  </a>
                </div>
              </div>
            </section>
            <section className="pt-10 ">
              <section className="flex max-w-2xl m-10">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="self-start mr-5"
                />
                <div>
                  <h2 className="pb-5 text-2xl"> Hvordan SELGE SEG SELV</h2>
                  <p>
                    Selg deg selv som en uimotståelig personlig merkevare.
                    Personlige egenskaper blir stadig viktigere og viktigere når
                    næringslivet ansetter folk. Det er altså disse egenskapene
                    du nå skal selge.
                  </p>
                </div>
              </section>
              <div className="flex flex-col lg:flex-row">
                <div>
                  <section className="flex max-w-2xl m-10">
                    <Image
                      src={listDec}
                      width="50"
                      height="50"
                      className="self-start mr-5"
                    />
                    <div>
                      <h2 className="pb-5 text-2xl"> Bli en merkevare</h2>
                      <p className="mr-10">
                        Selg deg selv som en uimotståelig personlig merkevare.
                        Personlige egenskaper blir stadig viktigere og viktigere
                        når næringslivet ansetter folk. Det er altså disse
                        egenskapene du nå skal selge.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
              <section className="flex max-w-2xl m-10">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="self-start mr-5"
                />
                <div>
                  <h2 className="pb-5 text-2xl"> Brand = varemerke</h2>
                  <p>
                    Et produkt kan kopieres av en konkurrent – en merkevare er
                    unik. Et produkt kan gå «ut på dato» – et suksessfyllt
                    varemerke er tidløst.
                  </p>
                </div>
              </section>
              <section className="flex flex-col m-10">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex">
                    <Image
                      src={listDec}
                      width="50"
                      height="50"
                      className="self-start mr-5"
                    />
                    <div className="">
                      <h2 className="pb-5 text-2xl"> En persons «brand»</h2>
                      <p className="">
                        Målet er at andre skal huske deg og det du står for!
                        «Idar Vollvik? Ja, businessmannen med ideene,
                        pågangsmotet og gjennomføringsevnen». Eller:«Kari Traa?
                        Sunn, frisk, hip og norsk!! Lar utstråling bli business»
                        Fremgangsmåten er basert på vanlig merkevarebygging.
                        Finn først ut hva som er nettopp din styrke og hva som
                        gjør deg spesiell. Fokusér så knallhardt på dette når du
                        markedsfører deg selv. Først må du bli klar over dine
                        sterke sider. Deretter skal du kommunisere dem utad. Da
                        øker du både egen markedsverdi og selvfølelse.
                      </p>
                      <ul>
                        <li className="py-2 text-xl font-semibold ">
                          {" "}
                          Hvilket stempel står i pannen på deg?
                        </li>
                        <li>- Arbeidsledig</li>
                        <li>- Arbeidsøkende</li>
                        <li>- En sterk ressurs</li>
                        <li>- Faglig dyktig</li>
                        <li>- …eller noe annet</li>
                      </ul>
                    </div>
                  </div>
                  <ul className=" lg:text-white lg:bg-gradient-to-r from-green-500 to-green-700 rounded-xl lg:p-5 mx-14 min-w-[30%] lg:h-[270px] pt-5 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                    <p className="pb-5 ml-1 text-xl font-medium">
                      Hvor og hvordan kan du selge deg?
                    </p>
                    <li>- Søknaden</li>
                    <li>- PowerPoint</li>
                    <li>- CV</li>
                    <li>- På telefon</li>
                    <li>- Sosiale settinger</li>
                    <li>- Intervju</li>
                    <li>- Webside</li>
                  </ul>
                </div>
              </section>
              <section className="flex max-w-2xl m-10">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="self-start mr-5"
                />
                <div>
                  <h2 className="pb-5 text-2xl"> Image</h2>
                  <p>
                    Skap et tydelig bilde av deg selv og det du kan. Mennesker
                    setter merkelapper på hverandre, og putter hverandre i bås.
                    Ved å ta kontrollen over hvordan andre oppfatter deg,
                    utnytter du bås-settingen til din egen fordel. Konservativ!
                    Moderne! Dynamisk! Lytteren! Lederen! Hvilket bilde har
                    andre av deg og din kompetanse? Først når andre kjenner din
                    profil, kan de selge deg…..Vet du selv hvem du er?? Prøv å
                    oppsummere deg selv ved å bruke 2 ord som beskriver personen
                    og 3 ord som beskriver kompetansen. Resultatet kan for
                    eksempel bli: Resultatorientert og effektiv. Kan «alt» om
                    salg, sko og reklame. Hvis en innehaver av en skobutikk
                    hadde lest dette ville han uansett sjekket videre om du
                    kunne være en interessant person for dem.
                  </p>
                </div>
              </section>
              <section className="flex max-w-2xl m-10">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="self-start mr-5"
                />
                <div>
                  <h2 className="pb-5 text-2xl"> Forslag</h2>
                  <p>
                    Du må fremstå helhetlig,,, ,,,men du må få frem
                    spisskompetanse. Det er ingen som ansetter en potet!! Du må
                    ikke bløffe.
                  </p>
                  <ul>
                    <li className="py-5 text-bold">6 ting du kan oppnå</li>
                    <li>Du forstår deg selv bedre.</li>
                    <li>Du skiller deg ut fra mengden.</li>
                    <li>Du kan bli synligere.</li>
                    <li>
                      Du kan få mer relevante og interessante arbeidsoppgaver.
                    </li>
                    <li>Du kan få høyere lønn.</li>
                    <li>Du kan få bedre selvtillit.</li>
                  </ul>
                </div>
              </section>
              <section className="flex max-w-2xl m-10">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="self-start mr-5"
                />
                <div>
                  <h2 className="pb-5 text-2xl"> Hvordan fremstår du?</h2>
                  <p>
                    Dersom du har sjelden og ettertraktet kompetanse må du bruke
                    det. Personlig merkevarebygging er hittil mer utbredt i
                    utlandet. I USA blir det «hausset» opp som en av de nye
                    trendene i næringslivet. Imagebyggerne tenker på
                    klesdrakten, bilen sin, kontoret, nettverket og ikke minst
                    ordspillet som bekrefter at de er den de fremstår som.
                    Særlig aktuelt for kjendiser? Tja, men kanskje det kan bidra
                    til å gjøre deg til en kjendis?
                  </p>
                </div>
              </section>
              <div className="flex">
                <section className="flex max-w-2xl m-10">
                  <Image
                    src={listDec}
                    width="50"
                    height="50"
                    className="self-start mr-5"
                  />
                  <div>
                    <h2 className="pb-5 text-2xl"> Annonse</h2>
                    <p className="pb-10">
                      Du er en unik merkevare. Du har styrker, du har en image,
                      du har deg selv. For å øve seg på å fremstille seg tydelig
                      kan man lage en halvsides annonse/reklameplakat hvor du
                      presenterer dine unike salgsargumenter. I tillegg kan du
                      øve inn en 3 minutters muntlig presentasjon av deg selv.
                      SELG DEG SELV!!
                    </p>
                  </div>
                </section>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
