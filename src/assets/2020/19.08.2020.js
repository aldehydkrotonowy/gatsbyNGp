import noteSchema from "../noteSchema";
import tags from "../tags";

export const dayNote = {
  [noteSchema._date.key]: "19-08-2020",
  [noteSchema._tags.key]: [tags.RUST],
  [noteSchema._keywords.key]: ["Existential Types", "Parametric polymorphism", "Universal Types", "Type Theory"],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: [],
  [noteSchema._interestingSoftware.key]: [
    {
      title: "",
      url: "",
      description: "",
    },
  ],
  [noteSchema._interestingWebsites.key]: [
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
      title: "An Introduction to Existential Types",
      url: "https://medium.com/@stephenebly/an-introduction-to-existential-types-25c130ba61a4",
      interesting: ["Existential Types vs Universal Types"],
    },
  ],
};
export default dayNote;
