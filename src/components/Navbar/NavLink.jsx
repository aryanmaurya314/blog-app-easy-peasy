import { Link } from 'react-router-dom';

const NavLink = ({ to, navText, activeNav, setActiveNav }) => {
  return (
    <Link to={to}>
      <li
        className={
          activeNav === navText
            ? 'navItem__link navItem__link--active'
            : 'navItem__link'
        }
        onClick={() => setActiveNav(navText)}
      >
        {navText}
      </li>
    </Link>
  );
};

export default NavLink;
