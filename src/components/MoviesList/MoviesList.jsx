import css from './MoviesList.module.css';

const MoviesList = function ({ children }) {
  return <ul className={css['movies-list']}>{children}</ul>;
};

export default MoviesList;
