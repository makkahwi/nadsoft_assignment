import React, { useState } from "react";
import CountriesList from "../StatsPage";
import CountryDetails from "../CountryDetails";

export default function Landing() {
  const [country, setCountry] = useState({});

  return (
    <>
      {country.Country?.length ? (
        <CountryDetails data={country} />
      ) : (
        <CountriesList setCountry={setCountry} />
      )}
    </>
  )
};