import { Link } from 'react-router-dom';

export default function Nav({ links }) {
  return (
    <nav id="nav">
      <header id="header">
        <Link to='./' id="nav-header">
          <div id="nav-name">
            Firstname Lastname
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