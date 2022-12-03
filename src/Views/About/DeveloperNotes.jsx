import React from "react";
import Typography from "../../Components/Base/Typography";

export default function DeveloperNotes() {
  return (
    <>
      <Typography size={4}>
        Developer Notes
      </Typography>

      <Typography>
        <b>Libraries Used:</b> axios, bootstrap, moment, react, react-router-dom
      </Typography>

      <Typography>
        <b>Base Components Purpose:</b> For the purpose of have casing like the need to alter the whole componets libraty (react-boostrap in this case), all library componets are imported in base compoents, and those base compoents became the base of UI codes.
      </Typography>
    </>
  )
};