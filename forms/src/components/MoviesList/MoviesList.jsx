import { useState } from "react"
import { moviesData } from "../../data/fakeApi"
import MovieCard from "../MovieCard/MovieCard"
import NewMovieForm from "../NewMovieForm/NewMovieForm"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)

    const handleMovieRemoval = idToDelete => {
        const filteredMovies = movies.filter(eachMovie => eachMovie._id != idToDelete)
        setMovies(filteredMovies)
    }

    const addNewMovie = (newMovie) => {
        const newMovies = [newMovie, ...movies]
        setMovies(newMovies)
    }

    return (
        <div className="MoviesList">

            <NewMovieForm
                addNewMovie={addNewMovie}
            />

            <h2>Listado de pelis</h2>

            <hr />

            {
                movies.map(eachMovie => {

                    return (
                        <MovieCard
                            key={eachMovie._id}
                            deleteMovie={handleMovieRemoval}
                            {...eachMovie}
                        />
                    )
                })
            }
        </div>
    )
}

export default MoviesList