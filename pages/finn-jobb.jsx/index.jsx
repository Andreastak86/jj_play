import { Client } from '@/client'
import NavBox from '@/components/navBox'
import NavBoxMobile from '@/components/navBoxMobile'
import Head from 'next/head'
import Blob from '@/images/blob/blob.svg'
import BigBlob from '@/images/blob/bigBlob.png'
import Image from 'next/image'

export default function FinnJobb({ data }) {
	console.log(data)
	return (
		<>
			<main
				className='mx-3 xxs:mx-10 xs:mx-20 md:w-[688px] md:mx-auto lg:w-[796px] xl:w-[1088px] md:text-lg'
			>

				<Image
					className='absolute top-0 right-0 md:hidden z-[-5]'
					src={Blob}
				/>
				<Image
					className='absolute top-0 right-0 hidden w-2/5 md:block z-[-5] md:w-[558px]'
					src={BigBlob}
				/>
				<h1
					className="mx-3 mt-8 text-2xl xxs:mx-1 xs:mx-0 md:text-left md:text-3xl xl:text-4xl md:pt-72 lg:pt-16"
				>
					Finn jobb
				</h1>
				<p
					className='mx-3 my-4 xxs:mx-1 xs:mx-0 md:w-3/5 md:pb-8 xl:pb-48 lg:w-3/5 lg:pb-40'
				>
					Så du er på utkikk etter ny jobb, men trenger et sted å starte? Ta en titt på de underliggende linkene som tar deg akkurat dit du ønsker.
					<span
						className=' text-[#4d7651]'
					>
						Lykke til!
					</span>
				</p>
				<NavBoxMobile
					data={data}
				/>
				<NavBox
					data={data}
				/>
			</main>
		</>
	)
}

export async function getServerSideProps() {
	const data = await Client.fetch(
		" {'0': *[title == 'Søkemotorer'][0], '1':*[title == 'Vikarbyrå/Utleie'][0],'2':*[title == 'Rekrutteringsbyråer'][0],'3':*[title == 'Karrierebedrifter'][0] ,'4':*[title == 'Utenlandske jobbsøkemotorer'][0],'5':*[title == 'Kreativ Leting'][0],'6':*[title == 'Gründer'][0]} "
	)
	return {
		props: {
			data,
		},
	}
}
