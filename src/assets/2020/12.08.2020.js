import { noteSchema } from "../keys";
// import tags from '../tags';

export const dayNote = {
  [noteSchema._date.key]: "12.08.2020",
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
  [noteSchema._dayDescription.key]: "During the day I wasn't doing nothing interesting, day was very lazy. In the evening I was playing Factorio till late at night.",
  [noteSchema._videos.key]: [
    {
      name: "",
      url: "",
      description: "",
    },
  ],
};
