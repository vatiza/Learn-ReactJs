import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,area,region}=props.country;
    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <h4>Population:{props.population}</h4>
            <h4>Area:{area}</h4>
            <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;