import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieInfo from 'pages/MovieInfo';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieInfo = lazy(() => import('pages/MovieInfo'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
