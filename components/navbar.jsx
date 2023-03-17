import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MdArrowDropDown } from "react-icons/md"
import { useRouter } from "next/router"
import Logo from "@/images/layout/navBar/Jobbjakt_logo.svg"

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai"

// Importing mobile blob
import blob from "../images/blob/blob.svg"

const NavBar = () => {
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)

  const [dropDown, setDropDown] = useState(false)
  console.log(router.pathname)

  return (
    <nav
      className={`w-full ${
        navbar ? "bg-black lg:bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="justify-between px-4 mx-auto lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <Image src={Logo} width={55} alt="Jobbjakt logo" />
              <span className="hidden lg:block ml-2.5 self-center text-2xl whitespace-nowrap text-[#242424] uppercase font-bold">
                JobbJakt.no
              </span>
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-900 rounded-md outline-none focus:border-gray-900 focus:border"
                onClick={() => {
                  setNavbar(!navbar)
                }}
              >
                <Image
                  className="BACKGROUND  w-[7rem] absolute right-0 top-0 -z-10"
                  src={blob}
                  alt=""
                />
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8  lg:block lg:pb-0 lg:mt-0 bg-black lg:bg-transparent ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className="relative items-center justify-center space-y-8 text-center lg:flex lg:space-x-5 lg:space-y-0"
              onClick={() => {
                setNavbar(!navbar)
              }}
            >
              <li
                className={`${
                  router.pathname === "/" ? "underline" : ""
                } text-white hover:scale-110`}
              >
                <Link href="/">Forsiden</Link>
              </li>
              <li
                className={`${
                  router.pathname === "/artikler" ? "underline" : ""
                } text-white hover:scale-110`}
              >
                <Link href="/artikler">Artikler</Link>
              </li>
              <li
                className={`${
                  router.pathname === "/finn-jobb" ? "underline" : ""
                } text-white hover:scale-110`}
              >
                <Link href="/finn-jobb">Finn Jobb</Link>
              </li>
              <li
                className={`${
                  router.pathname === "/intervju" ? "underline" : ""
                } text-white hover:scale-110`}
              >
                <Link href="/intervju">Intervju</Link>
              </li>
              <li
                className={`${
                  router.pathname === "/kontakt-oss" ? "underline" : ""
                } text-white hover:scale-110`}
              >
                <Link href="/kontakt-oss">Kontakt Oss</Link>
              </li>
              <div>
                <li
                  className={` ${router.pathname === "" ? "underline" : ""} ${
                    router.pathname === "/sok-jobb/cv" ? "underline" : ""
                  } text-white hover:cursor-pointer hover:underline lg:flex items-center hidden`}
                  onClick={() => setDropDown(!dropDown)}
                >
                  Søk Jobb
                  {dropDown ? (
                    <AiOutlineArrowUp size={18} className="hidden lg:block" />
                  ) : (
                    <AiOutlineArrowDown size={18} className="hidden lg:block" />
                  )}
                </li>
                {/* Check this  */}
                <li className="mt-8 text-white lg:hidden">
                  <Link href="/sok-jobb/cv">CV</Link>
                </li>
                <li className="mt-8 text-white lg:hidden">
                  <Link href="/sok-jobb/soknad">Søknad</Link>
                </li>
                <div
                  className={`  text-white hover:cursor-pointer bg-jj-gradient-green w-[82px]  ${
                    dropDown ? "content mt-1 text-start absolute" : "hidden"
                  }`}
                >
                  <li onClick={() => setDropDown(!dropDown)} className="my-2">
                    <Link href="/sok-jobb/cv">CV</Link>
                  </li>
                  <li onClick={() => setDropDown(!dropDown)}>
                    <Link href="/sok-jobb/soknad">Søknad</Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
