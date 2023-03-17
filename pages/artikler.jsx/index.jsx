import Head from "next/head"
import { Client } from "@/client"
import Image from "next/image"

// Blob
import Icon from "../../images/index/icon"
import blob from "../../images/blob/blob.svg"
import desktopBG from "../../images/index/desktop-section-1-bg.svg"

export default function Artikler({ data }) {
  return (
    <>
      <main className="mx-3 xxs:mx-10 xs:mx-20 md:w-[688px] md:mx-auto lg:w-[796px] xl:w-[1088px] md:text-lg ">
        {/* Static part of page */}

        {/* Mobile blob  */}
        {/* <Image
          className="BACKGROUND  w-[7rem] absolute right-0 top-0 -z-10 md:hidden"
          src={blob}
          alt=""
        /> */}

        {/* Tablet blob  */}
        {/* <Image
          className="absolute hidden BACKGROUND md:block lg:hidden md:right-0 md:top-0 md:-z-10 "
          src={Icon.tablet_blob}
          alt=""
        /> */}

        {/* Desktop blob  */}
        <Image
          className="absolute top-0 right-0 hidden bg-cover BACKGROUND lg:overflow-hidden lg:block -z-10 lg:max-w-xl"
          src={desktopBG}
          alt=""
        />

        <section className="mx-3 xxs:mx-1 xs:mx-0 lg:w-[350px] lg:pb-10 xl:w-[60%]">
          <h1 className="mt-8 text-3xl xl:text-4xl lg:pt-16 ">Finn artikler</h1>
          <p className="my-4">
            OBS! Flere av linkene er dessverre ute av drift og artiklene nede.
            Vi jobber med saken og vil oppdatere listen fortløpende
          </p>
          <p className="mb-10 font-semibold">
            Bør leses. Her vil du finne eldre artikler som er spesielt
            interessante i forhold til jobbjakt generelt. I tillegg til
            avisartikler vil du også finne lenker til andre sider som inneholder
            interessante tema i forhold til jobbjakt.
          </p>
        </section>
        {/* Dynamic part of page  */}
        <section className="mx-3 xxs:mx-1 xs:mx-0 flex flex-col gap-4 my-4 mb-10">
          {data.article.map((item) => {
            return (
              <article key={item._key}>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="">{item.description}</p>

                {/* If comment  */}
                {item?.comment && (
                  <p className="py-4 text-green-500">
                    Kommentar: {item.comment}
                  </p>
                )}
                {/* If extract  */}
                {item?.extract && (
                  <p className="py-4 text-green-500">Utdrag: {item.extract}</p>
                )}
                <p>
                  <a
                    href={item.linkUrl[0].link}
                    title={item.linkUrl[0].description}
                    target="_blank"
                    className="text-blue-500 hover:underline hover:pointer"
                  >
                    Besøk artikkel
                  </a>{" "}
                  Publisert {item.publishedAt}
                </p>

                <p className="italic">Kilde: {item.linkUrl[0].source}</p>
              </article>
            )
          })}
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await Client.fetch(`*[_type == "articles"][0]{
    _id,
    article,
  }`)
  return {
    props: {
      data,
    },
  }
}
