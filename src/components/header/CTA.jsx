import React from 'react';
import './header.css';
import CV from '../../assets/cv.pdf'


const CTA = (props) => {
	return(
		<div className={'cta'}>
			<a href={CV} download className={'btn'}>{props.download}</a>
			<a href={"#contact"} className={'btn btn-primary'}>{props.talk}</a>
		</div>
	)
}

export default CTA