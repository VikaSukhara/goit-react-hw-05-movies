import { Link } from 'react-router-dom';
import {
  FilmsList,
  FilmItem,
  FilmPhoto,
  FilmTitle,
  FilmButton,
} from './Homemarkup.styled';
import { useLocation } from 'react-router-dom';

export const Homemarkup = ({ films }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <FilmsList>
      {films.map(film => {
        return (
          <FilmItem key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <FilmPhoto
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/original${film.poster_path}`
                    : defaultImg
                }
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
