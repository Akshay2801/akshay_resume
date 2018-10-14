import React, { Component } from 'react';
import resume from './resume.json';
import Experience from './Experience';
import Projects from './Project';
import Skills from './Skills';
import Education from './Education';
import Languages from './Languages';
import Interest from './Interest'

class App extends Component {
	renderExperiences(){
		let resultsArray=[];
		debugger
		resume.experiences.map((item, i)=>{
			resultsArray.push(<Experience item={item} key={i}/>);
		});
		return resultsArray;
	}
	renderProject(){
		let resultsArray=[];
		debugger
		resume.projects.map((item, i)=>{
			resultsArray.push(<Projects item={item} key={i}/>);
		});
		return resultsArray;
	}
	renderSkills(){
		let resultsArray=[];
		debugger
		resume.skills.map((item, i)=>{
			resultsArray.push(<Skills item={item} key={i}/>);
		});
		return resultsArray;
	}
	renderEducation(){
		let resultsArray=[];
		debugger
		resume.education.map((item, i)=>{
			resultsArray.push(<Education item={item} key={i}/>);
		});
		return resultsArray;
	}
	renderLanguages(){
		let resultsArray=[];
		debugger
		resume.languages.map((item, i)=>{
			resultsArray.push(<Languages item={item} key={i}/>);
		});
		return resultsArray;
	}
	renderInterest(){
		let resultsArray=[];
		debugger
		resume.interests.map((item, i)=>{
			resultsArray.push(<Interest item={item} key={i}/>);
		});
		return resultsArray;
	}
	render() {
		console.log(resume);
		return (
			<div className="wrapper">
			<div className="sidebar-wrapper">
			<div className="profile-container">
			<img className="profile" src={resume.image} width={150} alt="" />
			<h1 className="name">{resume.name}</h1>
			<h3 className="tagline">{resume.Designation}</h3>
			</div>

			<div className="contact-container container-block">
			<ul className="list-unstyled contact-list">
			<li className="email"><i className="fas fa-envelope"></i><a href="">{resume.email}</a></li>
			<li className="phone"><i className="fas fa-phone"></i><a href="">{resume.phone}</a></li>		
			<li className="github"><i className="fab fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
			
			</ul>
						</div>
						<div className="education-container container-block">
						<h2 className="container-block-title">Education</h2>
						{this.renderEducation()}
						
						</div>
						
						<div className="languages-container container-block">
						<h2 className="container-block-title">Languages</h2>
						<ul className="list-unstyled interests-list">
							{this.renderLanguages()}
						
						</ul>
						</div>
						
						<div className="interests-container container-block">
						<h2 className="container-block-title">Interests</h2>
						<ul className="list-unstyled interests-list">
							{this.renderInterest()}
						
						</ul>
						</div>
						
						</div>

						<div className="main-wrapper">
						
						<section className="section summary-section">
						<h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
						<div className="summary">
						<p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
						</div>
						</section>
						
						<section className="section experiences-section">
						<h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>

					
						 	{this.renderExperiences()}
		
						</section>
						
						<section className="section projects-section">
						<h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
					
						{this.renderProject()}
						
						</section>
						
						<section className="skills-section section">
						<h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
						<div className="skillset">        
						
						{this.renderSkills()}
						

						

						</div>  
						</section>  
						
				</div>
				</div>
				);
			}
		}

		export default App;
