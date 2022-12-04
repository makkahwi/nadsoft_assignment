import React, { useEffect, useState } from "react";
import DataAPI from "../../API/summary";
import Col from "../../Components/Base/Grid/Col";
import Container from "../../Components/Base/Grid/Container";
import Row from "../../Components/Base/Grid/Row";
import Typography from "../../Components/Base/Typography";
import { formatData, generateTitleOutOfCamelCaseKey } from "../../Helpers/utils";

export default function GlobalStats() {
  const [globaStats, setGlobaStats] = useState({});

  const getData = async () => {
    await DataAPI.get()
      .then(res => {
        setGlobaStats(res.Global);
      })
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="py-4">
      <Typography size={6}>
        Global
      </Typography>

      <Container className="py-3">
        <Row className="text-center">
          {Object.keys(globaStats)?.map((key, i) => (
            <Col key={i}>
              <b>
                {generateTitleOutOfCamelCaseKey(key)}
              </b>
              <br />
              {formatData({ data: globaStats, key })}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};