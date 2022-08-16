import React, { useRef } from 'react'
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from 'emailjs-com'

const Contact = () => {

	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm('service_jq4q3ci', 'template_2rgpjfe', form.current, 'CYqXMppLkKNKXOGKy')

		e.target.reset();
	}
	return (
		<section id={'contact'}>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className={'container contact__container'}>
				<div className={'contact__options'}>
					<article className={'contact__option'}>
						<MdOutlineEmail className={'contact__option-icon'}/>
						<h4>Email</h4>
						<h5>dong.mittag@gmail.com</h5>
						<a href={'dong.mittag@gmail.com'} target={'_blank'}>Send a E-Mail</a>
					</article>

					<article className={'contact__option'}>
						<RiMessengerLine className={'contact__option-icon'}/>
						<h4>Messanger</h4>
						<h5>Facebook Message</h5>
						<a href={'https://m.me/profile.php?id=100082469624226'} target={'_blank'}>Send a message</a>
					</article>

					<article className={'contact__option'}>
						<BsWhatsapp className={'contact__option-icon'}/>
						<h4>Whats app</h4>
						<h5>+49 176 6098 3415</h5>
						<a href={'https://api.whatsapp.com/send?phone=+4917660983415'} target={'_blank'}>Send a What's App message</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input type={'text'} name={'name'} placeholder={'Enter Your Name'} required/>
					<input type={'email'} name={'email'} placeholder={'Enter Your Email'} required/>
					<textarea name={'message'} rows={'7'} placeholder={'Enter Message'} required/>
					<button type={'submit'} className={'btn btn-primary'}>Send Message</button>
				</form>
			</div>
		</section>
	)
}

export default Contact