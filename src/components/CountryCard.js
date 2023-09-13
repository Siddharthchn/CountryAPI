import React from 'react'
import "./CountryCard.css";

function CountryCard({country}) {
  return (
    <div class="country-card">
        <img src={`${country.flags.png}`} alt="" />
        <div class="country-text">
          <h3 class="country-title">{country.name}</h3>
          <p><span class="country-info">Population :</span> {country.population}</p>
          <p><span class="country-info">Region :</span> {country.region}</p>
          <p><span class="country-info">Capital :</span> {country.capital}</p>
        </div>
      </div>
  )
}

export default CountryCard