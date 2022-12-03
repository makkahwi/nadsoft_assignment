import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";
import GlobalStats from "./Global";

export default function CountriesList({ setCountry }) {
  const [searchValue, setSearchValue] = useState("");

  const countriesTestData = [
    {
      "Country": "Jordan",
      "CountryCode": "JO",
      "Slug": "jordan",
      "NewConfirmed": 13,
      "TotalConfirmed": 323,
      "NewDeaths": 0,
      "TotalDeaths": 5,
      "NewRecovered": 16,
      "TotalRecovered": 74,
      "Date": "2020-04-05T06:37:00Z"
    },
    {
      "Country": "Kenya",
      "CountryCode": "KE",
      "Slug": "kenya",
      "NewConfirmed": 4,
      "TotalConfirmed": 126,
      "NewDeaths": 0,
      "TotalDeaths": 4,
      "NewRecovered": 0,
      "TotalRecovered": 4,
      "Date": "2020-04-05T06:37:00Z"
    },
  ];

  const [filteredTableData, setFilteredTableData] = useState(countriesTestData);

  const tableColumns = [
    { key: "Country" },
    { key: "NewConfirmed" },
    { key: "TotalConfirmed" },
    { key: "NewDeaths" },
    { key: "TotalDeaths" },
    { key: "NewRecovered" },
    { key: "TotalRecovered" },
    { title: "Last Updated", key: "Date" },
  ];

  const onSearchChange = e => {
    const { value } = e.target;

    setSearchValue(value);

    value.length ? (
      setFilteredTableData(countriesTestData.filter(record => record.Country.toUpperCase().includes(value.toUpperCase())))
    ) : (
      setFilteredTableData(countriesTestData)
    );
  };

  const onCountryView = record => {
    setCountry(record);
  };

  return (
    <>
      <Typography size={4}>
        Welcome
      </Typography>

      <Typography size={6}>
        If you wanna know more about this project, you may visit the "About" page
      </Typography>

      <Typography size={5}>
        Latest COVID Statistics
      </Typography>

      <GlobalStats />

      <Typography size={6}>
        Per Country
      </Typography>

      <Form.Label>
        Search by country
      </Form.Label>

      <Form.Control
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
    </>
  )
};