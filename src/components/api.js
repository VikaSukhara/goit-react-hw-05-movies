import axios from 'axios';

export const fetchFilms = async () => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = '/trending/all/day';
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };
  // fetch(`${URL}${TRANDING}?`,{ headers })
  const response = await axios.get(`${URL}${END_POINT}?`, { headers });
  console.log('response', response);
  // console.log(response.data)
  return response.data;
};

export const fetchFilm = async id => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/movie/${id}`;
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
  };
  console.log('я фетч');
  // fetch(`${URL}${TRANDING}?`,{ headers })
  const response = await axios.get(`${URL}${END_POINT}?language=en-US`, {
    headers,
  });
  // console.log(response)
  // console.log("response.data", response)
  return response.data;
};



export const fetchActors = async id => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/movie/${id}/credits`;
   const  headers = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
    };

  const response = await axios.get(`${URL}${END_POINT}?language=en-US`, {headers });

  return response.data;

};
