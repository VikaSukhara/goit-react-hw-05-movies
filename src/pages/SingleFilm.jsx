import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilm } from '../components/api';
import { Wrapper, SingleFilmPhoto, TextWrapper } from './SingleFilm.styled';

export function SingleFilm() {
  const params = useParams();
  const [singleFilm, setSingleFilm] = useState(null);

  useEffect(() => {
    async function fetchSingleFilm() {
      try {
        const fetchedSingleFilm = await fetchFilm(params.movieId);
        setSingleFilm(fetchedSingleFilm);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSingleFilm();
  }, [params.movieId]);
  //   console.log("params", params)
  //   console.log(params.movieId)
  console.log('fiillllsss', singleFilm);
  // console.log("fiillllsss", singleFilm.genres)
  // console.log("fiillllsss",  singleFilm.genres.name)
  return (
    <div>
      {singleFilm && (
        <Wrapper>
          <SingleFilmPhoto
            src={`https://image.tmdb.org/t/p/original${singleFilm.poster_path}`}
            alt={singleFilm.original_title}
          />
          <TextWrapper>
            <h2>{singleFilm.original_title}</h2>
            <p>{singleFilm.vote_average}</p>
            <h3>Overview{singleFilm.overview}</h3>
            <p>{singleFilm.genres}</p>
          </TextWrapper>
        </Wrapper>
      )}
    </div>
  );
}
