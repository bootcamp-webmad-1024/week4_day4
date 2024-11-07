import './ApartmentCard.css'

const ApartmentCard = ({ title, pricePerDay, img, _id }) => {

    return (
        <article className="ApartmentCard">
            <img src={img} alt={title} />
            <div className="details">
                <h2>{title}</h2>
                <hr />
                <p>Precio por día: {pricePerDay}</p>
                <a href={`/detalles/${_id}`}>Ver más :3</a>
            </div>
        </article>
    )
}

export default ApartmentCard