import Link from "next/link"
import Logo from "@/images/layout/footer/Jobbjakt_logo.svg"
import Image from "next/image"
import Mail from "@/images/layout/footer/mail.png"
import Phone from "@/images/layout/footer/phone.png"

export default function Footer() {
  return (
    <footer className=" text-jj-footer-links-grey bg-[#050C11] text-center">
      <Link
        href="/"
        className="flex  items-center justify-center my-8 w-fit  mx-auto"
      >
        <Image src={Logo} width={55} alt="Logo til Jobbjakt" />
        <p className="text-2xl text-white uppercase lg:text-4xl">JobbJakt</p>
      </Link>
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col gap-4 lg:flex-row lg:ml-[10%]">
          <p>
            <Link href="/finn-jobb">Finn Jobb</Link>
          </p>
          <p>
            <Link href="/sok-jobb">Søk Jobb</Link>
          </p>
          <p>
            <Link href="/artikler">Artikler</Link>
          </p>
          <p>
            <Link href="/kontakt-oss">Kontakt Oss</Link>
          </p>
        </div>
        <div className="lg:flex mr-[10%] gap-4 hidden">
          {/* <div
                    className="flex flex-row"
                > */}
          <Image src={Mail} width={24} alt="Epost ikon" />
          <p>
            <a href="mailto:">per@jobbjakt.no</a>
          </p>
          {/* </div> */}
          {/* <div> */}
          <Image src={Phone} width={24} alt="Mobil ikon" />
          <p>404 00 111</p>
          {/* </div> */}
        </div>
      </div>
      <div className="bg-white border-t-[1px] mt-4 w-2/4 mx-auto lg:w-5/6"></div>
      <div className="justify-center py-4 lg:flex text-jj-footer-kv-grey">
        <a href="https://www.kodeverketbergen.no/">
          <p>© Kodeverket Bergen</p>
        </a>
        <p className="hidden px-3 lg:block">|</p>
        <p>“Utviklet i regnet av Kodeverket Bergen"</p>
      </div>
    </footer>
  )
}
