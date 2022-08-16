import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import data from '../../data/data.json'

const Experience = (props) => {
	return (
		<section id={'experience'}>

			<h5>{props.whatSkills}</h5>

			<h2>{props.myExperience}</h2>

			<div className={'container experience__container'}>

				<div className={'experience__frontend'}>
					<h3>Frontend</h3>
					<div className={'experience__content'}>

						{data.experience.frontend.map(({ title, level }, index) => {

							return (
								<article className={'experience__details'} key={index}>
									<BsPatchCheckFill className={'experience__details-icon'}/>
									<div>
										<h4>{title}</h4> <small className={'text-light'}>{level}</small>
									</div>
								</article>
							)
						})}


					</div>
				</div>

				<div className={'experience__backend'}>
					<h3>Backend</h3>
					<div className={'experience__content'}>
						{data.experience.backend.map(({ title, level }, index) => {
							return (
								<article className={'experience__details'} key={index}>
									<BsPatchCheckFill className={'experience__details-icon'}/>
									<div>
										<h4>{title}</h4> <small className={'text-light'}>{level}</small>
									</div>
								</article>
							)
						})}


					</div>
				</div>
			</div>

		</section>
	)
}

export default Experience