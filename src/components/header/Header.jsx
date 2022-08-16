import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dongho-pf.png'
import HeaderSocials from './HeaderSocials'




const Header = (props) => {
	return (
		<header>
			<div className={'container header__container'}>

				<h5>{props.hello}</h5>
				<h1>{props.name}</h1>
				<h5 className={'text-light'}>{props.job}</h5>
				<CTA download={props.download} talk={props.talk}/>
				<HeaderSocials/>

				<div className={'me'}>
					<img src={ME} alt={''}/>
				</div>

				<a href={'#contact'} className={'scroll__down'} id={props.id}>{props.scroll}</a>

			</div>


		</header>
	)
}

export default Header