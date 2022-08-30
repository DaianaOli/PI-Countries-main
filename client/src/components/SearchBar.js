import React, { useState } from "react";
import { useDispatch } from "react-redux";
import  "../styles/SearchBar.css";
import { getCountries, getCountriesName } from "../actions/index.js";

const SearchBar = () => {
const [input, setInput] = useState("");

const dispatch = useDispatch();

const inputHandler = (e) => {
    setInput(e.target.value);
};
const onClickHandler = () => {
    dispatch(getCountriesName(input));
};

const homeHandler = () => {
    dispatch(getCountries());
};

return (
    <div className='inputsContainer'>
    <input
        className='inputText'
        type="text"
        placeholder="Search by name"
        name="input"
        autoComplete="off"
        onChange={(e) => inputHandler(e)}
    />
    <div className="buttons">
        <button className='srctBtn' onClick={() => onClickHandler()}>
        Search
        </button>
        <button className='srctBtn' onClick={() => homeHandler()}>
        Reset
        </button>
    </div>
    </div>
);
};

export default SearchBar;