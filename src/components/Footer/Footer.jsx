import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <Link to="/" className='footer__logo'>Vishal Kumar Pandey</Link>
        <ul className='permalinks'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experiences</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vishal-pandey-48158124a/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Pandeyviii" target="_blank"><FaGithub/></a>
            


        </div>
        <div className="footer__copyright">
            <small>&copy; Vishal Kumar Pandey</small>
        </div>
        
    </footer>
  )
}

export default Footer