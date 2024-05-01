import axios from "axios";
import { TryError } from "../helpers/ErrorCatch";
import { formPostConfig } from "../helpers/constants";
const movieApiUrl  = process.env.REACT_APP_MOVIE_API_URL
export const movieService = {
      getMovies: () => TryError(() => axios.get(movieApiUrl + '/getall')),

      getMovie: (id) => TryError(() => axios.get(movieApiUrl + '/get/' + id)),

      deleteMovie: (id) => TryError(() => axios.delete(movieApiUrl + '/delete/' + id)),

      updateMovie: (movie) => TryError(() => axios.put(movieApiUrl + '/update', movie,formPostConfig)),

      createMovie: (movie) => TryError(() => axios.post(movieApiUrl + '/create', movie,formPostConfig)),

      getRating: (id) => TryError(() => axios.get(movieApiUrl + '/getrating/' + id)),

      getMovieStafs: (id) => TryError(() => axios.get(movieApiUrl + '/getstafs/' + id)),

      getMovieScreens: (id) => TryError(() => axios.get(movieApiUrl + '/getscreens/' + id)),

      getMovieGenres: (id) => TryError(() => axios.get(movieApiUrl + '/getgenres/' + id))

}
