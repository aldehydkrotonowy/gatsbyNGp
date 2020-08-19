import noteSchema from "../noteSchema";
// import tags from '../tags';

export const dayNote = {
  [noteSchema._date.key]: "06-08-2020",
  [noteSchema._tags.key]: [],
  [noteSchema._keywords.key]: ["React lifecycle methods"],
  [noteSchema._workEvents.key]: [],
  [noteSchema._bulletsList.key]: ["Woman from GFT called me to arrange interview"],
  [noteSchema._longerNotes.key]: [
    {
      title: "The problem with snackbar and editing in Material Table",
      text:
        "I have solved problem with unwanted re rendering by moving function for preparing table data to place where data is fetched instead of passing it directly as table prop.",
    },
  ],
  [noteSchema._articlesList.key]: [
    {
      title: "Arrow functions in React",
      url: "https://medium.com/@oleg008/arrow-functions-in-react-f782d11460b4",
    },
    {
      title: "Arrow functions are disrupting React.Components",
      url: "https://blog.usejournal.com/arrow-functions-are-disrupting-react-components-63662d35f97b",
      interesting: ["fat arrow as instance prop, func as class prop"],
    },
  ],
};
export default dayNote;
