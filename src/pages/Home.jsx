import React from 'react'
import './MoviesGrid.css'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
const moviesURL = 'https://api.themoviedb.org/3/movie/'
const apiKey = 'api_key=a97898401275266645d22bd2946839c7'

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    
    const getTopRateMovies = async (url) => {
        const res = await fetch(url)
            .then(res => res.json())
            .catch(err => err)
            
        setTopMovies(res.results)
        return res
    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`
        getTopRateMovies(topRatedURL)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Movies List</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 && topMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home