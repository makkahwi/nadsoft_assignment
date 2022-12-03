import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";
import GlobalAPI from "../../API/global";
import { useEffect } from "react";

export default function PerCountryStats({ setCountry }) {
  const [searchValue, setSearchValue] = useState("");
  const [countriesStats, setCountriesStats] = useState([]);

  const getData = async () => {
    await GlobalAPI.get()
      .then(res => {
        setCountriesStats(res.Countries);
      })
  };

  useEffect(() => {
    getData();
  }, [])

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

  const [filteredTableData, setFilteredTableData] = useState(countriesStats);

  const tableColumns = [
    { key: "Country", footer: "Totals" },
    { key: "TotalConfirmed", generateTotal: true },
    { key: "TotalDeaths", generateTotal: true },
    { key: "TotalRecovered", generateTotal: true },
    { title: "Last Updated", key: "Date" },
  ];

  const onSearchChange = e => {
    const { value } = e.target;

    setSearchValue(value);

    value.length ? (
      setFilteredTableData(countriesStats.filter(record => record.Country.toUpperCase().includes(value.toUpperCase())))
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
    </div>
  )
};