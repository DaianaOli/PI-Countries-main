import React, { useEffect, useState } from "react";
import Country from "./Country.js";
import { useSelector } from "react-redux";
import  "../../styles/countries.css";


const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(0);

  let nextPage = () => {
    if (countries.length <= currentPage + 9) {
      setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 9);
  };
  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 9);
    }
  };

  const firstPage = () => {
    setCurrentPage(0);
  };

  const lastPage = () => {
    setCurrentPage(countries.length - 9);
  };

  useEffect(() => {
    firstPage()
  }, [countries]);

  
 const filteredC = countries.slice(currentPage, currentPage + 9);

    return (
      <div>
        <button onClick={firstPage} className='button'>  {'<<'}  </button>
        <button onClick={prevPage} className='button'>  {'<'}   </button>
        <button onClick={nextPage} className='button'>  {'>'}   </button>
        <button onClick={lastPage} className='button'>  {'>>'}</button>
        <div className='grid'>
          {
          filteredC.map((e) => ( 
            <Country
              key={e.id}
              id={e.id}
              flags={e.flags}
              name={e.name}
              region={e.region}
            />))}
        </div>
      </div>
    );
  }

 
export default Countries;