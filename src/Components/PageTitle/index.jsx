import React from "react"
import Typography from "../Base/Typography";
import PropTypes from 'prop-types';

export default function PageTitle({ title }) {
  return (
    <>
      <Typography size={3}>
        {title}
      </Typography>
    </>
  )
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};