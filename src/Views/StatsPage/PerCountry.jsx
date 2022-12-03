import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";
import DataAPI from "../../API/summary";
import { useEffect } from "react";

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