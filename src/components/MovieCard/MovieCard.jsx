import css from './MovieCard.module.css';
import { CiImageOff } from 'react-icons/ci';
import PropTypes from 'prop-types';

const MovieCard = function ({ posterPath, title }) {
  return (
    <li className={css['movie-card']}>
      {posterPath ? (
        <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} />
      ) : (
        <CiImageOff className={css['no-image']} />
      )}
      <h2 className={css['movie-title']}>{title}</h2>
    </li>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
