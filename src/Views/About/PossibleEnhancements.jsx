import React from "react";
import Typography from "../../Components/Base/Typography";

export default function PossibleEnhancements() {
  return (
    <>
      <Typography size={4}>
        Possible Enhancements
      </Typography>

      <Typography>
        <ul>
          <li>
            Table Pagination
          </li>

          <li>
            Flip Table To Cards On Small Views
          </li>

          <li>
            Statistics Card UI
          </li>

          <li>
            API Loading Indicator
          </li>

          <li>
            Alert Msgs On API Data Retrieve Failure
          </li>
        </ul>
      </Typography>
    </>
  )
};