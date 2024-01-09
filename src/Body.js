import './Body.css';
import girl from './ezgif.com-rotate.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
function Body() {
    return(
        <div className="bod">
            <div className="upper">
            <div className="tag">I create <b>playful</b> experiences</div>
            <div className="img"><img src={girl} alt="girl" height="80%" width="100%" /></div>
            </div>
            <div className="lower">
                <div className="info">Ria Ambadan/ Web developer </div>
                <div className="pro">
                    <div>
                Projects
                </div>
                <div>
                <FontAwesomeIcon icon={faAngleDown} size='2x'/></div> </div>
            </div>
            

        </div>
        
    );
}
export default Body;