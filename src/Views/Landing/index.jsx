import React, { useState } from "react";
import CountryDetails from "../CountryDetails";
import CountriesList from "../StatsPage";

export default function Landing() {
  const [country, setCountry] = useState({});

  return (
    <>
      {country.Country?.length ? (
        <CountryDetails data={country} setCountry={setCountry} />
      ) : (
        <CountriesList setCountry={setCountry} />
      )}
    </>
  )
};