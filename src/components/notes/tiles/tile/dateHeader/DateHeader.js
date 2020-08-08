import React from "react";
import PropTypes from "prop-types";

const DateHeader = ({ date, styles }) => {
  return <h1 className={styles}>{date}</h1>;
};

DateHeader.propTypes = {
  date: PropTypes.string.isRequired,
};
export default DateHeader;
