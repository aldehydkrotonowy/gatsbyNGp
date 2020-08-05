import { keys } from '../keys';
import tags from '../tags';

export const dayNote = {
  [keys._date.name]: "5.08.2020",
  [keys._tags.name]: [tags.LINKED_IN],
  [keys._keywords.name]: ["Quantum Flux Parametron"],
  [keys._workEvents.name]: [],
  [keys._bulletsList.name]: [
    "Today I replied to recruiter from GFT, and I gave her my phone number.",
  ],
  [keys._longerNotes.name]: [
    {
      "title": "The problem with snackbar and editing in Material Table",
      "text": "Today I encounter interesting problem with Material Table.  Namely we prolonged display time of snackbar from 3s to 10s. If table is in edit mode and snackbar is still on the screen clicking somewhere outside table results in closing snackbar and as a result whole table is re rendered again and becomes gray and inactive. In the future I have to rethink how to write components in such a way that any state change of some component did not cause unnecessary re render other components."
    }
  ],
  [keys._articlesList.name]: [
    {
      title: "",
      url: ""
    }
  ]
}