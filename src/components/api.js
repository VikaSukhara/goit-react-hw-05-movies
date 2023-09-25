import axios from 'axios';

export const fetchFilms = async additionalData => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = '/trending/all/day';
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };

  const response = await axios.get(`${URL}${END_POINT}?`, {
    headers,
    ...additionalData,
  });
  return response.data;
};

export const fetchFilm = async (id, signal) => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/movie/${id}`;
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };
  const response = await axios.get(`${URL}${END_POINT}?language=en-US`, {
    headers,
    ...signal,
  });

  return response.data;
};

export const fetchCast = async (id, signal) => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/movie/${id}/credits`;
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };

  const response = await axios.get(`${URL}${END_POINT}?language=en-US`, {
    headers,
    ...signal,
  });

  return response.data;
};

export const fetchReviews = async (id, signal) => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/movie/${id}/reviews`;
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };

  const response = await axios.get(`${URL}${END_POINT}?language=en-US&page=1`, {
    headers,
    ...signal,
  });

  return response.data;
};

export const fetchQuery = async (search, signal) => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/search/movie`;
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };

  const response = await axios.get(`${URL}${END_POINT}?query=${search}`, {
    headers,
    ...signal,
  });

  return response.data;
};
