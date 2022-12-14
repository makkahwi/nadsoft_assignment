import moment from "moment";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import FormControl from "../../Components/Base/Form/FormControl";
import FormLabel from "../../Components/Base/Form/FormLabel";
import Col from '../../Components/Base/Grid/Col';
import Row from '../../Components/Base/Grid/Row';
import Typography from "../../Components/Base/Typography";
import Table from "../../Components/Table";
import { dateFormat } from '../../Helpers/utils';

export default function PerCountryStats({ data, setCountry }) {
  const [searchValue, setSearchValue] = useState("");
  const [countriesStats, setCountriesStats] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);

  useEffect(() => {
    setCountriesStats(data.Countries)
    setFilteredTableData(data.Countries);
  }, [data])

  const tableColumns = [
    { key: "Country", footer: "Totals" },
    { key: "TotalConfirmed", generateTotal: true, sortable: true },
    { key: "TotalDeaths", generateTotal: true, sortable: true },
    { key: "TotalRecovered", generateTotal: true, sortable: true },
    { title: "Last Updated", key: "Date", render: row => moment(row.Date).format(dateFormat) },
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

      <Row>
        <Col md={4}>
          <FormLabel>
            Search by country
          </FormLabel>

          <FormControl
            name="search"
            type="text"
            value={searchValue}
            onChange={onSearchChange}
          />
        </Col>
      </Row>

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