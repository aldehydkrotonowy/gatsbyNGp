import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styles from "./noteHeader.module.css";

const NoteHeader = ({ date }) => {
  const dayDate = moment(date, "DD-MM-YYYY");

  const weekDayName = dayDate.format("dddd");
  const formatedDate = dayDate.format("DD-MM-YYYY");
  const dayOfYear = dayDate.dayOfYear();

  return (
    <div className={styles.wrapper}>
      <span className={styles.weekDay}>{weekDayName}, </span>
      <span className={styles.date}>
        <span>{formatedDate}</span>
      </span>
      <span className={[styles.day, styles.lastItem].join(" ")}>day: {dayOfYear}</span>
    </div>
  );
};

NoteHeader.propTypes = {
  date: PropTypes.string.isRequired,
};
export default NoteHeader;
