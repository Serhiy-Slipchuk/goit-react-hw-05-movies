import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = function ({ items }) {
  return (
    <nav className={css.navigation}>
      <ul className={css['nav-list']}>
        {items.map(({ name, url }) => {
          return (
            <li className={css['nav-item']}key={name}>
              <NavLink className={css['nav-link']}to={url}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
