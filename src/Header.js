import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Header.css';
function Header() {
    return(
        <div className="heading">
            <div className="navbar">
                <p className='name'>RA</p>
                <ul className='navlinks'>
                <a href=""><li className="link resume">Resume</li></a>
                <a href="https://github.com/ria30102004"><li className="link git"><FontAwesomeIcon icon={faGithub} size='lg'/></li></a>
                <a href="https://www.linkedin.com/in/ria-ambadan-a722a0238"><li className="link linkedin"><FontAwesomeIcon icon={faLinkedin} size='lg'/></li></a>
                </ul>
            </div>


        </div>
    );
}
export default Header;