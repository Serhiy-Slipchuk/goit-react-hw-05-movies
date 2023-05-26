import css from './Header.module.css';

const Header = function ({ children }) {
  return <header className={css.header}>{children}</header>;
};

export default Header;
