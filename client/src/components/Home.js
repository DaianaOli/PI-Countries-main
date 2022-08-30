import Countries from "../components/Countries/countries";
import React, { useEffect } from "react";
import { getCountries } from "../actions/index";
import { useDispatch } from "react-redux";
import Nav from "./Nav";

export function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  return (
    <div>
      <Nav />
      <div>
        <Countries/>
      </div>
    </div>
  );
}

export default MainPage;