import React, { useState, useEffect } from 'react';
import Favourite from '../ReusableComponent/favourite';
import DisplayResults from "./DisplayResults"


export default function SearchBar({ datas }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = datas.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      {/*<form className = "fixed-bottom" onSubmit={handleSubmit}>*/}
        <div className="">
          <input
            type="text"
            placeholder="Search......"
            className=""
            onChange={handleChange}
            value={searchTerm}
          />
          <ul></ul>
          <ul>
            {searchResults.map(item => (
              <DisplayResults product_data={item} />
            ))}
          </ul>
        </div>
    </div>
  )
}