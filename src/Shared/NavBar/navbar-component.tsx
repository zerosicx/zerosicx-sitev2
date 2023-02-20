import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar-component.scss'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export const NavBar = () => {
    // Navbar has four navigation items: home, projects, education and contact page
    return (
        <nav className="navbar">
        <h2 className="logo">ZEROSICX</h2>

        <ul className="nav-list">
          <li className="nav-item"><a href="#">About Me</a></li>
          <li className="nav-item"><a href="#">Projects</a></li>
          <li className="nav-item"><a href="#">Course Status</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
        <FontAwesomeIcon className="hamburger" icon={solid('bars')} />
      </nav>
    );
}