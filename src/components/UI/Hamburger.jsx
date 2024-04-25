import hamburgerMenu from '../../assets/hamburger-menu.svg';
import exitMenu from '../../assets/x.svg';

export default function Hamburger() {
  return(
    <div>
      <div id="hamburger-icon">
        <div id="open">
          <img src={hamburgerMenu} alt="hamburger menu" />
        </div>
        <div id="close">
          <img src={exitMenu} alt="exit menu" />
        </div>  
      </div>
    </div>
  );
}