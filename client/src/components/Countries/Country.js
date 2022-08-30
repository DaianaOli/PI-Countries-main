import React from "react";
import  "../../styles/Country.css"
import { Link } from "react-router-dom";

const Country = ({ flags, name, region, id, Activities }) => {
    return (
        <div className='countrysContainer'>
        <Link className='links' to={`/countries/${id}`}>
        <h2 className='texts'>{name}</h2>
        <div className='imgContainers'>
            <img src={flags} alt="no img"/>
        </div>
        <h2>{region}</h2>
        <h2>{Activities}</h2>
        </Link>
        </div>
    );
};

export default Country;
