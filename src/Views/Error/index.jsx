import React from "react";
import Typography from "../../Components/Base/Typography";
import PageTitle from "../../Components/PageTitle";

export default function ErrorPage() {
  return (
    <>
      <PageTitle title={"Ooops"} />

      <Typography size={6} className="pb-5">
        Looks like you've lost your way. Please use header links to find possible pages.
      </Typography>
    </>
  )
};