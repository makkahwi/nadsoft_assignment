import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import DataAPI from "../../API/summary";
import Typography from "../../Components/Base/Typography";
import PageTitle from "../../Components/PageTitle";
import GlobalStats from "./Global";
import PerCountryStats from "./PerCountry";

export default function CountriesList({ setCountry }) {
  const [data, setData] = useState({});

  const getData = async () => {
    await DataAPI.get()
      .then(res => {
        setData(res);
      })
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <PageTitle title={"Welcome"} />

      <Typography size={6}>
        If you wanna know more about this project, you may visit the "About" page
      </Typography>

      <Typography size={5}>
        Latest COVID Statistics
      </Typography>

      <GlobalStats data={data} />

      <PerCountryStats data={data} setCountry={setCountry} />
    </>
  )
};

CountriesList.propTypes = {
  setCountry: PropTypes.func.isRequired,
};