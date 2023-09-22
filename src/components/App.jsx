import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const SingleFilm = lazy(() => import('../pages/SingleFilm/SingleFilm'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />}></Route>
          <Route path="movies" element={<Movie />}></Route>
          <Route path="/movies/:movieId" element={<SingleFilm />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
