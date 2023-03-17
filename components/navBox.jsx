import { useState } from "react"

export default function NavBox({ data }) {
  const [searchEngineContent, setSearchEngineContent] = useState(true)
  const [agencyContent, setAgencyContent] = useState(false)
  const [recruitmentAgenciesContent, setRecruitmentAgenciesContent] =
    useState(false)
  const [careerCompanyContent, setCareerCompanyContent] = useState(false)
  const [foreignSearchContent, setForeignSearchContent] = useState(false)
  const [creativeExplorationContent, setCreativeExplorationContent] =
    useState(false)
  const [grunderContent, setGrunderContent] = useState(false)

  function DeactivateState() {
    setSearchEngineContent(false)
    setAgencyContent(false)
    setRecruitmentAgenciesContent(false)
    setCareerCompanyContent(false)
    setForeignSearchContent(false)
    setCreativeExplorationContent(false)
    setGrunderContent(false)
  }

  return (
    <>
      <div className="hidden justify-right md:flex md:mx-auto md:mb-8">
        <div>
          <ul className="sticky left-0 my-auto text-2xl border-2 border-black border-solid top-48 w-60 text-whit center">
            <li
              className={`h-20 flex justify-center items-center hover:cursor-pointer ${
                searchEngineContent
                  ? "bg-[#394F3B] text-white"
                  : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setSearchEngineContent(!searchEngineContent)
              }}
            >
              Søkemotor
            </li>
            <li
              className={`h-20 flex justify-center items-center hover:cursor-pointer ${
                agencyContent ? "bg-[#394F3B] text-white" : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setAgencyContent(!agencyContent)
              }}
            >
              Vikarbyrå/Utleie
            </li>
            <li
              className={`h-20 flex justify-center items-center hover:cursor-pointer ${
                recruitmentAgenciesContent
                  ? "bg-[#394F3B] text-white"
                  : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setRecruitmentAgenciesContent(!recruitmentAgenciesContent)
              }}
            >
              Rekrutteringsbyråer
            </li>
            <li
              className={`h-20 flex justify-center items-center hover:cursor-pointer ${
                careerCompanyContent
                  ? "bg-[#394F3B] text-white"
                  : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setCareerCompanyContent(!careerCompanyContent)
              }}
            >
              Karrierebedrifter
            </li>
            <li
              className={`h-20 flex justify-center text-center items-center hover:cursor-pointer ${
                foreignSearchContent
                  ? "bg-[#394F3B] text-white"
                  : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setForeignSearchContent(!foreignSearchContent)
              }}
            >
              Utenlandske jobbsøkemotorer
            </li>
            <li
              className={`h-20 flex justify-center items-center  hover:cursor-pointer ${
                creativeExplorationContent
                  ? "bg-[#394F3B] text-white"
                  : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setCreativeExplorationContent(!creativeExplorationContent)
              }}
            >
              Kreativ leting
            </li>
            <li
              className={`h-20 flex justify-center items-center hover:cursor-pointer ${
                grunderContent ? "bg-[#394F3B] text-white" : " bg-transparent"
              }`}
              onClick={() => {
                DeactivateState()
                setGrunderContent(!grunderContent)
              }}
            >
              Gründer
            </li>
          </ul>
        </div>
        <div className=" w-fit">
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              searchEngineContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-2xl font-bold w-fit">{data[0].title}</h2>
            <p className="my-6">
              {/* Hent ut data med portable text senere */}
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>
            <div>
              {data[0].links.map((search) => (
                <div>
                  <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                    <a href={search.linkUrl} title={search.linkDescription}>
                      {search.title}
                    </a>
                  </h3>
                  <p className="pb-8 text-lg">{search.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              agencyContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-xl w-fit">{data[1].title}</h2>
            <p className="my-6">
              {/* Hent ut data med portable text senere */}
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>

            {data[1].links.map((search) => (
              <div>
                <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                  <a href={search.linkUrl} title={search.linkDescription}>
                    {search.title}
                  </a>
                </h3>
                <p className="pb-8 text-lg">{search.description}</p>
              </div>
            ))}
          </section>
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              recruitmentAgenciesContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-xl w-fit">{data[2].title}</h2>
            <p className="my-6">
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>
            {data[2].links.map((search) => (
              <div>
                <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                  <a href={search.linkUrl} title={search.linkDescription}>
                    {search.title}
                  </a>
                </h3>
                <p className="pb-8 text-lg">{search.description}</p>
              </div>
            ))}
          </section>
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              careerCompanyContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-xl w-fit">{data[3].title}</h2>
            <p className="my-6">
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>
            {data[3].links.map((search) => (
              <div>
                <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                  <a href={search.linkUrl} title={search.linkDescription}>
                    {search.title}
                  </a>
                </h3>
                <p className="pb-8 text-lg">{search.description}</p>
              </div>
            ))}
          </section>
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              foreignSearchContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-xl w-fit">{data[4].title}</h2>
            <p className="my-6">
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>
            {data[4].links.map((search) => (
              <div>
                <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                  <a href={search.linkUrl} title={search.linkDescription}>
                    {search.title}
                  </a>
                </h3>
                <p className="pb-8 text-lg">{search.description}</p>
              </div>
            ))}
          </section>
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              creativeExplorationContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-xl w-fit">{data[5].title}</h2>
            <p className="my-6">
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>
            {data[5].links.map((search) => (
              <div>
                <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                  <a href={search.linkUrl} title={search.linkDescription}>
                    {search.title}
                  </a>
                </h3>
                <p className="pb-8 text-lg">{search.description}</p>
              </div>
            ))}
          </section>
          <section
            className={`w-[400px] lg:w-[500px] xl:w-[800px] ml-12 ${
              grunderContent ? "content" : "hidden"
            }`}
          >
            <h2 className="mt-6 text-xl w-fit">{data[6].title}</h2>
            <p className="my-6">
              Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta
              en titt på de underliggende linkene som tar deg akkurat dit du
              ønsker.
              <br /> Lykke til!
            </p>
            {data[6].links.map((search) => (
              <div>
                <h3 className="w-full text-xl font-bold underline uppercase cursor-pointer">
                  <a href={search.linkUrl} title={search.linkDescription}>
                    {search.title}
                  </a>
                </h3>
                <p className="pb-8 text-lg">{search.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
