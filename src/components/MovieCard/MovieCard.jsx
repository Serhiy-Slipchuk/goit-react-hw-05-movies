import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

const MovieCard = function ({ posterPath, title }) {
  return (
    <li className={css['movie-card']}>
      <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} />
      <h2 className={css['movie-title']}>{title}</h2>
    </li>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
