import React from 'react'
import "./Search.css"
import {BiSearch} from "react-icons/bi"
import {IoMdArrowDropdown} from "react-icons/io"

function Search({filter,setFilter,searchTerm,setSearchTerm}) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div class="container flex search-filter">
        <div class="flex search-container">
           <BiSearch className='icon'/>
          <input value={searchTerm} onChange={handleSearch} type="text" placeholder="Search for a country..." />
        </div>
        <div class="filter-container">
          <select value={filter} onChange={handleFilter} name="filter" id="filter" class="filter">
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <span class="custom-arrow">
             <IoMdArrowDropdown class='arrow-icon'/>
          </span>
        </div>
      </div>
  )
}

export default Search