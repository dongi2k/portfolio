import React from 'react'
import './testimonials.css'
import AVAR1 from '../../assets/avatar1.jpg'
import AVAR2 from '../../assets/avatar2.jpg'
import AVAR3 from '../../assets/avatar3.jpg'
import AVAR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
	{
		avatar: AVAR1,
		name: 'First Lastname',
		review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n',
	},
	{
		avatar: AVAR2,
		name: 'First Lastname',
		review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n',
	},
	{
		avatar: AVAR3,
		name: 'First Lastname',
		review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n',
	},
	{
		avatar: AVAR4,
		name: 'First Lastname',
		review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n',
	},
]

const Testimonials = () => {
	return (
		<section id={'testimonials'}>

			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper className={'container testimonials__container'}
			        spaceBetween={0}
			        slidesPerView={1}

			        modules={[Pagination, Navigation]}
			        navigation
			        pagination={{ clickable: true }}
			>
				{
					data.map(({ avatar, name, review }, index) => {
						return (
							<SwiperSlide key={index} className={'testimonial'}>
								<div className={'client__avatar'}>
									<img src={avatar} alt={name}/>

								</div>
								<h5 className={'client__name'}>{name}</h5>
								<small className={'client__review'}>
									{review}
								</small>
							</SwiperSlide>
						)
					})
				}


			</Swiper>

		</section>
	)
}

export default Testimonials