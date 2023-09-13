import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Search from "./Search";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

function CountryList() {
  const [countries, setCountries] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v2/all`);
        const data = await response.json();
        console.log(data);
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <Search
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div class="container grid-main">
        {loading ? (
          <PuffLoader color="#36d7b7" class='loader'/>
        ) : (
          countries
            ?.filter((country) =>
              filter === "All" ? country : country.region === filter
            )
            ?.filter((country) =>
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            ?.map((country) => (
              <Link to={`/country/${country.name}`}>
                <CountryCard country={country} />
              </Link>
            ))
        )}
      </div>
    </main>
  );
}

export default CountryList;