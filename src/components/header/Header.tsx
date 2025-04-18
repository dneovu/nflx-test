import Favs from '../../assets/FavsIcon.svg?react';
import Cart from '../../assets/CartIcon.svg?react';
import HeaderLink from './HeaderLink';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <NavLink to="/">
        <h2 className="hover:text-accent text-2xl font-bold uppercase">
          Qpick
        </h2>
      </NavLink>

      <nav aria-label="Основная навигация">
        <ul className="flex items-center gap-6">
          <li>
            <HeaderLink linkTo="/favorites" itemCount={2} Svg={Favs} />
          </li>
          <li>
            <HeaderLink linkTo="/cart" itemCount={1} Svg={Cart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
