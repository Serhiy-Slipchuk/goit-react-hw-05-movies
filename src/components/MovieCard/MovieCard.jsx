import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';
import { CiImageOff } from 'react-icons/ci';
import PropTypes from 'prop-types';

const MovieCard = function ({ id, posterPath, title, location }) {
  return (
    <li className={css['movie-card']}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${posterPath}`}
            width={300}
            height={450}
            alt={title}
          />
        ) : (
          <CiImageOff className={css['no-image']} />
        )}
        <h2 className={css['movie-title']}>{title}</h2>
      </Link>
    </li>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieCard;
