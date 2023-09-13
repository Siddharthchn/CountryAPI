import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Country.css"
import {Link} from "react-router-dom"
import NeighbourCountry from './NeighbourCountry';
import { PuffLoader } from "react-spinners";
import {BsArrowLeft} from "react-icons/bs";

function Country() {
  const {countryName} = useParams();
  const [country,setCountry] = useState();
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`);
        const data = await response.json();
        console.log(data);
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    
    fetchData();
  }, [countryName]);

  const languagesComma = function (country) {
    return country.languages.map((language) => language.name).join(", ");
  };
  
  const currenciesComma = function (country) {
    return country?.currencies?.map((currency) => currency.name).join(", ");
  };

  if(!country) {
    return <>Loading</>
  }

  return (
    <div class="container details-wrapper">
    <Link to="/" class="btn-back">
      {/* <i class="fas fa-long-arrow-alt-left"></i> */}
      <BsArrowLeft class='icon'/>
      Back
    </Link>
    {loading ? <PuffLoader color="#36d7b7" class='loader'/> : <div class="flex">
      <img src={`${country.flags.png}`} alt="" />
      <div class="country-details">
        <h3>{country.name}</h3>
        <div class="flex">
          <div>
            <p><span class="country-info">Native Name :</span> {
              country.nativeName
            }</p>
            <p><span class="country-info">Population :</span> {
              country.population
            }</p>
            <p><span class="country-info">Region :</span> {country.region}</p>
            <p>
              <span class="country-info">Sub Region :</span> {
                country.subregion
              }
            </p>
            <p><span class="country-info">Capital :</span> {
              country.capital
            }</p>
          </div>
          <div>
            <p>
              <span class="country-info">Top level Domain :</span> {
                country.topLevelDomain[0]
              }
            </p>

            <p><span class="country-info">Currencies :</span> ${currenciesComma(
              country
            )}</p>
            <p>
              <span class="country-info">Languages :</span> {languagesComma(
                country
              )}
            </p>
          </div>
        </div>
        <div class="border-countries-container">
          <span>Border Countries :</span>
          <div class="border-countries">
                {country.borders ? country.borders.map((border) => <NeighbourCountry countryCode={border} />) : "None"}
          </div>
        </div>
      </div>
    </div>}
  </div>
  )
}

export default Country