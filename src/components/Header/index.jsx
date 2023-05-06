import './style.scss';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      {width < 768 ? (
        <FaMobileAlt className="header__icon" />
      ) : width < 992 ? (
        <FaTabletAlt className="header__icon" />
      ) : (
        <FaLaptop className="header__icon" />
      )}
    </header>
  );
};

export default Header;
