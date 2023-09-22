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
  const response = await axios.get(`${URL}${END_POINT}?language=en-US`, {
    headers,
  });

  return response.data;
};



export const fetchCast = async id => {
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



export const fetchReviews = async id => {
  const URL = 'https://api.themoviedb.org/3';
  const END_POINT = `/movie/${id}/reviews`;
   const  headers = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
    };

  const response = await axios.get(`${URL}${END_POINT}?language=en-US&page=1`, {headers });



  return response.data;

};




  export const fetchQuery = async (search) => {
    const URL = 'https://api.themoviedb.org/3';
    const END_POINT = `/search/movie`;
     const  headers = {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc',
      };
  
    const response = await axios.get(`${URL}${END_POINT}?query=${search}`, {headers });
    
    
    
  
    return response.data;
  
  };