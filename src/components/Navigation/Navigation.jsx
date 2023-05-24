import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = function ({ items }) {
  return (
    <nav className={css.navigation}>
      <ul className={css['nav-list']}>
        {items.map(({ name, url }) => {
          return (
            <li className={css['nav-item']} key={name}>
              <NavLink className={({isActive}) => isActive ? css['nav-link-active'] : css['nav-link']} to={url}>
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Navigation;
