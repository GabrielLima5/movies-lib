import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> MoviesLib
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for a movie" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar