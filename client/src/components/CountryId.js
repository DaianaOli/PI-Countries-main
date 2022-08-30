import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../actions/index";
import  Activity  from "../components/Countries/ActivDetail";
import  "../styles/countryId.css";


const CountryId = () => {
    const dispatch = useDispatch();
    const {idPais} = useParams();
    
    const countryDetail = useSelector((state) => state.countryDetail);
    useEffect(()=>{
    dispatch(getDetail(idPais))
    },[dispatch,idPais])


        return (
        <div className='all'>
            {countryDetail?
            <div className='countryContainer'>
            <h1>{countryDetail.name}</h1>
            <h3>{countryDetail.id}</h3>
            <div className='imgContainer'>
                <img src={countryDetail.flags} alt="No img" />
            </div>
            <h4>Region: {countryDetail.region}</h4>
            <h5>Subregion: {countryDetail.subregion}</h5>
            <h5>Capital: {countryDetail.capital}</h5>
            <h5>Area: {countryDetail.area} Km2</h5>
            <h5>Population: {countryDetail.population} Hab. </h5>
            <div className='activity'>
            <Activity countryName={countryDetail.name} activities={countryDetail.activities}/></div>
            </div>
            : <h1>Loading...</h1>}
            <button className='butn'>
            <Link className='link' to="/countries" >Back to countries</Link></button>
        </div>
        
        );
    };
    export default CountryId;
  