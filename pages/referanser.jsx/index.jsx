import Head from "next/head";
import Image from "next/image";
import listDec from "../../images/sokjobb/ph_diamond-fill.png";
import blob from "../../images/sokjobb/vector1.png";
import blobMobil from "../../images/sokjobb/vector-mobil.png";

export default function SokJobb() {
  return (
    <>
      <div className="flex flex-col items-center overflow-hidden">
        <div className="max-w-full lg:max-w-7xl">
          <header className="ml-10 ">
            <div>
              <h1 className="mt-[8rem] text-2xl lg:text-4xl text-green-600">
                Referanser
              </h1>
              <p className="max-w-sm mt-8 mr-10 text-gray-600 lg:max-w-xl">
                Referanser oppfattes som det beste informasjons grunnlaget for
                fremtidig jobb-suksess. Referanser kan avgjøre om du får jobben
                eller ikke. PS. Du kan påvirke i din favør.
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
            <section className="flex  pt-[4rem] ">
              <div>
                <h2 className="pb-10 mx-10 text-2xl">Hvem bør man oppgi?</h2>
                <p className="mx-10 ">
                  Primært: 3 siste arbeidsgivere, hvis du har vært ute i arbeid
                  en del år. Sekundært: Kunder, eksterne samarbeidspartnere og
                  leverandører.
                </p>
              </div>
            </section>
            <section className="flex flex-col justify-center m-10 text-center md:pt-10 md:justify-between md:flex-row">
              <div className="md:max-w-[30%] flex flex-col  items-center mb-10">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="mb-10 mr-5"
                />
                <h2 className="pb-5 text-xl">Hvis du har vært en leder:</h2>
                <p className="">
                  Overordnet. Sideordnet. Noen du har vært leder for.
                </p>
              </div>
              <div className="md:max-w-[30%] flex flex-col items-center mb-8">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="mb-10 mr-5"
                />
                <div>
                  <h2 className="pb-5 text-xl">
                    {" "}
                    Hvis du bare har hatt én jobb:
                  </h2>
                  <p>
                    Din overordnede. Sideordnet kollega. Veileder fra studier.
                    Samarbeidspartnere i forbindelse med verv. Noen du har vært
                    trener/instruktør for. Venner.
                  </p>
                </div>
              </div>
              <div className="md:max-w-[30%] flex flex-col items-center mb-8">
                <Image
                  src={listDec}
                  width="50"
                  height="50"
                  className="mb-10 mr-5"
                />

                <h2 className="pb-5 text-xl"> Hvis du er nyutdannet:</h2>
                <p>
                  Leder fra sommerjobb eller deltidsjobb. Veileder fra studier.
                  Kontaktpersoner man har fra hobbyer/fritidsaktiviteter. Evt.
                  venner.
                </p>
              </div>
            </section>
            <section className="flex m-10 max-w-[75%]">
              <div>
                <h2 className="pb-5 text-2xl">
                  {" "}
                  Kontrollér bruken av dine referanser.
                </h2>
                <p>
                  Spør hva slags referanser de vil ha. Finn ut når referansene
                  blir kontaktet. Finn ut hvem de blir kontatktet av. Ikke oppgi
                  referanser i CV med mindre du blir bedt om det. Ikke utsett
                  dine referansepersoner for å bli kontaktet for ofte.
                </p>
              </div>
            </section>
            <section className="flex m-10 max-w-[75%]">
              <div>
                <h2 className="pb-5 text-2xl"> Forbered dine referanser.</h2>
                <p>
                  Jo bedre du kan forberede dine referanser, jo bedre kan de
                  selge deg inn. Informasjon om stilling: arbeidsoppgaver/
                  ansvarsfelt/ utviklingsmuligheter. Hva du har vektlagt når du
                  har ”solgt deg inn”. Arbeidsoppgaver du har vektlagt med
                  relevans for stillingen. Hvilke usikkerhetsmomenter den som
                  ringer har i f.t. deg som kandidat. Styrker og svakheter du
                  selv har påpekt. Når du tror de vil bli kontaktet. Hvem de vil
                  bli kontaktet av. Hvorfor du har lyst på jobben.
                </p>
              </div>
            </section>
            <section className="pt-10 pb-20 text-white bg-green-700">
              <div className="flex flex-col justify-between mx-10 lg:flex-row">
                <div>
                  <h2 className="pb-10 text-2xl text-white">
                    {" "}
                    Spørsmål dine referanse-personer kan få
                  </h2>
                  <ul className="leading-8">
                    <li>- Hvor lenge har du kjent NN?</li>
                    <li>- Hvilke arbeidsoppgaver hadde NN?</li>
                    <li>- Hvem rapporterte NN til?</li>
                    <li>- Hadde NN lederansvar? For hvem?</li>
                    <li>- Hvordan fikk NN jobben?</li>
                    <li>- Hvilke egenskaper er beskrivende for NN?</li>
                    <li>- Hvordan var NN’s engasjement i arbeidet?</li>
                    <li>- Hva er NN’s begrensninger/utviklingsområder?</li>
                    <li>- Hvordan takler NN hastverk/stress?</li>
                    <li>- Møter NN opp til rett tid?</li>
                    <li>
                      - Hva vil du si om NN’s forhold til
                      overordnede/sideordnede/kunder?
                    </li>
                    <li>- Hva vil du si om NN’s evne til å samarbeide?</li>
                    <li>
                      - Har NN hatt problemer med å samarbeide med noen? Årsak?
                      Type personer?
                    </li>
                    <li>- Hva slags opplæring vil NN ha behov for? Hvorfor?</li>
                    <li>
                      - Mener du NN kan påta seg større ansvar enn hos dere?
                    </li>
                    <li>- Kan du si litt om NN’s utviklingspotensiale?</li>
                    <li>- NN oppga lønnen til …. Stemmer dette?</li>
                    <li>- NN har beskrevet stillingen som… Stemmer dette?</li>
                    <li>- Har NN representert firmaet ved noen anledning?</li>
                    <li>- Hva er NN’s definitive sterke sider (3 ord)?</li>
                    <li>
                      - Kjenner du til om det er private ting som påvirker NN
                      iobbsammenheng? F.eks. rusmidler etc.
                    </li>
                    <li>- Kan du si noe om NN’s sykefravær?</li>
                    <li>- Ville du ansatt NN igjen?</li>
                    <li>- Hva motiveres NN av?</li>
                    <li>- Hvordan er NN’s ideelle leder?</li>
                    <li>- Har du noen gode råd til NN’s nye sjef?</li>
                    <li>- Hvordan var NN’s salgsresultater?</li>
                    <li>
                      - Hvordan var NN’s evne til å sette seg inn i tekniske
                      problemstillinger?
                    </li>
                    <li>- Hvordan var NN’s faglige kompetanse?</li>
                    <li>- Hvordan var NN’s analytiske evner?</li>
                    <li>- Hvordan var NN’s ??</li>
                    <li>- Har du noe å tilføye?</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
