import React from "react"
import Tile from "components/notes/tiles/tile/Tile"

const Tiles = ({ dayNoteList = [] }) => {
  return (
    <>
      {dayNoteList.map(dayNote => (
        <Tile key={dayNote.date} dayNote={dayNote} />
      ))}
    </>
  )
}

export default Tiles
