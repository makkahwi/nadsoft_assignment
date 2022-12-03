import React from "react"
import Typography from "../../Components/Base/Typography";
import PageTitle from "../../Components/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle title={"About"} />

      <Typography size={6} className="pb-5">
        This project is a technical assignment of NadSoft for the application of "Senior React.Js Developer" position
      </Typography>

      <Typography size={4}>
        Task Description Provided By NadSoft
      </Typography>

      <Typography>
        Regarding the <b>React Developer</b> vacancy at Nadsoft, We kindly ask you to take some of
        your valueable time to do the following assignment، to help us to get to know about
        your technical skills.
      </Typography>

      <Typography>
        You're required to Create a React app dashboard for Corona virus with the following
        requirements:
        <ol>
          <li>
            User should be able to view global statistics (cases, deaths, recovered).
          </li>

          <li>
            User should be able to view a list of statistics per country (cases, deaths, recovered).
          </li>

          <li>
            User should be able to search for countries.
          </li>

          <li>
            User should be able to rank countries in order.
          </li>
        </ol>
      </Typography>

      <Typography>
        Note:
      </Typography>

      <Typography>
        To solve the assignment, use the API from here: https://cutt.ly/MLH5xKR
      </Typography>

      <Typography>
        When the assessment is completed, please push it with the source code to GitHub.
        <br />
        (Please make sure your repository is public).
      </Typography>
    </>
  )
};