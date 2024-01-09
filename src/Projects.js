/*import {AnimatedOnScroll} from "react-animated-css-onscroll"; */
import './Projects.css';
import first from './images/landing.png';
import second from './images/lms.png';
import third from './images/hackathon-site.png';

function Projects() {
    return(
        <div className="row">
        <div className="proj">
            <div className="f-left">
                <img src={first} alt="first" height="100%" width="100%" className='image-with-border'/>
            </div>
            <div className="f-right">
            <div className="head">The Blush Rush</div>
                <div className="desc">Blush Rush is your ultimate online beauty haven, where elegance meets innovation. Step into a world of radiant allure with our carefully curated collection of cosmetics, skincare, and beauty essentials.</div>
                <b className='tool'>Tools Used:</b>
                <ul className='unl'>
                    <li className='list'>HTML</li>
                    <li className='list'>CSS</li>
                </ul>
            <a href="https://github.com/ria30102004/beauty-landing-page"><button className="open" >Open Code</button></a>
            </div>
        </div>
        <div className="proj">
            <div className="s-left">
            <img src={second} alt="first" height="100%" width="100%" className='image-with-border'/>
            </div>
            <div className="s-right">
            <div className="head">Library Manager</div>
                <div className="desc">With features for tracking due dates, managing fines, and generating insightful reports, Library Manager not only simplifies library administration but also enhances user satisfaction.</div>
                <b className='tool'>Tools Used:</b>
                <ul className='unl'>
                    <li className='list'>JAVA</li>
                    <li className='list'>Apache Netbeans</li>
                    <li className='list'>MySQL</li>
                </ul>
            <a href="https://github.com/ria30102004/LibraryManager"><button className="open">Open Code</button></a>
            </div>
        </div>
        <div className="proj">
            <div className="t-left">
            <img src={third} alt="first" height="100%" width="100%" className='image-with-border'/>
            </div>
            <div className="t-right">
                <div className="head">Hackathon Registration website</div>
                <div className="desc">It is a user friendly web platform created for streamlining and managing registrations for hackathons .It simplifies the process for both participants and organizers.</div>
                <b className='tool'>Tools Used:</b>
                <ul className='unl'>
                    <li className='list'>HTML</li>
                    <li className='list'>CSS</li>
                    <li className='list'>JavaScript</li>
                    
                </ul>
                <a href="https://github.com/ria30102004/hackathonsite"><button className="open">Open Code</button></a>
            </div>
        </div>
        </div>
    );
}
export default Projects;