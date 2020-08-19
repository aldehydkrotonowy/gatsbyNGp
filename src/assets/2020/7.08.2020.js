import noteSchema from "../noteSchema";
import tags from "../tags";

export const dayNote = {
  [noteSchema._date.key]: "07-08-2020",
  [noteSchema._tags.key]: [tags.LINKED_IN],
  [noteSchema._keywords.key]: [],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: ["I have responded to Michalina Grzesiak from start-up.house that I am interested in details"],
  [noteSchema._longerNotes.key]: [
    {
      title: "",
      text: "",
    },
  ],
  [noteSchema._articlesList.key]: [
    {
      title: "Profiling React Performance with React 16 and Chrome DevTools.",
      url: "https://calibreapp.com/blog/react-performance-profiling-optimization",
      interesting: [],
    },
    {
      title: "Roadmap to becoming a web developer in 2020",
      url: "https://github.com/kamranahmedse/developer-roadmap",
      interesting: [],
    },
    {
      title: "JavaScript Internals: Under The Hood of a Browser",
      url: "https://medium.com/better-programming/javascript-internals-under-the-hood-of-a-browser-f357378cc922",
    },
  ],
};
export default dayNote;
