import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
    <footer>
        <div className="base">
            <div className="con">
                Connect with Me
            </div>
            <div className="links">
                <ul className='footlinks'>
                    <li className="site">Resume</li>
                    <a href="https://github.com/ria30102004"><li className="site"><FontAwesomeIcon icon={faGithub} size='lg'/></li></a>
                    <a href="https://www.linkedin.com/in/ria-ambadan-a722a0238"><li className="site"><FontAwesomeIcon icon={faLinkedin} size='lg'/></li></a>
                    <a href="https://www.instagram.com/ria.a.3010/"><li className="site"><FontAwesomeIcon icon={faInstagram} size='lg'/></li></a>
                </ul>
            </div>
        </div>
    </footer>
    );
}
export default Footer;
