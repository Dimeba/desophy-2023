import { useEffect } from 'react'

// components
import Head from 'next/head'

// hooks
import { useNavContext } from '@/hooks/useNavContext'

// sections
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Podcast from '@/components/Podcast'
import Shop from '@/components/Shop'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

// contentful

import { createClient } from 'contentful'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const homepage = await client.getEntries({
		content_type: 'homepage'
	})

	const podcast = await client.getEntries({
		content_type: 'podcast'
	})

	const services = await client.getEntries({
		content_type: 'service',
		order: 'sys.createdAt'
	})

	return {
		props: {
			homepage: homepage.items[0],
			podcast: podcast.items[0],
			services: services.items
		}
	}
}

export default function Home({ homepage, podcast, services }) {
	const { setNavigation, setServicesNav, setShowPodcast, setShowShop } =
		useNavContext()

	useEffect(() => {
		const nav = {
			about: homepage.fields.aboutTitle,
			services: homepage.fields.servicesTitle,
			podcast: homepage.fields.podcastTitle,
			shop: homepage.fields.shopTitle,
			contact: homepage.fields.contactTitle
		}

		setNavigation(nav)
		setServicesNav(services)
		setShowPodcast(homepage.fields.showPodcast)
		setShowShop(homepage.fields.showShop)
	}, [])

	console.log(homepage.fields.showPodcast)

	return (
		<>
			<Head>
				<title>
					DeSophy | DeSophy is a full-service consultancy for commercial real
					estate brokers.
				</title>
				<meta
					name='description'
					content='Inspired by Culture & Storytelling we leverage our profound market knowledge and cutting-edge AI-driven solutions, we provide unparalleled expertise, creativity and dedication to every project so you can focus on what you do the best, work more efficiently and close more deals.'
				/>
				<meta
					name='keywords'
					content='real estate, support, marketing, branding, market research, graphic design, web development, social media, strategy, comparable sales'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<Hero
					title={homepage.fields.title}
					subtitle={homepage.fields.subtitle}
				/>
				<About
					aboutTitle={homepage.fields.aboutTitle}
					aboutText={homepage.fields.about}
				/>
				<Services
					servicesTitle={homepage.fields.servicesTitle}
					servicesText={homepage.fields.services}
					services={services}
				/>
				{homepage.fields.showPodcast && (
					<Podcast
						podcastTitle={homepage.fields.podcastTitle}
						podcastText={homepage.fields.podcast}
						episode={podcast}
					/>
				)}
				{homepage.fields.showShop && (
					<Shop
						shopTitle={homepage.fields.shopTitle}
						shopText={homepage.fields.shop}
						shopSamples={homepage.fields.shopSamples}
					/>
				)}
				{homepage.fields.showTestimonials && (
					<Testimonials
						testimonialName={homepage.fields.testimonialName}
						testimonialTitle={homepage.fields.testimonialTitle}
						testimonialCompany={homepage.fields.testimonialCompany}
						testimonialQuote={homepage.fields.testimonialQuote}
						testimonialPhoto={homepage.fields.testimonialPhoto}
						testimonialLogo={homepage.fields.testimonialLogo}
					/>
				)}

				<Contact
					contactTitle={homepage.fields.contactTitle}
					contactText={homepage.fields.contact}
				/>
			</>
		</>
	)
}
