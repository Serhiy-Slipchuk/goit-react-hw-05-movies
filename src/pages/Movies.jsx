import { useEffect, useState } from 'react';
import { getMoviesBySearchQuerry } from 'functions/clientAPI';
import Heading from 'components/Heading/Heading';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = function () {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchRequest = searchParams.get('query');

  const locationMoviesPage = useLocation();

  useEffect(
    prev => {
      if (!searchRequest) {
        return;
      }
      setIsLoading(true);
      getMoviesBySearchQuerry(searchRequest)
        .then(({ data: { results, total_results } }) => {
          if (total_results && total_results !== 0) {
            setMovies(results);
          } else {
            window.alert(
              `There is no any movie by ${searchRequest} search query`
            );
          }
        })
        .catch(error => window.alert(error))
        .finally(() => setIsLoading(false));
    },
    [searchRequest]
  );

  const handlerFormSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Heading text="Search movie" />
      <SearchForm handlerOnSubmit={handlerFormSubmit} />

      {searchRequest && (
        <MoviesList>
          {movies.map(({ poster_path, original_title, id }) => {
            return (
              <MovieCard
                key={id}
                id={id}
                posterPath={poster_path}
                title={original_title}
                location={locationMoviesPage}
              />
            );
          })}
        </MoviesList>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
