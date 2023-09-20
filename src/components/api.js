import axios from 'axios';


export const fetchFilms = async () => {
    const URL = 'https://api.themoviedb.org/3'
    const TRANDING = '/trending/all/day'
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc'
      }
// fetch(`${URL}${TRANDING}?`,{ headers })
const response = await axios.get(`${URL}${TRANDING}?`,{ headers })
// console.log(response)
// console.log(response.data)
return  response.data
    }



    export const fetchFilm = async (id) => {
        const URL = 'https://api.themoviedb.org/3'
        const TRANDING = `/movie/${id}`
        const headers = {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzRkM2Q5ZGFkZTc4Y2JlZmNkMDBkZjk4MzYzN2FkZSIsInN1YiI6IjY1MGFlNzlkNmMxOWVhMDBhZGVjOWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t08sGyUCOg_bxh0pExDNcUPd3WvH_a3SveZ8wVdVkkc'
          }
    // fetch(`${URL}${TRANDING}?`,{ headers })
    const response = await axios.get(`${URL}${TRANDING}?`,{ headers })
    // console.log(response)
    // console.log(response.data)
    return  response.data
        }



          
        //   fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
    