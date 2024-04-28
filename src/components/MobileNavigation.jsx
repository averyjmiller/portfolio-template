import { Link } from 'react-router-dom';
import MobileNavbar from './UI/MobileNavbar';
import './MobileNavigation.css'

export default function MobileNavigation() {
  return (
    <MobileNavbar
      links={[
        <Link key={1} to='./about'>
          About
        </Link>,
        <Link key={2} to='./reel'>
          Reel
        </Link>,
        <Link key={3} to='./resume'>
          Resume
        </Link>,
        <Link key={4} to='./headshots'>
          Headshots
        </Link>,
        <Link key={5} to='./contact'>
          Contact
        </Link>
      ]}
    />
  );
}