import { useState } from "react"

const NewMovieForm = ({ addNewMovie }) => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [IMDBrating, setIMDBrating] = useState(0)
    const [hasOscars, setHasOscars] = useState(false)

    const handleTitleChange = e => {
        const { value } = e.target
        setTitle(value)
    }

    const handleRatingChange = e => {
        const { value } = e.target
        setIMDBrating(value)
    }

    const handleDirectorChange = e => {
        const { value } = e.target
        setDirector(value)
    }

    const handleOscarsChange = e => {
        const { checked } = e.target
        setHasOscars(checked)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const movieData = { title: title, director: director, IMDBrating: IMDBrating, hasOscars: hasOscars }
        addNewMovie(movieData)
    }

    return (
        <div className="NewMovieForm">
            <form onSubmit={handleFormSubmit}>
                Título
                <input type="text" value={title} onChange={handleTitleChange} />
                <br />

                Director/a
                <input type="text" value={director} onChange={handleDirectorChange} />
                <br />

                Puntuación
                <input type="number" value={IMDBrating} onChange={handleRatingChange} />
                <br />

                ¿Oscars?
                <input type="checkbox" checked={hasOscars} onChange={handleOscarsChange} />
                <br />

                <input type="submit" value={'Crear nueva peli'} />

            </form>
        </div>
    )
}

export default NewMovieForm