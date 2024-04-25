import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import hamburgerHandler from '../../js/hamburger';

export default function Nav({ links }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav id="m-nav">
      <header id="m-header" onClick={hamburgerHandler}>
        <Link to='./' className={pathname == "/" ? 'nav-white' : 'nav-black'} id="m-nav-header">
          <div id="m-nav-name">
            Firstname Lastname
          </div>
          {/* <div id="m-nav-title">
            title/title
          </div> */}
        </Link>
      </header>
      <div className="slide-out" id="m-nav-items">
        <div id="m-nav-pages" onClick={hamburgerHandler}>
          {links.map((link) => link)}
        </div>
      </div>
      <div id='hamburger-wrapper' onClick={hamburgerHandler}>
        <Hamburger />
      </div>
    </nav>
  );
}