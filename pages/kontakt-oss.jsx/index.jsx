import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import Mobile from '../../images/kontakt/mobile.svg'
import Nykontakt from '../../images/kontakt/vector1.png'





export default function KontaktOss() {
	return (
		<>
		<main className='mx-3 mb-16 xxs:mx-10 xs:mx-20 md:w-[688px] md:mx-auto lg:w-[796px] xl:w-[1088px] md:text-lg'>
		<div className="lg:max-w-7xl lg:mb-20">

<Image
src={Nykontakt} 
width="600"
height="300"
className="hidden lg:block absolute top-0 right-0 xl:w-[700px] z-[-1]"
/>



<h1 className='mx-3 mt-8 text-2xl xxs:mx-1 xs:mx-0 md:text-left md:text-3xl xl:text-4xl md:pt-0 lg:pt-16'>Kontakt Jobbjakt</h1>



<section className='mx-3 mt-4 xxs:mx-1 xs:mx-0 md:w-3/5 md:pb-8'>			
			<p>Bakgrunnen for opprettelsen av jobbjakt.no var etterspørsel fra mange arbeidssøkere om en side som på en ryddig måte kunne vise dem vei i «internettjungelen». <br /> 
			Dette var henvendelser fra folk som ønsket å skifte jobb, nyutdannede og folk som for tiden var arbeidsledig. Det er også kjent at langt under 50% av stilingene som besettes per i dag er utlyst på vanlig måte i dagspressen. <br /> 
			Dette gjør at en veiviser til proaktiv bruk av internett er nødvendig å ha. Undertegnede har selv jobbet i selskapet Hudson (tidligere Solér) som er et rekrutteringsselskap. Selskapet ble startet i 1993 av Erik Solér.
			Bare i 2003, 2004, 2005 og 2006 har undertegnede holdt ca 70 forelesninger om alt som har med jobbjakt å gjøre. Jeg har også holdt ca 500 individuelle samtaler med jobbsøkere. 
			Tidligere bakgrunn som offiser i Forsvaret, høyskoleutdanning innen økonomi/ administrasjon og 6 års ledererfaring innen telekom/IT har gitt meg gode forutsetninger for å kartlegge markedet og forstå hvordan man kan tilnærme seg dette. Jeg er i dag salgssjef i NDS, Norsk Data Senter. 
			Et tegn på kreativitet i forbindelse med bemanningssituasjonen i NDS kan du lese i artikkelen «Utlover dusør for kommende it-stjerner». Sidene vil bli mer og mer omfattende grunnet at kontinuerlige ønsker, 
			tips og tilføyelser vil sikre videreutvikling og tilpasning til markedets etterspørsel. Når det gjelder web-sidene er alle hjertelig velkommen til å komme med tips og kommentarer. </p> 

			 <h3 className='mt-5'>Har du spørsmål eller lurer på noe så ikke nøl med å ta kontakt.</h3>
			 
			<p className='mt-5'> Per Erik Berger Mob. 404 00 111</p>
			
			<a className='font-bold text-jj-gradient-green xxs:mx-1 xs:mx-0 md:w-3/5 md:pb-8 xl:pb-0 lg:w-3/5 lg:pb-0' href='mailto:per@jobbjakt.no' target='_blank'>per@jobbjakt.no</a>
			</section>

			

			<h2 className='mx-3 text-2xl xxs:mx-1 xs:mx-0 md:text-left md:text-3xl xl:text-4xl md:pt-3'>Annonsere</h2>
			


			<section className='mx-3 my-4 xxs:mx-1 xs:mx-0 md:w-3/5 md:pb-8 lg:w-3/5 lg:pb-0'>
				
				<p>Vi har valgt å gå ut med lave priser for våre annonsører. Grunnen til dette er at vi forsøker å holde administrasjonsarbeidet på et minimum ved kun å tilby rimelige 12 måneders kontrakter.
				Juli 05 var første effektive driftsmåned og antall hits var allerede da oppe i 16 000 til tross for at det var sommerferie. <br /> Besøket har holdt seg jevnt i de påfølgende årene. <br />
				Vi tilbyr annonseplass for 490,- per måned. Dvs årskontrakt på kroner 5 880. <br /> Faktura vil bli sendt med 30 dagers forfall.
				Annonsen kan være med animasjon. <br /> Pikselstørrelse vil vi bli enige om.
				Førstesiden har begrenset plass og der er det «førstemann til mølla…»</p>
				
				<h3 className='mt-5'>Har du spørsmål eller lurer på noe så ikke nøl med å ta kontakt.</h3>

				<p className='mt-5'>Med vennlig hilsen <br /> 
				Per Erik Berger Mob. 404 00 111 <br /> </p>
				
				<a className='font-bold text-jj-gradient-green xxs:mx-1 xs:mx-0 md:w-3/5 md:pb-8 xl:pb-48 lg:w-3/5 lg:pb-0' href='mailto:per@jobbjakt.no' target='_blank'>per@jobbjakt.no</a>

				</section>
			
					


				</div>
				</main>
		</>
	)
}
