

import { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const [visited, setvisited] = useState(false)

    const handleVisited = () => {

// 1. frist process
    //     if(visited){
    //         setvisited(false)
    //     }else{
    //         setvisited(true)
    //     }

// 2. second process
        // setvisited(visited? false : true)

// 3. third process
            setvisited(!visited)
            handleVisitedCountries(country)
    }


    
    return (
        // conditionaly class add
        // <div className={`country ${ visited ? 'country-visited' : country-notvisited}`}>
        <div className={`country ${ visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country': 'Small Country'}</p>
            <div className='btn'>
                <button onClick={handleVisited}>{visited ? 'Visited': 'Not Visited'}</button>
                <button onClick={() => {handleVisitedFlag(country?.flags?.flags?.png)}}>Add flag</button>
            </div>

        </div>
    );
};

export default Country;