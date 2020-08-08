import React from "react";
import Tile from "components/notes/tiles/tile/Tile";
import PropTypes from "prop-types";

const Tiles = ({ dayNoteList = [] }) => {
  return (
    <>
      {dayNoteList.map(dayNote => (
        <Tile key={dayNote.date} dayNote={dayNote} />
      ))}
    </>
  );
};

Tiles.propTypes = {
  dayNoteList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tiles;
