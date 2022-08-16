import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css'
import React, { useState } from 'react'
import data from '../src/data/data.json'
import GER from './assets/germany.png'
import USA from './assets/usa.png'
import KOR from './assets/korea.png'

const App = () => {

	const [language, setLanguage] = useState('usa')

	const [koreaData] = data.kHeader
	const [usaData] = data.header
	const [germanData] = data.gHeader



	const onClickHandler = (e) => {
		setLanguage(e.currentTarget.id)

	}

	return (
		<>

			<div className={'language'} >
				<div className={'language__button'} id={'germany'} onClick={onClickHandler}><img src={GER} alt={''}/></div>
				<div className={'language__button'} id={'usa'} onClick={onClickHandler}><img src={USA} alt={''}/></div>
				<div className={'language__button'} id={'korea'} onClick={onClickHandler}><img src={KOR} alt={''}/></div>
			</div>
			{(language === 'germany') &&
				<Header id={language} hello={germanData.hello} name={germanData.name} job={germanData.job} scroll={germanData.scroll} download={germanData.download} talk={germanData.talk}
				/>}
			{(language === 'usa') && <Header id={language} hello={usaData.hello} name={usaData.name} job={usaData.job} scroll={usaData.scroll} download={usaData.download} talk={usaData.talk}
			/>}
			{(language === 'korea') &&
				<Header id={language} hello={koreaData.hello} name={koreaData.name} job={koreaData.job} scroll={koreaData.scroll} download={koreaData.download} talk={koreaData.talk}
				/>}

			<Nav/>
			{(language === 'germany') && <About getToKnow={germanData.getToKnow} aboutMe={germanData.aboutMe} exp={germanData.exp} descExp={germanData.descExp}
			                                    clients={germanData.clients} descClients={germanData.descClients} projects={germanData.projects}
			                                    descProjects={germanData.descProjects} aboutText={germanData.aboutText} talk={germanData.talk}/>}
			{(language === 'usa') && <About getToKnow={usaData.getToKnow} aboutMe={usaData.aboutMe} exp={usaData.exp} descExp={usaData.descExp}
			                                clients={usaData.clients} descClients={usaData.descClients} projects={usaData.projects}
			                                descProjects={usaData.descProjects} aboutText={usaData.aboutText} talk={usaData.talk}/>}
			{(language === 'korea') && <About getToKnow={koreaData.getToKnow} aboutMe={koreaData.aboutMe} exp={koreaData.exp} descExp={koreaData.descExp}
			                                  clients={koreaData.clients} descClients={koreaData.descClients} projects={koreaData.projects}
			                                  descProjects={koreaData.descProjects} aboutText={koreaData.aboutText} talk={koreaData.talk}/>}
			{(language === 'usa') && <Experience myExperience={usaData.myExperience} whatSkills={usaData.whatSkills}/>}
			{(language === 'germany') && <Experience myExperience={germanData.myExperience} whatSkills={germanData.whatSkills}/>}
			{(language === 'korea') && <Experience myExperience={koreaData.myExperience} whatSkills={koreaData.whatSkills}/>}

			{(language === 'usa') &&<Services whatIOffer={usaData.whatIOffer} services={usaData.services}/>}
			{(language === 'germany') &&<Services whatIOffer={germanData.whatIOffer} services={germanData.services}/>}
			{(language === 'korea') &&<Services whatIOffer={koreaData.whatIOffer} services={koreaData.services}/>}
			{(language === 'usa') && <Portfolio myRecent={usaData.myRecent} portfolio={usaData.portfolio}/>}
			{(language === 'germany') && <Portfolio myRecent={germanData.myRecent} portfolio={germanData.portfolio}/>}
			{(language === 'korea') && <Portfolio myRecent={koreaData.myRecent} portfolio={koreaData.portfolio}/>}
			<Testimonials/>
			<Contact/>
			<Footer/>

		</>
	)
}

export default App
