import { useEffect, useState } from 'react';
import { getPopularMovies } from 'functions/clientAPI';

const Home = function () {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies()
      .then(({ data: { results, total_results } }) => {
        if (total_results && total_results > 0) {
          setMovies(prev => [...prev, ...results]);
        } else {
          window.alert('There is no films is database');
        }
      })
      .catch(error => window.alert(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {movies.map(({ poster_path, original_title, id }) => {
          return <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={original_title} />
            <p>{original_title}</p>
            </li>;
        })}
      </ul>
    </>
  );
};

export default Home;
