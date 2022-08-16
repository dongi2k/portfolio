import React from 'react'
import './header.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'

const HeaderSocials = () => {
	return (
		<div className={'header__socials'}>
			<a href={'https://linkedin.com'} target={'_blank'}><BsLinkedin/></a>
			<a href={'https://www.facebook.com/profile.php?id=100082469624226'} target={'_blank'}><AiFillFacebook/></a>
			<a href={'https://github.com/dongi2k'} target={'_blank'}><AiFillGithub/></a>
		</div>
	)
}

export default HeaderSocials