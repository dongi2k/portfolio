import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import data from '../../data/data.json'

const Services = ( props ) => {
	return (
		<section id={'services'}>
			<h5>{props.whatIOffer}</h5>
			<h2>{props.services}</h2>

			<div className={'container services__container'}>
				<article className={'service'}>
					<div className={'service__head'}>
						<h3>Frontend Developing</h3>
					</div>

					<ul className={'service__list'}>
						{data.services.frontend.map(({ text }, index) => {
							return (
								<li key={index}>
									<BiCheck className={'service__list-icon'}/>
									<p>{text}</p>
								</li>
							)
						})}

					</ul>
				</article>

				<article className={'service'}>
					<div className={'service__head'}>
						<h3>Web Development</h3>
					</div>

					<ul className={'service__list'}>
						{data.services.webdev.map(({ text }, index) => {
							return (
								<li key={index}>
									<BiCheck className={'service__list-icon'}/>
									<p>{text}</p>
								</li>
							)
						})}
					</ul>
				</article>

				<article className={'service'}>
					<div className={'service__head'}>
						<h3>Extras</h3>
					</div>


					<ul className={'service__list'}>
						{data.services.personal.map(({ text }, index) => {
							return (
								<li key={index}>
									<BiCheck className={'service__list-icon'}/>
									<p>{text}</p>
								</li>
							)
						})}
					</ul>

				</article>
			</div>
		</section>
	)
}

export default Services