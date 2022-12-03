import React from "react";
import Col from "../../Components/Base/Grid/Col";
import Container from "../../Components/Base/Grid/Container";
import Row from "../../Components/Base/Grid/Row";
import Typography from "../../Components/Base/Typography";

export default function GlobalStats() {
  const globalTestData = {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  };

  return (
    <div className="py-4">
      <Typography size={6}>
        Global
      </Typography>

      <Container className="py-3">
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
    </div>
  )
};