import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";

import buildDiary from "services/notesBuilderService/notesBuilderService";
import Tiles from "components/notes/tiles/Tiles";

const Notes = () => {
  const listOfNotes = buildDiary();

  return (
    <Layout>
      <SEO title="Diary" />
      <h1>Diary - simple list</h1>
      <Tiles dayNoteList={listOfNotes} />
    </Layout>
  );
};

export default Notes;
