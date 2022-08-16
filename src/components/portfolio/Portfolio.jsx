import React from 'react';
import './portfolio.css';

import data from '../../data/data.json'




const Portfolio = ( props ) => {
	return(
		<section id={'portfolio'}>
			<h5>{props.myRecent}</h5>
			<h2>{props.portfolio}</h2>

			<div className={'container portfolio__container'}>
				{
					data.portfolio.map(({image, title, github, demo}, index) => {
						return (
							<article key={index} className={'portfolio__item'}>
								<div className={'portfolio__item-image'}>
									<img className={'portfolio__image'} src={image} alt={title} />
								</div>
								<h3>{title}</h3>

								<div className={'portfolio__item-cta'}>
									<a href={github} className={'btn'} target={'_blank'} rel={''}>Gibhub</a>
									<a href={demo} className={'btn btn-primary'} target={'_blank'} rel={''} >Live Demo</a>
								</div>
							</article>
						)
					})
				}

				{/*<article className={'portfolio__item'}>*/}
				{/*	<div className={'portfolio__item-image'}>*/}
				{/*		<img src={IMG2} alt={''} />*/}
				{/*	</div>*/}
				{/*	<h3>This is a portfolio item title</h3>*/}

				{/*	<div className={'portfolio__item-cta'}>*/}
				{/*	<a href={'https://github.com'} className={'btn'} target={'_blank'} rel={''}>Gibhub</a>*/}
				{/*	<a href={'https://dribble.com/Alien_pixels'} className={'btn btn-primary'} target={'_blank'}>Live Demo</a>*/}
				{/*	</div>*/}
				{/*</article>*/}

				{/*<article className={'portfolio__item'}>*/}
				{/*	<div className={'portfolio__item-image'}>*/}
				{/*		<img src={IMG3} alt={''} />*/}
				{/*	</div>*/}
				{/*	<h3>This is a portfolio item title</h3>*/}

				{/*	<div className={'portfolio__item-cta'}>*/}
				{/*	<a href={'https://github.com'} className={'btn'} target={'_blank'} rel={''}>Gibhub</a>*/}
				{/*	<a href={'https://dribble.com/Alien_pixels'} className={'btn btn-primary'} target={'_blank'}>Live Demo</a>*/}
				{/*	</div>*/}
				{/*</article>*/}

				{/*<article className={'portfolio__item'}>*/}
				{/*	<div className={'portfolio__item-image'}>*/}
				{/*		<img src={IMG4} alt={''} />*/}
				{/*	</div>*/}
				{/*	<h3>This is a portfolio item title</h3>*/}

				{/*	<div className={'portfolio__item-cta'}>*/}
				{/*	<a href={'https://github.com'} className={'btn'} target={'_blank'} rel={''}>Gibhub</a>*/}
				{/*	<a href={'https://dribble.com/Alien_pixels'} className={'btn btn-primary'} target={'_blank'}>Live Demo</a>*/}
				{/*	</div>*/}
				{/*</article>*/}

				{/*<article className={'portfolio__item'}>*/}
				{/*	<div className={'portfolio__item-image'}>*/}
				{/*		<img src={IMG5} alt={''} />*/}
				{/*	</div>*/}
				{/*	<h3>This is a portfolio item title</h3>*/}

				{/*	<div className={'portfolio__item-cta'}>*/}
				{/*	<a href={'https://github.com'} className={'btn'} target={'_blank'} rel={''}>Gibhub</a>*/}
				{/*	<a href={'https://dribble.com/Alien_pixels'} className={'btn btn-primary'} target={'_blank'}>Live Demo</a>*/}
				{/*	</div>*/}
				{/*</article>*/}

				{/*<article className={'portfolio__item'}>*/}
				{/*	<div className={'portfolio__item-image'}>*/}
				{/*		<img src={IMG6} alt={''} />*/}
				{/*	</div>*/}
				{/*	<h3>This is a portfolio item title</h3>*/}

				{/*	<div className={'portfolio__item-cta'}>*/}
				{/*	<a href={'https://github.com'} className={'btn'} target={'_blank'} rel={''}>Gibhub</a>*/}
				{/*	<a href={'https://dribble.com/Alien_pixels'} className={'btn btn-primary'} target={'_blank'}>Live Demo</a>*/}
				{/*	</div>*/}
				{/*</article>*/}
			</div>
		</section>
	)
}

export default Portfolio