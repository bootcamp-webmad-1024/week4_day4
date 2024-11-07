const MovieCard = ({ _id, director, IMDBRating, title, deleteMovie, hasOscars }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating} {IMDBRating > 7 ? '😄' : '💩'}</p>
            {
                hasOscars ? <p>¡Ganó oscars!</p> : <p>No se llevó nada</p>
            }
            <button onClick={() => deleteMovie(_id)}>Eliminar</button>
        </div>
    )
}

export default MovieCard