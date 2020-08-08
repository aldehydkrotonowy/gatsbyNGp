import noteSchema from "../noteSchema";
import tags from "../tags";

export const dayNote = {
  [noteSchema._date.key]: "5.08.2020",
  [noteSchema._tags.key]: [tags.LINKED_IN],
  [noteSchema._keywords.key]: ["Quantum Flux Parametron"],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: ["Today I replied to recruiter from GFT, and I gave her my phone number."],
  [noteSchema._longerNotes.key]: [
    {
      title: "The problem with snackbar and editing in Material Table",
      text:
        "Today I encounter interesting problem with Material Table.  Namely we prolonged display time of snackbar from 3s to 10s. If table is in edit mode and snackbar is still on the screen clicking somewhere outside table results in closing snackbar and as a result whole table is re rendered again and becomes gray and inactive. In the future I have to rethink how to write components in such a way that any state change of some component did not cause unnecessary re render other components.",
    },
  ],
  [noteSchema._articlesList.key]: [
    {
      title: "",
      url: "",
    },
  ],
};

export default dayNote;
