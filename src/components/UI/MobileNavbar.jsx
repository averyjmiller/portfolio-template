import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import hamburgerHandler from '../../js/hamburger';

export default function Nav({ links }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav>
      <header onClick={hamburgerHandler}>
        <Link to='./' className={pathname == "/" ? 'nav-white' : 'nav-black'} id="mobile-nav-header">
          <div id="mobile-nav-name">
            Firstname Lastname
          </div>
          <div id="mobile-nav-title">
            title/title
          </div>
        </Link>
      </header>
      <div className="slide-out" id="mobile-nav-items">
        <div id="mobile-nav-pages" onClick={hamburgerHandler}>
          {links.map((link) => link)}
        </div>
      </div>
      <div id='hamburger-wrapper' onClick={hamburgerHandler}>
        <Hamburger />
      </div>
    </nav>
  );
}