import React from 'react'

export const SearchBar = ({setSearch}) => {

    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='d-flex justify-content-end'>
            <input onChange={handleChange}  placeholder="Search for items..."/>
        </div>
    )
}
