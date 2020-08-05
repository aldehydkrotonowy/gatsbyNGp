

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import buildDiary from '../services/notesBuilderService';


console.log( buildDiary() )


const Notes = () => {
  
  const listOfNotes = buildDiary();
  
  return (
    <Layout>
      <SEO title="Diary" />
      <h1>Diary - simple list</h1>

      {listOfNotes.map(note => (
        <div key={note.date}>
          <h3>{note.date}</h3>
          <span>Tags: {note.tags}</span>
          <div>{note.keywords}</div>
          <div>
            {note.workEvents.map(wEvent => (
              <span>{wEvent}</span>
            ))}
          </div> 
          <div>
            {note.bulletList.map(bullet => (
              <span>{bullet}</span>
            ))}
          </div>
          <div>
            {note.notes.map(text => (
              <>
              <span>{text.title}</span>
                <p>{text.text}</p>
                </>
            ))}
          </div>
          <div>
            {note.articles.map(article => (
              <>
              <span>{article.title}</span>
                <a href={article.url}>Link</a>
                </>
            ))}
          </div>
        </div>
      ))}

    </Layout>
  )
}

export default Notes