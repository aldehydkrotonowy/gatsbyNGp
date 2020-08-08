import { noteSchema } from "../keys";
// import tags from '../tags';

export const dayNote = {
  [noteSchema._date.key]: "",
  [noteSchema._tags.key]: [],
  [noteSchema._keywords.key]: [],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: [],
  [noteSchema._interestingSoftware.key]: [
    {
      title: "",
      url: "",
      description: "",
    },
  ],
  [key._interestingWebsites.key]: [
    {
      name: "",
      url: "",
      description: "",
    },
  ],
  [noteSchema._interestingSoftware.key]: [
    {
      name: "",
      url: "",
      description: "",
    },
  ],
  [noteSchema._longerNotes.key]: [
    {
      title: "",
      text: "",
    },
  ],
  [noteSchema._articlesList.key]: [
    {
      title: "",
      url: "",
      interesting: [],
    },
  ],
};
