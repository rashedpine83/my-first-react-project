
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'


const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisiteteCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('Clicked handle Visited Countries', country);

        const newVisitedCountries = [...visitedCountries, country];
        setVisiteteCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
   

    return (
        <div>
            <h2>Total Country: {countries.length}</h2>
            <h3>Total Visited Country: {visitedCountries.length}</h3>
            <h3>Total Visited Flag: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flag-container'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country => <Country 
                    key={country.cca3.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag = {handleVisitedFlag}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;