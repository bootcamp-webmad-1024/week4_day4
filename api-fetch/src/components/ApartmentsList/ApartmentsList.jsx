import { useEffect, useState } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard'
import axios from 'axios'

const ApartmentsList = () => {

    const API_URL = 'https://ironbnb-m3.herokuapp.com/apartments'

    useEffect(() => {

        axios
            .get(API_URL)
            .then(response => {
                setApartmens(response.data)
                setIsLoading(false)
            })

    }, [])      // efecto de montaje

    const [apartments, setApartmens] = useState()
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="ApartmentsList">
            <h1>Listado de apartamentos</h1>
            <hr />

            {
                isLoading ?
                    <h1>CARGANDO</h1> :
                    apartments.map(elm => {
                        return (
                            <ApartmentCard {...elm} key={elm._id} />
                        )
                    })
            }
        </div>
    )
}

export default ApartmentsList