import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NeighbourCountry({countryCode}) {
  const [country,setCountry] = useState();
  useEffect(()=>{
    const fetchNeighbours = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
        const data = await response.json();
        setCountry(data);

      } catch (error) {
        console.log("error",error);
      }
    }

    fetchNeighbours();
  },[countryCode])


  return (
   <Link  className="country" to={`/country/${country?.name}`}>
      {country?.name}
   </Link>
  )
}

export default NeighbourCountry