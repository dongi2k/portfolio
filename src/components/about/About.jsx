import React, { useState } from 'react'
import './about.css'
import ME from '../../assets/IMG_1325.jpeg'
import IMG1 from '../../assets/img3.jpg'
import IMG2 from '../../assets/dongho-pf.png'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'



const About = (props) => {

	const [imgId, setImgId] = useState('img1')

	const onClickHandler = (e) => {
		setImgId(e.currentTarget.id)


	}

	return (
		<section id={'about'}>

			<h5>{props.getToKnow}</h5>
			<h2>{props.aboutMe}</h2>

			<div className={'container about__container'}>
				<div className={'about__me'}>
					<div className={'about__me-image'}>

						{	(imgId === 'img1') &&	<img className={'about__me-photo'} src={ME} alt={'About Image'}/>}
						{	(imgId === 'img2') &&	<img className={'about__me-photo'} src={IMG1} alt={'About Image'}/>}
						{	(imgId === 'img3') &&	<img className={'about__me-photo'} src={IMG2} alt={'About Image'}/>}
					</div>
					<div className={'about__me-gallery'}>
						<img id={'img1'} onClick={onClickHandler} className={'about__me-small'} src={ME} alt={'About Image'}/>
						<img id={'img2'} onClick={onClickHandler} className={'about__me-small'} src={IMG1} alt={'About Image'}/>
						<img id={'img3'} onClick={onClickHandler} className={'about__me-small'} src={IMG2} alt={'About Image'}/>
					</div>
				</div>


				<div className={'about__content'}>

					<div className={'about__cards'}>

						<article className={'about__card'}>
							<FaAward className={'about__icon'}/>
							<h5> {props.exp} </h5>
							<small> {props.descExp}</small>
						</article>

						<article className={'about__card'}>
							<FiUsers className={'about__icon'}/>
							<h5>{props.clients}  </h5>
							<small>{props.descClients} </small>
						</article>

						<article className={'about__card'}>
							<VscFolderLibrary className={'about__icon'}/>
							<h5>{props.projects} </h5>
							<small>{props.descProjects} </small>
						</article>

					</div>

					<p>{props.aboutText}</p>

					<a href={'#contact'} className={'btn btn-primary'}>{props.talk}</a>
				</div>
			</div>
		</section>
	)
}

export default About