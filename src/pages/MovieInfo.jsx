import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'functions/clientAPI';
import Heading from 'components/Heading/Heading';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
import GoBackLink from 'components/GoBackLink/GoBackLink';

const MovieInfo = function () {
  const [movieTitle, setMovieTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [usersScore, setUsersScore] = useState(0);
  const [movieOverview, setMovieOverview] = useState('');
  const [genresList, setGenresList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(
        ({
          data: {
            title,
            release_date,
            poster_path,
            original_title,
            popularity,
            overview,
            genres,
          },
        }) => {
          setMovieTitle(title);
          setOriginalTitle(original_title);
          setReleaseYear(release_date.slice(0, 4));
          setImagePath(`https://image.tmdb.org/t/p/w500${poster_path}`);
          setUsersScore(Math.round(popularity));
          setMovieOverview(overview);
          setGenresList(genres.map(({ name }) => name));
        }
      )
      .catch(error => window.alert(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

const {state} = useLocation();
const savedLocation = useRef(state);
  
  return (
    <>
      <GoBackLink path={savedLocation}/>
      {movieTitle && <Heading text={`${movieTitle} (${releaseYear})`} />}
      {imagePath &&
        originalTitle &&
        usersScore &&
        movieOverview &&
        genresList && (
          <MovieDetails
            imagePath={imagePath}
            title={originalTitle}
            score={usersScore}
            overview={movieOverview}
            genres={genresList}
          />
        )}
      {isLoading && <Loader />}
      <Outlet />
      <GoBackLink path={savedLocation}/>
    </>
  );
};

export default MovieInfo;
