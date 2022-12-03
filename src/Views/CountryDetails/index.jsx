import PropTypes from 'prop-types'
import React from "react"
import Col from "../../Components/Base/Grid/Col"
import Row from "../../Components/Base/Grid/Row"
import Typography from "../../Components/Base/Typography"
import PageTitle from "../../Components/PageTitle"
import { generateTitleOutOfCamelCaseKey } from "../../Helpers/utils"

export default function CountryDetails({ data, setCountry }) {
  const toDisplayData = [
    "Country",
    // "CountryCode",
    "NewConfirmed",
    "TotalConfirmed",
    "NewDeaths",
    "TotalDeaths",
    "NewRecovered",
    "TotalRecovered",
    "Date"
  ];

  return (
    <>
      <Row>
        <Col md={9}>
          <PageTitle title={`${data.Country} Details`} />
        </Col>

        <Col md={3}>
          <Typography role="button" onClick={() => setCountry({})} className="py-4">
            Back To Stats Page
          </Typography>
        </Col>
      </Row>

      <Row>
        {Object.keys(data)?.filter(key => toDisplayData.includes(key))?.map((key, i) => (
          <Col key={i} lg={3} xs={6}>
            <Typography size={5}>
              {generateTitleOutOfCamelCaseKey(key)}: {data[key]}
            </Typography>
          </Col>
        ))}
      </Row>
    </>
  )
};

CountryDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCountry: PropTypes.func.isRequired,
};