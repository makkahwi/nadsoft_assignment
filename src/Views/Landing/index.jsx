import React from "react"
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";

export default function Landing() {
  const testData = [
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

      <Table
        columns={tableColumns}
        data={testData}
      />
    </>
  )
};