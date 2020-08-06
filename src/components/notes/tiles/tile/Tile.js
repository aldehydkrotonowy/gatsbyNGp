import React from "react"
import DateHeader from "components/notes/tiles/tile/dateHeader/DateHeader"

const Tile = ({ dayNote: { date } }) => {
  return <DateHeader date={date} />
}

export default Tile
