import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import './Movie.css'
import MovieCard from '../components/MovieCard'

const moviesURL = 'https://api.themoviedb.org/3/movie/'
const apiKey = 'api_key=8ed200f50a6942ca5bc8b5cdec27ff22'

const Movie = () => {
    const { id }= useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
      const res = await fetch(url)
        .then(res => res.json())
        .catch(err => err)

      setMovie(res)
    }
    
    const formatCurrency = (number) => {
      return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }

    useEffect(() => {
      const movieURL = `${moviesURL}${id}?${apiKey}`
      getMovie(movieURL)
    }, [])

    return (
      <div className="movie-page">
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
              <h3>
                <BsWallet2 /> Budget:
                <p>{formatCurrency(movie.budget)}</p>
              </h3>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Revenue:
                <p>{formatCurrency(movie.revenue)}</p>
              </h3>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Runtime:
                <p>{movie.runtime} minutos</p>
              </h3>
            </div>
            <div className="info">
              <h3>
                <BsFillFileEarmarkTextFill /> Overview:
                <p>{movie.overview}</p>
              </h3>
            </div>
          </>
        )}
      </div>
    )
}

export default Movie