import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchURL = 'https://api.themoviedb.org/3/search/movie'
const apiKey = 'api_key=a97898401275266645d22bd2946839c7'

const Search = () => {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) => {
      const res = await fetch(url)
          .then(res => res.json())
          .catch(err => err)
          
      console.log(res)
      setMovies(res.results)
      return res
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
        getSearchedMovies(searchWithQueryURL)
    }, [query])

    return (
      <div className="container">
          <h2 className="title">Results to <span className="query-text">{query}</span></h2>
          <div className="movies-container">
              {movies.length === 0 && <p>Loading...</p>}
              {movies.length > 0 && movies.map(movie => (
                  <MovieCard movie={movie} key={movie.id} />
              ))}
          </div>
      </div>
    )
}

export default Search