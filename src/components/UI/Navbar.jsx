import { Link, useLocation } from 'react-router-dom';

export default function Nav({ links }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav>
      <header>
        <Link to='./' className={pathname == "/" ? 'nav-white' : 'nav-black'} id="nav-header">
          <div id="nav-name">
            Firstname Lastname
          </div>
          <div id="nav-title">
            title/title
          </div>
        </Link>
      </header>
      <div id="nav-items">
        <div id="nav-pages">
          {links.map((link) => link)}
        </div>
      </div>
    </nav>
  );
}