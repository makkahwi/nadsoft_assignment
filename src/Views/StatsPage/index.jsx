import PropTypes from 'prop-types';
import React from "react";
import Typography from "../../Components/Base/Typography";
import PageTitle from "../../Components/PageTitle";
import GlobalStats from "./Global";
import PerCountryStats from "./PerCountry";

export default function CountriesList({ setCountry }) {
  return (
    <>
      <PageTitle title={"Welcome"} />

      <Typography size={6}>
        If you wanna know more about this project, you may visit the "About" page
      </Typography>

      <Typography size={5}>
        Latest COVID Statistics
      </Typography>

      <GlobalStats />

      <PerCountryStats setCountry={setCountry} />
    </>
  )
};

CountriesList.propTypes = {
  setCountry: PropTypes.func.isRequired,
};