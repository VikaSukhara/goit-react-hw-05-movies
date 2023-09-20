import { Link } from 'react-router-dom';
import {
  FilmsList,
  FilmItem,
  FilmPhoto,
  FilmTitle,
  FilmButton,
} from './Homemarkup.styled';

export const Homemarkup = ({ films }) => {
  return (
    <FilmsList>
      {films.map(film => {
        return (
          <FilmItem key={film.id}>
            <Link to={`/movies/${film.id}`}>
              <FilmPhoto
                src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                alt={film.original_title}
              />
              <FilmTitle>{film.original_title || film.name}</FilmTitle>
              <FilmButton type="button">Read More</FilmButton>
            </Link>
          </FilmItem>
        );
      })}
    </FilmsList>
  );
};
