import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  "../styles/navBar.css";
import { connect, useDispatch } from "react-redux";
import {
    getCountries,
    orderAlpha,
    orderCont,
    orderAlphaRev,
    showActiv,
    orderPop,
    orderPopRev,
} from "../actions/index";
import SearchBar from "./SearchBar";

const NavBar = ({
    orderAlpha,
    getCountries,
    orderAlphaRev,
    orderCont,
    showActiv,
    orderPop,
    orderPopRev,
}) => {
    const [sort, setOrder] = useState("");
    const [region, setRegion] = useState("");
    const [activity, setActivity] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (region) {
        getCountries();
        if (region !== "all") {
            setTimeout(() => {
            dispatch(orderCont(region));
            }, 200);
        }
        }
    }, [dispatch,region,getCountries,orderAlpha,orderAlphaRev,orderCont,orderPop,orderPopRev]);

useEffect(() => {
    if (sort === "all") getCountries();
    else if (sort === "a-z") orderAlpha();
    else if (sort === "z-a") orderAlphaRev();
    else if (sort === "↑ population") orderPop();
    else if (sort === "↓ population") orderPopRev();
}, [sort,getCountries,orderAlpha,orderAlphaRev,orderCont,orderPop,orderPopRev]);

    const activityHandler = (e) => {
    e.preventDefault();

    setActivity(e.target.value);
    };

const searchActHandler = (e) => {
    e.preventDefault();
    getCountries();
    setTimeout(() => {
    dispatch(showActiv(activity));
    }, 200);
    setActivity("");
};

    return (
    <div className='navBarContainer'>
        <Link to="/" className='link'>
        <button>Back</button>
        </Link>
        <SearchBar />
        <div className='sortContainer'>
        <p>Sort by</p>
        <select onChange={(event) => setOrder(event.target.value)}>
            <option value="all">-</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="↑ population">↑ population</option>
            <option value="↓ population">↓ population</option>
        </select>
        </div>
        <div className='filtersContainer'>
        <p>Filter by Continent</p>

        <div className='selectContainer'>
            <select onChange={(event) => setRegion(event.target.value)}>
            <option value="all">All</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            </select>
        </div>
        </div>
        <div className='inputActivityContainer'>
            <form>
            <input
                className='inputText'
                placeholder="Search your activity."
                type="text"
                autoComplete="off"
                value={activity}
                onChange={activityHandler}
            />
            <button className='button1' onClick={searchActHandler}>
                Search
            </button>
            </form>
        </div>
        <Link to="/activities" className='link2'>
            <p className='textact'>CREATE ACTIVITY</p>
        </Link>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderAlpha: () => dispatch(orderAlpha()),
    getCountries: () => dispatch(getCountries()),
    orderCont: (region) => dispatch(orderCont(region)),
    orderAlphaRev: () => dispatch(orderAlphaRev()),
    showActiv: (payload) => dispatch(showActiv(payload)),
    orderPop: () => dispatch(orderPop()),
    orderPopRev: () => dispatch(orderPopRev()),
    };
};
const mapStateToProps = (state) => {
    return {
    countries: state.countries,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);