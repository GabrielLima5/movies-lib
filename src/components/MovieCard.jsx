import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import NoMovie from '../assets/nomovie.jpg'

const imageURL = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={(imageURL+ movie.poster_path).includes('null') ? NoMovie : imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p><FaStar />{movie.vote_average}</p>
        {showLink && <Link to={`/movie/${movie.id}`}>View More</Link>}
    </div>
  )
}

export default MovieCard