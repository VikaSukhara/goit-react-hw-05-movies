import { useSearchParams } from 'react-router-dom';
import { fetchQuery } from '../../components/api';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Loader } from 'components/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Homemarkup } from 'components/Homemarkup/Homemarkup';

import { Form, Input, Button } from './Movie.styled';

//інпут, запит про фільми за назвою, рендер всіх фільмів

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //new data in url
  const searchedMovie = searchParams.get('query') ?? ''; // it's data of searchParams
  const [movies, setMovies] = useState(''); //it's found film from fetch
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(searchedMovie);

  useEffect(() => {
    const controller = new AbortController();
    if (searchedMovie === ' ') {
      return;
    }
    async function getQueryMovie() {
      try {
        setLoading(true);
        const fetchedMovies = await fetchQuery(searchedMovie, {
          signal: controller.signal,
        });
        setMovies(fetchedMovies.results);
        if (fetchedMovies.results.length === 0 && !searchedMovie === ' ') {
          toast.error("There aren't any films. Try again!");
          // return
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getQueryMovie();
    return () => controller.abort();
  }, [searchedMovie]);

  //click button -> change state -> useEffect

  //2. i need func that fetch
  // this funct take input's value and find this value in fetch
  const handlerSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.currentTarget.elements.search.value });
  };

  //1. function that read value of imput, but deley one sighn
  const handlerInput = event => {
    // if(searchValue === ' '){
    //   setSearchValue(searchedMovie)
    // }
    setSearchValue(event.target.value); // add input's world to state
    // console.log('searchValue', searchValue);
  };

  return (
    <div>
      <Form onSubmit={handlerSubmit}>
        <Input
          autoComplete="off"
          autoFocus
          value={searchValue}
          type="text"
          name="search"
          onChange={handlerInput}
          placeholder="search movie"
        />
        <Button type="submit">
          <BsSearch size={20} />
        </Button>
      </Form>

      {loading && <Loader />}

      {movies.length > 0 && <Homemarkup films={movies} />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Movie;
