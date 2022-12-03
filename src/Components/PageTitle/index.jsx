import PropTypes from 'prop-types';
import React from "react";
import Typography from "../Base/Typography";

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