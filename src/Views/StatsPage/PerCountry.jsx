import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import DataAPI from "../../API/summary";
import FormControl from "../../Components/Base/Form/FormControl";
import FormLabel from "../../Components/Base/Form/FormLabel";
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";

export default function PerCountryStats({ setCountry }) {
  const [searchValue, setSearchValue] = useState("");
  const [countriesStats, setCountriesStats] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);

  const getData = async () => {
    await DataAPI.get()
      .then(res => {
        setCountriesStats(res.Countries);
        setFilteredTableData(res.Countries);
      })
  };

  useEffect(() => {
    getData();
  }, [])

  const tableColumns = [
    { key: "Country", footer: "Totals" },
    { key: "TotalConfirmed", generateTotal: true, sortable: true },
    { key: "TotalDeaths", generateTotal: true, sortable: true },
    { key: "TotalRecovered", generateTotal: true, sortable: true },
    { title: "Last Updated", key: "Date" },
  ];

  const onSearchChange = e => {
    const { value } = e.target;

    setSearchValue(value);

    value.length ? (
      setFilteredTableData(countriesStats?.filter(record => record.Country.toUpperCase().includes(value.toUpperCase())))
    ) : (
      setFilteredTableData(countriesStats)
    );
  };

  const onCountryView = record => {
    setCountry(record);
  };

  return (
    <div className="py-4">
      <Typography size={6}>
        Per Country
      </Typography>

      <FormLabel>
        Search by country
      </FormLabel>

      <FormControl
        name="search"
        type="text"
        value={searchValue}
        onChange={onSearchChange}
      />

      <Table
        columns={tableColumns}
        data={filteredTableData}
        onView={onCountryView}
      />
    </div>
  )
};

PerCountryStats.propTypes = {
  setCountry: PropTypes.func.isRequired,
};