import React from "react"
import Typography from "../../Components/Base/Typography";
import PageTitle from "../../Components/PageTitle";
import TaskDescription from "./TaskDescription";

export default function About() {
  return (
    <>
      <PageTitle title={"About"} />

      <Typography size={6} className="pb-5">
        This project is a technical assignment of NadSoft for the application of "Senior React.Js Developer" position
      </Typography>

      <TaskDescription />
    </>
  )
};