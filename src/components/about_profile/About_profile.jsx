import React from 'react'
import ME from '../../assets/123.jpeg'
import './About_profile.css'
import {FaAward} from 'react-icons/fa'
import {GiSpellBook} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

const About_profile = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
        <div className="aboutme">
            <div className="about__me-image">
                <img src={ME} alt="About mypic"/>
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <h3>1+</h3>
                </article>

                <article className='about__card'>
                    <GiSpellBook className='about__icon'/>
                    <h5>Internship</h5>
                    <h3>1+<small> projects</small></h3>
                </article>

                <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                   <h3>5+ <small> Completed</small></h3>
                </article>
            </div>
            <p>
                My name is Vishal Kumar Pandey. My highest Education Qualification is B.E from
                S.J.B INSTITUTE OF TECHNOLOGY,Bengaluru,Karnataka.My Stream is Information Science and Engineering.
                I am a Full stack Developer and currently looking for a good oppurtunity.

                
                
            </p>
            <Link to="/contact" className="btn btn-primary">Let's talk</Link>
            
        </div>
    </div>
</section>
  )
}

export default About_profile