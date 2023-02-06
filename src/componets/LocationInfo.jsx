import React from 'react'
import "./styles/LocationInfo.css"
const LocationInfo = ({ location }) => {
    return (
        <section>
            <ul className='location'>
                <li><span>Nombre:</span> </li>
                <li><span>Type:</span> </li>
                <li><span>Dimension:</span> </li>
                <li><span>Population</span> </li>
                <li>{location?.name}</li>
                <li>{location?.type}</li>
                <li>{location?.dimension}</li>
                <li>{location?.residents.length}</li>
            </ul>


        </section>
    )
}

export default LocationInfo
