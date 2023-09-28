import React from 'react'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = ({setSearch}) => {

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='search-box d-flex justify-content-end'>
            <button className="btn-search"><FaSearch className="m-auto"/></button>
            <input className='input-search' onChange={handleChange}  placeholder="Search for items..."/>
        </div>
    )
}
