import React, { useState } from 'react'
import './nav.css';
import ReactDOM from 'react-dom/client'

import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiFillMessage} from 'react-icons/ai'
import {RiServiceLine, } from 'react-icons/ri'



const Nav = () => {

	const [activeNav, setActiveNav] = useState('#')
	const innerRef = React.createRef()
	return(
		<nav ref={innerRef}>
			{console.log(innerRef)}
			<a href={'#'} onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
			<a href={'#about'} onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}  ><AiOutlineUser /></a>
			<a href={'#experience'} onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
			<a href={'#services'} onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
			<a href={'#contact'} onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>

		</nav>
	)
}

export default Nav