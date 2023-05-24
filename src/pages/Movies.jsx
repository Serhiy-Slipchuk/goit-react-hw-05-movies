import { useEffect, useState } from 'react';
import { getMoviesBySearchQuerry } from 'functions/clientAPI';
import Heading from 'components/Heading/Heading';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

const Movies = function () {
  const [searchQuerry, setSearchQuerry] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    prev => {
      if (searchQuerry === '') {
        return;
      }
      setIsLoading(true);
      getMoviesBySearchQuerry(searchQuerry)
        .then(({ data: { results, total_results } }) => {
          if (total_results && total_results !== 0) {
            setMovies(results);
          } else {
            window.alert(
              `There is no any movie by ${searchQuerry} search query`
            );
          }
        })
        .catch(error => window.alert(error))
        .finally(() => setIsLoading(false));
    },
    [searchQuerry]
  );

  const handlerFormSubmit = querry => {
    setSearchQuerry(querry);
  };

  return (
    <>
      <Heading text="Search movie" />
      <SearchForm handlerOnSubmit={handlerFormSubmit} />

      {movies.length > 0 && (
        <MoviesList>
          {movies.map(({ poster_path, original_title, id }) => {
            return (
              <MovieCard
                key={id}
                id={id}
                posterPath={poster_path}
                title={original_title}
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
