import React from "react";
import Typography from "../../Components/Base/Typography";
import PageTitle from "../../Components/PageTitle";
import DeveloperNotes from "./DeveloperNotes";
import TaskDescription from "./TaskDescription";
import PossibleEnhancements from "./PossibleEnhancements";

export default function About() {
  return (
    <>
      <PageTitle title={"About"} />

      <Typography size={6} className="pb-5">
        This project is a technical assignment of NadSoft for the application of "Senior React.Js Developer" position
      </Typography>

      <Typography size={6} className="pb-3">
        <a href="https://github.com/users/makkahwi/projects/3/views/1" target="_blank" rel="noreferrer" className="text-decoration-underline text-secondary" role="button">
          Project Planning
        </a>
      </Typography>

      <TaskDescription />

      <DeveloperNotes />

      <PossibleEnhancements />
    </>
  )
};