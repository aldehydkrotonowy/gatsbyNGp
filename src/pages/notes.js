import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"

import buildDiary from "services/notesBuilderService/notesBuilderService"
import Tiles from "components/notes/tiles/Tiles"

console.log(buildDiary())

const Notes = () => {
  const listOfNotes = buildDiary()
  console.log({ listOfNotes })

  return (
    <Layout>
      <SEO title="Diary" />
      <h1>Diary - simple list</h1>
      <Tiles dayNoteList={listOfNotes} />
    </Layout>
  )
}

export default Notes
