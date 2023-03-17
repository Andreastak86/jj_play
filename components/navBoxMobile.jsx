import { useState } from "react"

export default function NavBoxMobile({ data }) {

    console.log(data);
    const [searchEngineContent, setSearchEngineContent] = useState(true)
    const [agencyContent, setAgencyContent] = useState(false)
    const [recruitmentAgenciesContent, setRecruitmentAgenciesContent] = useState(false)
    const [careerCompanyContent, setCareerCompanyContent] = useState(false)
    const [foreignSearchContent, setForeignSearchContent] = useState(false)
    const [creativeExplorationContent, setCreativeExplorationContent] = useState(false)
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
            <div
                className="flex flex-col gap-5 mx-auto mb-6 w-72 md:hidden"
            >
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setSearchEngineContent(!searchEngineContent)
                    }}
                >
                    <p>
                        Søkemotorer
                    </p>
                </button>
                <section
                    className={` mx-3 xxs:mx-1 xs:mx-0 mb-6 pr-3 ${searchEngineContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[0].title}
                    </h2>
                    <p
                        className="pr-3 my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div>
                        {data[0].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setAgencyContent(!agencyContent)
                    }}
                >
                    <p>
                        {data[1].title}
                    </p>
                </button>
                <section
                    className={`mx-3 xxs:mx-1 xs:mx-0 mb-6 ${agencyContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[1].title}
                    </h2>
                    <p
                        className="my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div
                    >
                        {data[1].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setRecruitmentAgenciesContent(!recruitmentAgenciesContent)
                    }}
                >
                    <p>
                        {data[2].title}
                    </p>
                </button>
                <section
                    className={`mx-3 xxs:mx-1 xs:mx-0 mb-6 ${recruitmentAgenciesContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[2].title}
                    </h2>
                    <p
                        className="my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div
                    >
                        {data[2].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setCareerCompanyContent(!careerCompanyContent)
                    }}
                >
                    <p>
                        Karrierebedrifter
                    </p>
                </button>
                <section
                    className={`mx-3 xxs:mx-1 xs:mx-0 mb-6 ${careerCompanyContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[3].title}
                    </h2>
                    <p
                        className="my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div
                    >
                        {data[3].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setForeignSearchContent(!foreignSearchContent)
                    }}
                >
                    <p>
                        Utenlandske søkemotorer
                    </p>
                </button>
                <section
                    className={`mx-3 xxs:mx-1 xs:mx-0 mb-6 ${foreignSearchContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[4].title}
                    </h2>
                    <p
                        className="my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div
                    >
                        {data[4].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setCreativeExplorationContent(!creativeExplorationContent)
                    }}
                >
                    <p>
                        Kreativ leting
                    </p>
                </button>
                <section
                    className={`mx-3 xxs:mx-1 xs:mx-0 mb-6 ${creativeExplorationContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[5].title}
                    </h2>
                    <p
                        className="my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div
                    >
                        {data[5].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <button
                    className=" h-14 w-72 bg-[#629967] mx-auto"
                    onClick={() => {
                        DeactivateState()
                        setGrunderContent(!grunderContent)
                    }}
                >
                    <p>
                        Gründer
                    </p>
                </button>
                <section
                    className={`mx-3 xxs:mx-1 xs:mx-0 mb-6 ${grunderContent ? "content" : "hidden"}`}
                >
                    <h2
                        className="mt-12 text-xl"
                    >
                        {data[6].title}
                    </h2>
                    <p
                        className="my-6"
                    >
                        {/* Hent ut data med portable text senere */}
                        Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.<br /> Lykke til!
                    </p>
                    <div
                    >
                        {data[6].links.map((search) => (
                            <div
                                className="pb-8 "
                            >
                                <a
                                    href={search.linkUrl}
                                    title={search.linkDescription}
                                >
                                    <h3
                                        className="text-lg font-bold underline cursor-pointer "
                                    >
                                        {search.title}
                                    </h3>
                                </a>
                                <p
                                    className="pr-3 "
                                >
                                    {search.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}