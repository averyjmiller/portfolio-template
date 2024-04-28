import { Link } from 'react-router-dom';
import hamburgerHandler from '../../js/hamburger';
import hamburgerMenu from '../../assets/hamburger-menu.svg';
import exitMenu from '../../assets/x.svg';

export default function Nav({ links }) {
  return (
    <nav id="m-nav">
      <div className="slide-out" id="m-nav-opened">
        <div id="m-nav-opened-header">
          <header id="m-header" onClick={hamburgerHandler}>
            <Link to='./' id="m-nav-header">
              <div id="m-nav-name">
                Firstname Lastname
              </div>
            </Link>
          </header>
          <div>
            <img src={exitMenu} onClick={hamburgerHandler} alt="exit menu" id="exit-icon"/>
          </div>
        </div>
        <div id="m-nav-pages" onClick={hamburgerHandler}>
          {links.map((link) => link)}
        </div>
      </div>
      <div id="m-nav-closed">
        <header id="m-header" onClick={hamburgerHandler}>
          <Link to='./' id="m-nav-header">
            <div id="m-nav-name">
              Firstname Lastname
            </div>
          </Link>
        </header>
        <div>
          <img src={hamburgerMenu} onClick={hamburgerHandler} alt="hamburger menu" id="hamburger-icon"/>
        </div>
      </div>
    </nav>
  );
}