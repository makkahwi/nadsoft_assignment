import React from "react"
import { useState } from "react";
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";
import Form from 'react-bootstrap/Form';
import Container from "../../Components/Base/Grid/Container";
import Row from "../../Components/Base/Grid/Row";
import Col from "../../Components/Base/Grid/Col";

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

  const globalTestData = {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  };

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

      <Typography size={6}>
        Global
      </Typography>

      <Container className="py-4">
        <Row className="text-center">
          {Object.keys(globalTestData)?.map((key, i) => (
            <Col key={i}>
              <b>
                {key}
              </b>
              <br />
              {globalTestData[key]}
            </Col>
          ))}
        </Row>
      </Container>

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