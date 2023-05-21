import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieInfo from 'pages/MovieInfo';
import Layout from './Layout/Layout';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<p>Cast</p>} />
            <Route path="reviews" element={<p>Rewiews</p>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
