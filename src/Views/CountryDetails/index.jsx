import React from "react"
import Col from "../../Components/Base/Grid/Col"
import Row from "../../Components/Base/Grid/Row"
import Typography from "../../Components/Base/Typography"

export default function CountryDetails({ data, setCountry }) {
  return (
    <>
      <Row>
        <Col md={9}>
          <Typography size={4} className="py-4">
            {data.Country} Details
          </Typography>
        </Col>

        <Col md={3}>
          <Typography size={6} role="button" onClick={() => setCountry({})} className="py-4">
            Back To Stats Page
          </Typography>
        </Col>
      </Row>

      <Row>
        {Object.keys(data)?.filter(key => key !== "Country")?.map((key, i) => (
          <Col key={i} lg={3} xs={6}>
            <Typography size={5}>
              {key}: {data[key]}
            </Typography>
          </Col>
        ))}
      </Row>
    </>
  )
};