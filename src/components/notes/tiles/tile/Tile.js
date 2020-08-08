import React from "react";
import DateHeader from "components/notes/tiles/tile/dateHeader/DateHeader";
import PropTypes from "prop-types";
import styles from "./tile.module.css";
import NoteIcon from "icons/svg/notes-svgrepo-com.svg";

const Tile = ({ dayNote: { date } }) => {
  const filler = `dakfj asdjf ;jsadlkfj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd
          fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl
           kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd 
           fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj
            kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl
             kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd
              fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl ka
              fj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl kafj kasdjfkljasd fkljkldasjfl ka`;
  return (
    <div className={styles.tileWrapper}>
      <div className={styles.circle}>
        <img src={NoteIcon} alt="NoteIcon" />
      </div>
      <div className={styles.tileContent}>
        <DateHeader styles={styles.dateSection} date={date} />
        <div>{filler}</div>
      </div>
    </div>
  );
};

Tile.propTypes = {
  dayNote: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }),
};

export default Tile;
